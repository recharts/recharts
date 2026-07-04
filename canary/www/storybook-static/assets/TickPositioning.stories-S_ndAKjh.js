import{R as t}from"./iframe-CwAvad--.js";import{R as m}from"./zIndexSlice-B2fpzDns.js";import{L as s}from"./LineChart-_-H7-oS0.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-6FU32cog.js";import{X as l}from"./XAxis-BvogKVrk.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CrTklCSM.js";import"./index-Dn-gVD0q.js";import"./index-Bp9sH-Ly.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-IMOML7UF.js";import"./isWellBehavedNumber-zbfLgurd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-yCiiQ5ZZ.js";import"./index-C7e37hiD.js";import"./index-Be6HzbxO.js";import"./renderedTicksSlice-DxVowf0r.js";import"./axisSelectors-gPKIePgu.js";import"./d3-scale-D8xH9yG8.js";import"./CartesianChart-DnHhaR9q.js";import"./chartDataContext-QAMmb-FO.js";import"./CategoricalChart-Bfs9hS_5.js";import"./Layer-DrEfcBvU.js";import"./Curve-D0-SKbNI.js";import"./types-MLS83tAs.js";import"./step-2IVSrnG4.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ChIe5_bS.js";import"./Label-Bfni9WDi.js";import"./Text-CMmFO1Ku.js";import"./DOMUtils-Wq5LU4mE.js";import"./ZIndexLayer-nfC8QR9T.js";import"./useAnimationId--5AtISHD.js";import"./ActivePoints-C9ktctM9.js";import"./Dot-Dc5RP_RF.js";import"./RegisterGraphicalItemId-C2zHigBB.js";import"./ErrorBarContext-CChsqgpp.js";import"./GraphicalItemClipPath-BiAQEIv1.js";import"./SetGraphicalItem-BRzb5Fh_.js";import"./getRadiusAndStrokeWidthFromDot-BTB7kz6B.js";import"./ActiveShapeUtils-BNg4U5cF.js";import"./CartesianAxis-Bp0BWyNg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ot=["TickPositioning"];export{r as TickPositioning,ot as __namedExportsOrder,it as default};
