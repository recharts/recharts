# Contributing to Recharts

We'd love for you to contribute to our source code and to make Recharts even better than it is today! Here are the guidelines we'd like you to follow:

- [Issues and Bugs](#issues)
- [Testing](#testing)
- [Pull Requests](#pr)
- [Code Guide](#code)
- [License](#license)

## Ongoing Initiatives

We use Github Discussion to organise our discussion along new intiatives and organise ourselves. Please do check the [announcements](https://github.com/recharts/recharts/discussions/categories/announcements) section for an overview of recent initiatives.

## <a name="issues"></a>Issues and Bugs

### Where to Find Known Issues

We will be using [GitHub Issues](https://github.com/recharts/recharts/issues) for our bugs and feature requests. We will keep a close eye on this and try to make it clear when we have an internal fix in progress. Before filing a new task, try to make sure your problem doesn't already exist.

### Reporting New Issues

The best way to get your bug fixed is to provide a reduced test case. codesandbox provide a way to give live examples. You can fork our example in [recharts.org](http://recharts.org/) to show your case.

## <a name="testing"></a>Testing

We do cherish tests. They help us move swiftly, and release with confidence.
In our repo, you will find three types of tests: Unit tests, rendering tests with RTL, and user interaction tests in storybook.
Wherever possible we prefer the simplest tests - unit tests. Only where needed / useful we would use RTL or storybook tests.

### Unit tests

When implementing a new feature we would prefer to extract pure helper function for data processing. Such functions are found a few utils files. An example is `test/util/ShallowEqual.spec.ts`

### React Testing Library

Some behaviour must be tested upon rendering, such as interactions between components (Line, Tooltip), see `test/component/Tooltip.spec.tsx` for an example.

### Storybook Test Runner

Storybook also has a great interface for adding tests. By default every story in storybook is a smoke test (rendering without error logs means the test passed). Additionally, it is possible to add actual tests as play functions with an assert to a story. This will often be easier than using React Testing Library, because the natural test debugging tool is Storybook itself. See for example `storybook/stories/Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow.stories.tsx`

### Performance tests

Recharts uses (https://callstack.github.io/reassure/)[Reassure] to run performance tests. Here is how to use:

1. Before making code changes, run `npm run test:perf:baseline`. This will generate baseline data. You only do this once for each change.
2. Make your code changes now
3. Run `npm test:perf`. Reassure will run tests again, compare with the baseline from step 1. and print results to the console. If you wish you can also review the results in a markdown file in path `./reassure/output.md`.
4. If you are satisfied with the performance impact then go ahead and commit! If you wish to make more changes go back to step 2.

Reassure will look for `*.perf-test.tsx` files by default.

Also be aware that the performance tests might take a long time to run; up to several minutes.

## <a name="pr"></a>Pull Requests

**Working on your first Pull Request?** You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://app.egghead.io/playlists/how-to-contribute-to-an-open-source-project-on-github)

_Before_ submitting a pull request, please make sure the following is done…

- Search [GitHub](https://github.com/recharts/recharts/pulls) for an open or closed Pull Request that relates to your submission. You don't want to duplicate effort.

- Fork the repo and create your branch from `master`.
- If you have added functionality or changed existing functionality, be sure to add a test. Ideally a unit test for helper function, or a test that includes rendering with RTL.
- If you've changed APIs, make sure that the stories in Storybook are working as expected.
- Ensure the test suite passes (`npm run test`).
- Make sure your code lints (`npm run lint`) - we've done our best to make sure these rules match our internal linting guidelines.

## <a name="code"></a>Code Guide

Our linter will catch most styling issues that may exist in your code.
You can check the status of your code styling by running: `npm run lint`

However, there are still some styles that the linter cannot pick up. If you are unsure about something, looking at [Airbnb's Style Guide](https://github.com/airbnb/javascript) will guide you in the right direction.

## <a name="license"></a>License

By contributing to Recharts, you agree that your contributions will be licensed under its MIT license.
