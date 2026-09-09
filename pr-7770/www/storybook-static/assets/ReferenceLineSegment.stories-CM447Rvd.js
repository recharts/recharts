import{R as e}from"./iframe-JwbLQPb2.js";import{R as i}from"./zIndexSlice-BvSjVeUr.js";import{C as n}from"./ComposedChart-BNgb6jwq.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-ChdA-PG8.js";import{X as s}from"./XAxis-CM1shXvI.js";import{Y as c}from"./YAxis-CMNQVrMb.js";import{L as d}from"./Line-7JNP1HYC.js";import{R as g}from"./ReferenceLine-DF94K0Rl.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CQOjkZLn.js";import"./index-BTc1OfE8.js";import"./index-CKs_88Jr.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CSG7eI7r.js";import"./isWellBehavedNumber-CdOzsQhH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CHoC0Tmg.js";import"./axisSelectors-Bl-g05pj.js";import"./d3-scale-C8sQoAOm.js";import"./index-CV_Eti3m.js";import"./index-Ct1SgceM.js";import"./renderedTicksSlice-f-Q9YZ5S.js";import"./index-B_caUHn5.js";import"./CartesianChart-CVn5EGJv.js";import"./chartDataContext-CoYu6TUB.js";import"./CategoricalChart-Cxecmsq9.js";import"./CartesianAxis-DEricmMP.js";import"./Layer-BUVs9FF0.js";import"./Text-DYIo7N8x.js";import"./DOMUtils-CGRWukjT.js";import"./useId-CU2vxgfb.js";import"./useBackwardsCompatibleTheme-2v1_sDmp.js";import"./Label-C9oG4jkb.js";import"./ZIndexLayer-B1cjmDJz.js";import"./types-BXkOLLZ5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-v4EbeP27.js";import"./step-8eqj28j5.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Di0vnHT_.js";import"./useAnimationId-DNb0w9mF.js";import"./ActivePoints-Zw5Cgcy4.js";import"./Dot-BOts6I9w.js";import"./RegisterGraphicalItemId-JHnI7J5m.js";import"./ErrorBarContext-DLKn1BJH.js";import"./GraphicalItemClipPath-Btey0t5q.js";import"./SetGraphicalItem-CF8QjFwu.js";import"./getRadiusAndStrokeWidthFromDot-Bmqi90U5.js";import"./ActiveShapeUtils-CZ-yTrkB.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
