## 1.0.0-alpha.2(Aug 12, 2017)

### fix

- fix bug of isChildrenEqual
- fix "hide" props of YAxis

## 1.0.0-alpha.2(Jul 10, 2017)

### feat

- Add props className to ReferenceLine, ReferenceDot, ReferenceArea
- Specify the contents of LabelList by `dataKey`

### fix

- Fix faulty logic check in inRange function
- onTouchMove event call method that handle tooltip and active dot draw
- Show tooltip on drag movement on touch devices
- Fix viewBox of Label when render implicit label
- Fix label of Pie
- Fix events of Pie and PieChart
- Fix bug of interplateNumber
- Fix the bug of parsing "dataMin - 0.05" like domain

## 1.0.0-alpha.1(Jun 11, 2017)

### fix

- update the propType of the props data or Bar
- fix the type of Curve
- fix connectNulls of `Line`
- update version of recharts-scale to fix #713
- fix valueKey of Pie temporarily and add logs when use deprecated "valueKey"
- bind events to Radar
- fix animation of active-dot

## 1.0.0-alpha.0(May 24, 2017)

### refactor

- refactor PolarCharts
- refactor Animation
- refactor Label and LabelLis

### fix

- fix scale of ErrorBar

## 0.22.4 (Apr 26, 2017)

### fix 

- fix dot customized className

### dep

- update react-smooth, and react-transition-group

## 0.22.3 (Apr 19, 2017)

### refactor

- add mathSign in DataUtils to replace Math.sign

## 0.22.2 (Apr 18, 2017)

### fix

- fix spelling error of fillOpacity
- fix bug of axis when has duplicated ticks


## 0.22.1 (Apr 13, 2017)

### feat

- Add legendType: ‘none’ to not render coresponding legend item
- use prop-types instead of React.PropTypes

### fix

- Fix re-rendering element bug when adding new elements
- Fix circular dependence of Brush.js and LineChart.js 

## 0.22.0 (Apr 05, 2017)

### feat

- Add event handlers to component  Dot
- Support embedded chart as a panoram in Brush
- Add props reversed to `XAxis` and `YAxis` to reverse the range of axis

### fix

- Fix error or time scale

## 0.21.2 (Mar 01, 2017)

### fix

- fix ticks for specified domain

## 0.21.1 (Feb 28, 2017)

### fix

- Update recharts-scale to fix bug of ticks

## 0.21.0 (Feb 28, 2017)

### feat

- Support band area and band bar
- support customized horizontal line and vertical line in CartesianGrid
- support customized events in ReferenceArea, ReferenceLine
- add formatter in `Legend`

### fix

- Fix empty tick when category axis has nil values
- fix the propTypes of fontSize
- support props dx and dy in Text
- fix bug of stacked bar when spcify domain of axis
- fix the barSize of bars in <Bar /> when too many bars

## 0.20.8 (Feb 15, 2017)

### fix

- Fix bug when onBBoxUpdate of Legend is null

## 0.20.7 (Feb 15, 2017)

### fix

- Fix stack chart when only have one stacked element
- Fix the offset when the boundary box update
- Fix position of XAxis in ScatterChart when the orientation is right
- Use DataUtils.uniqueId to replace lodash.uniqueId

### feat

- Add props `mirror` in XAxis and YAxis, support mirror ticks
- Add props iconType to the props of Legend which can specify the icon type of legend

## 0.20.6 (Feb 08, 2017)

### fix

- Fix `dataStartIndex` and `dataEndIndex` of synchronized chart
- Use lodash.uniqueId to produce the id of Pie

## 0.20.5 (Jan 17, 2017)

### fix

- fix "Maximum call stack size exceeded error" caused by Tooltip update

## 0.20.4 (Jan 17, 2017)

### fix
- Animate of Tooltip may crash browser sometimes, use style transition to do the animation of tooltip

## 0.20.3 (Jan 17, 2017)

### fix

- Fix Tooltip in ScatterChart
- Fix radius of Rectangle when height < 0

### feat

