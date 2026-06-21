import{R as t}from"./iframe-BIq879V5.js";import{R as m}from"./zIndexSlice-D4TMV-f8.js";import{L as s}from"./LineChart-De2-ShXe.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-nYWcwLYL.js";import{X as l}from"./XAxis-BeATFl8n.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Bhe1IepA.js";import"./index-Bxqp1uTz.js";import"./index-1ZXeTe4f.js";import"./get-Dlp4HEDU.js";import"./resolveDefaultProps-D0mYDCdG.js";import"./isWellBehavedNumber-2nx214wI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-5ZbCTkSQ.js";import"./index-CoQnCr93.js";import"./index-qY5ecPCO.js";import"./renderedTicksSlice-wj6PxGI_.js";import"./axisSelectors-BEDQXBlF.js";import"./d3-scale-D2-Kj7HA.js";import"./CartesianChart-D5C06Dh0.js";import"./chartDataContext-DENfjobA.js";import"./CategoricalChart-B9HsjgZj.js";import"./Layer-BQ46hdaR.js";import"./Curve-D0B4vo0F.js";import"./types-sdPoIcnS.js";import"./step-CMJu7Zx7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Cplqb3ZM.js";import"./Label-CdyMu7UM.js";import"./Text-D9ArQUyF.js";import"./DOMUtils-U4n6Sms4.js";import"./ZIndexLayer-kG0uRxU5.js";import"./useAnimationId-7GzLXqBz.js";import"./ActivePoints-CAIFOa-o.js";import"./Dot-CeNBRJNR.js";import"./RegisterGraphicalItemId-CM4cjQUT.js";import"./ErrorBarContext-DapMvKSQ.js";import"./GraphicalItemClipPath-DLFobv0X.js";import"./SetGraphicalItem-DenlJqlF.js";import"./getRadiusAndStrokeWidthFromDot-Ezu5xS7M.js";import"./ActiveShapeUtils-DMlqT6AD.js";import"./CartesianAxis-DnWuLXim.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
