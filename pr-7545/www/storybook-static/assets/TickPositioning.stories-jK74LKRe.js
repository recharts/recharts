import{R as t}from"./iframe-DMOF2lK6.js";import{R as m}from"./zIndexSlice-DhTc22fH.js";import{L as s}from"./LineChart-BMzNPlr1.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-D1OIUFwm.js";import{X as l}from"./XAxis-D4z0E1S_.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DdV_xgY5.js";import"./index-CPzx0qn0.js";import"./index-DMOQZokV.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-y8-G4ZMe.js";import"./isWellBehavedNumber-dZNNr5ol.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-OXven1HQ.js";import"./index-D6CqkTNp.js";import"./index-CZ5vZ9qb.js";import"./renderedTicksSlice-Ba4-qyoV.js";import"./axisSelectors-CxjdpUYQ.js";import"./d3-scale-fRi62pfH.js";import"./CartesianChart-Dri7Y6-1.js";import"./chartDataContext-CTH0eIlx.js";import"./CategoricalChart-C3YmcWt7.js";import"./Layer-7eLuysDW.js";import"./Curve-DysNMUK1.js";import"./types-CpWsykXF.js";import"./step-DvpijsBX.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BdaIVj2C.js";import"./Label-BEoMP2Su.js";import"./Text-Diu2UmEV.js";import"./DOMUtils-BbhpPFQ_.js";import"./ZIndexLayer-DUULPtO2.js";import"./useAnimationId-Djm7sZoE.js";import"./ActivePoints-Dw1JugLI.js";import"./Dot-DSdOAVgn.js";import"./RegisterGraphicalItemId-CeE9Z4_x.js";import"./ErrorBarContext-B97mauET.js";import"./GraphicalItemClipPath-BUGzJbXN.js";import"./SetGraphicalItem-B-lQGR6o.js";import"./getRadiusAndStrokeWidthFromDot-EOdI7GLa.js";import"./ActiveShapeUtils-CJ8DXgxz.js";import"./CartesianAxis-B3U1UDpz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
