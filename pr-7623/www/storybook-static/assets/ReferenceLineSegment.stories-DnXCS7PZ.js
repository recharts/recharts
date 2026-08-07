import{R as e}from"./iframe-B67xakaW.js";import{R as i}from"./zIndexSlice-D0TzJ1fR.js";import{C as a}from"./ComposedChart-DYPq6hki.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CG4D2kRB.js";import{X as s}from"./XAxis-FKOR1g-7.js";import{Y as c}from"./YAxis-CgnEOw1P.js";import{L as d}from"./Line-DV865J21.js";import{R as g}from"./ReferenceLine-BI-kziYS.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BKrvbeAi.js";import"./index-C636565A.js";import"./index-hWCiHkWI.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B29-kufx.js";import"./isWellBehavedNumber-ClgfPGEs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cx8TqoHO.js";import"./index-CvOnsJ-w.js";import"./index-Dk_c5Xjv.js";import"./axisSelectors-DXeKf5vs.js";import"./d3-scale-DAYedkSi.js";import"./renderedTicksSlice-B7Sc1x4H.js";import"./CartesianChart-BLDHGv8m.js";import"./chartDataContext-CfIiS_I3.js";import"./CategoricalChart-DgP4TH9i.js";import"./CartesianAxis-CPVS6EgD.js";import"./Layer-DydnlLJq.js";import"./Text-Cz97PcLA.js";import"./DOMUtils-B9paDAsr.js";import"./Label-DIs948ZI.js";import"./ZIndexLayer-Bldiyv4x.js";import"./types-CBHC2Uao.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CKqExDZQ.js";import"./isBuffer-BG75eWKN.js";import"./Curve-us0lQGQS.js";import"./step-BtzpbeJ-.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dlexmd5j.js";import"./useAnimationId-pFv40dAf.js";import"./ActivePoints-C6zOCKUI.js";import"./Dot-DQCUJJj2.js";import"./RegisterGraphicalItemId-Ci2aQjFq.js";import"./ErrorBarContext--xCAx9GD.js";import"./GraphicalItemClipPath-CLLzWZH-.js";import"./SetGraphicalItem-D_jFiRTP.js";import"./graphicalItemIdentity-7Y65Hlf3.js";import"./ActiveShapeUtils-i_QMKwre.js";import"./CartesianScaleHelper-C9Oze4oB.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ce=["Segment"];export{t as Segment,ce as __namedExportsOrder,se as default};
