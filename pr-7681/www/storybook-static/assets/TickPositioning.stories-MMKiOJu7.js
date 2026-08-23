import{R as t}from"./iframe-DjwM0vgm.js";import{R as n}from"./zIndexSlice-S6d1Qn7a.js";import{L as s}from"./LineChart-CKgvEI7y.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-D-8O9Mab.js";import{X as l}from"./XAxis-BZppthUd.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CucYyHCR.js";import"./index-D4-5N2-z.js";import"./index-z5DhIgT0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BFL8H9_0.js";import"./isWellBehavedNumber-DYJhUs7I.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BA3LaKhk.js";import"./index-DNt860Ln.js";import"./index-DxMXUOIN.js";import"./axisSelectors-BUwM7bTC.js";import"./d3-scale-CwSigEVq.js";import"./renderedTicksSlice-BdL9Tyr5.js";import"./CartesianChart-DqDwVa2A.js";import"./chartDataContext-D_305TZw.js";import"./CategoricalChart-Cq3eseQi.js";import"./Layer-4XX9ZvT_.js";import"./Curve-BULGBxkP.js";import"./types-Co4bPNAL.js";import"./step-B9Cib_uB.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C2ZGCcD3.js";import"./Label-DksVCiKj.js";import"./Text-esJ64cTt.js";import"./DOMUtils-CoSy3vPc.js";import"./useId-C20ArA-J.js";import"./useBackwardsCompatibleTheme-DiGCOcMi.js";import"./ZIndexLayer-BplzHMbl.js";import"./useAnimationId-C_ptHuMP.js";import"./ActivePoints-3wMe_Rof.js";import"./Dot-CVNFD5oh.js";import"./RegisterGraphicalItemId-Bfv8TlvG.js";import"./ErrorBarContext-SnNUtmYc.js";import"./GraphicalItemClipPath-BTc4Rf5I.js";import"./SetGraphicalItem-BH3XWVOo.js";import"./getRadiusAndStrokeWidthFromDot-swb7_H1P.js";import"./ActiveShapeUtils-D8QEGcp-.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-SmpQZLxS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,mt as default};
