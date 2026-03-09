#!/bin/bash

echo "🚀 Starting Vercel build..."

# Setup git to use HTTPS with token instead of SSH (only in CI)
if [ "$CI" = "true" ] && [ -n "$GITHUB_TOKEN" ]; then
  echo "✅ CI environment detected"
  echo "🔧 Configuring git to use HTTPS with token instead of SSH..."
  git config --global url."https://${GITHUB_TOKEN}:x-oauth-basic@github.com/".insteadOf "ssh://git@github.com/"
  git config --global url."https://${GITHUB_TOKEN}:x-oauth-basic@github.com/".insteadOf "git@github.com:"
  echo "✅ Git configuration applied"
else
  echo "ℹ️  Not in CI environment or GITHUB_TOKEN not set, skipping git config"
fi

echo "📦 Installing dependencies..."
bun install

echo "🏗️  Running build..."
bun run build

echo "✅ Build completed"
