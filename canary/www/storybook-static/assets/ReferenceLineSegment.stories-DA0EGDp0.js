import{e}from"./iframe-BO2lV8Fr.js";import{R as i}from"./arrayEqualityCheck-BPZLCCv_.js";import{C as a}from"./ComposedChart-C-_Lr0N_.js";import{C as p}from"./CartesianGrid-okPqrjow.js";import{X as n}from"./XAxis-n0cJUWOz.js";import{Y as s}from"./YAxis-BHKkX64t.js";import{L as c}from"./Line-QXdRrMDG.js";import{R as d}from"./ReferenceLine-3RMd44ry.js";import{R as g}from"./RechartsHookInspector-BaEmilk5.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DHbskwPQ.js";import"./PolarUtils-CZtkokJH.js";import"./RechartsWrapper-CnX2hcx7.js";import"./hooks-CyQEzp2Y.js";import"./axisSelectors-C55ZO64o.js";import"./zIndexSlice-OMKiStTn.js";import"./CartesianChart-BlrMuAtJ.js";import"./chartDataContext-Dtblt1is.js";import"./CategoricalChart-mKGFwIoi.js";import"./CartesianAxis-wvny4geP.js";import"./Layer-IoZ0rL1L.js";import"./Text-B2hif4xC.js";import"./DOMUtils-5fMbRa2e.js";import"./Label-4EeKD-N4.js";import"./ZIndexLayer-CKe6oR6h.js";import"./types-uDYlV2go.js";import"./ReactUtils-CB6ifrXE.js";import"./ActivePoints-D9PJXPxG.js";import"./Dot-jMjXiq3a.js";import"./RegisterGraphicalItemId-wG1yfeVq.js";import"./ErrorBarContext-BB-sopap.js";import"./GraphicalItemClipPath-D6vjaQ-6.js";import"./SetGraphicalItem-BSkVMDfa.js";import"./useAnimationId-B_L243Vk.js";import"./getRadiusAndStrokeWidthFromDot-DJdRuXTC.js";import"./ActiveShapeUtils-DVU6eaup.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CuSLDrEq.js";import"./Trapezoid-DXmIi2NN.js";import"./Sector-BGeEC3JQ.js";import"./Symbols-BsRtfl74.js";import"./Curve-BbZIFp84.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Ci4CsAoU.js";import"./ChartSizeDimensions-BEuPB0uv.js";import"./OffsetShower-C3B37-9_.js";import"./PlotAreaShower-Bds63cu3.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