- Add clip path in Area, Bar and Scatter
- Add onMouseDown and onMouseUp hooks in generateCategoricalChart

### chore

- Disable babel transform es2015 modules to commonjs for es6 build
- Use cross-env to support windows builds, likewise downgrade linebreak-style to warning
- Update release.sh

## 0.20.2 (Jan 05, 2017)

### fix

- remove opacity in ErrorBar
- fix `Tooltip` when `coordinate` is null

### feat

- add props `basevalue` in `AreaChart`
- add clipPath when xAxis or yAxis of `Line` allow data overflow
- allow dataKey to be a map function
- support Tooltip in Sankey and Tooltip
- Allow Brush to set default startIndex and endIndex

## 0.20.1 (Dec 27, 2016)

### fix

- Fix bug of `isChildrenEqual`  when component has child `null`
- Adjust `barGap` when `bandSize` is too small to display bars


### feat

- Add props `payload` and `value`, update props `index` in `activeDot` of `Line`, `Area`

### refactor

- Move polyfill of `Math.sign` to polyfill.js

## 0.20.0 (Dec 26, 2016)

### feat

- Support `ErrorBar` in `Line`, `Area`, `Bar`, `Scatter`
- Support touch event in `LineChart`, `AreaChart`, `BarChart`
- Add props `throttleDelay` in `LineChart`, `AreaChart`, `BarChart` for performance
- Support cornerRadius in Sector, RadialBar and Pie
- Support events in CartesianAxis, PolarAngleAxis, PolarRadiusAxis
- Support touch events in Brush

### refactor

- Use `getStringSize` to calculate the width of `Text`
- Refactor children comparsion in `generateCategoricalChart`, and add updateId to force Brush update when children update
- Refactor `getMouseInfo` to remove some duplicated codes in `generateCategoricalChart`
- Refactor Tooltip and Legend, remove react-dom-server

### fix

- Fix the `chartId` in `handleReceiveSyncEvent` of `generateCategoricalChart` 

## 0.19.1(Dec 15, 2016)

### fix

-  Adding missing event propTypes
- support x, y of `Text` are number or text
- fix proptypes of Scatter to allow that the props `data` can be a array of array
- fix server side render check `isSsr`
- remove duplicated "square" in legendType
- fix `getStringSize` when server side rendering check fails
- fix animation error when update Line which has props stroke-dasharray
- fix bug of BarChart when add stackId in only one Bar and update test cases

## 0.19.0 (Nov 23, 2016)

### refactor

- remove unneed `Animate` in `Bar` and `Rectangle`
- refactor interval of `CartesianAxis`, support "preserveStart", "preserveEnd", "preserveStartEnd"
- add payload in the `Tooltip` and `Scatter` of `ScatterChart`, and unify the payload of Components

### feat

- `RadialBar` support events triggered on the entire bar
- support customized lable in `RadialBar`
- support `maxHeight` in `ResponsiveContianer`

### fix

- fix multiple y-axes breaks chart when plotting only single datum
- Relax propTypes.ticks in CartesianAxis

## 0.18.0 (Nov 15, 2016)

### feat

- support customized scale function of categorical charts
- support customized events in Legend

### refactor

- refactor ResponsiveContainer with ReactResizeDetector
- change the default value of isAnimationActive
- remove some unneed default attributes of Components

### fix

- fix wrong written default props
- fix twice triggered event in Bar
- fix treemap stroke pollution cause by defaultProps

## 0.17.0 | 0.17.1 (Nov 08, 2016)

### fix

- fix strokeDasharray of Line
- add payload in Legend payload item
- fix position of vertical Legend
- Recalculate points after width or height change

### refactor

- refactor ticks filter algorithm of CartesianAxis
- change order of stacked BarChart and AreaChart
- refactor event handlers of PieChart, RadarChart, Brush, RadialBarChart
- support onMouseEnter, onMouseLeave, onMouseMove, onClick in categorical chart

## 0.16.2 (Nov 04, 2016)

### fix

- fix dash line animation
- fix the bug when the children of categorical chart change

### feat

- support shape in ReferenceLine

