# recharts

## Intro

**Re-designed** charts for combine React and D3.

It helps you write charts in React application. The features for recharts have

1. **Simplely** use combine React SVG
1. **Declarative** components
1. **Lightweight** depend on D3 components

## We will do

- Cool animation
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

All the components of chart is separated. The lineChart is composed by x axis, tooltip, grid, and line items. And each of them is the more tiny components.

## We need you

It is a opensource project, and I want more developers to participate in this project.

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2015-2016 Recharts Group
