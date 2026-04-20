import{e}from"./iframe-DV9Ev_ie.js";import{g as l}from"./utils-ePvtT4un.js";import{R as i}from"./ReferenceLine-DGlnwvj9.js";import{R as m}from"./arrayEqualityCheck-DZA7w_Bp.js";import{C as p}from"./ComposedChart-BgY2G0Pe.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as u}from"./CartesianGrid-BvxCy_xL.js";import{X as c}from"./XAxis-D2587yBO.js";import{Y as h}from"./YAxis-Bm2CKIBG.js";import{L as y}from"./Line-CHEmmSQ1.js";import{R as f}from"./RechartsHookInspector-lqIBTgi7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Layer-BqOaf8xV.js";import"./resolveDefaultProps-Df82JNH7.js";import"./Label--ztUVZ3i.js";import"./Text--RFKRppg.js";import"./DOMUtils-CiIcfYdd.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C8euaCum.js";import"./zIndexSlice-BRPsmEL1.js";import"./immer-BixWiXhD.js";import"./CartesianAxis-DWCZU6Tq.js";import"./types-8qlrq-tq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DCke5O88.js";import"./RechartsWrapper-DhKJ-pN_.js";import"./index-Bky92Y6v.js";import"./hooks-DHdaviyJ.js";import"./axisSelectors-B_EYpjD9.js";import"./d3-scale-B-Q90L68.js";import"./CategoricalChart-DJtN3jt_.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-Cbu_0e1L.js";import"./chartDataContext-DSMYXZ4e.js";import"./ReactUtils-DkzvKT6G.js";import"./ActivePoints-BBkQSQpw.js";import"./Dot-CeMR27_E.js";import"./RegisterGraphicalItemId-fV7oEbJx.js";import"./ErrorBarContext-KDIj2oXC.js";import"./GraphicalItemClipPath-DvLqBiqP.js";import"./SetGraphicalItem-DIvDoWjl.js";import"./useAnimationId-CtSlzYdH.js";import"./getRadiusAndStrokeWidthFromDot-CJZz_FDP.js";import"./ActiveShapeUtils-Duc_m_vE.js";import"./isPlainObject-B3OPGy8K.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-FILpJ6On.js";import"./Trapezoid-sNlfsjwh.js";import"./Sector-C5qUq4cG.js";import"./Symbols-H35j_AL3.js";import"./symbol-BxNtN3Tt.js";import"./step-Ct5f--oN.js";import"./Curve-BVz3ddlm.js";import"./index-ECRT-WFn.js";import"./ChartSizeDimensions-CdNN_o6b.js";import"./OffsetShower-BssOKB-O.js";import"./PlotAreaShower-BZvFi-F4.js";const n={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom label element\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
