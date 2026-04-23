import{e}from"./iframe-BF30cewz.js";import{g as u}from"./utils-ePvtT4un.js";import{C as i}from"./CartesianGrid-BN1BW5YM.js";import{R as h}from"./arrayEqualityCheck-54E-EMHV.js";import{C as y}from"./ComposedChart-vR6M8Csb.js";import{R as f}from"./RechartsHookInspector-B0E9dfMt.js";import{p as b}from"./Page-Cj8EiXz7.js";import{X as v}from"./XAxis-R3SRHTpu.js";import{Y as w}from"./YAxis-COwWoIRq.js";import"./preload-helper-Dp1pzeXC.js";import"./CartesianAxis-CRTXwVx1.js";import"./clsx-B-dksMZM.js";import"./Layer-1B0B10df.js";import"./resolveDefaultProps-CfzAmxrO.js";import"./Text-Bj9a0rsl.js";import"./DOMUtils-CfR-oYDo.js";import"./Label-CqAF8SIT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cm42983z.js";import"./zIndexSlice-Dzpaa8RG.js";import"./immer-1Y6b4ABg.js";import"./types-BtUrEkv_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DaQzOTaA.js";import"./axisSelectors-BbIpa25b.js";import"./d3-scale-BQcoNVts.js";import"./RechartsWrapper-Ds6-czPk.js";import"./index-C4aFfAFk.js";import"./hooks-DBaONgSL.js";import"./CartesianChart-Cib6BDKJ.js";import"./chartDataContext-C-ltUYxq.js";import"./CategoricalChart-Ax6WUToq.js";import"./index-Cmlct8zH.js";import"./ChartSizeDimensions-DqRU3Tup.js";import"./OffsetShower-Orj9RHn3.js";import"./PlotAreaShower-BaW8-cBL.js";const o={fill:{description:"The background color used to fill the space between grid lines",control:{type:"color"},table:{type:{summary:"string"},category:"Style",defaultValue:{summary:"none"}},defaultValue:"none"},fillOpacity:{description:"The opacity of the background used to fill the space between grid lines",table:{type:{summary:"number | string"},category:"General"}},height:{description:"The height of grid. If undefined, covers the full height of the chart plot area.",table:{type:{summary:"number | string"},category:"General"}},horizontal:{description:"If set false, no horizontal grid lines will be drawn.",table:{type:{summary:"(union of 5 variants)"},category:"General",defaultValue:{summary:"true"}},defaultValue:!0},horizontalCoordinatesGenerator:{description:"A function that generates the y-coordinates of all horizontal lines.",table:{type:{summary:"HorizontalCoordinatesGenerator"},category:"General"}},horizontalFill:{description:`Defines background color of stripes.

The values from this array will be passed in as the \`fill\` property in a \`rect\` SVG element.
For possible values see: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill#rect

In case there are more stripes than colors, the colors will start from beginning.
So for example: horizontalFill['yellow', 'black'] produces a pattern of yellow|black|yellow|black

If this is undefined, or an empty array, then there is no background fill.
Note: Grid lines will be rendered above these background stripes.`,table:{type:{summary:"Array<string>"},category:"General",defaultValue:{summary:"[]"}},defaultValue:[]},horizontalPoints:{description:`Array of coordinates in pixels where to draw horizontal grid lines.
Has priority over syncWithTicks and horizontalValues.`,table:{type:{summary:"Array<number>"},category:"General",defaultValue:{summary:"[]"}},defaultValue:[]},horizontalValues:{description:`Array of values, where horizontal lines will be drawn. Numbers or strings, in dependence on axis type.
Has priority over syncWithTicks but not over horizontalPoints.`,table:{type:{summary:"Array<number> | Array<string>"},category:"General"}},strokeDasharray:{description:"The pattern of dashes and gaps used to paint the lines of the grid",table:{type:{summary:"number | string"},category:"Style"}},syncWithTicks:{description:`If true, only the lines that correspond to the axes ticks values will be drawn.
If false, extra lines could be added for each axis (at min and max coordinates), if there will not such ticks.
horizontalPoints, verticalPoints, horizontalValues, verticalValues have priority over syncWithTicks.`,control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},vertical:{description:"If set false, no vertical grid lines will be drawn.",table:{type:{summary:"(union of 5 variants)"},category:"General",defaultValue:{summary:"true"}},defaultValue:!0},verticalCoordinatesGenerator:{description:"A function that generates the x-coordinates of all vertical lines.",table:{type:{summary:"VerticalCoordinatesGenerator"},category:"General"}},verticalFill:{description:`Defines background color of stripes.

The values from this array will be passed in as the \`fill\` property in a \`rect\` SVG element.
For possible values see: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill#rect

In case there are more stripes than colors, the colors will start from beginning.
So for example: verticalFill['yellow', 'black'] produces a pattern of yellow|black|yellow|black

If this is undefined, or an empty array, then there is no background fill.
Note: Grid lines will be rendered above these background stripes.`,table:{type:{summary:"Array<string>"},category:"General",defaultValue:{summary:"[]"}},defaultValue:[]},verticalPoints:{description:`Array of coordinates in pixels where to draw vertical grid lines.
Has priority over syncWithTicks and verticalValues.`,table:{type:{summary:"Array<number>"},category:"General",defaultValue:{summary:"[]"}},defaultValue:[]},verticalValues:{description:`Array of values, where vertical lines will be drawn. Numbers or strings, in dependence on axis type.
Has priority over syncWithTicks but not over verticalPoints.`,table:{type:{summary:"Array<number> | Array<string>"},category:"General"}},width:{description:"The width of grid. If undefined, covers the full width of the chart plot area.",table:{type:{summary:"number | string"},category:"General"}},x:{description:`The x-coordinate of grid.
If left undefined, it will be computed from the chart's offset and margins.`,table:{type:{summary:"number | string"},category:"General"}},xAxisId:{description:"The id of XAxis which is corresponding to the data. Required when there are multiple XAxes.",table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},y:{description:`The y-coordinate of grid.
If left undefined, it will be computed from the chart's offset and margins.`,table:{type:{summary:"number | string"},category:"General"}},yAxisId:{description:"The id of YAxis which is corresponding to the data. Required when there are multiple YAxes.",table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"-100"}},defaultValue:-100}},ae={component:i,argTypes:o,args:{horizontal:!0,vertical:!0}},t={render:r=>{const[g,s]=[500,500];return e.createElement(h,{width:"100%",height:s},e.createElement(y,{width:g,height:s},e.createElement(i,{...r}),e.createElement(f,null)))},args:{...u(o),y:0,x:0,width:500,height:500,fillOpacity:.4,horizontalPoints:[10,20,30,100,400],verticalPoints:[100,200,300,400],verticalFill:["red","#eee"],horizontalFill:["#eee","yellow"],strokeDasharray:"10 10"}},a={render:r=>e.createElement(h,{width:"100%",height:500},e.createElement(y,{width:500,height:500,data:b},e.createElement(v,{dataKey:"name"}),e.createElement(w,{dataKey:"pv"}),r.displayGridA&&e.createElement(i,{verticalFill:["#aaeeee","#eeeeaa"],stroke:"trasparent"}),r.displayGridB&&e.createElement(i,{stroke:"silver",strokeDasharray:"3 3",strokeWidth:3}),e.createElement(f,null))),args:{...u(o),displayGridA:!0,displayGridB:!0}};var n,l,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [surfaceWidth, surfaceHeight] = [500, 500];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight}>
          <CartesianGrid {...args} />
          <RechartsHookInspector />
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
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,m,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart width={500} height={500} data={pageData}>
          <XAxis dataKey="name" />
          <YAxis dataKey="pv" />
          {args.displayGridA && <CartesianGrid verticalFill={['#aaeeee', '#eeeeaa']} stroke="trasparent" />}
          {args.displayGridB && <CartesianGrid stroke="silver" strokeDasharray="3 3" strokeWidth={3} />}
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CartesianGridArgs),
    displayGridA: true,
    displayGridB: true
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ie=["API","MultipleGrids"];export{t as API,a as MultipleGrids,ie as __namedExportsOrder,ae as default};
