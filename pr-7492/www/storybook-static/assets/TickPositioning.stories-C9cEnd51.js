import{R as t}from"./iframe-CThZUbdE.js";import{R as m}from"./zIndexSlice-BDry6QRp.js";import{L as s}from"./LineChart-kqCKkcIn.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-PXaX8gsH.js";import{X as l}from"./XAxis-Czxsq92a.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-6NPp0ZGq.js";import"./index-BrV4JukO.js";import"./index-uduL6A8n.js";import"./get-VHoxVJrE.js";import"./resolveDefaultProps-CLr4xBR_.js";import"./isWellBehavedNumber-DrJ1JLjW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dh_6CvsG.js";import"./index-vpoK7Ps1.js";import"./index-B32OlRwA.js";import"./renderedTicksSlice-aJkWvwrp.js";import"./axisSelectors-nng6Kbok.js";import"./d3-scale-GyQF8VSi.js";import"./CartesianChart-CnPFeSiy.js";import"./chartDataContext-Bvn2U6wJ.js";import"./CategoricalChart-DpMx8cAV.js";import"./Layer-C1XMVqEx.js";import"./Curve-CddvI1GC.js";import"./types-BBvrAdrd.js";import"./step-B0et1XJ2.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-PV5URjHV.js";import"./Label-CE0t5kQZ.js";import"./Text-CWNe3a9o.js";import"./DOMUtils-Dd4kG65v.js";import"./ZIndexLayer-LL2CdfOc.js";import"./useAnimationId-DzTn0J9i.js";import"./ActivePoints-NvSpkC2T.js";import"./Dot-n9UR6iqn.js";import"./RegisterGraphicalItemId-C0Zw2Zrk.js";import"./ErrorBarContext-D77zIOkm.js";import"./GraphicalItemClipPath-ClxBFvMa.js";import"./SetGraphicalItem-CSrXN1n2.js";import"./getRadiusAndStrokeWidthFromDot-CteGZ8Gy.js";import"./ActiveShapeUtils-llZbJ7MK.js";import"./CartesianAxis-BM-bncSs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
