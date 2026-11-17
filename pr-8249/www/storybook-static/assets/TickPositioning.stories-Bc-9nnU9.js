import{R as t}from"./iframe-66xGksI9.js";import{R as m}from"./zIndexSlice-CYY5i5GC.js";import{L as s}from"./LineChart-DVUVk3GL.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-4nEaU4yM.js";import{X as l}from"./XAxis-CXNDEo4D.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CNf-20ax.js";import"./throttle-pB5GcO80.js";import"./index-BdwqiePa.js";import"./index-BY9aQbpp.js";import"./RechartsWrapper-CBtKgDqJ.js";import"./axisSelectors-c7Es3nNM.js";import"./polarAxisSelectors-CBhhjzdU.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Ni_fDMoN.js";import"./index-DfrMyUP0.js";import"./index-BRQLVN4e.js";import"./renderedTicksSlice-C3z0elvI.js";import"./index-BykASSPU.js";import"./fillDefinitions-bQfE-RQi.js";import"./CartesianChart-Cqx4FTn2.js";import"./chartDataContext-Bw9Xn6sV.js";import"./CategoricalChart-cIWfYphX.js";import"./getRadiusAndStrokeWidthFromDot-BHMa596t.js";import"./Layer-C1IdSUB2.js";import"./Curve-C90n3hpg.js";import"./types-D-bLaOPe.js";import"./step-BPw2RLV2.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-D5RB-ObJ.js";import"./Label-CZY2Xnwr.js";import"./Text-DBDWQ-k-.js";import"./ZIndexLayer-CW7ymMrJ.js";import"./ActivePoints-B6OlZ3cX.js";import"./Dot-D3LIPFdP.js";import"./activeStyles-ueUYGAtI.js";import"./useAnimationId-CE-ISBvq.js";import"./Symbols-BAjlrbb5.js";import"./symbol-DTY0uCjS.js";import"./ErrorBarContext-Cekx66Ji.js";import"./SetGraphicalItem-BwgsUtDt.js";import"./ActiveShapeUtils-CCTJSoY2.js";import"./useEffectiveDataKey-Dw6tI5XK.js";import"./CartesianAxis-DQXtF-Wj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
