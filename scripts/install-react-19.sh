#!/usr/bin/env bash

# Useful for testing the package with React 16

set -o errexit
set -o pipefail
set -o nounset

npm install
# --force because of the myriad storybook packages depending on each other as peers and always failing to resolve
npm install --no-save --force react@19.0.0 react-dom@19.0.0 react-is@19.0.0
