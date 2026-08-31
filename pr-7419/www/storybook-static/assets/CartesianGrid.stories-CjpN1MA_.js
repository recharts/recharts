import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-Dy7ciYWo.js";import{n as a,t as o}from"./CartesianGrid-DXJ2CyMi.js";import{n as s,t as c}from"./XAxis-B3WODRl4.js";import{n as l,t as u}from"./YAxis-CZypjyHs.js";import{n as d,t as f}from"./ComposedChart-BSnkeRRU.js";import{r as p,t as m}from"./Page-DUsfWi7y.js";import{n as h,t as g}from"./utils-vqcWnakT.js";var _;function v(){return(v=t((()=>{_={fill:{description:`The background color used to fill the space between grid lines`,control:{type:`color`},table:{type:{summary:`string`},category:`Style`}},fillOpacity:{description:`The opacity of the background used to fill the space between grid lines`,table:{type:{summary:`number | string`},category:`General`}},height:{description:`The height of grid. If undefined, covers the full height of the chart plot area.`,table:{type:{summary:`number | string`},category:`General`}},horizontal:{description:`If set false, no horizontal grid lines will be drawn.`,table:{type:{summary:`(union of 5 variants)`},category:`General`,defaultValue:{summary:`true`}},defaultValue:!0},horizontalCoordinatesGenerator:{description:`A function that generates the y-coordinates of all horizontal lines.`,table:{type:{summary:`HorizontalCoordinatesGenerator`},category:`General`}},horizontalFill:{description:`Defines background color of stripes.

