import{e}from"./iframe-DDDnlj5f.js";import{g as l}from"./utils-ePvtT4un.js";import{R as i}from"./ReferenceLine-DQEU3zue.js";import{R as m}from"./arrayEqualityCheck-CJpSjh_E.js";import{C as p}from"./ComposedChart-Ce7krGfK.js";import{C as d}from"./CartesianGrid-qf6C1vx8.js";import{X as u}from"./XAxis-CWnYqww0.js";import{Y as c}from"./YAxis-BsKc4EC-.js";import{L as h}from"./Line-X_BIU_ye.js";import{R as y}from"./RechartsHookInspector-BhwNj7SB.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Layer-BtE1IS0j.js";import"./resolveDefaultProps-DYeysdtP.js";import"./Label-VNLDkr3Z.js";import"./Text-C-kvncvF.js";import"./DOMUtils-DDovTr1I.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DkrOw8iH.js";import"./zIndexSlice-DoI0yJNb.js";import"./immer-aj6qr0b6.js";import"./CartesianAxis-CMW5fm9o.js";import"./types-BPe_V6d-.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-k6HnSAnM.js";import"./RechartsWrapper-CrpiHev6.js";import"./index-CMSlVVpG.js";import"./hooks-Dv-UaG4_.js";import"./axisSelectors-CDHzLZeD.js";import"./d3-scale-pmFb8TKN.js";import"./CategoricalChart-h2VJliXU.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-D5sDgHmv.js";import"./chartDataContext-ib7DGGK_.js";import"./ReactUtils-CjPSIKmy.js";import"./ActivePoints-IhqFWUPQ.js";import"./Dot-BEStURxK.js";import"./RegisterGraphicalItemId-D4tYqbmw.js";import"./ErrorBarContext-E3Vm-e-r.js";import"./GraphicalItemClipPath-CuDHFuAP.js";import"./SetGraphicalItem-CHHuJTp3.js";import"./useAnimationId-Dkj4_Bqz.js";import"./getRadiusAndStrokeWidthFromDot-BWHQ3Uig.js";import"./ActiveShapeUtils-BfdtDxL7.js";import"./isPlainObject-CJH28dtQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cb4jcIHL.js";import"./Trapezoid-DeNT7-hb.js";import"./Sector-BQbNJdDe.js";import"./Symbols-9n4DXsSp.js";import"./symbol-B5WodTQ6.js";import"./step-BKhUoFo2.js";import"./Curve-SLwfiusm.js";import"./index-CTBoJ3Fl.js";import"./ChartSizeDimensions-CGFO1lez.js";import"./OffsetShower-LgcvfXe3.js";import"./PlotAreaShower-DDwsWzkY.js";const n={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom label element\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},ve={argTypes:n,component:i},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(u,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(i,{...s}),e.createElement(h,{dataKey:"uv"}),e.createElement(y,null))),args:{...l(n),y:1520,stroke:"blue",strokeWidth:2,strokeDasharray:"4 1",label:"My example label"}};var r,a,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
