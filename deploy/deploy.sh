#!/usr/bin/env bash
# Runs ON THE VPS as root (piped over SSH by .github/workflows/deploy.yml).
# Each deploy is a fresh clone in releases/<timestamp>, built, then switched in
# via the `current` symlink, so the live site is never served from a half-built folder.
set -euo pipefail

SERVICE="himidgraphix-web"
APP_DIR="/var/www/himidgraphix"
REPO_URL="https://github.com/FidelisKagashe26/HimidiGraphics.git"
BRANCH="main"
PORT="8101"
KEEP_RELEASES=3
export NEXT_PUBLIC_SITE_URL="https://himidgraphix.pro"
export NEXT_TELEMETRY_DISABLED=1

release="$APP_DIR/releases/$(date +%Y%m%d%H%M%S)"
previous="$(readlink -f "$APP_DIR/current" 2>/dev/null || true)"

echo "==> Cloning $BRANCH into $release"
mkdir -p "$APP_DIR/releases"
git clone --depth 1 --branch "$BRANCH" "$REPO_URL" "$release"
cd "$release"
echo "    commit: $(git rev-parse --short HEAD)"

echo "==> Installing and building"
npm ci --no-audit --no-fund
npm run build
# The service runs as www-data and writes its image cache under .next/cache.
chown -R www-data:www-data "$release"

echo "==> Switching to new release"
ln -sfn "$release" "$APP_DIR/current"
systemctl restart "$SERVICE"

echo "==> Health check"
healthy=false
for _ in $(seq 1 30); do
  if curl -fsS -o /dev/null "http://127.0.0.1:$PORT/"; then healthy=true; break; fi
  sleep 1
done

if [ "$healthy" != true ]; then
  echo "!! New release failed its health check."
  journalctl -u "$SERVICE" -n 30 --no-pager || true
  if [ -n "$previous" ] && [ -d "$previous" ]; then
    echo "   Rolling back to $previous"
    ln -sfn "$previous" "$APP_DIR/current"
    systemctl restart "$SERVICE"
  fi
  exit 1
fi

echo "==> Removing old releases (keeping $KEEP_RELEASES)"
ls -1dt "$APP_DIR"/releases/* | tail -n +$((KEEP_RELEASES + 1)) | xargs -r rm -rf

echo "==> Deployed $SERVICE successfully"
