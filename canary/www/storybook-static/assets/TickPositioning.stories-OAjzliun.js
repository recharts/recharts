import{R as t}from"./iframe-D3XpTouC.js";import{R as m}from"./zIndexSlice-nnBmRw_5.js";import{L as s}from"./LineChart-KgOJI9H9.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-y-cDtTXP.js";import{X as l}from"./XAxis-gmDKzFC9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DlZqYg6P.js";import"./throttle-B0HYRial.js";import"./index-DHhgNiiB.js";import"./index-DTv10PLm.js";import"./RechartsWrapper-sYdg_-aY.js";import"./axisSelectors-DLLpPrx1.js";import"./polarAxisSelectors-C3Rr3kNg.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-k39_yHUv.js";import"./index-CSVEFX3e.js";import"./index-nr8cRX1L.js";import"./renderedTicksSlice-BzU7dsOB.js";import"./index-BIeNSbTD.js";import"./CartesianChart-DoW6CJ46.js";import"./chartDataContext-BRwGn-1-.js";import"./CategoricalChart-C7DNEYYD.js";import"./Layer-D4bzgnBD.js";import"./Curve-CryrSNFf.js";import"./types-BmT-ScX1.js";import"./step-Bc6BB28K.js";import"./path-DyVhHtw_.js";import"./activeStyles-CSOHGyzI.js";import"./Label-C-8XXSAc.js";import"./Text-B7A0Zl2p.js";import"./pageBackground-BB2_LToU.js";import"./useId-2hxDKCu1.js";import"./ZIndexLayer-DtbAElLD.js";import"./dataEntryStyles-lBmwmj-v.js";import"./useAnimationId-SaX7cxM4.js";import"./ActivePoints-D01Qbd0d.js";import"./Dot-Dh-neF-t.js";import"./RegisterGraphicalItemId-BJwNChl_.js";import"./ErrorBarContext-6Mnl7Bdn.js";import"./SetGraphicalItem-9ERbeIZR.js";import"./getRadiusAndStrokeWidthFromDot-2Ds3FVhy.js";import"./ActiveShapeUtils-DcUYSyXw.js";import"./useEffectiveDataKey-BFS5aOAm.js";import"./CartesianAxis-DzZUDYVE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
