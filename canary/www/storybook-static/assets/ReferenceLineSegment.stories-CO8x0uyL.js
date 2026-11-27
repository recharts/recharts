import{R as e}from"./iframe-DNnhIzqd.js";import{R as i}from"./zIndexSlice-CZnRUfU-.js";import{C as n}from"./ComposedChart-Dwrm7GV8.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BoinnBP8.js";import{X as s}from"./XAxis-DyyKFn3c.js";import{Y as c}from"./YAxis-DL1XukoQ.js";import{L as d}from"./Line-Bslt7b3k.js";import{R as g}from"./ReferenceLine-BulVNg73.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CTqEvKA7.js";import"./get-CjriyByo.js";import"./throttle-QyoUWs98.js";import"./index-WikYS3OE.js";import"./index-C-IHZC0A.js";import"./RechartsWrapper-CrR43_nu.js";import"./axisSelectors-D3RI42dK.js";import"./polarAxisSelectors-D96CZuW6.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-DjL9qVWl.js";import"./index-DDptWEzO.js";import"./index-B4kmWeHl.js";import"./renderedTicksSlice-CiWxl1hZ.js";import"./index-DCQUdeKB.js";import"./fillDefinitions-C2isIUYI.js";import"./CartesianChart-Dh9mzh7h.js";import"./chartDataContext-C9vkNbCm.js";import"./CategoricalChart-Baa8HnHb.js";import"./CartesianAxis-DyWgnQe6.js";import"./Layer-BC8osa1v.js";import"./Text-eO__rozb.js";import"./ZIndexLayer-BbOOCV2_.js";import"./Label-zRO_Glrc.js";import"./types-BRWBXBDp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-D2jL9mPV.js";import"./Curve-BuuEl7Oa.js";import"./step-CcvBplbA.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BLzS4I_n.js";import"./ActivePoints-CcA8jx8b.js";import"./Dot-1G0Boo2p.js";import"./activeStyles-C2NC3gaF.js";import"./useAnimationId-nuwJNMaM.js";import"./Symbols-DFH9iE38.js";import"./symbol-B9mQM-FG.js";import"./ErrorBarContext-BEOQHAHp.js";import"./SetGraphicalItem-CNXPVtw_.js";import"./ActiveShapeUtils-BT3Mq8P-.js";import"./useEffectiveDataKey-DDl_vZE8.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