### refactor

- render Bar, Area, Line according to the order of Bar, Area, Line in ComposedChart

## 0.16.1 (Nov 03, 2016)

### fix

- refactor to treat NaN like undefined or null, fix #303
- fix tranform origin of Bar, fix #292

### feat

- support customized position of Tooltip, fix #31

### docs

- fix LodashModuleReplacementPlugin

## 0.16.0 (Nov 03, 2016)

### refactor

- Major Performance Change - Re-Use Expensive To Generate Data

### feat

- support both x-axis and y-axis are numerical axis, fix #183
- add animation events in `Line`, `Area`, `Bar`

### fix

- fix angle of PolorRadiusAxis

## 0.15.3 (Oct 28, 2016)

### feat

- Add angle property to PRESENTATION_ATTRIBUTES (#307)

### Dev
- chore: update istanbul plugin and add yarn.lock

## 0.15.2 (Oct 13, 2016)

### Fix

- support empty margin in generateCategoricalChart
- fix the label of RadialBarChart
- fix the bug of <Text>{0}</Text>
- fix the bug of ScatterChart when margin lose some attributes

### Feat

- support maxBarSize in BarChart and Bar
- support fill in CartesianGrid

### Refactor

- simplify the calculation of width and height when specified aspect

## 0.15.1 (Sep 26, 2016)

### fix

- Fix label/tick vertical alignment of Text

## 0.15.0 (Sep 23, 2016)

### feat

- New Component `Text`

### refactor

- Fix possible memory leak warning of events

### fix

- minPointSize working when value is 0
- Restored support for discrete values in Line and Area charts
- Allowed for strings to be used as axis id in the ScatterChart

## 0.14.2 (Sep 19, 2016)

### Fix

- Stop caching span in memory of getStringSize
- Fix the bug of LineChart and ScaterChart when some data is null or undefined

### feat

- ScatterChart support for attributes using data and Cell

## 0.14.1 (Sep 12, 2016)

- Fix webpack.config.js

## 0.14.0 (Sep 12, 2016)

### Feat

- allow label function to return a string
- Pass entry to formatter function
- Support labels in ScatterChart axis
- Add dataKey in the payload of Legend
- support allowDataOverflow in XAxis, YAxis, PolarRadiusAxis

### Refactor

- Refactor the received props of Surface

### Fix

- Fixed up handling of nulls for domain creation
- Stopped domain calculation reverting to 0 for missing data points
- Fix the bug of stacked areas which have yAxisId different from "0"
- Fix the spelling error of AniamtionDecorator

### Docs

- Update webpack.config.js, to support AMD

## 0.13.4 (Aug 24, 2016)

### Feat

- Add cartesian Component ReferenceArea

### Refactor

- Refactor ResponsiveContainer and support minHeight, minWidth, aspect in ResponsiveContainer

### Fix

- Fix the position of Bar for charts which have multiple y-axes

## 0.13.3 (Aug 17, 2016)

### Feat

- Support the functionality that syncs multiple categorical charts when mouse enter, move, leave a chart, or when change the brush of one chart

### Fix

- Fix the bug of stack offset function - "sign"
- Fix the propTypes or legendType

## 0.13.2 (Aug 15, 2016)

### Feat

- Add an option "sign" to the props stackOffset in BarChart and AreaChart which allows the bars and areas to be stacked according to the sign of value.

### Fix

- Fix the the bug of legend in ScatterChart and refactor symbols.

## 0.13.1 (Aug 08, 2016)

### Fix

- Fix the bug that tooltip did not show up for pie chart while using nameKey and valueKey

### Refactor

- Refactor Brush as controlled component

## 0.13.0 (Aug 03, 2016)

### Fix

- Ensured all tooltip-related state gets reset upon receiving new data for all the charts

### feat

- Support smooth curve in Scatter
- Support props connectNulls in Area, Line, and Curve,

### refactor

- Refactor animation of Area

## 0.12.8 (Aug 01, 2016)

### fix

- Fix the bug of getTicksOfScale
- Fix the bug of radius of ClipPath is so small that some texts of Pie is covered

## 0.12.7 (July 25, 2016)

### feat

- Add itemSorter to tooltips
- add props allowDecimals in XAxis and YAxis

## 0.12.6 (July 21, 2016)

### feat

- Support Tooltip  of RadarChart

### fix

- Fix the initial value of state isAnimationFinished in Line and Area
- Fix the spelling error, pressentation => presentation (CartesianAxis)
- Tweak text in RadarSpec

## 0.12.5 (July 12, 2016)

### feat

- Add paddingAngle in Pie, fix #142

### deps

- update version of react, fix #138, fix #103

## 0.12.4 (July 8, 2016)

### fix

- Fix the bug of calculation accuracy in IE(Sector)
- Remove unneed props "formatter" in Area and Bar
- Fix props which can be supported by html tags and svg tags

### refactor

- Support multiple activeIndex in Pie

### deps

- Update d3-scale and d3-shape to the latest version
- Update version of react-smooth and recharts-scale
- Restrict the version of react to '~15.1.0'

## 0.12.3 (June 30, 2016)

### fix

- Fix the bug that no animation when data change, but points of Line are the same

### refactor

- Remove xAxisMap and yAxisMap in ReferenceDot and ReferenceLine

## 0.12.2 (June 29, 2016)

### feat

- Add margin props in Sankey to avoid outer-clip
- Add shape props in ReferenceDot

### fix

- Fix the width and height of wrapper

## 0.12.1 (June 24, 2016)

### fix

- Fix the bug with a hack method that global css will affect the width and height of Legend, Tooltip

## 0.12.0 (June 23, 2016)

### feat

- Add padding in XAxis and YAxis
- Support minPointSize in Bar
- Support "dataMin - 110" and "dataMax + 100" in the domain of numeric axis

### refactor

- Refactor Treemap, change ratio to aspectRatio

### fix

- Fix the bug of axisId in BarChart
- Fix the bug of tooltip's position in BarChart
- Fix PropTypes of `type` in `Area`

## 0.11.0 (June 17, 2016)

### feat

- Add Sankey

### fix

- Fix the bug of Area when the data break off in some points
- Fix the bug of ticks when 0 in ticks

### refactor

- Refactor the payload of tooltip, and the props of activeDot in AreaChart

## 0.10.10 (June 13, 2016)

### fix

- Fix the position of labels in Bar

## 0.10.9 (June 12, 2016)

### refactor

- Use react-container-dimensions to refactor ResponsiveContainer, close #104, close #105

## 0.10.8 (June 2, 2016)

### feat

- Support any svg elements in the charts, such as defs, linearGradient

## 0.10.7 (May 30, 2016)

### fix

- Fix the bug of Brush when data or the size of container changes.

## 0.10.6 (May 25, 2016)

### feat

- Add customized event handlers in BarChart
- Add curveMonotoneX and curveMonotoneY in Curve and Line
- Pass stackOffset type as an optional parameter for categorical chart
- Add `isFront` in ReferenceLine and ReferenceDot to support auxiliary information at differents z-index

### fix

- Fix legend position with margin

## 0.10.5 (May 9, 2016)

### feat

- Support more interpolations in Curve, Line
- Allow to set custom tick formatter function for Brush start/end index

## 0.10.4 (May 5, 2016)

### feat

- support animation when data update

### refactor

- refactor event handlers in charts

### fix

- fix tooltip position in BarChart

## 0.10.3 (May 4, 2016)

### fix

- fix bug of ReactUtils in Firefox 31

## 0.10.2 (May 4, 2016)

### refactor

- refactor data in Pie which was modified internally

## 0.10.1 (April 27, 2016)

### feat

- Support Tooltip in Treemap

### fix

- Rename `Symbol` to `Symbols`
- Fix the key of `activeDot` in `AreaChart`

## 0.10.0 (April 21, 2016)

### refactor

- Refactor *ticks* specified in `XAxis`, `YAxis`
- Use area of `Symbol` to show the size of number in ScatterChart
- Refactor the `activeShape` in `Scatter`

### feat

- Add `Symbol` and support different `Symbol` in ScatterChart

### fix

- Fix the content of legend in `PieChart`
- Fix the crush bug when categorical axis has duplicate labels
- Fix the bug of calculating tick width

## 0.9.3 (April 12, 2016)

### deps

- Update react-smooth to 0.1.4

## 0.9.2 (April 12, 2016)

### deps

- Update react to 15.0.0

## 0.9.1 (April 8, 2016)

### fix

- Fix the bug of bar animation

### deps

- update version of rechats-scale, and babel-eslint

## 0.9.0 (April 7, 2016)

### refactor

- Remove default event handler in Pie, and add `activeIndex` to let user control the active sector
- Remove detectElementResize
- Add activeDot in Line and Area

### fix

- Fix the bug of updating line when the length of line is zero at first
- Fix the base value of AreaChart which was set to be 0 before

## 0.8.8 (March 25, 2016)

### refactor

- Support fixed value of width or height in ResponsiveContainer

## 0.8.7 (March 21, 2016)

### refactor

- Don't overwrite payload in Legend when customized payload has been setted

## 0.8.6 (March 09, 2016)

### refactor

- Use detectElementResize in react-virtualized to refactor ResponsiveContainer

### fix

- Fix ssr render bug of CartesianAxis

## 0.8.5 (March 08, 2016)

### feat

- Add support of function type customized element

### fix

- fix the props labelLine in Pie
- fix the bug of PureRender

### test

- Add more test cases

## 0.8.4 (March 02, 2016)

### refactor

- Refactor the implementation type of renderPolygon in `Radar`
- Refactor code in `Treemap`
- Remove `invariant` and add `LogUtils`

### feat

- Add animation of Area, Radar, RadialBar, Scatter
- Add label formatter to default tooltip
- Add props labelLine in `Pie`
- Add Cell of `Pie` to set different options for each sector
- Add Cell support in `Bar`, `RadialBar`

### fix

- Fix Pie chart Label position, When using custom label It was not rendering as part of the curve group.
- Fix `isAnimationActive` props in `Area`

## 0.8.3 (February 25, 2016)

### refactor
- refactor CartesianChart to a high order component, move some function to /util/CartesianUtils which can be used in ScatterChart.
- Simplify ComposedChart, remove duplicated code
- use `filterEventAttributes` to add events props
- cancel selecting line and area in LineChart, AreaChart, ComposedChart

## 0.8.2 (February 24, 2016)

### fix
- rollback last fix of Line animation from value

## 0.8.1 (February 24, 2016)

### fix
- fix the bug of Line animation from value

## 0.8.0 (February 22, 2016)

### feat
- implement ReferenceDot in cartesian charts
- support alwaysShow of ReferenceLine and ReferenceDot

### refactor
- refactor domain of CartesianAxis and PolarRadiusAxis
- refactor this props name in ReferenceLine

### fix
- fix the bug of calculate extent in RadarChart
- fix some bugs of server side rendering when document is called


## 0.7.0 (February 17, 2016)

### UI
- feat: support dasharray line animation
- refactor(CartesianAxis, PolarAngleAxis, PolarRadiusAxis):rename label to tick
- feat(label): add label of CartesianAxis, PolarRadiusAxis, ReferenceLine
- feat: Implement tooltip for PieChart
- feat:Implement tooltip for RadialBarChart
- deps(d3-scale,d3-shape,oui-dom-util): 1.update version of d3-scale, d3-shape, oui-dom-util 2.update some api of d3-scale

## 0.6.3 (February 10, 2016)

### UI
- refactor(Legend): refactor the location of legend
- fix(CartesianChart,CartesianAxis): 1. fix the bug of dataStartIndex && dataEndIndex when the length of data was changed 2. fix the default value of tickFormatter
- fix(cartesian/Line.js): fix Line animation bug

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
- refactor(CartesianAxis): remove unneeded props domain

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
- Refactor some components, include CartesianAxis, Legend, Tooltip etc, to unify some props name.

