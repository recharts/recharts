import{R as t}from"./iframe-CMWK1RnV.js";import{R as m}from"./zIndexSlice-BytvSaR0.js";import{L as s}from"./LineChart-CGrQ6IDY.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DfXl_x5M.js";import{X as l}from"./XAxis-DWpQtd1t.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DHHUYikL.js";import"./index-AeW_NqGc.js";import"./index-Syzk9fQZ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-phMwPKZe.js";import"./isWellBehavedNumber-CyyUOQdm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BeDYcqlN.js";import"./index-y1rMs8xl.js";import"./index-D8xGdR5e.js";import"./axisSelectors-BgzJH9qY.js";import"./d3-scale-CPniq2Ig.js";import"./renderedTicksSlice-X6zEnROV.js";import"./CartesianChart-CFORAsRI.js";import"./chartDataContext-LElJR2nd.js";import"./CategoricalChart-JJ_xXB-S.js";import"./Layer-CCdAbzHQ.js";import"./Curve-CBdRZDkC.js";import"./types-ClsmN4lT.js";import"./step-Cd2l06Ut.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bq0RY7UB.js";import"./Label-D4xT1rG9.js";import"./Text-CsZIDzps.js";import"./DOMUtils-BcIZbNLs.js";import"./ZIndexLayer-DaLkAJUw.js";import"./useAnimationId-McaNs9se.js";import"./ActivePoints-CSFUF4Gb.js";import"./Dot-3F0SNdEj.js";import"./RegisterGraphicalItemId-DLOCgd05.js";import"./ErrorBarContext-DX33Jely.js";import"./graphicalItemIdentity-CeQSeT3p.js";import"./SetGraphicalItem-DoQBw7Cq.js";import"./getRadiusAndStrokeWidthFromDot-RfkcUhvi.js";import"./ActiveShapeUtils-CDGNe_G8.js";import"./RechartsThemeContext-oN75whkn.js";import"./CartesianAxis-B04cLUP1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
