import{R as t}from"./iframe-5h9djFbt.js";import{R as m}from"./zIndexSlice-BdIKrmmY.js";import{L as s}from"./LineChart-9Sgi-PsU.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-B8MRMMxJ.js";import{X as l}from"./XAxis-C-anAgqA.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BRkWLUiC.js";import"./index-CEJvLeX_.js";import"./index-B9x0kJ-U.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-P7Da5mqR.js";import"./isWellBehavedNumber-DStaytIC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-QvnV0uNt.js";import"./axisSelectors-DjHfkPnH.js";import"./d3-scale-BcvXASmu.js";import"./index-BetN_RMo.js";import"./index-DkJjmLoR.js";import"./renderedTicksSlice-BUXo475V.js";import"./index-C__FEdkF.js";import"./CartesianChart-CEUQRdCg.js";import"./chartDataContext-Bq32LFRB.js";import"./CategoricalChart-DAp11J6f.js";import"./Layer-CyvtfT-W.js";import"./Curve-DtF4KeGP.js";import"./types-CcKw46qs.js";import"./step-DzAe_mUU.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-s0U1kgXJ.js";import"./Label-CP2XtCyN.js";import"./Text-KAAJmctl.js";import"./DOMUtils-ccwVme2-.js";import"./useId-C3MUzbkU.js";import"./useBackwardsCompatibleTheme-DY45QFX2.js";import"./ZIndexLayer-BBvGlV3x.js";import"./useAnimationId-B4WX31v5.js";import"./ActivePoints-W3o0JREG.js";import"./Dot-BTGCUhRH.js";import"./RegisterGraphicalItemId-zWnNyz48.js";import"./ErrorBarContext-COzjx-TB.js";import"./GraphicalItemClipPath-DH9zOtRz.js";import"./SetGraphicalItem-CXIeHIB6.js";import"./getRadiusAndStrokeWidthFromDot-PgyeTlLk.js";import"./ActiveShapeUtils-VwknAe2e.js";import"./useGraphicalItemIdentity-BGObpJ42.js";import"./CartesianAxis-B0pvT4G3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
