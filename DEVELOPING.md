This is a development guide.
If you want to know the guidelines we follow then read [CONTRIBUTING.md](CONTRIBUTING.md).

# Setup development environment

```sh
git clone https://github.com/recharts/recharts.git
cd recharts
npm install
```

# Linting and types

You may also want to enable ESLint and Prettier configuration in your favourite IDE.

```sh
$ npm run lint
$ npm run check-types
```

# Automated testing

## Running unit tests

Most unit tests are in the `test` directory, some others are in `www/test`.

Run all tests:
```sh
$ npm run test
```

Run a specific test file:
```sh
$ npm run test -- path/to/TestFile.spec.tsx
```

## Running mutation tests

Mutation tests may take several hours to complete.
You may want to first open `./stryker.config.mjs` and set the `mutate` property to a specific file or directory
that you want to test. That may take 5-10 minutes to run.

Mutation tests do not run in CI.

```sh
$ npm run test-mutation
```

## Storybook

To run the Storybook UI:

```sh
$ npm run storybook
```

and then browse to http://localhost:6006.

While the storybook is running:

```sh
$ npm run test-storybook
```

## Run visual regression tests (using playwright)

### Prerequisites

Playwright tests are running inside Docker. You will need to have Docker installed and running.
See https://docs.docker.com/get-started/get-docker/. You do not need Docker account or login.

You only need to do this once.

### Build the Docker image

This takes two or three minutes to complete.
You will need to re-build every time you make a change to dependencies in `package.json`.

```sh
$ npm run test-vr:prepare
```

### Run the tests

Now, the usual loop. Write a new test, run it, fix it, repeat.

```sh
$ npm run test-vr
```

Alternatively, the UI playwright mode is available as well:

```sh
$ npm run test-vr:ui
```

If you want to record new snapshots or update the old ones, you can run:

```sh
$ npm run test-vr:update
```

You will see new files created in the `test-vr/__snapshots__` directory, please commit them to the repository!

### See VR test results

Open http://localhost:9323 in your browser to see the results of the tests.
The CLI will tell you to run a "show-report" which is not necessary because there is already a Docker container running
in the background and serving the report. Just open the URL in your browser.

# Manual testing

## recharts.github.io local run

To manually test Recharts in a real application environment, you can use the `www` directory which contains the source code
for the Recharts documentation website https://recharts.github.io.

You can add a new example and commit it too!

To run the website locally in dev mode with hot-reloading:

```sh
$ cd www
$ npm run start
```

When running locally, the website pulls the Recharts library from the local filesystem.

When you make changes to the Recharts source code, you need to re-build it for the changes to be reflected in the website:

```sh
$ cd ..
$ npm run build
$ cd www
```

In production build, the website pulls recharts from npm registry.

## Storybook

You can also use Storybook for manual testing of individual components.

```sh
$ npm run storybook
```

When adding new stories, mind that all stories here are also used for automated visual regression tests,
using Chromatic cloud infrastructure.

Chromatic are very generous and free for open source projects,
however we already have so many stories that we hit the limit for open source plan in some months.

For this reason, try to keep storybook for high fidelity examples, the ones you want to see published on the website
and in storybook UI. For low fidelity tests, use unit tests or VR tests instead.

## Playwright UI mode

You can also use Playwright in UI mode for manual testing. This opens a browser window where you can see the tests running,
and you can see before & after.

```sh
$ npm run test-vr:ui
```

# Releases

[Releases](https://github.com/recharts/recharts/releases) are automated via GH Actions - when a new release is created
in GH, CI will trigger that:

1. Runs a build
2. Runs tests
3. Runs `npm publish`

Version increments and tagging are not automated at this time.

## Release testing

Until we can automate more, it should be preferred to test as close to the results of `npm publish` as we possibly can.
This ensures we don't publish unintended breaking changes. One way to do that is using `yalc` - `npm i -g yalc`.

1. Make your changes in recharts
2. `yalc publish` in recharts
3. `yalc add recharts` in your test package (ex: in a vite or webpack reach app with recharts installed, imported, and
   your recent changes used)
4. `npm install`
5. Test a local run, a build, etc.

# Folder structure

Source code:

- `src` - source code for Recharts library
- `test` - unit tests
- `test-vr` - visual regression tests (using Playwright)
- `www` - source code for Recharts documentation website recharts.github.io
- `storybook` - Storybook stories for Recharts components, and Storybook config+scaffolding
- `scripts` - helper scripts for development and releases
- `.husky` and `.github` - git hooks and GitHub Actions workflows for CI

Autogenerated code:

Running `npm run build` generates the following folders:

- `lib` - compiled output of Recharts library in CJS format - published to npm
- `es6` - compiled output of Recharts library in ESM format - published to npm
- `umd` - compiled output of Recharts library in UMD format - published to npm
- `types` - generated TypeScript declaration files - published to npm
- `build` - output of `tsc` build - we don't use this for anything at all I think

Running `npm run test-coverage` generates:
- `coverage` - code coverage report

Running `npm run test-mutation` generates:
- `reports` - mutation testing report
