import{R as t}from"./iframe-C0aK3mAR.js";import{R as m}from"./zIndexSlice-CaqKW8u4.js";import{L as s}from"./LineChart-aN-j3XL0.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-YVyFfETe.js";import{X as l}from"./XAxis-oAoSo46I.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D6yE2Er3.js";import"./throttle-Csdh9d4D.js";import"./index-DJ1epRIR.js";import"./index-C-RKF6PB.js";import"./RechartsWrapper-D12_Reb0.js";import"./axisSelectors-D_X7VOsT.js";import"./polarAxisSelectors-CptuzTw1.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B_djSwnK.js";import"./index-Dtyq-_Jm.js";import"./index-wV9G7-7k.js";import"./renderedTicksSlice-De1tNPIq.js";import"./index-BYUWoSWy.js";import"./fillDefinitions-D-bSMJSA.js";import"./CartesianChart-D4R8-bYQ.js";import"./chartDataContext-FpEebw8X.js";import"./CategoricalChart-D8DGrwi8.js";import"./Layer-CagqC790.js";import"./Curve-OWEMFZrc.js";import"./types-CmOm39qI.js";import"./step-BYip5hLG.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-cRuikTAi.js";import"./Label-DrUlGLQ7.js";import"./Text-sM2vj8c3.js";import"./ZIndexLayer-Cc5kF-_I.js";import"./ActivePoints-BHO4PoXJ.js";import"./Dot-C9rBqPl7.js";import"./activeStyles-D8lDViyk.js";import"./useAnimationId-sv0XuVET.js";import"./Symbols-CEatGjCT.js";import"./symbol-BI0KcbYN.js";import"./ErrorBarContext-zrW_wYS_.js";import"./SetGraphicalItem-D-GYSqJW.js";import"./getRadiusAndStrokeWidthFromDot-QbS_nSQ9.js";import"./ActiveShapeUtils-BPSXSNcd.js";import"./useEffectiveDataKey-C4GReELG.js";import"./CartesianAxis-CUkLyyeh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
