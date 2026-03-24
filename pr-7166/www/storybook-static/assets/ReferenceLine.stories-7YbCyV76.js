import{e}from"./iframe-BA0Mk_bm.js";import{g as l}from"./utils-ePvtT4un.js";import{R as i}from"./ReferenceLine-CiQQ6YY0.js";import{R as m}from"./arrayEqualityCheck-BXIKBtlL.js";import{C as p}from"./ComposedChart-DMgKK5eu.js";import{C as d}from"./CartesianGrid-BFzdfSIZ.js";import{X as u}from"./XAxis-BJCrLdXA.js";import{Y as c}from"./YAxis-BeQUgSYX.js";import{L as h}from"./Line-339lVEiU.js";import{R as y}from"./RechartsHookInspector-07Cffhze.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Layer-UodA2S_o.js";import"./resolveDefaultProps-B36LrC6B.js";import"./Label-BRfB6AgB.js";import"./Text-CQNk2n0w.js";import"./DOMUtils-dYc2sDor.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-7XpdSr6g.js";import"./zIndexSlice-IJtIz665.js";import"./immer-CuXxKPwW.js";import"./CartesianAxis-BT4UVk71.js";import"./types-bktBoSaY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-k5mZM9in.js";import"./RechartsWrapper-BFZ1uel6.js";import"./index-DOFwstvs.js";import"./hooks-TaUW4PzE.js";import"./axisSelectors-BPwVyIe5.js";import"./d3-scale-C-j_j56q.js";import"./CategoricalChart-Dl2FpaUQ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-ojIzik51.js";import"./chartDataContext-BS06iSAA.js";import"./ReactUtils-DsC8Xpl6.js";import"./ActivePoints-Dhry5tye.js";import"./Dot-D5MxPf2e.js";import"./RegisterGraphicalItemId-B9TRMD4g.js";import"./ErrorBarContext-qCzTcwLw.js";import"./GraphicalItemClipPath-D9S218iW.js";import"./SetGraphicalItem-pHlPp9Gw.js";import"./useAnimationId-Del0ERlM.js";import"./getRadiusAndStrokeWidthFromDot-byqxM05I.js";import"./ActiveShapeUtils-jRacbU19.js";import"./isPlainObject-DqKcpOXv.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CRPXSI0S.js";import"./Trapezoid-CwhddTPc.js";import"./Sector-BUd4hzuV.js";import"./Symbols-BlFKSVPh.js";import"./symbol-B4YfvXWL.js";import"./step-BTgjudL3.js";import"./Curve-DYn67gsG.js";import"./index-BMjkAMKv.js";import"./ChartSizeDimensions-XLtPrUd2.js";import"./OffsetShower-DE5bCLFy.js";import"./PlotAreaShower-noNIcByU.js";const n={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom label element\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
