import{e}from"./iframe-DkFnKmz6.js";import{R as i}from"./arrayEqualityCheck-B_Ane2tr.js";import{C as a}from"./ComposedChart-DUjCvTFh.js";import{C as p}from"./CartesianGrid-DuRGeQxY.js";import{X as n}from"./XAxis-ByDrXS-8.js";import{Y as s}from"./YAxis-CDI-qV1c.js";import{L as c}from"./Line-YzvdPVhD.js";import{R as d}from"./ReferenceLine-9xXETC-5.js";import{R as g}from"./RechartsHookInspector-B3tFzt2u.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BEmCTT1M.js";import"./PolarUtils-C_yoPd2g.js";import"./RechartsWrapper-Bs4V9sqh.js";import"./hooks-W6coKbOT.js";import"./axisSelectors-DvTbuhYF.js";import"./zIndexSlice-DVsC50MZ.js";import"./CartesianChart-CvoDLFkd.js";import"./chartDataContext-BD-hpc_7.js";import"./CategoricalChart-CWiOLY2_.js";import"./CartesianAxis-DgIti1By.js";import"./Layer-BKurILEC.js";import"./Text-mK8iFpSb.js";import"./DOMUtils-8Q3WDKQX.js";import"./Label-mt1d5eVZ.js";import"./ZIndexLayer-CZJ8gmuc.js";import"./types-DoGupJwC.js";import"./ReactUtils-zV5IbihU.js";import"./ActivePoints-D3N8i5DQ.js";import"./Dot-Bye_ci1V.js";import"./RegisterGraphicalItemId-2BrkyC_A.js";import"./ErrorBarContext-BbmTUWcN.js";import"./GraphicalItemClipPath-DEpjOnpI.js";import"./SetGraphicalItem-C0TqoRHl.js";import"./useAnimationId-ClFGkqN9.js";import"./getRadiusAndStrokeWidthFromDot-jKYQpOsm.js";import"./ActiveShapeUtils-vu-MuxxL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bgeub8cz.js";import"./Trapezoid-1bT7tRHO.js";import"./Sector-iBjQq3Q9.js";import"./Symbols-BHmBNcPX.js";import"./Curve-CQB8Wbk0.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DeWANcHY.js";import"./ChartSizeDimensions-DX00xq4b.js";import"./OffsetShower-B1JfcMLk.js";import"./PlotAreaShower-B1NfTpo7.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
