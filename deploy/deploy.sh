#!/usr/bin/env bash
# Runs ON THE VPS (piped over SSH by .github/workflows/deploy.yml).
# Each deploy is a fresh clone in releases/<timestamp>, built, then switched in
# via the `current` symlink, so the live site is never served from a half-built folder.
set -euo pipefail

APP_NAME="himidgraphix"
APP_DIR="${APP_DIR:-/var/www/himidgraphix}"
REPO_URL="https://github.com/FidelisKagashe26/HimidiGraphics.git"
BRANCH="main"
PORT="3000"
KEEP_RELEASES=3
export NEXT_PUBLIC_SITE_URL="https://himidgraphix.pro"
export NEXT_TELEMETRY_DISABLED=1

# Non-interactive SSH shells don't load the profile; pick up nvm/pm2 if installed per-user.
export NVM_DIR="$HOME/.nvm"
# shellcheck disable=SC1091
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
export PATH="$HOME/.local/bin:/usr/local/bin:$PATH"

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

echo "==> Switching to new release"
ln -sfn "$release" "$APP_DIR/current"
cd "$APP_DIR/current"
pm2 startOrReload ecosystem.config.cjs --update-env
pm2 save >/dev/null

echo "==> Health check"
healthy=false
for _ in $(seq 1 30); do
  if curl -fsS -o /dev/null "http://127.0.0.1:$PORT/"; then healthy=true; break; fi
  sleep 1
done

if [ "$healthy" != true ]; then
  echo "!! New release failed its health check."
  if [ -n "$previous" ] && [ -d "$previous" ]; then
    echo "   Rolling back to $previous"
    ln -sfn "$previous" "$APP_DIR/current"
    cd "$APP_DIR/current" && pm2 startOrReload ecosystem.config.cjs --update-env
  fi
  exit 1
fi

echo "==> Removing old releases (keeping $KEEP_RELEASES)"
ls -1dt "$APP_DIR"/releases/* | tail -n +$((KEEP_RELEASES + 1)) | xargs -r rm -rf

echo "==> Deployed $APP_NAME successfully"
