---
description: Fix failing test case for TDD
argument-hint: "<source_file> <test_file>"
---
I want to implement a new feature or bug fix using Test-Driven Development (TDD), pair-programming scenario.
Your task is to fix a failing test (the "green" phase in red-green-refactor).

Follow these steps:
1. Run `npm test -- --reporter=minimal $2` command to observe the test failure.
2. Analyze the current implementation of the source file ($1) to understand its existing behavior and dependencies.
3. Change the implementation in $1 to make the test pass.
4. Run `npm test -- --reporter=minimal $2` command again to verify that the test now passes.
5. Summarize what you have added to the test file and why it is expected to fail.
6. If you conclude that the implementation is complete and there is nothing left to do, say "STOP"
7. If something unexpected happen and you wish to terminate the TDD game, say "STOP"

**Crucial:** Do not update the test file. The goal of this step is to update the implementation so that the existing test passes.

Some more details about this project:
- We have prettier set up. Don't worry about formatting, it will be handled automatically.
- Follow the existing code structure and conventions in the file to maintain consistency.
