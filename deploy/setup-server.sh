#!/usr/bin/env bash
# ONE-TIME server setup, run as root from a checkout of this repo:
#   bash deploy/setup-server.sh
# Expects the Cloudflare origin certificate at
#   /etc/ssl/cloudflare/himidgraphix.pro.pem and .key
# Afterwards every push to main deploys automatically via GitHub Actions.
set -euo pipefail

here="$(cd "$(dirname "$0")" && pwd)"

test -f /etc/ssl/cloudflare/himidgraphix.pro.pem
test -f /etc/ssl/cloudflare/himidgraphix.pro.key

echo "==> systemd service"
install -m 644 "$here/himidgraphix-web.service" /etc/systemd/system/himidgraphix-web.service
systemctl daemon-reload
systemctl enable himidgraphix-web.service

echo "==> First deploy"
mkdir -p /var/www/himidgraphix/releases
bash "$here/deploy.sh"

echo "==> nginx"
install -m 644 "$here/nginx.conf" /etc/nginx/sites-available/himidgraphix.conf
ln -sfn /etc/nginx/sites-available/himidgraphix.conf /etc/nginx/sites-enabled/himidgraphix.conf
nginx -t
systemctl reload nginx

echo "==> Done: https://himidgraphix.pro"
