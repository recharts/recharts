import{R as e}from"./iframe-D3n-qa3v.js";import{g as u}from"./utils-ePvtT4un.js";import{C as i}from"./CartesianGrid-DdfvKh4X.js";import{R as h}from"./zIndexSlice-URMJGlQl.js";import{C as y}from"./ComposedChart-IfzjzOLd.js";import{p as g}from"./Page-Cj8EiXz7.js";import{X as b}from"./XAxis-BvFg4s2o.js";import{Y as v}from"./YAxis-B-l06g0y.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cvq-kyHH.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-Cx3S-3lL.js";import"./Layer-oKfk3hYA.js";import"./Text-70ucIKSF.js";import"./DOMUtils-CcpQZ2_k.js";import"./isWellBehavedNumber-CrERG1s-.js";import"./useId-B_N_AB1U.js";import"./useBackwardsCompatibleTheme-BAQfNZQf.js";import"./Label-CpaVgYY8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-hb7j23f9.js";import"./index-C_ri2ApK.js";import"./index-Dd3rxVYb.js";import"./types-DvyNYfPW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CPTSo4fz.js";import"./throttle-DN7vm2uB.js";import"./index-C_Wrm-XW.js";import"./index-CZCnJbjp.js";import"./isBuffer-BG75eWKN.js";import"./axisSelectors-DaB7yAHm.js";import"./d3-scale-CaZKGVIZ.js";import"./RechartsWrapper-DDHIckB2.js";import"./index-C1lTKvWo.js";import"./CartesianChart-DUso81Db.js";import"./chartDataContext-CZa0hGfr.js";import"./CategoricalChart-CGaW84Rd.js";const o={fill:{description:"The background color used to fill the space between grid lines",control:{type:"color"},table:{type:{summary:"string"},category:"Style"}},fillOpacity:{description:"The opacity of the background used to fill the space between grid lines",table:{type:{summary:"number | string"},category:"General"}},height:{description:"The height of grid. If undefined, covers the full height of the chart plot area.",table:{type:{summary:"number | string"},category:"General"}},horizontal:{description:"If set false, no horizontal grid lines will be drawn.",table:{type:{summary:"(union of 5 variants)"},category:"General",defaultValue:{summary:"true"}},defaultValue:!0},horizontalCoordinatesGenerator:{description:"A function that generates the y-coordinates of all horizontal lines.",table:{type:{summary:"HorizontalCoordinatesGenerator"},category:"General"}},horizontalFill:{description:`Defines background color of stripes.

The values from this array will be passed in as the \`fill\` property in a \`rect\` SVG element.
For possible values see: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill#rect

In case there are more stripes than colors, the colors will start from beginning.
So for example: horizontalFill['yellow', 'black'] produces a pattern of yellow|black|yellow|black

If this is undefined, or an empty array, then there is no background fill.
Note: Grid lines will be rendered above these background stripes.`,table:{type:{summary:"Array<string>"},category:"General",defaultValue:{summary:"[]"}},defaultValue:[]},horizontalPoints:{description:`Array of coordinates in pixels where to draw horizontal grid lines.
Has priority over syncWithTicks and horizontalValues.`,table:{type:{summary:"Array<number>"},category:"General",defaultValue:{summary:"[]"}},defaultValue:[]},horizontalValues:{description:`Array of values, where horizontal lines will be drawn. Numbers or strings, in dependence on axis type.
Has priority over syncWithTicks but not over horizontalPoints.`,table:{type:{summary:"Array<number> | Array<string>"},category:"General"}},strokeDasharray:{description:"The pattern of dashes and gaps used to paint the lines of the grid",table:{type:{summary:"Array<number> | number | string"},category:"Style"}},syncWithTicks:{description:`If true, only the lines that correspond to the axes ticks values will be drawn.
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
If left undefined, it will be computed from the chart's offset and margins.`,table:{type:{summary:"number | string"},category:"General"}},yAxisId:{description:"The id of YAxis which is corresponding to the data. Required when there are multiple YAxes.",table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"-100"}},defaultValue:-100}},ae={component:i,argTypes:o,args:{horizontal:!0,vertical:!0}},t={render:r=>{const[f,s]=[500,500];return e.createElement(h,{width:"100%",height:s},e.createElement(y,{width:f,height:s},e.createElement(i,{...r})))},args:{...u(o),y:0,x:0,width:500,height:500,fillOpacity:.4,horizontalPoints:[10,20,30,100,400],verticalPoints:[100,200,300,400],verticalFill:["red","#eee"],horizontalFill:["#eee","yellow"],strokeDasharray:"10 10"}},a={render:r=>e.createElement(h,{width:"100%",height:500},e.createElement(y,{width:500,height:500,data:g},e.createElement(b,{dataKey:"name"}),e.createElement(v,{dataKey:"pv"}),r.displayGridA&&e.createElement(i,{verticalFill:["#aaeeee","#eeeeaa"],stroke:"trasparent"}),r.displayGridB&&e.createElement(i,{stroke:"silver",strokeDasharray:"3 3",strokeWidth:3}))),args:{...u(o),displayGridA:!0,displayGridB:!0}};var n,l,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,p,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const ie=["API","MultipleGrids"];export{t as API,a as MultipleGrids,ie as __namedExportsOrder,ae as default};
