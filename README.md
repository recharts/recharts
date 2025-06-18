# Recharts

[![storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://recharts.org/en-US/storybook)
[![Build Status](https://github.com/recharts/recharts/workflows/Node.js%20CI/badge.svg)](https://github.com/recharts/recharts/actions)
[![codecov](https://codecov.io/gh/recharts/recharts/graph/badge.svg?token=Bn6L2hrl8T)](https://codecov.io/gh/recharts/recharts)
[![npm version](https://badge.fury.io/js/recharts.svg)](http://badge.fury.io/js/recharts)
[![npm downloads](https://img.shields.io/npm/dm/recharts.svg?style=flat-square)](https://www.npmjs.com/package/recharts)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)

## Introduction

Recharts is a **Redefined** chart library built with [React](https://facebook.github.io/react/) and [D3](http://d3js.org).

The main purpose of this library is to help you to write charts in React applications without any pain. Main principles of Recharts are:

1. **Simply** deploy with React components.
2. **Native** SVG support, lightweight with minimal dependencies.
3. **Declarative** components.

Documentation at [recharts.org](https://recharts.org) and our [storybook](https://recharts.org/en-US/storybook)

Also see [the wiki](https://github.com/recharts/recharts/wiki).

All development is done on the `main` branch. The current latest release and storybook documentation reflects what is on the `release` branch.

## Examples

```jsx
<LineChart width={400} height={400} data={data}>
  <XAxis dataKey="name" />
  <Tooltip />
  <CartesianGrid stroke="#f5f5f5" />
  <Line type="monotone" dataKey="uv" stroke="#ff7300" />
  <Line type="monotone" dataKey="pv" stroke="#387908" />
</LineChart>
```

All the components of Recharts are clearly separated. The LineChart is composed of x axis, tooltip, grid, and line items, and each of them is an independent React Component. The clear separation and composition of components is one of the principle Recharts follows.

## Installation

### npm

NPM is the easiest and fastest way to get started using Recharts. It is also the recommended installation method when building single-page applications (SPAs). It pairs nicely with a CommonJS module bundler such as Webpack.

```sh
# latest stable
$ npm install recharts react-is
```

`react-is` needs to match the version of your installed `react` package.

### umd

The UMD build is also available on unpkg.com:

```html
<script src="https://unpkg.com/react/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/react-is/umd/react-is.production.min.js"></script>
<script src="https://unpkg.com/recharts/umd/Recharts.min.js"></script>
```

Then you can find the library on `window.Recharts`.

## Contributing

Recharts is open source. If you want to contribute to the project, please read the [CONTRIBUTING.md](/CONTRIBUTING.md)
to understand how to contribute to the project and [DEVELOPING.md](/DEVELOPING.md) to set up your development
environment.

## Thanks

<a href="https://www.chromatic.com/"><img src="https://user-images.githubusercontent.com/321738/84662277-e3db4f80-af1b-11ea-88f5-91d67a5e59f6.png" width="153" height="30" alt="Chromatic" /></a>

Thanks to [Chromatic](https://www.chromatic.com/) for providing the visual testing platform that helps us review UI changes and catch visual regressions.

[![JetBrains logo.](https://resources.jetbrains.com/storage/products/company/brand/logos/jetbrains.svg)](https://jb.gg/OpenSourceSupport)

Thanks to JetBrains for providing OSS development license for their IDEs.

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2015-2024 Recharts Group.
