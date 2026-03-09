#!/bin/bash

# Setup git to use HTTPS with token instead of SSH (only in CI)
if [ "$CI" = "true" ] && [ -n "$GITHUB_TOKEN" ]; then
  git config --global url."https://${GITHUB_TOKEN}:x-oauth-basic@github.com/".insteadOf "ssh://git@github.com/"
  git config --global url."https://${GITHUB_TOKEN}:x-oauth-basic@github.com/".insteadOf "git@github.com:"
fi

bun install
bun run build
