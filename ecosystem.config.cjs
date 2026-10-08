// PM2 process definition used on the VPS (see deploy/deploy.sh).
module.exports = {
  apps: [
    {
      name: "himidgraphix",
      cwd: "/var/www/himidgraphix/current",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000 -H 127.0.0.1",
      env: {
        NODE_ENV: "production",
        NEXT_PUBLIC_SITE_URL: "https://himidgraphix.pro",
        NEXT_TELEMETRY_DISABLED: "1",
      },
      max_memory_restart: "500M",
      time: true,
    },
  ],
};
