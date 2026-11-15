import{R as t}from"./iframe-DQsNmxmG.js";import{R as m}from"./zIndexSlice-fYCbSPba.js";import{L as s}from"./LineChart-BCUJdCcc.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-C3FLWaiJ.js";import{X as l}from"./XAxis-BeNbg6hp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C9L4dsEq.js";import"./throttle-zQAbuFwu.js";import"./index-6jBLt3fF.js";import"./index-DieS8gnr.js";import"./RechartsWrapper-MEg26Y_7.js";import"./axisSelectors-BsRkt3Xk.js";import"./polarAxisSelectors-B-0rkllN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BIy4_L5R.js";import"./index-CbIjVRAX.js";import"./index-CCZsgeAv.js";import"./renderedTicksSlice-vSa4eBxF.js";import"./index-Cq0Y-kP9.js";import"./fillDefinitions-CxoYZDG2.js";import"./CartesianChart-B32Zddgy.js";import"./chartDataContext-S0JtTO97.js";import"./CategoricalChart-CKZnphjR.js";import"./Layer-JjdEQyi5.js";import"./Curve-C5fpylM9.js";import"./types-wkisKABV.js";import"./step-pQrH6ncJ.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CArKPFy6.js";import"./Label-BGoCqB35.js";import"./Text-Qtf5nEek.js";import"./ZIndexLayer-DJNsuc82.js";import"./ActivePoints-BlJUvkga.js";import"./Dot-CyU-jpb1.js";import"./activeStyles-BgO2Wbsx.js";import"./useAnimationId-CfQHWCsS.js";import"./Symbols-CXxuzOPp.js";import"./symbol-0bvODblh.js";import"./ErrorBarContext-WH4H2KKq.js";import"./SetGraphicalItem-BG-GEzcM.js";import"./getRadiusAndStrokeWidthFromDot-B1d6CA7m.js";import"./ActiveShapeUtils-t6nFfTlu.js";import"./useEffectiveDataKey-CR-coZ9_.js";import"./CartesianAxis-Crywq0Oq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
