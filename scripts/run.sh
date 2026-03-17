#!/usr/bin/env bash
set -euo pipefail

if [ ! -d "node_modules" ]; then
  echo "Dependencies not installed. Running setup first..."
  ./scripts/setup.sh
fi

echo "==> Starting dev server..."
npm run dev
