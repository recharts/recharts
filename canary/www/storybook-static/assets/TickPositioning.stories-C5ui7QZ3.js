import{R as t}from"./iframe-CWavEj4K.js";import{R as m}from"./zIndexSlice-5FODTzGQ.js";import{L as s}from"./LineChart-BgC7HVQX.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CsLLlM8L.js";import{X as l}from"./XAxis-eQhyZl4T.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bkho8TEt.js";import"./index-CAI0wlC8.js";import"./index-BUN8uoaU.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Di3JUEKf.js";import"./isWellBehavedNumber-DmSAVoQw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BHgaBn1E.js";import"./index-rtKProJN.js";import"./index-CB7M5YEf.js";import"./renderedTicksSlice-BaH7gash.js";import"./axisSelectors-XK5eG7GE.js";import"./d3-scale-BaBPlFPk.js";import"./CartesianChart-0mhtnzxI.js";import"./chartDataContext-B5TlaDO0.js";import"./CategoricalChart-DbdrFP36.js";import"./Layer-CGV1iRtS.js";import"./Curve-Be2eVpFP.js";import"./types-BmbikVaN.js";import"./step-De38Fzbp.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-tOezhTob.js";import"./Label-BBFntxVE.js";import"./Text-DKOGU3E1.js";import"./DOMUtils-bwyz7eCe.js";import"./ZIndexLayer-BFe8VyCX.js";import"./useAnimationId-DfkBBgp-.js";import"./ActivePoints-Bl1BNxPS.js";import"./Dot-DxpmSLW5.js";import"./RegisterGraphicalItemId-C4WMjaGC.js";import"./ErrorBarContext-DxKtXG2P.js";import"./GraphicalItemClipPath-CrXxzkB7.js";import"./SetGraphicalItem-DS2vQ-KW.js";import"./getRadiusAndStrokeWidthFromDot-CWHux7lI.js";import"./ActiveShapeUtils-DeeBbphL.js";import"./CartesianAxis-CUeBd0Qu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
