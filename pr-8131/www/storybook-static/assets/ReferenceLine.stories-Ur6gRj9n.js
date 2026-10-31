import{R as e}from"./iframe-SkF1Z4RX.js";import{g as l}from"./utils-ePvtT4un.js";import{R as i}from"./ReferenceLine-8jZMvhOL.js";import{R as m}from"./zIndexSlice-Di849QVt.js";import{C as p}from"./ComposedChart-CQq3s6LL.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CRP8zG1W.js";import{X as u}from"./XAxis-D03_TvJt.js";import{Y as h}from"./YAxis-BRrjXnEX.js";import{L as y}from"./Line-BzhO0L4x.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Layer-CVy-0b4t.js";import"./resolveDefaultProps-Doom015c.js";import"./Label-Cq-EymG9.js";import"./Text-BJaHuQQc.js";import"./DOMUtils-CJyIN8K_.js";import"./ZIndexLayer-BVWEeopG.js";import"./index-B2PIGALe.js";import"./index-DtvbWEv2.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BotG4f4O.js";import"./throttle-DtLWJI8N.js";import"./CartesianAxis-C8zLGICr.js";import"./types-j8xWAYxX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-dhqIaxco.js";import"./index-BfWLl3V2.js";import"./index-DXUCR1Dc.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D7eCqZJw.js";import"./axisSelectors-BsfIJIuR.js";import"./d3-scale-CkXd-iRe.js";import"./index-CqjGOWVd.js";import"./fillDefinitions-DFub8wZ3.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-DrHmlDEh.js";import"./ZIndexPortal-Ccz9Ppdz.js";import"./CategoricalChart-CFpoaktB.js";import"./Curve-6N2VVfLG.js";import"./step-CspGBwNT.js";import"./path-DyVhHtw_.js";import"./LabelList-iUgi9C9_.js";import"./ActivePoints-NIeWtT_V.js";import"./Dot-CRvYYT1z.js";import"./activeStyles-f736jV_-.js";import"./useAnimationId-_Q1GlxqN.js";import"./dataEntryStyles-BsghJbw2.js";import"./Symbols-BYB3KgvY.js";import"./symbol-CUYo63-h.js";import"./ErrorBarContext-DFT45or-.js";import"./SetGraphicalItem-BQZxwmYP.js";import"./getRadiusAndStrokeWidthFromDot-C10IayrY.js";import"./ActiveShapeUtils-pmXZ3dMD.js";import"./useEffectiveDataKey-DnqAh09W.js";const o={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of a single Label component, such as `value` and `position`\n- `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.\n  HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
(e.g., a band scale). This determines where within the band
the line is drawn.`,control:{type:"select"},options:["end","middle","start"],table:{type:{summary:'"end" | "middle" | "start"'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},segment:{description:"Tuple of coordinates. If defined, renders a diagonal line segment.",table:{type:{summary:"[{ x?: XValueType | undefined; y?: YValueType | undefined; }, { x?: XValueType | undefined; y?: YValueType | undefined; }]"},category:"General"}},shape:{table:{type:{summary:"Function | ReactNode"},category:"General"}},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style"}},x:{description:`If defined, renders a vertical line on this position.

This value is using your chart's domain, so you will provide a data value instead of a pixel value.
ReferenceLine will internally calculate the correct pixel position.`,table:{type:{summary:"number | string"},category:"General"}},xAxisId:{description:`The id of x-axis which is corresponding to the data.
Required when there are multiple XAxes.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},y:{description:`If defined, renders a horizontal line on this position.

This value is using your chart's domain, so you will provide a data value instead of a pixel value.
ReferenceLine will internally calculate the correct pixel position.`,table:{type:{summary:"number | string"},category:"General"}},yAxisId:{description:`The id of y-axis which is corresponding to the data.
Required when there are multiple YAxes.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},ge={argTypes:o,component:i},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(u,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(i,{...s}),e.createElement(y,{dataKey:"uv"}))),args:{...l(o),y:1520,stroke:"blue",strokeWidth:2,strokeDasharray:"4 1",label:"My example label"}},be=["API"];var r,a,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <ReferenceLine {...args} />
          <Line dataKey="uv" />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ReferenceLineArgs),
    y: 1520,
    stroke: 'blue',
    strokeWidth: 2,
    strokeDasharray: '4 1',
    label: 'My example label'
  }
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{t as API,be as __namedExportsOrder,ge as default};
