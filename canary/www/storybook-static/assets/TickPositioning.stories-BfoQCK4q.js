import{R as t}from"./iframe-BCd41l8E.js";import{R as m}from"./zIndexSlice-vwglsLr7.js";import{L as s}from"./LineChart--rT6z1G3.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Bu3kEO38.js";import{X as l}from"./XAxis-B6fLtz1T.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-COzcAqD2.js";import"./index-DqhoEKLL.js";import"./index-DbWv8bq-.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CfjrcH5k.js";import"./isWellBehavedNumber-By99v6ya.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DAuP6JTc.js";import"./index-B6Q7w6aQ.js";import"./index-BUl2VpQi.js";import"./renderedTicksSlice-DGgd7qJG.js";import"./axisSelectors-BWK81-bk.js";import"./d3-scale-BUxy_yCJ.js";import"./CartesianChart-C3_p9XVE.js";import"./chartDataContext-Drys5Aq2.js";import"./CategoricalChart-D4f6D4jQ.js";import"./Layer-BlOdZtAq.js";import"./Curve-5IbJhmxY.js";import"./types-CEIkXXH7.js";import"./step-B-Fp4nlk.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dw69Yp-8.js";import"./Label-BGS-IakE.js";import"./Text-rlFfv_Ik.js";import"./DOMUtils--ioWONbC.js";import"./ZIndexLayer-C4KPetXp.js";import"./useAnimationId-CGoXgsW2.js";import"./ActivePoints-Ca9ELXuu.js";import"./Dot-k24tsyTI.js";import"./RegisterGraphicalItemId-BNOR99Vc.js";import"./ErrorBarContext-ChbGQHV7.js";import"./GraphicalItemClipPath-mTO3f3R8.js";import"./SetGraphicalItem-C-GN70LS.js";import"./getRadiusAndStrokeWidthFromDot-Cs1a3Mwu.js";import"./ActiveShapeUtils-B7pKCaaA.js";import"./RechartsThemeContext-BUnkOlSA.js";import"./CartesianAxis-B_R0lNNU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const pt=["TickPositioning"];export{r as TickPositioning,pt as __namedExportsOrder,at as default};
