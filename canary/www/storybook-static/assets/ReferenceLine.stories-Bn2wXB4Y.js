import{e}from"./iframe-DyjRblV4.js";import{g as l}from"./utils-ePvtT4un.js";import{R as i}from"./ReferenceLine-D6r20G77.js";import{R as m}from"./arrayEqualityCheck-BCBk4eJo.js";import{C as p}from"./ComposedChart-ageMn8L8.js";import{C as d}from"./CartesianGrid-RGlkHQlO.js";import{X as u}from"./XAxis-3tj5XX5g.js";import{Y as c}from"./YAxis-CV1izHWi.js";import{L as h}from"./Line-mAT0SQrf.js";import{R as y}from"./RechartsHookInspector-CLSiVssf.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Layer-D5cQtuvM.js";import"./resolveDefaultProps-4AlTuZQw.js";import"./Label-DnTlQwVU.js";import"./Text-BbnvQ86I.js";import"./DOMUtils-Byght_Oi.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B-XtZ0gD.js";import"./zIndexSlice-D853Na5_.js";import"./immer-DeoYJGCn.js";import"./CartesianAxis-D4rKauGt.js";import"./types-ffHtiOpO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-bDrbmMTk.js";import"./RechartsWrapper-CFEsmCfM.js";import"./index-OiAZIktC.js";import"./hooks-CiwwtQbj.js";import"./axisSelectors-C6wd-jHd.js";import"./d3-scale-BncasbBD.js";import"./CategoricalChart-DetmSIYy.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-DR7Wyq8A.js";import"./chartDataContext-CG_sj1-6.js";import"./ReactUtils-Q3LPRUl3.js";import"./ActivePoints-GgK6dtPd.js";import"./Dot-DOEX6Lb3.js";import"./RegisterGraphicalItemId-DvhT43Lq.js";import"./ErrorBarContext-DYFWZfKJ.js";import"./GraphicalItemClipPath-DHsoSQ6I.js";import"./SetGraphicalItem-DjBG-u5C.js";import"./useAnimationId-DZzgYgKg.js";import"./getRadiusAndStrokeWidthFromDot-B3zNGCYt.js";import"./ActiveShapeUtils-DLWy5yPh.js";import"./isPlainObject-B8lTeUZ1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-4UGNDp.js";import"./Trapezoid-BpRYxRsm.js";import"./Sector-CxnAykfe.js";import"./Symbols-BQK3uzvy.js";import"./symbol-5KBLnT74.js";import"./step-B9ndRdpI.js";import"./Curve-Cf07iBBR.js";import"./index-B9JdmiBC.js";import"./ChartSizeDimensions-BWUwefGk.js";import"./OffsetShower-DxfCy4YL.js";import"./PlotAreaShower-DD9Xt5FU.js";const n={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom label element\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
