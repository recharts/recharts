import{e}from"./iframe-DjYpiCK1.js";import{R as i}from"./arrayEqualityCheck-ChWij-6b.js";import{C as p}from"./ComposedChart-DGjTVrS3.js";import{C as a}from"./CartesianGrid-CqWR3c8s.js";import{X as n}from"./XAxis-BAlFokgy.js";import{Y as s}from"./YAxis-bUcTdGAX.js";import{L as c}from"./Line-D6X_hrn4.js";import{R as d}from"./ReferenceLine-EV4C7P7v.js";import{R as g}from"./RechartsHookInspector-ycUhMjsN.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BKyQYHPq.js";import"./immer-Q7LYndgz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BsT6E87M.js";import"./index-Dcc_DcJs.js";import"./hooks-DA7ZLRAz.js";import"./axisSelectors-DRA31YxA.js";import"./d3-scale-D4J-_PMg.js";import"./zIndexSlice-DD29w02m.js";import"./renderedTicksSlice-CQl_TKKG.js";import"./CartesianChart-DMb_0zJ6.js";import"./chartDataContext-A4NUbCSz.js";import"./CategoricalChart-DDH3jH2P.js";import"./CartesianAxis-C5b0QVvJ.js";import"./Layer-DTpB7dpX.js";import"./Text-tzBe5md3.js";import"./DOMUtils-C_4MXzyf.js";import"./Label-BjhhnV9x.js";import"./ZIndexLayer-DPHhTAxg.js";import"./types-uugzObvO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Bc2S-2Ko.js";import"./ActivePoints-CFK0b_hi.js";import"./Dot-Dv-nlLLJ.js";import"./RegisterGraphicalItemId-CzheeRaZ.js";import"./ErrorBarContext-D-vVpbAT.js";import"./GraphicalItemClipPath-BAi4t0TL.js";import"./SetGraphicalItem-DCV_XwVp.js";import"./useAnimationId-DKdTeHc-.js";import"./getRadiusAndStrokeWidthFromDot-BlTuKxo4.js";import"./ActiveShapeUtils-BB_vNw8U.js";import"./isPlainObject-COujrb7r.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DJnZMjz6.js";import"./Trapezoid-ljRWXtqg.js";import"./Sector-lipzQdUB.js";import"./Symbols-CkWT8iKr.js";import"./symbol-CHsY7JKe.js";import"./step-e2Z4FnHn.js";import"./Curve-CcdovDiP.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DQOJXr3R.js";import"./ChartSizeDimensions-Bar3NlUL.js";import"./OffsetShower-EZRykoXG.js";import"./PlotAreaShower-BUEMDiZc.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
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
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ye=["Segment"];export{t as Segment,ye as __namedExportsOrder,Re as default};
