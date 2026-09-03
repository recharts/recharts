import{R as t}from"./iframe-BMDGt33G.js";import{R as n}from"./zIndexSlice-DCVNKZSi.js";import{L as s}from"./LineChart-B2WH9o6A.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DesYXgxV.js";import{X as l}from"./XAxis-BLwPYlxb.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DHXzdyrx.js";import"./index-CQIY09nP.js";import"./index-KK-TIT-h.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DOWWXdZM.js";import"./isWellBehavedNumber-D73nv25y.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CU85gN_Z.js";import"./axisSelectors-DoXQrKNQ.js";import"./d3-scale-BLx8xy0x.js";import"./index-ubnZgXyZ.js";import"./index-B-bSR3iB.js";import"./renderedTicksSlice-D2nTsm-u.js";import"./index-BALx0JUZ.js";import"./CartesianChart-CefyJEjd.js";import"./chartDataContext-BXP4dIO1.js";import"./CategoricalChart-UAMcsDW6.js";import"./Layer-CjUZiXYs.js";import"./Curve-CIJakMM0.js";import"./types-BuxhmSle.js";import"./step-B_y4L6H0.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DPSFxYpd.js";import"./Label-l14yVQ5q.js";import"./Text-DYkDw-5j.js";import"./DOMUtils-DBrlboks.js";import"./useId-D70LGxdi.js";import"./useBackwardsCompatibleTheme-DUdO4_jh.js";import"./ZIndexLayer-CaEles3w.js";import"./useAnimationId-B5h3AUKS.js";import"./ActivePoints-CHdXi4sp.js";import"./Dot-CYm9TxQB.js";import"./RegisterGraphicalItemId-iJ7X__4u.js";import"./ErrorBarContext-CTZMo0d8.js";import"./GraphicalItemClipPath-BpuwakLC.js";import"./SetGraphicalItem-V8CFRMGm.js";import"./getRadiusAndStrokeWidthFromDot-CYss6dEa.js";import"./ActiveShapeUtils-EQw7SaSK.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-D9IiMPGB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const nt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const st=["TickPositioning"];export{r as TickPositioning,st as __namedExportsOrder,nt as default};
