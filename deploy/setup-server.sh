#!/usr/bin/env bash
# ONE-TIME server preparation (Ubuntu/Debian). Run as the deploy user, who must have sudo:
#   bash setup-server.sh
# Afterwards every push to main deploys automatically via GitHub Actions.
set -euo pipefail

APP_DIR="/var/www/himidgraphix"
DOMAIN="himidgraphix.pro"
EMAIL="hello@himidgraphix.pro"   # Let's Encrypt expiry notices
DEPLOY_USER="$(whoami)"

echo "==> Packages: git, curl, nginx, certbot"
sudo apt-get update -y
sudo apt-get install -y git curl nginx certbot python3-certbot-nginx

if ! command -v node >/dev/null || [ "$(node -p 'process.versions.node.split(".")[0]')" -lt 20 ]; then
  echo "==> Node.js 22 LTS"
  curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
  sudo apt-get install -y nodejs
fi

if ! command -v pm2 >/dev/null; then
  echo "==> PM2"
  sudo npm install -g pm2
fi

echo "==> App directory $APP_DIR"
sudo mkdir -p "$APP_DIR/releases"
sudo chown -R "$DEPLOY_USER":"$DEPLOY_USER" "$APP_DIR"

echo "==> First deploy"
curl -fsSL https://raw.githubusercontent.com/FidelisKagashe26/HimidiGraphics/main/deploy/deploy.sh | bash

echo "==> PM2 on boot"
sudo env PATH="$PATH" pm2 startup systemd -u "$DEPLOY_USER" --hp "$HOME" >/dev/null
pm2 save

echo "==> nginx"
sudo cp "$APP_DIR/current/deploy/nginx.conf" "/etc/nginx/sites-available/$DOMAIN"
sudo ln -sfn "/etc/nginx/sites-available/$DOMAIN" "/etc/nginx/sites-enabled/$DOMAIN"
sudo nginx -t
sudo systemctl reload nginx

echo "==> HTTPS (needs DNS for $DOMAIN and www.$DOMAIN pointing at this server)"
sudo certbot --nginx --non-interactive --agree-tos -m "$EMAIL" \
  -d "$DOMAIN" -d "www.$DOMAIN" --redirect

echo "==> Done: https://$DOMAIN"
