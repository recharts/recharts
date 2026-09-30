import{R as e}from"./iframe-Qmct8dPL.js";import{R as i}from"./zIndexSlice-DXIqEK91.js";import{C as n}from"./ComposedChart-EdWJ2dtJ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BH00srKQ.js";import{X as s}from"./XAxis-9J-zU-e3.js";import{Y as c}from"./YAxis-DhnYemPX.js";import{L as d}from"./Line-B9HMr-R-.js";import{R as g}from"./ReferenceLine-C4gHy54B.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-OLGJV50e.js";import"./index-BiNiAG-8.js";import"./index-Y-_D5N0e.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-1ACdwYcX.js";import"./isWellBehavedNumber-B8_5eiwl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CA8gYP8X.js";import"./axisSelectors-DQj7dDoX.js";import"./d3-scale-BxubizPM.js";import"./index-JkwU9wUv.js";import"./index-Cl8DEeo-.js";import"./renderedTicksSlice-C_XZvXHS.js";import"./index-yzCwrxwp.js";import"./CartesianChart-BKFAhLSe.js";import"./chartDataContext-phyyW0XT.js";import"./CategoricalChart-kEDlcm2-.js";import"./CartesianAxis-BRUXhqMv.js";import"./Layer-DivV_9FZ.js";import"./Text-CqCSaO_p.js";import"./DOMUtils-CVrddbmH.js";import"./useId-BXFGZ7WB.js";import"./useBackwardsCompatibleTheme-BkhTNX9-.js";import"./Label-B1HxkUUU.js";import"./ZIndexLayer-1SjAyyP_.js";import"./types-R1YvGwXP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BWSQwgQs.js";import"./step-DllQQmGx.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bqna9ZlZ.js";import"./useAnimationId-DreFRpzI.js";import"./ActivePoints-Bxhr0cL_.js";import"./Dot-CegM_aDK.js";import"./RegisterGraphicalItemId-xOabcHeQ.js";import"./ErrorBarContext-C9Rble42.js";import"./GraphicalItemClipPath-B4CCgAUu.js";import"./SetGraphicalItem-Dm7pFyfQ.js";import"./getRadiusAndStrokeWidthFromDot-BXmHQhOs.js";import"./ActiveShapeUtils-QE8CXMAG.js";import"./useGraphicalItemIdentity-BCZesqSu.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
