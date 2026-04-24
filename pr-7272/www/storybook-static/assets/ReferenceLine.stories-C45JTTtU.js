import{e}from"./iframe-BB47BP_R.js";import{g as l}from"./utils-ePvtT4un.js";import{R as i}from"./ReferenceLine-BPI3iS9H.js";import{R as m}from"./arrayEqualityCheck-DsmpO4hY.js";import{C as p}from"./ComposedChart-6bKTqoqC.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as u}from"./CartesianGrid-DwH09EHg.js";import{X as c}from"./XAxis-DQxW9k0r.js";import{Y as h}from"./YAxis-BYM4hMQ-.js";import{L as y}from"./Line-bLTmUZ5A.js";import{R as f}from"./RechartsHookInspector-Bw_zVSe3.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Layer-CRK7-uYr.js";import"./resolveDefaultProps-ChHsTaSR.js";import"./Label-C6JmnJH6.js";import"./Text-BaUe6hyp.js";import"./DOMUtils-nrc65p4C.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DNdZ_4fl.js";import"./zIndexSlice-BL1P8vjr.js";import"./immer-BPWc-cD_.js";import"./CartesianAxis-BRoz3wmQ.js";import"./types-DuFBytmr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CRYHzUP0.js";import"./RechartsWrapper-Dv8Lspfl.js";import"./index-hrFcE4SI.js";import"./hooks-0PGFTC0L.js";import"./axisSelectors-DwtBuocC.js";import"./d3-scale-DgdfyRiI.js";import"./CategoricalChart-nIJc5rAa.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-iArLd4YM.js";import"./chartDataContext-CX2kZkbq.js";import"./ReactUtils-EZ_AUGtU.js";import"./ActivePoints-uz5dhsjB.js";import"./Dot-CtP3KVPS.js";import"./RegisterGraphicalItemId-BStK0gR5.js";import"./ErrorBarContext-zf4eWKzk.js";import"./GraphicalItemClipPath-4XrHnf0Z.js";import"./SetGraphicalItem-BjF_TCCf.js";import"./useAnimationId-CZw8U2vZ.js";import"./getRadiusAndStrokeWidthFromDot-Dy6dZFhg.js";import"./ActiveShapeUtils-C06yHpcU.js";import"./isPlainObject-DJ4Ss-Vn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DCPvPDZL.js";import"./Trapezoid-Bue5bot_.js";import"./Sector-pI1eovgo.js";import"./Symbols-BE9_Ndbl.js";import"./symbol-CvKjPx-j.js";import"./step-CIqLegi0.js";import"./Curve-DocFTLoT.js";import"./index-C_6qwcxC.js";import"./ChartSizeDimensions-BMFZIPSb.js";import"./OffsetShower-CPW2UGpW.js";import"./PlotAreaShower-CjbeU8IP.js";const n={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom label element\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
