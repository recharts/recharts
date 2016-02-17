## 0.7.0 (February 17, 2016)

### UI
- feat: support dasharray line animaton
- refactor(CartesianAxis, PolarAngleAxis, PolarRadiusAxis):rename label to tick
- feat(label): add label of CartesianAxis, PolarRadiusAxis, ReferenceLine
- feat: Implement tooltip for PieChart
- feat:Implement tooltip for RadialBarChart
- deps(d3-scale,d3-shape,oui-dom-util): 1.update version of d3-scale, d3-shape, oui-dom-util 2.update some api of d3-scale

## 0.6.2 (February 9, 2016)

### UI
- feat: use lodash `isEqual` write new pureRender

## 0.6.1 (February 5, 2016)

### UI
- fix(Pie, RadialBarChart): fix the default value of cx, cy, innerRadius, outerRadius

## 0.6.0 (February 5, 2016)

### UI
- refactor: rename AdaptionWrapper to ResponsiveContainer
- refactor: delete some repeated codes, and use polarToCartesian in PolarUtils
- fix: update the defaultProps of cx, cy, innerRadius, outerRadius
- fix(Sector, AdaptionWrapper):1. fix the bug of Sector when innerRadius is 0 2. fix the bug of unbind event when component is unmounted
- feat(util): use lodash replace utils

## 0.5.2 (February 4, 2016)

### UI
- fix(RadarChart): fix the bug of unreasonable default value for radius in PolarAngleAxis

### Docs
- chore: change main and jsnext:main in package.json

## 0.5.1 (February 4, 2016)

### UI
- feat: support percentage string in the props(cx, cy, innerRadius, outerRadius) of RadarChart, PieChart, RadialChart
- fix(PolarRadiusAxis): add props domain
- refactor(CartesianAxis): remove unneed props domain

### Docs
- chore: optimize npm script commands
- chore: update pkg

## 0.5.0 (February 3, 2016)

### UI
- feat(AdaptionWrapper): add AdaptionWrapper to make charts adapt to the size of parent dom
- refactor: directory structure adjustment
- fix(LineChart, CartesianChart): 1.fix the bug of margin when only part of the attributes are specified 2.fix the bug of number axis when domain is specified 3.fix the bug of category number when no dataKey is specified 4.format the code in README.md
- refactor(treemap): support tree structure data; changed props that pass to shape

### Test
- test: 1.rename some test files 2.add test case of LodashUtil
- test(treemap): modified treemap test

### Docs
- deps: add dependence oui-dom-utils
- chore(README.md): add syntax highlighting to the readme
- chore(package.json): add keyword react-component

## 0.4.9 (February 2, 2016)

### UI
- refactor(CartesianAxis, PolarAngleAxis): change props name "orient" to "orientation"
- refactor(Line, Bar, Pie): refactor animation using new react-smooth
- refactor(Pie, RidalBar): remove the props clockWise, and add the props endAngle
### Test
- test(Line, Bar, Radar, Scatter): add test case

## 0.4.7 (February 1, 2016)

### UI
- refactor(RadarChart, Radar, PolarAngleAxis, PolarRadiusAxis): refactor the components of Radar
- refactor(classNames): refactor the method of package a className
- refactor(Pie): add nameKey in Pie

## 0.4.6 (January 29, 2016)

### UI
- refactor(Legend): refactor the legend in all the charts, change the location method of legend
- feat(radar): add new RadarChart with the new component used in Chart, like PolarAngleAxis PolarRadiusAxis PolarGrid Polygon ex

### Test
- feat(test): add test for charts, chartWrappers, components, and shapes

## 0.4.5 (January 29, 2016)

### UI
- fix(Curve): fix the bug of curve defined function
- fix(ComposedChart): fix the bug of bar position when a line and a bar display a same group of data.
- chore(webpack.config.js): add react, react-dom, react-dom-server to external
- deps(react, react-dom): update version to v0.14.7

## 0.4.4 (January 28, 2016)

### Dev
- chore(webpack.config.js): add build command

## 0.4.3 (January 28, 2016)

### UI
- deps(recharts-scale, react-smooth): update version of recharts-scale and react-smooth
- refactor(Bar, RadialBar, TreemapChart, Tooltip): rename the props customContent

## 0.4.2 (January 28, 2016)

### UI
- Add support of stack value in BarChart, AreaChart, ComposedChart

## 0.4.1 (January 27, 2016)

### UI
- Change name of the props in Tooltip, Legend
- Fix the bug of customized label element in CartesianAxis
- Remove repeated, meaningless constructor functions

## 0.4.0 (January 26, 2016)

### UI
- Refator some components, include CartesianAxis, Legend, Tooltip etc, to unify some props name.

