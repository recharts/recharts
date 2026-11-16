import{R as e}from"./iframe-lJBwbutv.js";import{R as i}from"./zIndexSlice-DOZGt0Xc.js";import{C as n}from"./ComposedChart-Cxisz18M.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BNYYJNHk.js";import{X as s}from"./XAxis-eFYFTspd.js";import{Y as c}from"./YAxis-DzJ296_j.js";import{L as d}from"./Line-8wwXFnCl.js";import{R as g}from"./ReferenceLine-CkZPguzd.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CuoHmAis.js";import"./throttle-BD4ZOoVc.js";import"./index-D-yoUCLK.js";import"./index-DmjkyNBy.js";import"./RechartsWrapper-C4uciLnE.js";import"./axisSelectors-CiZzV4Ua.js";import"./polarAxisSelectors-g2gwazbI.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BrfLvVJ7.js";import"./index-BjclV3iC.js";import"./index-Bgy6zka-.js";import"./renderedTicksSlice-ChSQY0tz.js";import"./index-CPSRkKHN.js";import"./fillDefinitions-DgzgNWUG.js";import"./CartesianChart-BDxnsR9l.js";import"./chartDataContext-CuRy23UW.js";import"./CategoricalChart-CWJpCYvL.js";import"./CartesianAxis-DLyqJbpN.js";import"./Layer-CZzb4Onv.js";import"./Text-CH7ZTJa6.js";import"./ZIndexLayer-DMFEoW6r.js";import"./Label-C1XxCcqG.js";import"./types-BR2T4QCa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-Dazce3Yn.js";import"./step-CVKg82eE.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BXXFCsKs.js";import"./ActivePoints-De5xpIFf.js";import"./Dot-CHXRfIFb.js";import"./activeStyles-C_lJCdGG.js";import"./useAnimationId-Dj7sECHw.js";import"./Symbols-BrRhqa2q.js";import"./symbol-CHsvlSO9.js";import"./ErrorBarContext-CF700d8f.js";import"./SetGraphicalItem-BjwhNxsW.js";import"./getRadiusAndStrokeWidthFromDot-4zFCm6-q.js";import"./ActiveShapeUtils-6HIsnjoS.js";import"./useEffectiveDataKey-Bg5rFbYe.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,ge as __namedExportsOrder,de as default};
