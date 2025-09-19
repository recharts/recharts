# Setup and dev build

```sh
$ git clone https://github.com/recharts/recharts.git
$ cd recharts
$ npm install
$ npm run build
```

If you want to know the guidelines we follow then read [CONTRIBUTING.md](CONTRIBUTING.md).

## Running tests

```sh
$ npm run test
```

## Running mutation tests

Mutation tests may take several hours to complete.
You may want to first open `./stryker.config.mjs` and set the `mutate` property to a specific file or directory
that you want to test.

Mutation tests do not run in CI.

```sh
$ npm run test-mutation
```

## Running lint and types

You may also want to enable ESLint and Prettier configuration in your favourite IDE.

```sh
$ npm run lint
$ npm run check-types
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

## Releases

[Releases](https://github.com/recharts/recharts/releases) are automated via GH Actions - when a new release is created
in GH, CI will trigger that:

1. Runs a build
2. Runs tests
3. Runs `npm publish`

Version increments and tagging are not automated at this time.

### Release testing

Until we can automate more, it should be preferred to test as close to the results of `npm publish` as we possibly can.
This ensures we don't publish unintended breaking changes. One way to do that is using `yalc` - `npm i -g yalc`.

1. Make your changes in recharts
2. `yalc publish` in recharts
3. `yalc add recharts` in your test package (ex: in a vite or webpack reach app with recharts installed, imported, and
   your recent changes used)
4. `npm install`
5. Test a local run, a build, etc.
