import{R as t}from"./iframe-DlBA_NHD.js";import{R as m}from"./zIndexSlice-BOYVZGeR.js";import{L as s}from"./LineChart-Dc89kjfO.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-apD60rO_.js";import{X as l}from"./XAxis-CN5TgDqJ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-EeT9c_n_.js";import"./index-2M50Q2uq.js";import"./index-CsNZB3UM.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C8Ozokz2.js";import"./isWellBehavedNumber-BHQR8F7C.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-hVJCe5PM.js";import"./axisSelectors-CON7ryxt.js";import"./d3-scale-nBoiSLy0.js";import"./index-Bc4bnspn.js";import"./index-BgT2sRhI.js";import"./renderedTicksSlice-BAGWAjRI.js";import"./index-B9Sew5zo.js";import"./CartesianChart-DNfpc-WW.js";import"./chartDataContext-Dz5AUJl-.js";import"./CategoricalChart-YMws6pgL.js";import"./Layer-DLKMiHzQ.js";import"./Curve-DRH1VSH_.js";import"./types-CqsOLULy.js";import"./step-BzPuQicN.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-KG4Q9B6N.js";import"./Label-Bdz7xSee.js";import"./Text-CICH4fLL.js";import"./DOMUtils-B-Y8jIku.js";import"./useId-DfZYzD58.js";import"./useBackwardsCompatibleTheme-DZYIoyAk.js";import"./ZIndexLayer-R1mFVhfI.js";import"./useAnimationId-ZOIa2F-P.js";import"./ActivePoints-B_ryvrm8.js";import"./Dot-coVzMkTm.js";import"./RegisterGraphicalItemId-DYXz-Xt3.js";import"./ErrorBarContext-ZM-eyTPM.js";import"./GraphicalItemClipPath-CLhUFps9.js";import"./SetGraphicalItem-0kKuUivG.js";import"./getRadiusAndStrokeWidthFromDot-CuoUyQpF.js";import"./ActiveShapeUtils-BF0jq83h.js";import"./useGraphicalItemIdentity-DwrMS_39.js";import"./CartesianAxis-C833i1Hp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
