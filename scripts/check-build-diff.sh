#!/bin/bash

# script for comparing how the build results have changed.
# useful for checking if the build is still working as expected, especially when you're playing around with babel or webpack config
# How to use:
# 1. Open a baseline branch, and run `npm run build`
# 2. Copy paste all output folders into `build-baseline`: es6 lib types umd
# 3. Run `./scripts/check-build-diff.sh`
# 4. The script will print all differences between current build and baseline build.
# empty output means no differences.
# 'build' folder is excluded because that's typescript output only and is not released.

pushd ..

set -o pipefail
set -o errexit
set -o nounset

echo "Starting build"

# the build will fail if it produces different file names, so no need to check for that
npm run build > /dev/null

echo "Build complete, running diff"

# compares all files except UMD files, and prints differences
find es6 lib types -type f -exec sh -c 'diff --color=always --unified=0 "build-baseline/$1" "$1"' _ {} \;

# the UMD build is one large minified file so let's break it down to shorter lines before comparing
diff --color='always' <(cat build-baseline/umd/Recharts.js | tr ';' '\n') <(cat umd/Recharts.js | tr ';' '\n')

echo "Diff complete"
