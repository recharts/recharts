import{e}from"./iframe-Ct0PK1iZ.js";import{g as l}from"./utils-ePvtT4un.js";import{R as i}from"./ReferenceLine-BFqg3qSn.js";import{R as m}from"./arrayEqualityCheck-cSrg192z.js";import{C as p}from"./ComposedChart-Dkf6chnc.js";import{C as d}from"./CartesianGrid-CZTL1fO6.js";import{X as u}from"./XAxis-ZfaBuFta.js";import{Y as c}from"./YAxis-CMvF26TK.js";import{L as h}from"./Line-4WhNdwJc.js";import{R as y}from"./RechartsHookInspector-Ct0UJLxA.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Layer-BFqbkghr.js";import"./resolveDefaultProps-CkDZ6rk0.js";import"./Label-kZgIL_LG.js";import"./Text-D7gtJPhg.js";import"./DOMUtils-DZtY6UXL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CPK1fMG2.js";import"./zIndexSlice-C0pIss81.js";import"./immer-C_0hot5p.js";import"./CartesianAxis-DpFipx6Q.js";import"./types-B_QiL_OE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Xed-5Uzt.js";import"./RechartsWrapper-JBNrYn90.js";import"./index-e5TdOq0j.js";import"./hooks-B5ECIQG0.js";import"./axisSelectors-DfI31pZt.js";import"./d3-scale-BIuiM5G6.js";import"./CategoricalChart-DBM3lb6I.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-F11oHMFT.js";import"./chartDataContext-Be_hCN-X.js";import"./ReactUtils-C9XhBs7w.js";import"./ActivePoints-Bv-BLGDJ.js";import"./Dot-B3FhOR5M.js";import"./RegisterGraphicalItemId-DG67JJW9.js";import"./ErrorBarContext-C_IVi_zE.js";import"./GraphicalItemClipPath-DIAe0jt7.js";import"./SetGraphicalItem-BiB1viSJ.js";import"./useAnimationId-DhoQEmEH.js";import"./getRadiusAndStrokeWidthFromDot-BJC5mRjp.js";import"./ActiveShapeUtils-UwLXsB-I.js";import"./isPlainObject-B12Z6ZLF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bk1l59Or.js";import"./Trapezoid-BzWb9o7I.js";import"./Sector-6TbuA5HM.js";import"./Symbols-Cz5Eatoq.js";import"./symbol-ORh8C_38.js";import"./step-CfNjb2F4.js";import"./Curve-BtTKqNeq.js";import"./index-DoqQxHuh.js";import"./ChartSizeDimensions-Blj7cX2O.js";import"./OffsetShower-kOurDMwT.js";import"./PlotAreaShower-CxG6J2wp.js";const n={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom label element\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
