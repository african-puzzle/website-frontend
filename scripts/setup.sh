#!/usr/bin/env bash
set -euo pipefail

echo "==> Checking Node.js version..."
NODE_VERSION=$(node -v | sed 's/v//' | cut -d. -f1)
if [ "$NODE_VERSION" -lt 22 ]; then
  echo "Error: Node.js >= 22.12.0 required (found $(node -v))"
  exit 1
fi
echo "    Node $(node -v) OK"

echo "==> Installing dependencies..."
npm install

echo "==> Syncing content collections..."
npx astro sync

echo "==> Setup complete. Run ./scripts/run.sh to start the dev server."
