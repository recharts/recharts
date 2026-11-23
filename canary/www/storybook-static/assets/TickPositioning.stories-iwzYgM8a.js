import{R as t}from"./iframe-rIGtWy7o.js";import{R as m}from"./zIndexSlice-eSFvIDPB.js";import{L as s}from"./LineChart-Bx9iwnP7.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BfyEqFnX.js";import{X as l}from"./XAxis-DpQ4g3Lr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CESzkdGA.js";import"./throttle-BAKkGKnI.js";import"./index-DfdBIdkk.js";import"./index-BYEDHt0V.js";import"./RechartsWrapper-CnGTSvJE.js";import"./axisSelectors-DWDjUcOc.js";import"./polarAxisSelectors-bEQ_xhZ6.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BuxsQdRE.js";import"./index-B3oaotmj.js";import"./index-9mMSGnJG.js";import"./renderedTicksSlice-D_5kFm74.js";import"./index-HOvW1MHI.js";import"./fillDefinitions-OByCib8k.js";import"./CartesianChart-CAAztSss.js";import"./chartDataContext-DkD_onqA.js";import"./CategoricalChart-CiwW1p8S.js";import"./getRadiusAndStrokeWidthFromDot-DW8ZW_Lt.js";import"./Layer-BDOLwd71.js";import"./Curve-DqTam_xv.js";import"./types-BNwRi5Vr.js";import"./step-CBJGjOOI.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BBWs-HQj.js";import"./Label-BEKXXJOd.js";import"./Text-CUOAySYE.js";import"./ZIndexLayer-BQOJSgP1.js";import"./ActivePoints-B88CEUU0.js";import"./Dot-hlrtitgM.js";import"./activeStyles-CzQ969KV.js";import"./useAnimationId-BWpujR0E.js";import"./Symbols-CZml1OUW.js";import"./symbol-D8O-t0Dg.js";import"./ErrorBarContext-B8qTxBlT.js";import"./SetGraphicalItem-iESSYU5M.js";import"./ActiveShapeUtils-CybnivgX.js";import"./useEffectiveDataKey-DGGEUFr6.js";import"./CartesianAxis-DicS6pKh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,mt as __namedExportsOrder,pt as default};
