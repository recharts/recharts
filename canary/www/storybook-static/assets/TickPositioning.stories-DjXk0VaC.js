import{R as t}from"./iframe-DpDTD0JG.js";import{R as m}from"./zIndexSlice-DGwVx7BW.js";import{L as s}from"./LineChart-Br1I2t33.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BDAu27yc.js";import{X as l}from"./XAxis-DWjiAOFV.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DoBh-DCx.js";import"./index-DWuIzRsj.js";import"./index-Knde-ajF.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CxXNP2HM.js";import"./isWellBehavedNumber-DmMeAzDB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BCxYcmRP.js";import"./index-B2s4Biye.js";import"./index-Cd_oQMUU.js";import"./renderedTicksSlice-BRwKivWp.js";import"./axisSelectors-Ck_lqLE7.js";import"./d3-scale-BfEaqYEJ.js";import"./CartesianChart-BR7vTuCF.js";import"./chartDataContext-DFDKJiUi.js";import"./CategoricalChart-C6CLVh4_.js";import"./Layer-lPi_1jCz.js";import"./Curve-idp9_WLY.js";import"./types-C1vx5dmr.js";import"./step-7HWztNo7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DlouAWba.js";import"./Label-BwbI5cJ6.js";import"./Text-Bc5Ou4J8.js";import"./DOMUtils-3wivgqkH.js";import"./ZIndexLayer-DqWsyuzf.js";import"./useAnimationId-NxcyCMrj.js";import"./ActivePoints-iTKt_ZL7.js";import"./Dot-DB73TuWs.js";import"./RegisterGraphicalItemId-4knkFaEt.js";import"./ErrorBarContext-pGcuO8rw.js";import"./GraphicalItemClipPath-Bu8PaL2p.js";import"./SetGraphicalItem-BR_9ARmo.js";import"./graphicalItemIdentity-DOc93K5L.js";import"./ActiveShapeUtils-DCmpyR0n.js";import"./RechartsThemeContext-CVSBj4p3.js";import"./CartesianAxis-C7YtKMNS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
