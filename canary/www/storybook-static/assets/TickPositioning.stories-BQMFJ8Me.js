import{R as t}from"./iframe-C9QnkkRp.js";import{R as m}from"./zIndexSlice-BYQlmGuM.js";import{L as s}from"./LineChart-3PxakhSA.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-wEa7wjvf.js";import{X as l}from"./XAxis-49PSd8B9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BwjvRfJi.js";import"./throttle-CzhN4mlB.js";import"./index-Bd4zIGdh.js";import"./index-Dp_pNI9d.js";import"./RechartsWrapper-Cq91RCWh.js";import"./axisSelectors-CTzSQU4W.js";import"./polarAxisSelectors-C_EdGVJO.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Yr2mcnpg.js";import"./index-BwU8wHQt.js";import"./index-WorF6OpA.js";import"./renderedTicksSlice-DR11ylMF.js";import"./index-D8Lsm-a-.js";import"./fillDefinitions-cPUsTY--.js";import"./CartesianChart-DUhViccR.js";import"./chartDataContext-BJIrZYve.js";import"./CategoricalChart-BY9HlJis.js";import"./Layer-CEkcTjee.js";import"./Curve-Dqipz6v0.js";import"./types-DqaK-59q.js";import"./step-DY5nvAcp.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BFdezSvK.js";import"./Label-yo2OQSgL.js";import"./Text-BwyCofjZ.js";import"./ZIndexLayer-CPmeg_kQ.js";import"./ActivePoints-D6MvrL16.js";import"./Dot-Dmq_4Bsa.js";import"./activeStyles-CN7lMIFZ.js";import"./useAnimationId-CShc60ZQ.js";import"./Symbols-D6kGSifP.js";import"./symbol-CG55pC-Z.js";import"./ErrorBarContext-BjyFMzrh.js";import"./SetGraphicalItem-C_jDfqao.js";import"./getRadiusAndStrokeWidthFromDot-CyNFak7V.js";import"./ActiveShapeUtils-Ba4XY1pS.js";import"./useEffectiveDataKey-DiymfXWH.js";import"./CartesianAxis-CyUzu-Nz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
