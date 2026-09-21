import{R as t}from"./iframe-BGOT0UMq.js";import{R as m}from"./zIndexSlice-BPU0EfFx.js";import{L as s}from"./LineChart-BJ9jtgC7.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-JD7ySvzw.js";import{X as l}from"./XAxis-Cg--p2uq.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-gIJqAgIK.js";import"./index-hikMEuKp.js";import"./index-NAo39Q3o.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BSwwqvcB.js";import"./isWellBehavedNumber-BnpxWTLo.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CjrWTlpw.js";import"./axisSelectors-Wq_jv7lJ.js";import"./d3-scale-BPTXd-TV.js";import"./index-DfHr9lQU.js";import"./index-DlwvoXAU.js";import"./renderedTicksSlice-CgKWkcXA.js";import"./index-_Ok-JjZj.js";import"./CartesianChart-TgiGuVC0.js";import"./chartDataContext-Bp5THtgE.js";import"./CategoricalChart-CqDZ11FZ.js";import"./Layer-C_IgQKNN.js";import"./Curve-DVizwtjl.js";import"./types-B69giCR1.js";import"./step-B3HmNN3j.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DLd27jVc.js";import"./Label-BU1lFQ2f.js";import"./Text-D50SBSje.js";import"./DOMUtils-DS3nE711.js";import"./useId-DPA6djN8.js";import"./useBackwardsCompatibleTheme-BNqsR3kp.js";import"./ZIndexLayer-Bo4GMA0B.js";import"./useAnimationId-B8wYOiNY.js";import"./ActivePoints-qLhVMlGM.js";import"./Dot-CUw-BquZ.js";import"./RegisterGraphicalItemId-CDcrkiRG.js";import"./ErrorBarContext-C9R0WBsq.js";import"./GraphicalItemClipPath-CPiocMLU.js";import"./SetGraphicalItem-C3s6q2T3.js";import"./getRadiusAndStrokeWidthFromDot-C5RVjXgj.js";import"./ActiveShapeUtils-DjoIgzDR.js";import"./useGraphicalItemIdentity-NEokAZII.js";import"./CartesianAxis-hSXvCGlw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
