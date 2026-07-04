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
     && npx eslint "${SOURCE_FILE}" "${TEST_FILE}" || return 1
}

function commit() {
  message=$1
  git add "${SOURCE_FILE}" "${TEST_FILE}"
  git commit -m "${message}" -- "${SOURCE_FILE}" "${TEST_FILE}"
}

function clear_kv_cache() {
  model_name=$(ollama ps | awk 'NR==2 {print $1}')
  curl http://localhost:11434/api/generate -d "{
     \"model\": \"${model_name}\",
     \"keep_alive\": 0
   }"
}

function tdd_green() {
  local result
  result=$(pi --prompt-template prompts "/tdd-impl ${SOURCE_FILE} ${TEST_FILE}")
  clear_kv_cache >/dev/null 2>&1 || true
  autoformat >/dev/null 2>&1 || true
  echo "TDD green"
  printf '%s\n' "$result"
}

function tdd_red() {
  local result
  result=$(pi --prompt-template prompts "/tdd-test ${SOURCE_FILE} ${TEST_FILE}")
  clear_kv_cache >/dev/null 2>&1 || true
  autoformat >/dev/null 2>&1 || true
  echo "TDD red"
  printf '%s\n' "$result"
}

# Safety cap for iterations; prevents infinite loops if LLM never returns STOP.
MAX_ITERATIONS=${TDD_MAX_ITERATIONS:-50}
iteration=0

# Now we run in a loop that ends when the LLM tells us to stop.
# The prompts have instructions for the LLM to output "STOP" once it's done,
# so we need to detect that.

while [ $iteration -lt $MAX_ITERATIONS ]; do
  # Run the test to see what should we be doing; are we going red or green?
  iteration=$((iteration + 1))
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

if [ $iteration -ge $MAX_ITERATIONS ]; then
  echo "Reached iteration cap (${MAX_ITERATIONS}); stopping TDD loop."
fi
