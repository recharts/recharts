# Playwright VR Tests

https://github.com/recharts/recharts/discussions/6031

## How to write tests

Look at the `test-vr/tests` folder for examples of tests.

See the documentation here: https://playwright.dev/docs/writing-tests.
My favourite is the `toHaveScreenshot()` assertion which is the main reason why I bothered with playwright in the first place
but there is nothing stopping you from adding more complex tests that interact with the UI too.

Playwright will run all files in the `test-vr/tests` folder that end with `*.spec-vr.tsx`.
(This is configured in the `./playwright.config.ts` file.)

## How to run tests

See [DEVELOPING.md](../DEVELOPING.md) for basic instructions on how to run the tests and update the snapshots.

Now that you know, let's go into more detail here.

This whole setup runs in Docker and only in Docker so that we can have a consistent environment
which will allow us to avoid test flakes due to different fonts and box shadows and whatnot.

The basic commands are prepared in `package.json` but you can go beyond that too
and use whatever dockers allows you to do.

All images and containers are available in Docker desktop, or via `docker ps -a` and other usual commands.

You can run arbitrary commands inside the container using `docker compose run test-vr <command>`.

Once a container has exited, you can get to its contents again by running:

```sh
docker commit <container_id> debug
docker run -it --rm debug bash
```

All files in the `test-vr` directory are volumed into the container, so you can edit them
and see the changes immediately without having to rebuild the image.

You will only need to rebuild the image if you change the dependencies in `package.json`
or if you want to update the base playwright version. Which probably should be locked to a specific version
to avoid unexpected changes in the tests. But let's see how it goes.

## File structure

This whole setup in its own directory mainly because the storybook/test-runner will break
if a "playwright/index.tsx" file exists.
So we need to move that somewhere else and while we're at it, we can
also move everything else with it.

### `.bin`

Convenience scripts so that the `package.json` scripts are shorter and easier to read.

### `__snapshots__`

This is where all the snapshots (which would usually be screenshots) are stored.
Please commit this folder to the repository - this is the baseline.

### `playwright`

This is boilerplate code required by Playwright component tests: https://playwright.dev/docs/test-components.
Do not modify anything here.

### `playwright-report`

This is nice, human-readable HTML report of the test results. Open it in your browser and click around.
This is generated automatically after each test run and should not be committed to the repository
as the contents will change with each test run.

The docker compose automatically runs a web server on port 9323 to serve this report.

Open http://localhost:9323 in your browser.

### `test-results`

This is where the raw test results are stored. It is not meant to be human-readable,
it's a source for the HTML reporter. Do not commit this folder to the repository.

### `tests`

The most interesting folder where you are probably going to spend most of your time is
the `test-vr/tests` folder. This will have all the source code and tests.

### `playwright-ct.config.ts`

This has a unique name so that it does not conflict with the `storybook/test-runner` plugin
which also uses Playwright under the hood but does not expose any configuration options so we're stuck with the defaults there.

Note that our `playwright-ct.config.ts` file contains all absolute paths. This is intentional
because the tests are run inside a Docker container and the paths will be consistent.

You will not be able to run the tests outside of Docker because of this.
Please do not modify the paths because they are hardcoded all over the place.
