import{R as e}from"./iframe-D_SBmach.js";import{R as i}from"./zIndexSlice-C-84-lKY.js";import{C as a}from"./ComposedChart-D6p63Jnk.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CtMN1VZ-.js";import{X as s}from"./XAxis-DH-ZgwOK.js";import{Y as c}from"./YAxis-DDmw5Iip.js";import{L as d}from"./Line-C9ajzZ_E.js";import{R as g}from"./ReferenceLine-Bmbn-Xjm.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dlx_LjAj.js";import"./index-cqta4xpR.js";import"./index-B3RrYXmh.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bvyrx_D_.js";import"./isWellBehavedNumber-CqdfCsRm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CFoCu-Y8.js";import"./index-rdN2tPCT.js";import"./index-Dl7bNBwv.js";import"./axisSelectors-T3miAVW7.js";import"./d3-scale-BqLpL1Tc.js";import"./renderedTicksSlice-D04XWQ7B.js";import"./CartesianChart-TtiOfZnr.js";import"./chartDataContext-DBogxY-2.js";import"./CategoricalChart-lLmfaMcS.js";import"./CartesianAxis-BQ5_-jT8.js";import"./Layer-Be605v_j.js";import"./Text-Bw10gxla.js";import"./DOMUtils-DrunKDJC.js";import"./useBackwardsCompatibleTheme-CD7phNhZ.js";import"./Label-CdDqsnQd.js";import"./ZIndexLayer-B6Mf8DJp.js";import"./types-CKo4Bnww.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-Mu286cSN.js";import"./step-DTNf_sWS.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DZGph_C9.js";import"./useAnimationId-BA2h0Ua8.js";import"./ActivePoints-CURbINes.js";import"./Dot-CVIHEjDA.js";import"./RegisterGraphicalItemId-Cdozmspz.js";import"./ErrorBarContext-B-lCMwxo.js";import"./GraphicalItemClipPath-D8_vcKpW.js";import"./SetGraphicalItem-BiSwI4Xl.js";import"./getRadiusAndStrokeWidthFromDot-Cq9L4k3r.js";import"./ActiveShapeUtils-CZ0w88RB.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ce={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const de=["Segment"];export{t as Segment,de as __namedExportsOrder,ce as default};
