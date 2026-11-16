import{R as t}from"./iframe-BoIdwylW.js";import{R as m}from"./zIndexSlice-PMZXbuz8.js";import{L as s}from"./LineChart-bS6_-KnL.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-C9V6t-D9.js";import{X as l}from"./XAxis-ClVSu1zU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CtzWd-qA.js";import"./throttle-DJovDE6i.js";import"./index-DNtzd00k.js";import"./index-D93QOL6W.js";import"./RechartsWrapper-KwWkpOaO.js";import"./axisSelectors-CnNiq6Rh.js";import"./polarAxisSelectors-BUrHoreM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Asjkzq2w.js";import"./index-Cb6O7Zhr.js";import"./index-DeVO3TjK.js";import"./renderedTicksSlice-BcY34TaC.js";import"./index-DLxdIIWm.js";import"./fillDefinitions-CK96g-PQ.js";import"./CartesianChart-RjOUEsRj.js";import"./chartDataContext-XVkCEP1D.js";import"./CategoricalChart-8Ce8TnvZ.js";import"./Layer-DnLGFXqh.js";import"./Curve-BucXWP1n.js";import"./types-D0djA_gg.js";import"./step-cn3vFhcC.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CG-hLtdl.js";import"./Label-B2lBcb4D.js";import"./Text-D_S4fT48.js";import"./ZIndexLayer-BYJgF0xG.js";import"./ActivePoints-Dv9hEuIy.js";import"./Dot-CLBNcaQB.js";import"./activeStyles-kk8IGRJt.js";import"./useAnimationId-BZtpw3X8.js";import"./Symbols-Cpgbh6kd.js";import"./symbol-ChnJAo1F.js";import"./ErrorBarContext-DqGqKTxS.js";import"./SetGraphicalItem-B5MmjNJa.js";import"./getRadiusAndStrokeWidthFromDot-DvyJSF9f.js";import"./ActiveShapeUtils-BK27ZWgW.js";import"./useEffectiveDataKey-QRSJB29_.js";import"./CartesianAxis-DE9aH7XM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
