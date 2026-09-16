import{R as e}from"./iframe-CKDPSKer.js";import{R as i}from"./zIndexSlice-BPEXBnkz.js";import{C as n}from"./ComposedChart-BRk5rLm3.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CJPTwDVx.js";import{X as s}from"./XAxis-A_9Io6kM.js";import{Y as c}from"./YAxis-aBoPLQiN.js";import{L as d}from"./Line-CTXdPCxP.js";import{R as g}from"./ReferenceLine-BmnSSQfa.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BxISGQ-D.js";import"./index-b8m7PcKP.js";import"./index-BCb8LTpu.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BHhxWlvh.js";import"./isWellBehavedNumber-B7M1fd8R.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DXJuSLgb.js";import"./axisSelectors-BCmNu8mb.js";import"./d3-scale-b7USrreT.js";import"./index-Yn8E1RQt.js";import"./index-YNG8abLs.js";import"./renderedTicksSlice-D_KOvBCE.js";import"./index-CdVjfuR9.js";import"./CartesianChart-8JudaFqK.js";import"./chartDataContext-BPq1GFdD.js";import"./CategoricalChart-C1cfNrgi.js";import"./CartesianAxis-CjGSghd8.js";import"./Layer-B33l4zSF.js";import"./Text-C2JOwhg7.js";import"./DOMUtils-YKVjc3tQ.js";import"./useId-Ci63Vlud.js";import"./useBackwardsCompatibleTheme-CrbUBK8p.js";import"./Label-dc-yhDIk.js";import"./ZIndexLayer-U3HIU8rZ.js";import"./types-CtnAz4fT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-Blt-RSy4.js";import"./step-Bgemofkp.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DQZ1vYlx.js";import"./useAnimationId-BJ5AGKlq.js";import"./ActivePoints-BaQ565al.js";import"./Dot-BHyvQM3b.js";import"./RegisterGraphicalItemId-DPP3dtMc.js";import"./ErrorBarContext-DUmIK13m.js";import"./GraphicalItemClipPath-CwqjQ5yI.js";import"./SetGraphicalItem-oK4eoPFb.js";import"./getRadiusAndStrokeWidthFromDot-jgRF4YSW.js";import"./ActiveShapeUtils-Wg41V-yZ.js";import"./useGraphicalItemIdentity-SlGiSA9D.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,fe as __namedExportsOrder,ge as default};
