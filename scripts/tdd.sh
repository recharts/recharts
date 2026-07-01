#!/bin/zsh
# This file runs TDD loop - red green refactor, using pi.dev
# Usage:
# scripts/tdd.sh src/path/file.ts test/path/file.spec.ts

set -uo pipefail
set -x

# First argument is the source file path
SOURCE_FILE=$1
# Second argument: test file
TEST_FILE=$2

if [[ -z "$SOURCE_FILE" || ! -f "$SOURCE_FILE" ]]; then
  echo "Error: source file not found: $SOURCE_FILE"
  exit 1
fi

if [[ -z "$TEST_FILE" || ! -f "$TEST_FILE" ]]; then
  echo "Error: test file not found: $TEST_FILE"
  exit 1
fi

function run_test() {
  npm test -- "${TEST_FILE}" --reporter=minimal
}

function autoformat() {
  npx prettier --write "${SOURCE_FILE}" "${TEST_FILE}" \
    && npx eslint "${SOURCE_FILE}" || return 1
}

function commit() {
  message=$1
  git add "${SOURCE_FILE}" "${TEST_FILE}"
  git commit -m "${message}"
}

function tdd_green() {
  pi --prompt-template prompts "/tdd-impl ${SOURCE_FILE} ${TEST_FILE}"
  autoformat
  commit "TDD green"
}

function tdd_red() {
  pi --prompt-template prompts "/tdd-test ${SOURCE_FILE} ${TEST_FILE}"
  autoformat
  commit "TDD red"
}

# Now we run in a loop that ends when the LLM tells us to stop.
# The prompts have instructions for the LLM to output "STOP" once it's done,
# so we need to detect that.

while true; do
   # Run the test to see what should we be doing; are we going red or green?
  run_test
  test_exit_code=$?

  if [ $test_exit_code -ne 0 ]; then
    # Tests failed → go green by implementing code
    result=$(tdd_green)
    echo "LMM said: ${result}"
    if echo "$result" | grep -q "STOP"; then
      break
    fi
    continue
  else
    # Tests succeeded → go red by writing more tests
    result=$(tdd_red)
    echo "LMM said: ${result}"
    if echo "$result" | grep -q "STOP"; then
      break
    fi
  fi
done
