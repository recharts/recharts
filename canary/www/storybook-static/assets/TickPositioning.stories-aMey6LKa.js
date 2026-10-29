import{R as t}from"./iframe-CuGhPmlk.js";import{R as m}from"./zIndexSlice-BOf55cXv.js";import{L as s}from"./LineChart-D3WIuRG0.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DF_AoKL_.js";import{X as l}from"./XAxis-CKjURUro.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-JU216Ibw.js";import"./throttle-D0-4r1vg.js";import"./index-D9ZLEpwh.js";import"./index-CLkWjMz0.js";import"./RechartsWrapper-CkD6y7S6.js";import"./axisSelectors-Bzh2qDn8.js";import"./polarAxisSelectors-BwdXKLtW.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DH8f3Idv.js";import"./index-pU8qqa02.js";import"./index--76JpPy7.js";import"./renderedTicksSlice-DbYgrNox.js";import"./index-CxvEfTaS.js";import"./CartesianChart-CEtK8vTY.js";import"./ZIndexPortal-ClQ_oNM2.js";import"./CategoricalChart-DiUb-iYo.js";import"./Layer-C-miwaoG.js";import"./Curve-Cv9VJ7_-.js";import"./types-B0LhVrLk.js";import"./step-Bpop3Ls-.js";import"./path-DyVhHtw_.js";import"./LabelList-T4o6_Eqe.js";import"./Label-B62wTY7D.js";import"./Text-L-8TUXNX.js";import"./pageBackground-DCo2yzAB.js";import"./ZIndexLayer-BtXB3z2o.js";import"./ActivePoints-Bn3lQzBu.js";import"./Dot-DK7HsTYP.js";import"./activeStyles-U82greWp.js";import"./useAnimationId-DwU2Zwh7.js";import"./dataEntryStyles-DpUTp7qZ.js";import"./Symbols-DiagS28o.js";import"./symbol-CetSzj0T.js";import"./ErrorBarContext-B35UIqZH.js";import"./SetGraphicalItem-Csvl1Ioj.js";import"./getRadiusAndStrokeWidthFromDot-CE9VpvC8.js";import"./ActiveShapeUtils-BpXA90LR.js";import"./useEffectiveDataKey-Q10jxXsl.js";import"./CartesianAxis-D0E-Hq6W.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
