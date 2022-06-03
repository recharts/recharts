## 2.1.10 (May 19, 2022)

# feat

- Add ARIA1.2 attributes to the SvgElementPropKeys filter array
- Added Storybook Badge (#2840)
- Handling of undefined values and type checks in DefaultTooltipContent…

# fix

- Axis scale=band no longer works as of Recharts 2.x.x (#2742)

# chore

- chore: move type deps into devDependencies (#2843)

## 2.1.9 (Feb 10, 2022)

# feat

- feat: allow axis domain to accept a callback (#2770)
- Categorical chart callback types (#2739)

# fix

- Fixing types in strict mode (#2745) (#2747)
- Fix: removes overlapping legend for categorical charts (#2752)
- Categorical chart callback types (#2739)

## 2.1.8 (dec 14, 2021)

# fix

- Must use import to load ES Module (#2658)

## 2.1.7 (dec 14, 2021)

# fix

- Treemap do not render depth (#2718 #2719)
- Update PolarRadiusAxis.tsx (#2720)

# chore

- Update d3-interpolate, d3-scale and d3-shape (#2707)

## 2.1.6 (oct 26, 2021)

### fix

- Fix types folder missing

## 2.1.5 (oct 15, 2021)

### fix

- Fixed types for legend events (#2267 #2269)
- Fix the react-is version (#2670)
- Fix type declaration errors when tsc (#2675)
- Fix(build-umd): add webpack output options libraryTarget (#2684)

## 2.1.4 (sep 19, 2021)

### fix

- Fix: ResponsiveContainer makes legend overlapping with chart when re-rendering (#2660)
- Fix: rendering of a single bar when maxBarSize is absent and barSize is present (#2659)

## 2.1.3 (sep 18, 2021)

### fix

- fix: Customized component has no key (#2637)
- Fix XAxis scale property type (#2641)

## 2.1.2 (aug 24, 2021)

### fix

- Fixes undefined field reference when optional variables not supplied (#2630)
- Fix fragment children (#2481)
## 2.1.1 (aug 21, 2021)

### fix

- Fix: responsive container

## 2.1.0 (aug 10, 2021)

### feat

- Wrap ResponsiveContainer with forwardRef

### fix

- Fix for recharts issue #1787
- Add chart type to tooltip payload
## 2.0.10 (jul 13, 2021)
### feat

- Feat: Allow automated axis padding for "gap" and "no-gap" for barcharts with continuous axis #2457
- Passthrough position attribute on createLabeledScales

### fix

- fix: barchart for a single data point #2512
- fix: the bar label type definition #2582
- fix: show scatter chart tooltip cross cursor #2592

## 2.0.9 (mar 24, 2021)

### chore

- update test config and webpack, etc

## fix

- fix for missing sankey tooltips, fix #2496
- added polyfill for ReactResizeDetector, fix #2504
- fix condition to actually remove the listener, fix #2498
- fix typing of <Area type /> prop, fix #2471

## 2.0.8 (Feb 24, 2021)

### feat

- allow to show tooltip when hover or click bar item for <BarChart /> and <RadialBarChart />
- add api `getXScales`, `getYScales`, `getXScaleByAxisId`, `getYScaleByAxisId`, `getItemByXY` to chart, fix #2422
- Add SyncMethod to categorical charts
- `findAllByType` searches for match inside of a fragment
- allow to add customized `polarAngles` and `polarRadius` to <PolarGrid />, fix #2452

### fix

- fix Tooltip receive wrong payload when mouse enter <Line />, .etc, fix #2394
- fix Treemap tooltip when use `dataKey` to specify value, fix #2428

### deps

- update react-resize-detector to 6.6.0, fix #2431


## 2.0.7 (Feb 18, 2021)

### fix

- add missed type definition of tickMargin in XAxis, YAxis, fix #2427
- filter out nil elements of chart
- ensures `id="undefined"` is not rendered to the DOM when use ResponsiveContainer
- fix auto scale type of ComposedChart, fix #2403
- Fix .d.ts types that relay on d3

## 2.0.6 (Feb 08, 2021)

### fix

- fix types error in npm pkg, fix #2398

## 2.0.5 (Feb 08, 2021)

### feat

-  defer when syncing to other charts

### fix

- Fix Customized component types
- fix child event not dispatched, fix #2414

## 2.0.4 (Jan 27, 2021)

### feat

- add maxLines prop to Text component


### fix

- Add `payload` to `Payload` interface
- prevent rerender errors in ResponsiveContainer
- Add PieLabel, PieLabelRenderProps types

### deps

- Upgrade react-resize-detector(4.x => 5.x) types to match the library



## 2.0.3 (Jan 13, 2021)

### refactor

- use `getDerivedStateFromProps` to replace `UNSAFE_componentWillReceiveProps`, support react@17, #2385

## 2.0.2 (Jan 12, 2021)

### fix

- fix lint error

## 2.0.1 (Jan 12, 2021)

### fix

- Fix typo, createLabeldScales -> createLabeledScales
- Prefer Number.isFinite if available
- fix types error
- fix(package.json): disable side effects explicitly


### feat

- Add aria-hidden to measurementSpan


## 2.0.0 (Dec 29, 2020)

### fix

- fix minAngle for 0 in PieChart, fix ##2237
- fix type error of <Bar />, fix #2335
- fix type error of cursor in <Tooltip />, fix #2178
- fix Props of XAxis, fix #2128
- export Props of components, fix #2319, #2156, #2203
- Fix typo, getRectangePath -> getRectanglePath in Rectangle
- allow Duplicated Category for bar charts not using correct entries for custom tool tips
- fixing typescript array coalesce
- fix types error of sankey, fix #2280
- Fixed SVG path for pie charts when corner radius is set to a value other than zero (#2331)

### feat

- add props `reversed` to `<Funnel />`
- add `breakAll` props to `<Text />` to allow break all for chinese
- fix width of labelList in Funnel; fix #2056, #1866
- support range RadarChart and add props `connectNulls` to <Radar />, fix #1890
- add ability to pass in custom legend icon.

### deps

- upgrade react-resize-detector to 5.2.0 and fix ts error, fix #2300
- update react-smooth to 1.0.6 to fix bug after upgrading d3
- upgrade d3 packages


## 2.0.0-beta.8 (Nov 16, 2020)

### fix

-  Add color change for inactive legend label
- fix stackOffset="sign" in #2292, and add props stackOffset="positive" to fix #1667

### refactor

- update `filterSvgElements` and `renderByOrder`
- Replace core-js polyfill and remove babel-polyfill


## 2.0.0-beta.7 (Sep 08, 2020)

### fix

- Fix flickering tooltip by keeping the isTooltipActive flag from the previous state
- fix(AreaDot Type): add option to use a function that returns a react element
- Fix typescript error in polar radar
- Fix typos in Label.renderCallByParent
- Add type definition for label prop on XAxis, YAxis and ZAxis

### feat

- Pass tickFormatter as a prop to customized tick component
- Allow array value for last data element in Funnel to set bottom width instead of forcing 0
-  Add payloadIndex to cursor props

## 2.0.0-beta.6 (May 12, 2020)

### fix

- fix error of Brush when data is empty, but chart width or height or Brush update, fix #2093
- fix build error , fix #2120
- fix attrs of <Label />, reverts previous change: now `positionAttrs` is again after `attrs`
- Get legend wrapper boundingRect to correctly compute legend offset, fix #2062

### feat

- support customized traveller of Brush, fix #1600

## 2.0.0-beta.5 (Mar 26, 2020)

### fix

- fix types of generateCategoricalChart
- fix position of tooltip when the categorical axis has time scale
- fix position of tooltip when direction is rtl
- fix name of Scatter in tooltip
- Fix outerArcAngle and innerArcAngle when cornerIsExternal == true
- fix IE 11 supoort because of d3-scale@3.x

### feat

- add Global setting, include "isSsr"
- support tooltip trigger by click event
- add static method `registerSymbol` to Symbols
- add payload to formatter and labelFormatter in Tooltip
- allow domain of axis to change the order of categories


## 2.0.0-beta.4 (Mar 17, 2020)

### fix

- fix error of <Curve /> when add child to <Line />, fix #2051
- fix Stack AreaChart when some values is negative, fix #1667
- fix stack AreaChart when some values is nill, fix #1601

### dep

- Upgrade reduce-css-calc

### chore

- add types


## 2.0.0-beta.3 (Mar 13, 2020)

### fix

- fix range of ReferenceArea of BarChart, fix #2045
- fix className of axis line, fix ##2024
- fix ComposedChart when has multiple <Bar/>, fix #2031
- fix ComposedChart when specify scale of <XAxis />, fix #2010

### chore

- update eslint and add .prettierrc

## 2.0.0-beta.2 (Mar 10, 2020)

### fix

- Do word line calculation only when needed
- Fixes arc angles when `cornerIsExternal` is used
- Invert cartesian label position based on negative values
- Fix usage of hooks in Tooltip, Label, Legend and Customized
- Move draging-end listener to the window for brush
- Fix trigger after mouse leave
- Added the angle as key which need to be used in the Label align
- Rewrite index.js to index.ts, update scripts in package.json

### feat

- Added index to tickFormatter
- Allow axis line customization through axisLine prop

## 2.0.0-beta.1 (Dec 03, 2019)

### fix

- fix error parameters in `appendOffsetOfLegend`
- fix style of <Area />

## 2.0.0-beta.0 (Dec 03, 2019)

### feat

- Only support react@16
- Use typescript to rewrite src/

## 1.8.5 (Oct 22, 2019)

### fix

- revert [PR#1916](https://github.com/recharts/recharts/pull/1916)
- fix Text update, fix #1914

## 1.8.4 (Oct 22, 2019)

### fix

- Adding Composed chart to rescaled charts, to fix #1887

## 1.8.3 (Oct 17, 2019)

### fix

- fix: rollback to componentWillReceiveProps, fix crash in react@15

## 1.8.2 (Oct 17, 2019)

### fix

- Used UNSAFE_componentWillReceiveProps to replace componentDidUpdate

## 1.8.1 (Oct 16, 2019)

### fix

- Fixed Text Component crash
- Fixed eslint errors in src/


### feat

- Add props of <Brush /> to always show text
- Add onClick event to sankey chart
- Shape prop can be used without any other prop in reference area

## 1.8.0 (Oct 15, 2019)

### refactor

- react unsafe methods refactored

## 1.7.1 (Aug 13, 2019)

### fix

- Fix bar chart tooltip (#1837)

## 1.7.0 (Aug 08, 2019)

### feat

- allow events on Text and Label components
- Enable Tooltip's `translate` style
- Added position props for ReferenceLine to allow to control offset of it

### fix

- handle `dataKey` as function, get correct data array for tooltip
- fix style of legend in case of area and radar use fill for fallback color

## 1.6.2 (May 22, 2019)

### feat

- Add cornerIsExternal prop to center rounded corner at radial bar edge
- Add new component `Customized` to render customized content which can user internal state and props
- Add props `tooltipType="none"` to hide tooltip data for Area, Bar, Line, Scatter, Funnel, Pie, Radar, RadialBar

### fix

- fix the order of tooltip items when not specify itemSorter
- Fix typo in example of RadialBarChart


## 1.6.1 (May 20, 2019)

### fix

- fix "Maximum call stack size exceeded" error when use label={<Label />}
- fix bug of "Cannot read property reduce of undefined in Text.js"
- fix `getDomainOfDataByKey` when all the values are null or undefined

## 1.6.0(May 14, 2019)

### fix

- Use y-axis ticks to determine y-axis category
- fix bug in ThreeMap inside ResponsiveContainer, fix #1692
- Avoid same keys on label and line, fixes #1302
- use _.max to replace Math.max.apply, use _.min to replace Math.min.apply

### feat

- Adds forceCornerRadius prop to RadialBar
- calculate width with aspect and height when width is falsey

## 1.5.0(Feb 15, 2019)

### fix

- fix the bug of ReferenceLine when calculate coordinates, fix #1643
- fix bug of Scatter in ComposedChart

### feat

- allow aria-* attributes and "role", "focusable", "tabIndex" of charts, fix #1226, fix #1584
- add new props "paylodUniqBy" to Tooltip and Legend

## 1.4.4(Feb 15, 2019)

### fix

- fix the bug of automatically calculate the y-coordinate of yAxis tick when tick has unit, fix #1623
- render clipPath in <defs />, fix bug in generateCategoricalChart, fix #1592
- remove React.Fragment in DefaultTooltipContent, fix #1645

## 1.4.3(Feb 12, 2019)

### fix

- fix bug of <Rectangle /> when width < 0 && `radius` is not null, fix #1596
- fix paddingAngle of Pie when render only <Pie /> not <PieChart />
- fix onMouseEnter and Tooltip for Pie on FireFox

### feat

- Make the timeOut timer for the brush configurable through props
- Allow to format name in Tooltips

### dep

- Update lodash version to 4.17.5 and install webpack-dev-server@3.1.14 dev dependency
- Updated package.json to mark effectful modules
- chore: update version of sinon, from 4.x to 7.x


## 1.4.2(Dec 21, 2018)

### refactor

- Refactor transition of <Area />, <Line />, <Radar />, make transition more smoothly when the length of dataset changes

### fix

- replace lodash isFinite with Number.isFinite, meanwhile add polyfill core-js's Number polyfill in order to use Number.usFinite directly
- updated area chart to cut off dots on left most axis

## 1.4.1(Nov 16, 2018)

### fix

- Fix height of TreeMap

## 1.4.0(Nov 15, 2018)

### feat

- Add FunnelChart and Trapezoid
- Add nested Treemap

## 1.3.6(Nov 07, 2018)

### fix

- Fix bug preventing use of functions or custom components for the Bar background prop
- Fix incorrect sort logic in stripe rendering

### feat

- Added animateNewValues property to Line

## 1.3.5(Oct 25, 2018)

### fix

- use lodash _.values instead of Object.values
- perfer YAxis which has finite domain and nice ticks when a chart has many YAxes
- fix <Area /> for expected length height attribute

### chore

- add babel-plugin-lodash in babelrc
- update webpack.config.js to remove sourceMap in umd/Recharts.min.js

## 1.3.4(Oct 13, 2018)

### fix

- Fix domain calculation with 0 values (#1519)

## 1.3.3(Oct 10, 2018)

### feat

- find yAxisWithNiceTicks and choose it over getAnyElementOfObject

### fix

- update recharts-scale to 0.4.2 to fix bug of DecimalError when data is Inifinity, fix #1493

## 1.3.2(Oct 07, 2018)

### fix

- Fix axis type error
- Fix add sideEffects flag to enable tree-shaing

## 1.3.1(Sep 29, 2018)

### fix

- Fix the react-resize-detector don't match react 15

## 1.3.0(Sep 28, 2018)

### feat

- upgrade recharts-scale to 0.4.0, to fix the calculation of big float

## 1.2.0(Sep 7, 2018)

### feat

- Add blendStroke prop to Pie component
- Adding contentStyle prop to Tooltip for styling DefaultTooltipContent

### fix

- Fixed typo of playload -> payload in Radar chart
- Fix PieChart animation event handlers not firing
- Fix alwaysShow warn() condition in ReferenceLine
- Fix Tooltip disappears when using setState()

## 1.1.0(Jul 19, 2018)

### feat

- Allow reference areas which extend past the canvas bounds
- Allow to add more classes in tooltips
- Reference line segment by specifying a pair of
 endpoints

## 1.0.1(Jul 05, 2018)

### fix

- only use babel-es in es6/, fix #1372

## 1.0.0(Jul 05, 2018)

### fix

- #1195 Replace axis scale value `utcTime` with `utc`
- remove wrapperStyle on DefaultTooltipContent
- Clip dots of <Line />
- Move style spread to after default styles to allow overriding
- Fixing range area chart bottom bound. Base line needed to be filterted for connecting
 null
- Fix tooltips that disappear while mouse still over a scatter point

### refactor

- use lodash-es for es6 build
- Factor out some scale- and rect-related functions

### feat

- Add touchStart & touchEnd event handling
- Add explicit prop `defaultShowTooltip`  to activate tooltip
- Position the 'top' label outside the element for negative heights

## 1.0.0-beta.10(Jan 31, 2018)

### fix

- fix Scatter Chart:lineType 'fitting' does not work
- Update to allow CSP compliance on setting styles
- Remove react-transition-group from peerDependencies

### refactor

- Replace flatmap of reduce to _.flatmap in getDomainOfDataByKey

### feat

- Add the gap of props for brush

## 1.0.0-beta.9(Jan 09, 2018)

### fix

- Fix `verticalFill` and `horizontalFill` in `<CartesianGrid />` when points are unordered

## 1.0.0-beta.8(Jan 09, 2018)

### feat

- Add props `useTranslate3d` to control whether use translate3d or translate in <Tooltip />
- Add props `verticalFill` and `horizontalFill` in `<CartesianGrid />` to show grid background
- Add  `visibleTicksCount` in props of customized tick of `<CartesianAxis />`

### fix

- Replace lodash _.get with simple Array.prototype.find
- Prevent texts from being selected when dragging the brush
- Add try...catch... when getTotalLength is called by a svg path to fix IE bug

## 1.0.0-beta.7(Dec 21, 2017)

### feat

- Add props `allowDuplicatedCategory` to XAxis, YAxis, PolarAngleAxis, PolarRadiusAxis, to remove duplicated category when type="category"
- Add props id in `<Area />`, `<Bar />`, `<Line />`, `<Scatter />`, `<Label />`, `<LabelList />` for SSR
- Support specify domain of category type axis when allowDuplicatedCategory is false, add cooresponding "xAis", "yAxis", "zAxis" to the props or customized shape of Scatter

### fix

- Fx sanketartAngle and endAngle of RadarChart diagram not re-rendering when updating data prop
- Fix animation of AreaChart when baseLine is NaN / undefined
- Fix default startAngle and endAngle of RadarChart
- Use cloneElement to create Legend

## 1.0.0-beta.6(Dec 02, 2017)

### feat

- Add props `background` to support background rectange in `<Bar />`
- add props `tickMargin` which set the space between text and tick line

### fix

- update PRESENTATION_ATTRIBUTES to allow set the radius of each `<Rectangle />` of BarChart
- render Legend when all values of Pie is 0
- fix animation of intial `<Bar />`

## 1.0.0-beta.5(Nov 24, 2017)

### fix

- fix `isChildrenEqual` when chart has a single child in an array
- support LabelList in ScatterChart

## 1.0.0-beta.4(Nov 24, 2017)

### fix

- fix Label when content is a function and return simple string
- add name to propTypes of Scatter
- fix ** error of lib/

## 1.0.0-beta.3(Nov 23, 2017)

### feat

- Add datakey to proops of customized dot

### fix

- Removed the use of `Children.only` from the isSingleChildEqual call. Appears to resolve the issue logged at https://github.com/recharts/recharts/issues/935
- Fix Line Animation with given Magic Number
- Don't break text contents on non-breaking spaces
- Support for "strokeDasharray" in <Legend/>
- Fix Bar Animation with the given Magic Number
- Fix position of `<Label />`
- Fix exception of AreaChart when all the values are null
- Fix the orders of polar angle ticks in RadarChart
- Replace ** width Math.pow

## 1.0.0-beta.2(Nov 17, 2017)

### fix

- fix attributes order of `<Label />`
- fix the domain of Axis when specify `ticks`

### feat

- allow set x, y, width, height, horizontalPoints, verticalPoints of CartesianGrid
- add props to the parameters of callbacks

### refactor

- add id prop to Pie Component
- Update Bar and Line to allow them to recognise multiple ErrorBars

## 1.0.0-beta.1(Nov 06, 2017)

### feat

- Add index to line props in Pie
- Update ReferenceDot.js

### chore

- update react-resize-detector, react-smooth to support react16

## 1.0.0-beta.0(Oct 24, 2017)

### feat

- Allow ReferenceArea to cover available space
- Support React 16

### fix

- Fix bug of animation when toggle the value of `isAnimationActive`

## 1.0.0-alpha.6(Oct 10, 2017)

### feat

- Add props `reverseStackOrder` to reverse the order of stacked items
- Allow an arbirary domain for cartesian X and Y axes
- Added className prop for Label

### fix

- Fix confused parameter `startX` in `<Brush />`
- Fix ScatterChart when the type of XAxis is "category"

### docs

- Fix typo initilaState -> initialState


## 1.0.0-alpha.5(Sep 16, 2017)

### fix

- Don't check for animation when it is disabled
- fix bug of paddingAngle when isAnimationActive is true

### feat

- add props filterNull to `Tooltip`, null values will not be filtered when filterNull = false

### refactor

- Allowing length in different unit in ResponsiveContainer
  By allowing type: String on 'minHeight', 'minWidth', 'maxHeight' property, developers can use length in different units like em, pt etc.
- Render curve with fill first in Area


### dep

- remove react-transition-group in peer dependencies
- Updates resize-detector to 0.6, close #705, fix the problem with strange scrollbars appearing over the charts

## 1.0.0-alpha.4(Aug 21, 2017)

### fix

- Fix error 'Cannot read property 'map' of undefined' in Pie
- Fix bug of parsing the width of Brush
- Don't render any path when width === 0 || height === 0 in Rectangle
### refactor

- Avoid calculating ticks if tick is set to false
- Update the order of parsing data in mixed components

### feat

- Render unit when the props unit of XAxis, YAxis is specified
- Add default nameKey to "name" property in Pie
- Add props className and id to ResponsiveContainer

### dep

- Update recharts-scale to fix bug of ticks

## 1.0.0-alpha.3(Aug 12, 2017)

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
- fix the barSize of bars in `<Bar />` when too many bars

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
- fix the bug of `<Text>{0}</Text>`
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

