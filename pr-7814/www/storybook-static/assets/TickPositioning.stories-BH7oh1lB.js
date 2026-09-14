import{R as t}from"./iframe-u9oyaNDa.js";import{R as m}from"./zIndexSlice-CP6DEYJK.js";import{L as s}from"./LineChart-B97ZiehQ.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-7GaAxAzO.js";import{X as l}from"./XAxis-mDQaQsGs.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BNJMxzFn.js";import"./index-Cf659ixt.js";import"./index-KfJc4WDj.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DAwvazXN.js";import"./isWellBehavedNumber-BM97SC6u.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BUYC64MV.js";import"./axisSelectors-OhjP93PE.js";import"./d3-scale-CXFCyIt2.js";import"./index-BqftORPs.js";import"./index-CBGd9m5k.js";import"./renderedTicksSlice-Kslt8j3i.js";import"./index-DWf2p5U7.js";import"./CartesianChart-GMYsDnOd.js";import"./chartDataContext-CUbnBmUW.js";import"./CategoricalChart-DAgdBpFV.js";import"./Layer-DjumWApv.js";import"./Curve-DGZmW8IJ.js";import"./types-DQ_9ILU-.js";import"./step-BrZPGksV.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BOaP-WB5.js";import"./Label-Q8r239gm.js";import"./Text-BjcDy3qe.js";import"./DOMUtils-ClqiwCzY.js";import"./useId-C7h_mhKQ.js";import"./useBackwardsCompatibleTheme-B4wBZYcr.js";import"./ZIndexLayer-CWsudvRq.js";import"./useAnimationId-DzZz4Iie.js";import"./ActivePoints-CvbD508d.js";import"./Dot-CL6-lJmb.js";import"./RegisterGraphicalItemId-DN5KjZcx.js";import"./ErrorBarContext-3dixV13Q.js";import"./GraphicalItemClipPath-DV3LH61r.js";import"./SetGraphicalItem-Cs7cmOu4.js";import"./getRadiusAndStrokeWidthFromDot-CN_YkoZo.js";import"./ActiveShapeUtils-DNXHDk_r.js";import"./useGraphicalItemIdentity-BpDjC4sF.js";import"./CartesianAxis-BInpl5Mc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
