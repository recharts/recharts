# Playwright VR Tests

https://github.com/recharts/recharts/discussions/6031

## How to write tests

Look at the `test-vr/tests` folder for examples of tests.

See the documentation here: https://playwright.dev/docs/writing-tests.
My favourite is the `toHaveScreenshot()` assertion which is the main reason why I bothered with playwright in the first place
but there is nothing stopping you from adding more complex tests that interact with the UI too.

Playwright will run all files in the `test-vr/tests` folder that end with `*.spec-vr.tsx`.
(This is configured in the `./playwright.config.ts` file.)

### Stories and the gallery

The tests use the Playwright 1.62 component testing model: https://playwright.dev/docs/test-components.

A test does not mount JSX directly. Instead, the JSX lives in a **story** — a named export of a `*.story.tsx` file
next to the spec — and the test mounts it by its story id with the `mountStory` fixture:

```tsx
// test-vr/tests/App.story.tsx
import { LineChart as RechartsLineChart } from 'recharts';

export function LineChartStory() {
  return (
    <RechartsLineChart width={800} height={500} data={pageData}>
      {/* ... */}
    </RechartsLineChart>
  );
}
```

```tsx
// test-vr/tests/App.spec-vr.tsx
test('LineChart', async ({ mountStory }) => {
  const component = await mountStory('App/LineChart');
  await expect(component).toHaveScreenshot();
});
```

The story id is the path of the story file under `test-vr/tests/` (without the `.story.tsx` suffix) plus the export name.
The gallery page at `test-vr/gallery/` resolves the story and renders it into `#root`.

The `mountStory` fixture (defined in `test-vr/tests/fixtures.ts`) wraps Playwright's built-in `mount()` and scopes the
returned locator the same way the old component testing runtime did: when the gallery root has exactly one element
child, the locator points at that child, otherwise it points at the root itself. This keeps `toHaveScreenshot()`
capturing the same bounding box as before.

Stories can take plain serializable props (data, booleans, strings) that the test passes as the second argument:

```tsx
function LegendPositionVRTest({ offset }: { offset?: number }) {
  // ...
}

export const LegendPosition = (props: React.ComponentProps<typeof LegendPositionVRTest>) => (
  <LegendPositionVRTest {...props} />
);
```

```tsx
const component = await mountStory<typeof LegendPosition>('LegendPosition/LegendPosition', { offset: 30 });
```

The `www` tests have a shared story helper `test-vr/tests/www/StoryTheme.tsx` with a `themedStory()` factory and a
`testTheme` prop (`'default' | 'light' | 'dark'`) that picks the theme wrapper the test needs, mirroring the old
`testWithLightTheme` / `testWithDarkTheme` fixtures.

## How to run tests

See [DEVELOPING.md](../DEVELOPING.md) for basic instructions on how to run the tests and update the snapshots.

Now that you know, let's go into more detail here.

This whole setup runs in Docker and only in Docker so that we can have a consistent environment
which will allow us to avoid test flakes due to different fonts and box shadows and whatnot.

The basic commands are prepared in `package.json` but you can go beyond that too
and use whatever dockers allows you to do.

## Debugging VR tests

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

All visual regression testing infrastructure, stories, specs, and baseline snapshots live in the `test-vr` directory.

### `.bin`

Convenience scripts so that the `package.json` scripts are shorter and easier to read.

### `__snapshots__`

This is where all the snapshots (which would usually be screenshots) are stored.
Please commit this folder to the repository - this is the baseline.

### `gallery`

The story gallery page used by the component tests: https://playwright.dev/docs/test-components.
It is served by the Vite dev server configured in `./vite.config.ts` on port 3100,
which Playwright starts automatically through the `webServer` option in `./playwright.config.ts`.

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
Each spec file has a matching `*.story.tsx` file with the story exports it mounts.

### `playwright.config.ts`

This config uses the plain `defineConfig` from `@playwright/test` with the `webServer` option
that starts the Vite dev server serving the story gallery.

Docker is the recommended environment for running visual regression tests and updating snapshots
so that screenshots remain consistent across different development machines and operating systems
(avoiding font, subpixel rendering, and OS differences).

## Error: browserType.launch: Executable doesn't exist

Sometimes you may find an error that the `playwright` package no longer matches the `playwright` version in the Docker image:

```
    Error: browserType.launch: Executable doesn't exist at /ms-playwright/webkit-2191/pw_run.sh
    ╔══════════════════════════════════════════════════════════════════════╗
    ║ Looks like Playwright Test or Playwright was just updated to 1.54.1. ║
    ║ Please update docker image as well.                                  ║
    ║ -  current: mcr.microsoft.com/playwright:v1.44.0-jammy               ║
    ║ - required: mcr.microsoft.com/playwright:v1.54.1-jammy               ║
    ╚══════════════════════════════════════════════════════════════════════╝
```

In that case edit the `playwright-ct.Dockerfile` file and change the `FROM` field to the recommended version.
