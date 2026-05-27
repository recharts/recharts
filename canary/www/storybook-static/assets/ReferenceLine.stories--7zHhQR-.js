import{e}from"./iframe-DJXOgax2.js";import{g as l}from"./utils-ePvtT4un.js";import{R as i}from"./ReferenceLine-BY76B1HV.js";import{g as m}from"./arrayEqualityCheck-k7PS2xak.js";import{C as p}from"./ComposedChart-CQeCmrJf.js";import{p as d}from"./Page-DPte-9pC.js";import{C as u}from"./CartesianGrid-BAYEYSZr.js";import{X as c}from"./XAxis-9kxG52aU.js";import{Y as h}from"./YAxis-DRv5Ieqa.js";import{L as y}from"./Line-DkveqOGp.js";import{R as f}from"./RechartsHookInspector-s82vtdQF.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Layer-PAWXt2PX.js";import"./resolveDefaultProps-DPbWDBA5.js";import"./Label-C8y2_6Vy.js";import"./Text-npnYAvG4.js";import"./DOMUtils-i2w-QAqd.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DVdyi4xb.js";import"./zIndexSlice-B--1gOPM.js";import"./immer-2a_xTrdV.js";import"./CartesianAxis-BuS9D4Ek.js";import"./types-CX2SK57G.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Bl5jCaCZ.js";import"./RechartsWrapper-BaSgqIB_.js";import"./index-BNAJMwXV.js";import"./hooks-CZ0TOrWM.js";import"./axisSelectors-Dr5KL0ZI.js";import"./d3-scale-DuWCsZHZ.js";import"./CategoricalChart-Bx8_lMCZ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-BFo4vKxS.js";import"./chartDataContext-kJxPcL-i.js";import"./Curve-BPyFb2hT.js";import"./step-Bwlnh61x.js";import"./path-DyVhHtw_.js";import"./ReactUtils-DyBcDzzn.js";import"./ActivePoints-kdx1y4B7.js";import"./Dot-BmjogDci.js";import"./RegisterGraphicalItemId-BxDB977O.js";import"./ErrorBarContext-Cq-5bVpD.js";import"./GraphicalItemClipPath-BH4qa2aX.js";import"./SetGraphicalItem-W-67q1_i.js";import"./useAnimationId-B1Sa6L7Z.js";import"./getRadiusAndStrokeWidthFromDot-CioYRZbs.js";import"./ActiveShapeUtils-TINQfrs9.js";import"./index-Bnctlgv-.js";import"./ChartSizeDimensions-Dwe9HRTS.js";import"./OffsetShower-BjMyZ4ga.js";import"./PlotAreaShower-6s_jSFmp.js";const n={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom label element\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
(e.g., a band scale). This determines where within the band
the line is drawn.`,control:{type:"select"},options:["end","middle","start"],table:{type:{summary:'"end" | "middle" | "start"'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},segment:{description:"Tuple of coordinates. If defined, renders a diagonal line segment.",table:{type:{summary:"[{ x?: XValueType | undefined; y?: YValueType | undefined; }, { x?: XValueType | undefined; y?: YValueType | undefined; }]"},category:"General"}},shape:{table:{type:{summary:"Function | ReactNode"},category:"General"}},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style",defaultValue:{summary:"1"}},defaultValue:1},x:{description:`If defined, renders a vertical line on this position.

This value is using your chart's domain, so you will provide a data value instead of a pixel value.
ReferenceLine will internally calculate the correct pixel position.`,table:{type:{summary:"number | string"},category:"General"}},xAxisId:{description:`The id of x-axis which is corresponding to the data.
Required when there are multiple XAxes.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},y:{description:`If defined, renders a horizontal line on this position.

This value is using your chart's domain, so you will provide a data value instead of a pixel value.
ReferenceLine will internally calculate the correct pixel position.`,table:{type:{summary:"number | string"},category:"General"}},yAxisId:{description:`The id of y-axis which is corresponding to the data.
Required when there are multiple YAxes.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},ye={argTypes:n,component:i},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(i,{...s}),e.createElement(y,{dataKey:"uv"}),e.createElement(f,null))),args:{...l(n),y:1520,stroke:"blue",strokeWidth:2,strokeDasharray:"4 1",label:"My example label"}};var r,a,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const fe=["API"];export{t as API,fe as __namedExportsOrder,ye as default};
