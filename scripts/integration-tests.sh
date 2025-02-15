#!/bin/bash

# script for running integration tests
# How to use:
# `./scripts/integration-tests.sh <test-folder-name>`
# The script will run one integration test if the name is provided,
# or all tests if there is no name, and print the results.
# it will exit with 0 on success and non-0 on failure

set -o pipefail
set -o errexit
set -o nounset
set -x

# one folder in the subfolder 'integrations' is one integration test
# each folder is an npm package that depends on the root package
# so first we need to npm pack the root package and rename the output to 'recharts-SNAPSHOT.tgz'
# then we can npm install the package in the integration test folder
# and run the integration test

# first we need to make sure we are in the correct directory. We want to support running this script from any directory
# examples: `./integration-tests.sh`, `scripts/integration-tests.sh`
pushd "$(dirname "$0")/.." > /dev/null

#remove the old tarball if it exists
rm -f recharts-SNAPSHOT.tgz
# pack the root package and rename the output to 'recharts-SNAPSHOT.tgz'
tarball=$(npm pack --silent)
mv "$tarball" recharts-SNAPSHOT.tgz

# this function will verify that a given dependency is only installed once.
# it will throw an error if there are two different versions of the same package
function verify_single_dependency {
  local package_name=$1
  local ls_output
  pwd
  ls_output=$(npm ls "$package_name" --parseable)
  local unique_versions
  unique_versions=$(echo "$ls_output" | awk -F: '{print $2}' | sort -u)
  echo "Found unique versions of $package_name: $unique_versions"
  local count_of_unique_versions
  count_of_unique_versions=$(echo "$unique_versions" | wc -l)
  if [ "$count_of_unique_versions" -gt 1 ]; then
    echo "Error: multiple versions of $package_name found"
    echo "$ls_output"
    exit 1
  fi
}

function test {
  local integration=$1
  pushd "$integration"
  echo "Running integration test $integration"
  npm install --package-lock=false
  npm ls
  cat ./node_modules/recharts/package.json
  echo "Running build"
  npm run build
  echo "Verifying unique dependencies"
  verify_single_dependency recharts
  verify_single_dependency react
  verify_single_dependency 'react-dom'
  verify_single_dependency 'react-redux'
  verify_single_dependency '@reduxjs/toolkit'
  popd
}

# if we have received a folder name as a first argument, run that
if [ $# -eq 1 ]; then
  test "integrations/$1"
  exit 0
fi

# else, run integration tests one by one
for integration in integrations/*; do
  test "$integration"
done
