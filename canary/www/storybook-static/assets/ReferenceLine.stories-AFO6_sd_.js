import{e}from"./iframe-DpWgHt6w.js";import{g as l}from"./utils-ePvtT4un.js";import{R as i}from"./ReferenceLine-Dbc-PJMs.js";import{R as m}from"./arrayEqualityCheck-DwmAcYIn.js";import{C as p}from"./ComposedChart-D-F8RHVS.js";import{C as d}from"./CartesianGrid-DG4l4Bs6.js";import{X as u}from"./XAxis-D6yPajmq.js";import{Y as c}from"./YAxis-YoDPLsa3.js";import{L as h}from"./Line-CqInfh-U.js";import{R as y}from"./RechartsHookInspector-6ffAoSqV.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Layer-CgpQp7eP.js";import"./resolveDefaultProps-COHSVhtV.js";import"./Label-D5phAYj6.js";import"./Text-BFrtQgrO.js";import"./DOMUtils-B14zrq1j.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CK7DJrWn.js";import"./zIndexSlice-QDaeSxhx.js";import"./immer-DDDJMxmJ.js";import"./CartesianAxis-Boaam3Pv.js";import"./types-DZ2OBnNV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DdqXW_Ob.js";import"./RechartsWrapper-0YIbfluk.js";import"./index-CN4qQn03.js";import"./hooks-BAFDLItO.js";import"./axisSelectors-xFLTDAtC.js";import"./d3-scale-cdM3iwUh.js";import"./CategoricalChart-Cws7_zW3.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-Cb4Oxfp_.js";import"./chartDataContext-Dv1BkF7u.js";import"./ReactUtils-DCSGTX2b.js";import"./ActivePoints-XzMc0Z9j.js";import"./Dot-DSk185c8.js";import"./RegisterGraphicalItemId-Bt0sIJ7x.js";import"./ErrorBarContext-DzKYs5DP.js";import"./GraphicalItemClipPath-DC27cx5Q.js";import"./SetGraphicalItem-BnrGj-ZR.js";import"./useAnimationId-DyHfJJP5.js";import"./getRadiusAndStrokeWidthFromDot-BPyIAaab.js";import"./ActiveShapeUtils-LLoi1e2l.js";import"./isPlainObject-B9PQnOFQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BwaSbVPa.js";import"./Trapezoid-BUbhVMuQ.js";import"./Sector-c9hexcBL.js";import"./Symbols-DT0KAb22.js";import"./symbol-Btcnnf07.js";import"./step-InUwQjei.js";import"./Curve-BqRAMsJi.js";import"./index-DtY3ArMC.js";import"./ChartSizeDimensions-B93BH9rD.js";import"./OffsetShower-BhzT3OUi.js";import"./PlotAreaShower-BHWXXqUJ.js";const n={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom label element\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
