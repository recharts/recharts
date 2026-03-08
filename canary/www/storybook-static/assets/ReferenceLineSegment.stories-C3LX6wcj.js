import{e}from"./iframe-CV07hTJo.js";import{R as i}from"./arrayEqualityCheck-DZYwMANi.js";import{C as p}from"./ComposedChart-DtynIp2o.js";import{C as a}from"./CartesianGrid-CEddv1BI.js";import{X as n}from"./XAxis-D8-FPQnZ.js";import{Y as s}from"./YAxis-CQ-pu87S.js";import{L as c}from"./Line-hUrqHSMM.js";import{R as d}from"./ReferenceLine-CIeBB9QL.js";import{R as g}from"./RechartsHookInspector-ouq6dPls.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps--Z_AJC6X.js";import"./immer-DZr-3B4h.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B_A_zLwr.js";import"./index-BbPZUkKO.js";import"./hooks-hiQan1d_.js";import"./axisSelectors-Colr1FXT.js";import"./d3-scale-Dsv-X1x3.js";import"./zIndexSlice-bGazLamm.js";import"./renderedTicksSlice-BVud2Eit.js";import"./CartesianChart-DxPhfcnf.js";import"./chartDataContext-Diiede2r.js";import"./CategoricalChart-BXVtqco4.js";import"./CartesianAxis-DglFdQa3.js";import"./Layer-CjSu9kHg.js";import"./Text-DQ9H0cYG.js";import"./DOMUtils-tjr3CYLs.js";import"./Label-DYpp1LIm.js";import"./ZIndexLayer-Bsxd_xbk.js";import"./types-BW-iMsEE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-C6WIusF5.js";import"./ActivePoints-DKxtfJTG.js";import"./Dot-CJkLJ9KV.js";import"./RegisterGraphicalItemId-C78YkPgS.js";import"./ErrorBarContext-CcVjgEJt.js";import"./GraphicalItemClipPath-DbLJ1P35.js";import"./SetGraphicalItem-CWJSiYUF.js";import"./useAnimationId-DLuTmxa5.js";import"./getRadiusAndStrokeWidthFromDot-DlSSP4S2.js";import"./ActiveShapeUtils-dmrR1-Re.js";import"./isPlainObject-BDdyHw-3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D3uD8Idm.js";import"./Trapezoid-C129hHgo.js";import"./Sector-BzLPim6R.js";import"./Symbols-DUW3Pbjx.js";import"./symbol-D3LFYW8o.js";import"./step-DxAhMwRF.js";import"./Curve-6Ct2z4dM.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-NB669Q6L.js";import"./ChartSizeDimensions-DYT9YPss.js";import"./OffsetShower-CIa2yD69.js";import"./PlotAreaShower-Lc3Ppbaa.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
