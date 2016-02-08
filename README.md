# Recharts = React + Charts

[![Build Status](https://travis-ci.org/recharts/recharts.svg)](https://travis-ci.org/recharts/recharts)
[![Coverage Status](https://coveralls.io/repos/recharts/recharts/badge.svg?branch=master&service=github)](https://coveralls.io/github/recharts/recharts?branch=master)
[![npm version](https://badge.fury.io/js/recharts.svg)](http://badge.fury.io/js/recharts)
[![npm downloads](https://img.shields.io/npm/dm/recharts.svg?style=flat-square)](https://www.npmjs.com/package/recharts)
[![Gitter](https://badges.gitter.im/recharts/recharts.svg)](https://gitter.im/recharts/recharts?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## Intro

Recharts is a **Re-designed** charting library built with [React](https://facebook.github.io/react/) and [D3](http://d3js.org).

The main purpose of this library is to help you to write charts in React applications without any pain. Main principles of Recharts are:

1. **Simplely** deploy with React components
1. **Native** SVG support, lightweight depend on some D3 submodules
1. **Declarative** components, components of chart are purely presentational

## Roadmap

### v1.0 release plan

Expected release: April 2016

- Great animation support
- Good documentation
- Cascade Chart
- Wireless support
- 90% code test coverage

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

All the components of Recharts is clearly separated. The lineChart is composed by x axis, tooltip, grid, and line items, and each of them is an independent React Component. The clear seperation and composition of components is one of the principle Recharts follow.

## Contribution

We'd love :heart: to hear what you think we should build. Please create a issue to write your usage or ideas.

We are looking for like-minded people who share the same idea about Recharts. The goal of this project is create more flexible charting library for React community.

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2015-2016 Recharts Group
