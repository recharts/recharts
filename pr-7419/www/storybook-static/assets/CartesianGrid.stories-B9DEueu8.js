import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{B as r,Q as i,R as a,Vn as o,t as s,u as c}from"./iframe-BqVvK_R4.js";import{t as l}from"./data-J2vpPkF6.js";import{r as u}from"./Page-C0w_0_Yr.js";import{n as d,t as f}from"./utils-4uF5A2JM.js";var p,m=e((()=>{p={fill:{description:`The background color used to fill the space between grid lines`,control:{type:`color`},table:{type:{summary:`string`},category:`Style`}},fillOpacity:{description:`The opacity of the background used to fill the space between grid lines`,table:{type:{summary:`number | string`},category:`General`}},height:{description:`The height of grid. If undefined, covers the full height of the chart plot area.`,table:{type:{summary:`number | string`},category:`General`}},horizontal:{description:`If set false, no horizontal grid lines will be drawn.`,table:{type:{summary:`(union of 5 variants)`},category:`General`,defaultValue:{summary:`true`}},defaultValue:!0},horizontalCoordinatesGenerator:{description:`A function that generates the y-coordinates of all horizontal lines.`,table:{type:{summary:`HorizontalCoordinatesGenerator`},category:`General`}},horizontalFill:{description:`Defines background color of stripes.

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
If left undefined, it will be computed from the chart's offset and margins.`,table:{type:{summary:`number | string`},category:`General`}},yAxisId:{description:`The id of YAxis which is corresponding to the data. Required when there are multiple YAxes.`,table:{type:{summary:`number | string`},category:`General`,defaultValue:{summary:`0`}},defaultValue:0},zIndex:{control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`-100`}},defaultValue:-100}}})),h,g,_,v,y;e((()=>{h=t(n()),s(),l(),m(),d(),g={component:i,argTypes:p,args:{horizontal:!0,vertical:!0}},_={render:e=>{let[t,n]=[500,500];return h.createElement(o,{width:`100%`,height:n},h.createElement(c,{width:t,height:n},h.createElement(i,e)))},args:{...f(p),y:0,x:0,width:500,height:500,fillOpacity:.4,horizontalPoints:[10,20,30,100,400],verticalPoints:[100,200,300,400],verticalFill:[`red`,`#eee`],horizontalFill:[`#eee`,`yellow`],strokeDasharray:`10 10`}},v={render:e=>h.createElement(o,{width:`100%`,height:500},h.createElement(c,{width:500,height:500,data:u},h.createElement(r,{dataKey:`name`}),h.createElement(a,{dataKey:`pv`}),e.displayGridA&&h.createElement(i,{verticalFill:[`#aaeeee`,`#eeeeaa`],stroke:`trasparent`}),e.displayGridB&&h.createElement(i,{stroke:`silver`,strokeDasharray:`3 3`,strokeWidth:3}))),args:{...f(p),displayGridA:!0,displayGridB:!0}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`API`,`MultipleGrids`]}))();export{_ as API,v as MultipleGrids,y as __namedExportsOrder,g as default};