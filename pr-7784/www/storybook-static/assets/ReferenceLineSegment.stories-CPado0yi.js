import{R as e}from"./iframe-CUWBn4q2.js";import{R as i}from"./zIndexSlice-CXDrS8ji.js";import{C as n}from"./ComposedChart-CsAUZMi5.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-EkqXdHT8.js";import{X as s}from"./XAxis-BLeODyW3.js";import{Y as c}from"./YAxis-DznKUGT9.js";import{L as d}from"./Line-QQwDXclT.js";import{R as g}from"./ReferenceLine-Bm5b-rfQ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D674SENT.js";import"./index-CLYmkFIA.js";import"./index-9Wsbece1.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D0umfLoR.js";import"./isWellBehavedNumber-C7RzZnbq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D0kr3yQ2.js";import"./axisSelectors-BtjPkbxT.js";import"./d3-scale-CSrhJk_u.js";import"./index-C3m0kF0l.js";import"./index-BRlPI1a6.js";import"./renderedTicksSlice-x_-J1N5G.js";import"./index-B1_r5ctg.js";import"./CartesianChart-DasXIysH.js";import"./chartDataContext-CWpZ_4LY.js";import"./CategoricalChart-C2VzdUWy.js";import"./CartesianAxis-B28nXVtL.js";import"./Layer-B2jZ5e2I.js";import"./Text-DyTjweFw.js";import"./DOMUtils-DIgt7RHT.js";import"./useId-D5YR5LZL.js";import"./useBackwardsCompatibleTheme-D6xiuF9M.js";import"./Label-kwBf54iY.js";import"./ZIndexLayer-D2yQ2Oeh.js";import"./types-Cm8He0RL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-C937f4F6.js";import"./step-DEVBfr_J.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DFCeZ6-M.js";import"./useAnimationId-75oMmLO2.js";import"./ActivePoints-BpXzUdPZ.js";import"./Dot-BGhESmiF.js";import"./RegisterGraphicalItemId-xVBFXNgo.js";import"./ErrorBarContext-BKxRmBr1.js";import"./GraphicalItemClipPath-g7UOCVV4.js";import"./SetGraphicalItem-DiC6WCa5.js";import"./getRadiusAndStrokeWidthFromDot-18D5zGZY.js";import"./ActiveShapeUtils-BbASsAoV.js";import"./useGraphicalItemIdentity-B8tF-TLM.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
