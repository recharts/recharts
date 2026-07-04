import{R as e}from"./iframe-CwAvad--.js";import{R as i}from"./zIndexSlice-B2fpzDns.js";import{C as a}from"./ComposedChart-CqWNcaET.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DllQ9z3q.js";import{X as s}from"./XAxis-BvogKVrk.js";import{Y as c}from"./YAxis-MJLPmDW2.js";import{L as d}from"./Line-6FU32cog.js";import{R as g}from"./ReferenceLine-DE7eqF92.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CrTklCSM.js";import"./index-Dn-gVD0q.js";import"./index-Bp9sH-Ly.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-IMOML7UF.js";import"./isWellBehavedNumber-zbfLgurd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-yCiiQ5ZZ.js";import"./index-C7e37hiD.js";import"./index-Be6HzbxO.js";import"./renderedTicksSlice-DxVowf0r.js";import"./axisSelectors-gPKIePgu.js";import"./d3-scale-D8xH9yG8.js";import"./CartesianChart-DnHhaR9q.js";import"./chartDataContext-QAMmb-FO.js";import"./CategoricalChart-Bfs9hS_5.js";import"./CartesianAxis-Bp0BWyNg.js";import"./Layer-DrEfcBvU.js";import"./Text-CMmFO1Ku.js";import"./DOMUtils-Wq5LU4mE.js";import"./Label-Bfni9WDi.js";import"./ZIndexLayer-nfC8QR9T.js";import"./types-MLS83tAs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-D0-SKbNI.js";import"./step-2IVSrnG4.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ChIe5_bS.js";import"./useAnimationId--5AtISHD.js";import"./ActivePoints-C9ktctM9.js";import"./Dot-Dc5RP_RF.js";import"./RegisterGraphicalItemId-C2zHigBB.js";import"./ErrorBarContext-CChsqgpp.js";import"./GraphicalItemClipPath-BiAQEIv1.js";import"./SetGraphicalItem-BRzb5Fh_.js";import"./getRadiusAndStrokeWidthFromDot-BTB7kz6B.js";import"./ActiveShapeUtils-BNg4U5cF.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ne=["Segment"];export{t as Segment,ne as __namedExportsOrder,pe as default};
