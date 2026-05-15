import{e}from"./iframe-DLKusaH2.js";import{g as l}from"./utils-ePvtT4un.js";import{R as i}from"./ReferenceLine-Dg_iS5Tp.js";import{R as m}from"./arrayEqualityCheck-OSXbFffx.js";import{C as p}from"./ComposedChart-D7-6Q1jZ.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as u}from"./CartesianGrid-Dh5MSo5g.js";import{X as c}from"./XAxis-BUV3YVxT.js";import{Y as h}from"./YAxis-BL7gWkiR.js";import{L as y}from"./Line-CF64_WTf.js";import{R as f}from"./RechartsHookInspector-twmg_15g.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Layer-CRYoZDBs.js";import"./resolveDefaultProps-CDQxtKgJ.js";import"./Label-BolsaftX.js";import"./Text-BOg1Bx7_.js";import"./DOMUtils-BHhU0voP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BNchc-lc.js";import"./zIndexSlice-DwCBvGVu.js";import"./immer-DopQgQur.js";import"./CartesianAxis-CLffz-s6.js";import"./types-9gVu3p3S.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CLJGAcv7.js";import"./RechartsWrapper-CJ9yMdSa.js";import"./index-DY64JRGf.js";import"./hooks-BDR2OTLs.js";import"./axisSelectors-DmwBGoOF.js";import"./d3-scale-D-d_ip1o.js";import"./CategoricalChart-CYNzwdSP.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-BJXvgRi8.js";import"./chartDataContext-DetDLZ8r.js";import"./ReactUtils-Bgb6ualA.js";import"./ActivePoints-BSIYqxRm.js";import"./Dot-BvZiX7rE.js";import"./RegisterGraphicalItemId-Co2yDXiB.js";import"./ErrorBarContext-DZOjNR9y.js";import"./GraphicalItemClipPath-Ac_55wTe.js";import"./SetGraphicalItem-f0Wubofs.js";import"./useAnimationId-BcRo8icb.js";import"./getRadiusAndStrokeWidthFromDot-uyaCEA_k.js";import"./ActiveShapeUtils-CwYLB_hF.js";import"./isPlainObject-DqS4h4Cl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ZVl3FJ9j.js";import"./Trapezoid-IVY3pKxT.js";import"./Sector-BwEeuI-t.js";import"./Symbols-D_ER3HkZ.js";import"./symbol-CW5_VIgV.js";import"./step-jIStQ4yh.js";import"./Curve-DxlUhp1s.js";import"./index-D68W2HqG.js";import"./ChartSizeDimensions-t4E4BRLz.js";import"./OffsetShower-KjsHbNXS.js";import"./PlotAreaShower-D_C1tqvZ.js";const n={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom label element\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
