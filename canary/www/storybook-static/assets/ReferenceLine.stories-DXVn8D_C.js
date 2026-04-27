import{e}from"./iframe-DPQQART2.js";import{g as l}from"./utils-ePvtT4un.js";import{R as i}from"./ReferenceLine-BaBlreQI.js";import{R as m}from"./arrayEqualityCheck-BDVhVf-C.js";import{C as p}from"./ComposedChart-n9wi2Vp2.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as u}from"./CartesianGrid-XP1WOD4G.js";import{X as c}from"./XAxis-Dg1K6_fH.js";import{Y as h}from"./YAxis-BOA_nsSD.js";import{L as y}from"./Line-DOKzQF_j.js";import{R as f}from"./RechartsHookInspector-BY990p5J.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Layer-BYcIhrnl.js";import"./resolveDefaultProps-Cd3pKSWq.js";import"./Label-C8kv474W.js";import"./Text-CViQHWzm.js";import"./DOMUtils-6osebbE8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cp0zJDZz.js";import"./zIndexSlice-BUoZyNAT.js";import"./immer-dq55Rz5k.js";import"./CartesianAxis-CKdFXiLA.js";import"./types-DnHa4Bsr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C1JV7OFv.js";import"./RechartsWrapper-DC_xWfRE.js";import"./index-nGRWTrxk.js";import"./hooks-DXcftTpV.js";import"./axisSelectors-B504aTlT.js";import"./d3-scale-C2yFoO5R.js";import"./CategoricalChart-7Dzr-wy0.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-CLNhkIDU.js";import"./chartDataContext-0uWjrM7s.js";import"./ReactUtils-D4DJGTqa.js";import"./ActivePoints-CNiBL0AU.js";import"./Dot-CndRCnyF.js";import"./RegisterGraphicalItemId-DOISCJhn.js";import"./ErrorBarContext-CyeM8Knn.js";import"./GraphicalItemClipPath-CE5KwO2y.js";import"./SetGraphicalItem-CxDeYlaA.js";import"./useAnimationId-DxUodg7H.js";import"./getRadiusAndStrokeWidthFromDot-CI-CHUDp.js";import"./ActiveShapeUtils-DelvD5C5.js";import"./isPlainObject-Cbsg7i00.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D56HZ_ik.js";import"./Trapezoid-BQHGElUM.js";import"./Sector-QSKBV-oi.js";import"./Symbols-DyAchY7x.js";import"./symbol-Dha6D-sP.js";import"./step-De3ZEy02.js";import"./Curve-D9PoEc7H.js";import"./index-OSeNAWG6.js";import"./ChartSizeDimensions-BOwpJgjF.js";import"./OffsetShower-DcT1D_xb.js";import"./PlotAreaShower-DM7QkzGT.js";const n={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom label element\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},ve={argTypes:n,component:i},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(i,{...s}),e.createElement(y,{dataKey:"uv"}),e.createElement(f,null))),args:{...l(n),y:1520,stroke:"blue",strokeWidth:2,strokeDasharray:"4 1",label:"My example label"}};var r,a,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const Re=["API"];export{t as API,Re as __namedExportsOrder,ve as default};
