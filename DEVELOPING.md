# Setup and dev build

```sh
$ git clone https://github.com/recharts/recharts.git
$ cd recharts
$ npm install
$ npm run build
```

If you want to know the guidelines we follow then read (CONTRIBUTING.md)[/CONTRIBUTING.md].

## Running tests

```sh
$ npm run test
```

## Running mutation tests

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

We are in the process of unifying documentation and examples in storybook. To run it locally, execute

```sh
$ npm run[-script] storybook
```

and then browse to http://localhost:6006.

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
