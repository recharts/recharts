import{R as t}from"./iframe-CAwz8uN7.js";import{R as m}from"./zIndexSlice-TMbeSoaw.js";import{L as s}from"./LineChart-9lfdGqai.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-C7Pmhg54.js";import{X as l}from"./XAxis-DaHA7aw5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DMIb7SBs.js";import"./throttle-DghoigHv.js";import"./index-DgXSxR_f.js";import"./index-Bzw5OmaH.js";import"./RechartsWrapper-Dxg_wm9v.js";import"./axisSelectors-CpwbL3Oz.js";import"./polarAxisSelectors-Cc_qYj6o.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CIIJy1t9.js";import"./index-Bn6lI9jh.js";import"./index-DXtXm7rl.js";import"./renderedTicksSlice-GqHDAcQt.js";import"./index-D4t20APB.js";import"./fillDefinitions-CB-_Qdnq.js";import"./CartesianChart-Cfm778D2.js";import"./chartDataContext-BqdYE3y4.js";import"./CategoricalChart-BV8BHimy.js";import"./Layer-LEH2Le6G.js";import"./Curve-S9C-Z9CI.js";import"./types-BWdHpl7S.js";import"./step-D__pRIvp.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BvT9zs0X.js";import"./Label-CdS579rS.js";import"./Text-B8IGolEi.js";import"./ZIndexLayer-BXCDLr1d.js";import"./ActivePoints-CVXTLllc.js";import"./Dot-CLdEzait.js";import"./activeStyles-WxNZ0DKg.js";import"./useAnimationId-p8KP1za0.js";import"./Symbols-B_L6SHWg.js";import"./symbol-EvKS_tYy.js";import"./ErrorBarContext-Qh2D0zyI.js";import"./SetGraphicalItem-BpveB_1U.js";import"./getRadiusAndStrokeWidthFromDot-E1a8C94b.js";import"./ActiveShapeUtils-CWtt7knh.js";import"./useEffectiveDataKey-DBkqmySO.js";import"./CartesianAxis-VsizMTED.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
