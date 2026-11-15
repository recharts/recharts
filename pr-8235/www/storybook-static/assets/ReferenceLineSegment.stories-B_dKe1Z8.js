import{R as e}from"./iframe-CuQfx1mh.js";import{R as i}from"./zIndexSlice-DATCiNk-.js";import{C as n}from"./ComposedChart-CT5dqqrP.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CQ7ZP3nQ.js";import{X as s}from"./XAxis-DFSmxsEI.js";import{Y as c}from"./YAxis-BKox7kU6.js";import{L as d}from"./Line-CJHShm6U.js";import{R as g}from"./ReferenceLine-Zfamv71E.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-xvOlXZtC.js";import"./throttle-SAQUG4vb.js";import"./index-CvvvrEYr.js";import"./index-Bw8PVQ13.js";import"./RechartsWrapper-DE6EtITA.js";import"./axisSelectors-BY0kcEhz.js";import"./polarAxisSelectors-piadlyiA.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BW1Afi3u.js";import"./index-kT5VmTkQ.js";import"./index-BeCcpORD.js";import"./renderedTicksSlice-Ds69xoXU.js";import"./index-SztJ6oEx.js";import"./fillDefinitions-DUe233lT.js";import"./CartesianChart-BJj5wl32.js";import"./chartDataContext-pjMFjoUW.js";import"./CategoricalChart-DBOXRrXs.js";import"./CartesianAxis-CbXqU-62.js";import"./Layer-YgN4J4tN.js";import"./Text-BgHfu1GZ.js";import"./ZIndexLayer-W76HFIEY.js";import"./Label-GADa0aPm.js";import"./types-D3Hjk8Vl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-BBk73TGO.js";import"./step-BPhAxlHA.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-GFwLhdMi.js";import"./ActivePoints-D3cJ21Q9.js";import"./Dot-nIfHLv6J.js";import"./activeStyles-Ci_kz6ws.js";import"./useAnimationId-tXprvTar.js";import"./Symbols-Cfnu_9Am.js";import"./symbol-CeqqAB3e.js";import"./ErrorBarContext-Ciy31sgt.js";import"./SetGraphicalItem-CgminRJ_.js";import"./getRadiusAndStrokeWidthFromDot-BGDq57jg.js";import"./ActiveShapeUtils-D5R6UpQP.js";import"./useEffectiveDataKey-DTMm3t3E.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
