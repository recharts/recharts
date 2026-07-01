# TDD Prompt Template

This prompt template helps you quickly generate a failing test for a given source file to follow the Test-Driven Development (TDD) flow.

## Usage
You can run this from the command line interactively:

```bash
pi --prompt-template prompts/tdd-test.md "/tdd-test path/to/source_file.ts path/to/expected_test_file.spec.ts"
```

Or you can run it non-interactively using the `-p/--print` flag:

```bash
pi --prompt-template prompts/tdd-test.md "/tdd-test path/to/source_file.ts path/to/expected_test_file.spec.ts" --print
```

### Arguments
- `$1`: The source file path you want to generate a test for.
- `$2`: The location where the generated test file should be placed.

### What this does:
1.  **Analyzes** your current source file.
2.  Identifies the necessary test cases based on your requirements.
3.  Generates a **failing** test case first (to ensure the gap between current implementation and desired behavior is clear).

This allows you to verify that the test environment is correctly set up before you start writing the implementation code.

See https://pi.dev/docs/latest/usage#cli-reference
