***CRITICAL*** **ALWAYS** unset `NODE_ENV` environment variable when working in this project. See https://github.com/github/copilot-cli/issues/151

This is Recharts repository. Recharts is a React-based charting library.
The goal is to provide a simple, declarative, and composable way to build charts.
We value consistency, usability, and performance. Accessibility is important.

We do not solve internationalization. Do not hardcode any strings or formatting choices in the library code,
we expect the users of Recharts to provide localized strings as desired.

Read ./DEVELOPING.md for instructions how to develop this project.

Read ./CONTRIBUTING.md for guidelines on contributing to this project.

When running unit tests, prefer to run a single test file:

```shell
npm run test -- path/to/TestFile.spec.tsx
```

If you run all tests at once using `npm test`, it may take a long time to complete.
Only do that when you want to verify that everything is working correctly.

This project has a long history. You may observe some inconsistencies in coding style.
When making changes, prefer current best practices as described in CONTRIBUTING.md,
and try to improve the code style where possible and where relevant to the current task.
Do not attempt to fix too much at once, or when it is not related to the current changes.

Do not focus too much on fitting the existing style, if it is not ideal.
