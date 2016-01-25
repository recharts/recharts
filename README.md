# Recharts = React + Charts [![Build Status](https://travis-ci.org/recharts/recharts.svg)](https://travis-ci.org/recharts/recharts) [![npm version](https://badge.fury.io/js/recharts.svg)](http://badge.fury.io/js/recharts) [![Coverage Status](https://coveralls.io/repos/recharts/recharts/badge.svg?branch=master&service=github)](https://coveralls.io/github/recharts/recharts?branch=master)

## Intro

Recharts is a **Re-designed** charting library built with [React](https://facebook.github.io/react/) and [D3](http://d3js.org).

The biggest feature or difference is helping you write charts in React application perfectly. There some philosophies of Recharts:

1. **Simplely** deploy with React components
1. **Native** SVG support, lightweight depend on some D3 submodules
1. **Declarative** components, components of chart are dumbed

## We will do

- Cool animation
- Documentation
- Appropriate interaction
- More and more kind of charts

## Examples

```
<LineChart width={400} height={400} data={data}
  margin={{top: 5, right: 20, left: 10, bottom: 5}}>
  <XAxis dataKey='name' />
  <Tooltip />
  <CartesianGrid stroke='#f5f5f5' />
  <LineItem type='monotone' dataKey='uv' stroke='#ff7300' yAxisId={0} />
  <LineItem type='monotone' dataKey='pv' stroke='#387908' yAxisId={1} />
</LineChart>
```

All the submodules of Recharts is separated. The lineChart is composed by x axis, tooltip, grid, and line items, and each of them is the tiny React Component. Their is the Recharts want to do.

## Contribution

We are looking for people who share the idea about Recharts. The goal of this project is create more flexible charting library where developers using React at the same time.

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2015-2016 Recharts Group
