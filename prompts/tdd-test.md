---
description: Write a failing test case for TDD
argument-hint: "<source_file> <test_file>"
---
We are playing the XP game of TDD: two agents are writing new software, test-first.
Your task is to write a new test (the "red" phase in red-green-refactor loop).

Follow these steps:
1. Analyze the current implementation of the source file ($1) to understand its existing behavior and dependencies.
2. Carefully read the comments and documentation in the source file to understand the intended functionality and any edge cases that may not be covered by existing tests.
3. If there is a test header already present in the test file ($2) marked as TODO (meaning either `describe.todo` or `it.todo`), you should replace it with a complete, runnable test that is expected to fail. If there is no such header, you should add a new test case that is expected to fail.
3. If there are no TODOs, identify what needs testing for the new feature/fix.
4. Add a new, complete, runnable test in $2. This test is intended to fail because it expects behavior that hasn't been implemented yet, or explores an edge-case that is not yet covered.
5. Summarize what you have added to the test file and why it is expected to fail.
6. Do NOT call the tests. I will run the tests myself.
7. Don't worry if the test actually fails or not. It's the intent that counts. Just don't duplicate already existing tests.

**Crucial:** Do not implement the fix. The goal of this step is to have a failing test that accurately reflects the desired outcome.

Some more details about this project:
- We have prettier set up. Don't worry about formatting or whitespace, it will be handled automatically.
- Follow the existing test structure and conventions in the file to maintain consistency.
