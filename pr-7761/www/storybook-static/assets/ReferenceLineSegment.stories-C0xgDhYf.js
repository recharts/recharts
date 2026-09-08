import{R as e}from"./iframe-BVwma9wI.js";import{R as i}from"./zIndexSlice-VAlBdr6o.js";import{C as n}from"./ComposedChart-C1Hvl3k7.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-Dbo5yjst.js";import{X as s}from"./XAxis-OreZOtA3.js";import{Y as c}from"./YAxis-rQKwLEfD.js";import{L as d}from"./Line-DvOT03jt.js";import{R as g}from"./ReferenceLine-Cg37HAs8.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bd_AFMQd.js";import"./index-BWPTe55v.js";import"./index-CKwoEIUF.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DBpEOB4I.js";import"./isWellBehavedNumber-xliXy-xp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CjIw9-OO.js";import"./axisSelectors-CvmqVILj.js";import"./d3-scale-D0UMq2S4.js";import"./index-Cx4u4fkc.js";import"./index-c3hGei__.js";import"./renderedTicksSlice-HCr6GQIq.js";import"./index-CVdaA3HQ.js";import"./CartesianChart-DTfvYFOe.js";import"./chartDataContext-BpzIcZqB.js";import"./CategoricalChart-B7_1KQpA.js";import"./CartesianAxis-CVwobuPT.js";import"./Layer-B2gbCIpu.js";import"./Text-DRDxlPSO.js";import"./DOMUtils-DF9_GxSR.js";import"./useId-Dz979Lah.js";import"./useBackwardsCompatibleTheme-CbBx_yjE.js";import"./Label-CUW0HBf_.js";import"./ZIndexLayer-CVdU6QQB.js";import"./types-DEj_s5AW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CbKCSO8X.js";import"./step-J2-5bjqR.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CdRizhQr.js";import"./useAnimationId-VU1EAhiC.js";import"./ActivePoints-DNnivkqK.js";import"./Dot-DFH0ovgl.js";import"./RegisterGraphicalItemId-BxG6QVhz.js";import"./ErrorBarContext-DYFU5FCm.js";import"./GraphicalItemClipPath-VekWoIWW.js";import"./SetGraphicalItem-ByKu5cCs.js";import"./getRadiusAndStrokeWidthFromDot-BFJEVTHP.js";import"./ActiveShapeUtils-b9rh-Zt0.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
