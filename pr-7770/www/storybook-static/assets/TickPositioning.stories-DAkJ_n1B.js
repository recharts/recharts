import{R as t}from"./iframe-JwbLQPb2.js";import{R as m}from"./zIndexSlice-BvSjVeUr.js";import{L as s}from"./LineChart-CyWgZ_3C.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-7JNP1HYC.js";import{X as l}from"./XAxis-CM1shXvI.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CQOjkZLn.js";import"./index-BTc1OfE8.js";import"./index-CKs_88Jr.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CSG7eI7r.js";import"./isWellBehavedNumber-CdOzsQhH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CHoC0Tmg.js";import"./axisSelectors-Bl-g05pj.js";import"./d3-scale-C8sQoAOm.js";import"./index-CV_Eti3m.js";import"./index-Ct1SgceM.js";import"./renderedTicksSlice-f-Q9YZ5S.js";import"./index-B_caUHn5.js";import"./CartesianChart-CVn5EGJv.js";import"./chartDataContext-CoYu6TUB.js";import"./CategoricalChart-Cxecmsq9.js";import"./Layer-BUVs9FF0.js";import"./Curve-v4EbeP27.js";import"./types-BXkOLLZ5.js";import"./step-8eqj28j5.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Di0vnHT_.js";import"./Label-C9oG4jkb.js";import"./Text-DYIo7N8x.js";import"./DOMUtils-CGRWukjT.js";import"./useId-CU2vxgfb.js";import"./useBackwardsCompatibleTheme-2v1_sDmp.js";import"./ZIndexLayer-B1cjmDJz.js";import"./useAnimationId-DNb0w9mF.js";import"./ActivePoints-Zw5Cgcy4.js";import"./Dot-BOts6I9w.js";import"./RegisterGraphicalItemId-JHnI7J5m.js";import"./ErrorBarContext-DLKn1BJH.js";import"./GraphicalItemClipPath-Btey0t5q.js";import"./SetGraphicalItem-CF8QjFwu.js";import"./getRadiusAndStrokeWidthFromDot-Bmqi90U5.js";import"./ActiveShapeUtils-CZ-yTrkB.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DEricmMP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: () => {
    const intervalOptions = ['preserveStart', 'preserveEnd', 'preserveStartEnd', 'equidistantPreserveStart', 0] as const;
    return <ResponsiveContainer>
        <LineChart data={ticks}
      // Margins are necessary to show ticks that extend beyond the chart (i.e. last and first tick).
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 20
      }}>
          <Line dataKey="coordinate" />
          {intervalOptions.map((intervalOption, index) => <XAxis dataKey="value" key={intervalOption} interval={intervalOption} xAxisId={index} label={intervalOption} height={70} />)}
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,st as __namedExportsOrder,mt as default};
