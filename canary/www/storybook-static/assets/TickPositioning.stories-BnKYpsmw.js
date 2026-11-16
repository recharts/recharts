import{R as t}from"./iframe-lJBwbutv.js";import{R as m}from"./zIndexSlice-DOZGt0Xc.js";import{L as s}from"./LineChart-B4C7NJa3.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-8wwXFnCl.js";import{X as l}from"./XAxis-eFYFTspd.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CuoHmAis.js";import"./throttle-BD4ZOoVc.js";import"./index-D-yoUCLK.js";import"./index-DmjkyNBy.js";import"./RechartsWrapper-C4uciLnE.js";import"./axisSelectors-CiZzV4Ua.js";import"./polarAxisSelectors-g2gwazbI.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BrfLvVJ7.js";import"./index-BjclV3iC.js";import"./index-Bgy6zka-.js";import"./renderedTicksSlice-ChSQY0tz.js";import"./index-CPSRkKHN.js";import"./fillDefinitions-DgzgNWUG.js";import"./CartesianChart-BDxnsR9l.js";import"./chartDataContext-CuRy23UW.js";import"./CategoricalChart-CWJpCYvL.js";import"./Layer-CZzb4Onv.js";import"./Curve-Dazce3Yn.js";import"./types-BR2T4QCa.js";import"./step-CVKg82eE.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BXXFCsKs.js";import"./Label-C1XxCcqG.js";import"./Text-CH7ZTJa6.js";import"./ZIndexLayer-DMFEoW6r.js";import"./ActivePoints-De5xpIFf.js";import"./Dot-CHXRfIFb.js";import"./activeStyles-C_lJCdGG.js";import"./useAnimationId-Dj7sECHw.js";import"./Symbols-BrRhqa2q.js";import"./symbol-CHsvlSO9.js";import"./ErrorBarContext-CF700d8f.js";import"./SetGraphicalItem-BjwhNxsW.js";import"./getRadiusAndStrokeWidthFromDot-4zFCm6-q.js";import"./ActiveShapeUtils-6HIsnjoS.js";import"./useEffectiveDataKey-Bg5rFbYe.js";import"./CartesianAxis-DLyqJbpN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