The values from this array will be passed in as the \`fill\` property in a \`rect\` SVG element.
For possible values see: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill#rect

In case there are more stripes than colors, the colors will start from beginning.
So for example: horizontalFill['yellow', 'black'] produces a pattern of yellow|black|yellow|black

If this is undefined, or an empty array, then there is no background fill.
Note: Grid lines will be rendered above these background stripes.`,table:{type:{summary:`Array<string>`},category:`General`,defaultValue:{summary:`[]`}},defaultValue:[]},horizontalPoints:{description:`Array of coordinates in pixels where to draw horizontal grid lines.
Has priority over syncWithTicks and horizontalValues.`,table:{type:{summary:`Array<number>`},category:`General`,defaultValue:{summary:`[]`}},defaultValue:[]},horizontalValues:{description:`Array of values, where horizontal lines will be drawn. Numbers or strings, in dependence on axis type.
Has priority over syncWithTicks but not over horizontalPoints.`,table:{type:{summary:`Array<number> | Array<string>`},category:`General`}},strokeDasharray:{description:`The pattern of dashes and gaps used to paint the lines of the grid`,table:{type:{summary:`Array<number> | number | string`},category:`Style`}},syncWithTicks:{description:`If true, only the lines that correspond to the axes ticks values will be drawn.
If false, extra lines could be added for each axis (at min and max coordinates), if there will not such ticks.
horizontalPoints, verticalPoints, horizontalValues, verticalValues have priority over syncWithTicks.`,control:{type:`boolean`},table:{type:{summary:`boolean`},category:`General`,defaultValue:{summary:`false`}},defaultValue:!1},vertical:{description:`If set false, no vertical grid lines will be drawn.`,table:{type:{summary:`(union of 5 variants)`},category:`General`,defaultValue:{summary:`true`}},defaultValue:!0},verticalCoordinatesGenerator:{description:`A function that generates the x-coordinates of all vertical lines.`,table:{type:{summary:`VerticalCoordinatesGenerator`},category:`General`}},verticalFill:{description:`Defines background color of stripes.

The values from this array will be passed in as the \`fill\` property in a \`rect\` SVG element.
For possible values see: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill#rect

In case there are more stripes than colors, the colors will start from beginning.
So for example: verticalFill['yellow', 'black'] produces a pattern of yellow|black|yellow|black

If this is undefined, or an empty array, then there is no background fill.
Note: Grid lines will be rendered above these background stripes.`,table:{type:{summary:`Array<string>`},category:`General`,defaultValue:{summary:`[]`}},defaultValue:[]},verticalPoints:{description:`Array of coordinates in pixels where to draw vertical grid lines.
Has priority over syncWithTicks and verticalValues.`,table:{type:{summary:`Array<number>`},category:`General`,defaultValue:{summary:`[]`}},defaultValue:[]},verticalValues:{description:`Array of values, where vertical lines will be drawn. Numbers or strings, in dependence on axis type.
Has priority over syncWithTicks but not over verticalPoints.`,table:{type:{summary:`Array<number> | Array<string>`},category:`General`}},width:{description:`The width of grid. If undefined, covers the full width of the chart plot area.`,table:{type:{summary:`number | string`},category:`General`}},x:{description:`The x-coordinate of grid.
If left undefined, it will be computed from the chart's offset and margins.`,table:{type:{summary:`number | string`},category:`General`}},xAxisId:{description:`The id of XAxis which is corresponding to the data. Required when there are multiple XAxes.`,table:{type:{summary:`number | string`},category:`General`,defaultValue:{summary:`0`}},defaultValue:0},y:{description:`The y-coordinate of grid.
If left undefined, it will be computed from the chart's offset and margins.`,table:{type:{summary:`number | string`},category:`General`}},yAxisId:{description:`The id of YAxis which is corresponding to the data. Required when there are multiple YAxes.`,table:{type:{summary:`number | string`},category:`General`,defaultValue:{summary:`0`}},defaultValue:0},zIndex:{control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`-100`}},defaultValue:-100}}})))()}var y,b,x,S,C;function w(){return(w=t((()=>{y=e(n()),a(),i(),d(),s(),l(),m(),v(),h(),b={component:o,argTypes:_,args:{horizontal:!0,vertical:!0}},x={render:e=>{let[t,n]=[500,500];return y.createElement(r,{width:`100%`,height:n},y.createElement(f,{width:t,height:n},y.createElement(o,e)))},args:{...g(_),y:0,x:0,width:500,height:500,fillOpacity:.4,horizontalPoints:[10,20,30,100,400],verticalPoints:[100,200,300,400],verticalFill:[`red`,`#eee`],horizontalFill:[`#eee`,`yellow`],strokeDasharray:`10 10`}},S={render:e=>y.createElement(r,{width:`100%`,height:500},y.createElement(f,{width:500,height:500,data:p},y.createElement(c,{dataKey:`name`}),y.createElement(u,{dataKey:`pv`}),e.displayGridA&&y.createElement(o,{verticalFill:[`#aaeeee`,`#eeeeaa`],stroke:`trasparent`}),e.displayGridB&&y.createElement(o,{stroke:`silver`,strokeDasharray:`3 3`,strokeWidth:3}))),args:{...g(_),displayGridA:!0,displayGridB:!0}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [surfaceWidth, surfaceHeight] = [500, 500];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight}>
          <CartesianGrid {...args} />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CartesianGridArgs),
    y: 0,
    x: 0,
    width: 500,
    height: 500,
    fillOpacity: 0.4,
    horizontalPoints: [10, 20, 30, 100, 400],
    verticalPoints: [100, 200, 300, 400],
    verticalFill: ['red', '#eee'],
    horizontalFill: ['#eee', 'yellow'],
    strokeDasharray: '10 10'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart width={500} height={500} data={pageData}>
          <XAxis dataKey="name" />
          <YAxis dataKey="pv" />
          {args.displayGridA && <CartesianGrid verticalFill={['#aaeeee', '#eeeeaa']} stroke="trasparent" />}
          {args.displayGridB && <CartesianGrid stroke="silver" strokeDasharray="3 3" strokeWidth={3} />}
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CartesianGridArgs),
    displayGridA: true,
    displayGridB: true
  }
}`,...S.parameters?.docs?.source}}},C=[`API`,`MultipleGrids`]})))()}w();export{x as API,S as MultipleGrids,C as __namedExportsOrder,b as default};