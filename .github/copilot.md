# Copilot Instructions for Recharts

This file provides instructions for GitHub Copilot coding agent when working on the Recharts repository.

## About Recharts

Recharts is a React-based charting library built with React and D3. The main purpose is to help developers write charts in React applications with a simple, declarative, and composable API. We value consistency, usability, performance, and accessibility.

## Project Structure

- `src/` - Source code for Recharts library
- `test/` - Unit tests
- `test-vr/` - Visual regression tests (using Playwright)
- `www/` - Source code for documentation website (recharts.github.io)
- `storybook/` - Storybook stories for components
- `scripts/` - Helper scripts for development and releases

## Development Environment Setup

The environment is pre-configured via `.github/workflows/copilot-setup-steps.yml` which:
- Sets up Node.js 20
- Installs npm dependencies for both the main project and the website

**CRITICAL**: Always unset `NODE_ENV` environment variable when working in this project. See https://github.com/github/copilot-cli/issues/151

## Commands Reference

### Building
```bash
npm run build              # Full build (types, CJS, ES6, UMD)
npm run build-cjs          # Build CommonJS output
npm run build-es6          # Build ES6 output
npm run build-umd          # Build UMD output
npm run build-types        # Build TypeScript types
```

### Testing
```bash
npm test                                      # Run all unit tests (may take a long time)
npm run test -- path/to/TestFile.spec.tsx    # Run a single test file (preferred)
npm run test-watch                            # Run tests in watch mode
npm run test-coverage                         # Run tests with coverage
npm run test-storybook                        # Run storybook tests
npm run test-vr                               # Run visual regression tests (requires Docker)
```

### Linting and Type Checking
```bash
npm run lint               # Lint all code
npm run autofix            # Auto-fix linting issues
npm run check-types        # Check TypeScript types in all projects
npm run prettier           # Format code with Prettier
```

### Development
```bash
npm run storybook          # Start Storybook dev server (http://localhost:6006)
cd www && npm run start    # Start documentation website locally
```

## Code Guidelines

### General Principles
1. **Make minimal changes** - Change only what's necessary to address the issue
2. **Don't fix unrelated issues** - Ignore unrelated bugs or broken tests
3. **Preserve working code** - Never delete or modify working code unless absolutely necessary
4. **Follow existing patterns** - When making changes, prefer current best practices as described in CONTRIBUTING.md
5. **Don't focus on style consistency** - If existing style is not ideal, use modern best practices instead

### TypeScript Rules
- **Never use `any` type** (implicit or explicit)
- Prefer `unknown` over `any` and refine the type
- Always type function parameters and return values explicitly
- Do not use `as` type assertions except for `as const`

### Testing Strategy
When running tests, **prefer to run a single test file** rather than all tests:
```bash
npm run test -- path/to/TestFile.spec.tsx
```

Only run all tests (`npm test`) when verifying everything is working correctly.

We have three types of tests:
1. **Unit tests** - Preferred for pure helper functions and data processing (aim for 100% coverage)
2. **React Testing Library tests** - For component rendering and interactions
3. **Storybook tests** - For visual testing and high-fidelity examples

### Internationalization
- Do not hardcode strings or formatting choices in library code
- Expect users to provide localized strings as desired
- This is not our responsibility to solve

### Documentation
- Update documentation only if directly related to your changes
- Website code is in `www/` directory

## Common Patterns

### Testing Workflow
1. Run existing tests before making changes to understand baseline
2. Make your code changes
3. Run affected tests frequently to validate changes
4. Add new tests for new functionality
5. Ensure all related tests pass before committing

### Manual Testing
For manual testing, you can:
- Use Storybook: `npm run storybook` and browse to http://localhost:6006
- Use the website: `cd www && npm run start` (rebuild library after changes: `npm run build`)
- Use Playwright UI mode: `npm run test-vr:ui`

## Important Notes

- This project has a long history, so you may see inconsistencies in coding style
- When making changes, prefer current best practices over matching existing inconsistent style
- Do not attempt to fix too much at once or issues unrelated to current changes
- Accessibility is important - consider a11y implications of changes

## Additional Resources

- See [CONTRIBUTING.md](/CONTRIBUTING.md) for contribution guidelines
- See [DEVELOPING.md](/DEVELOPING.md) for detailed development instructions
- See [AGENTS.md](/AGENTS.md) for additional project-specific instructions
