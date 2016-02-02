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

