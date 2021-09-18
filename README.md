# Recharts

[![Sponsors on Open Collective](https://opencollective.com/recharts/sponsors/badge.svg)](https://opencollective.com/recharts#sponsors)
[![Backers on Open Collective](https://opencollective.com/recharts/backers/badge.svg)](https://opencollective.com/recharts#backer)
[![Build Status](https://github.com/recharts/recharts/workflows/Node.js%20CI/badge.svg)](https://github.com/recharts/recharts/actions)
[![Coverage Status](https://coveralls.io/repos/recharts/recharts/badge.svg?branch=master&service=github)](https://coveralls.io/github/recharts/recharts?branch=master)
[![npm version](https://badge.fury.io/js/recharts.svg)](http://badge.fury.io/js/recharts)
[![npm downloads](https://img.shields.io/npm/dm/recharts.svg?style=flat-square)](https://www.npmjs.com/package/recharts)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)

## Introduction

Recharts is a **Redefined** chart library built with [React](https://facebook.github.io/react/) and [D3](http://d3js.org).

The main purpose of this library is to help you to write charts in React applications without any pain. Main principles of Recharts are:

1. **Simply** deploy with React components.
1. **Native** SVG support, lightweight depending only on some D3 submodules.
1. **Declarative** components, components of charts are purely presentational.

## Examples

```jsx
<LineChart
  width={400}
  height={400}
  data={data}
  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
>
  <XAxis dataKey="name" />
  <Tooltip />
  <CartesianGrid stroke="#f5f5f5" />
  <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
  <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
</LineChart>
```

All the components of Recharts are clearly separated. The lineChart is composed of x axis, tooltip, grid, and line items, and each of them is an independent React Component. The clear separation and composition of components is one of the principle Recharts follows.

## Installation

### npm

NPM is the easiest and fastest way to get started using Recharts. It is also the recommended installation method when building single-page applications (SPAs). It pairs nicely with a CommonJS module bundler such as Webpack.


```sh
# latest stable
$ npm install recharts
```

### umd

The UMD build is also available on unpkg.com:

```html
 <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
 <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
 <script src="https://unpkg.com/recharts/umd/Recharts.min.js"></script>
```

Then you can find the library on `window.Recharts`.

### dev build

```sh
$ git clone https://github.com/recharts/recharts.git
$ cd recharts
$ npm install
$ npm run build
```

## Demo

To examine the demos in your local build, execute:

```sh
$ npm run[-script] demo
```

and then browse to http://localhost:3000.

## Module Formats

- [babel-plugin-recharts](https://github.com/recharts/babel-plugin-recharts) A simple transform to cherry-pick Recharts modules so you don’t have to.

## Contribution

We'd love :heart: to hear what you think we should build. Please create an issue to write your usage or ideas.

We are looking for like-minded people who share the same idea about Recharts. The goal of this project is to create a more flexible charting library for the  React community.

## Backers
[Become a backer](https://opencollective.com/recharts#backer) and get your image on our README on Github with a link to your site.

<a href="https://opencollective.com/recharts/backer/0/website?requireActive=false" target="_blank"><img src="https://opencollective.com/recharts/backer/0/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/recharts/backer/1/website?requireActive=false" target="_blank"><img src="https://opencollective.com/recharts/backer/1/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/recharts/backer/2/website?requireActive=false" target="_blank"><img src="https://opencollective.com/recharts/backer/2/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/recharts/backer/3/website?requireActive=false" target="_blank"><img src="https://opencollective.com/recharts/backer/3/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/recharts/backer/4/website?requireActive=false" target="_blank"><img src="https://opencollective.com/recharts/backer/4/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/recharts/backer/5/website?requireActive=false" target="_blank"><img src="https://opencollective.com/recharts/backer/5/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/recharts/backer/6/website?requireActive=false" target="_blank"><img src="https://opencollective.com/recharts/backer/6/avatar.svg?requireActive=false"></a>

## Sponsoring

Most of the core team members do this open source work in their free time. If you use recharts for a important work, and you'd like us to invest more time on it, please [donate](https://opencollective.com/recharts#sponsors). Thanks!

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2015-2021 Recharts Group.
