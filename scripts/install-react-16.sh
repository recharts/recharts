#!/usr/bin/env bash

# Useful for testing the package with React 16

set -o errexit
set -o pipefail
set -o nounset

npm install
npm install --no-save react@16.14 react-dom@16.14 @testing-library/react@12.x.x
