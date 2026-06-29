import{R as t}from"./iframe-BAIqIWNA.js";import{R as m}from"./zIndexSlice-CH0jeNcq.js";import{L as s}from"./LineChart-WgztRMlp.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Bq1IM0A9.js";import{X as l}from"./XAxis-BESD5mtP.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-RdvYAJ7W.js";import"./index-DEPXziQr.js";import"./index-8mm5rYzH.js";import"./get-BRwdZQjD.js";import"./resolveDefaultProps-i7ykL5qD.js";import"./isWellBehavedNumber-CNdP1Ytp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C_-Hq-nw.js";import"./index-toxz65-Z.js";import"./index-CyrXrpRf.js";import"./renderedTicksSlice-BzbX13g0.js";import"./axisSelectors-DSdgiRZF.js";import"./d3-scale-XjdmCel8.js";import"./CartesianChart-rcoBq7rb.js";import"./chartDataContext-B9E6qJUl.js";import"./CategoricalChart-2sY7x5Tz.js";import"./Layer-B1lMYI05.js";import"./Curve-DkPKhJGD.js";import"./types-CesEI09P.js";import"./step-BUpdG0kT.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C-tOmxqX.js";import"./Label-Bax8HmP7.js";import"./Text-zDVT9NAV.js";import"./DOMUtils-DVLfSCIT.js";import"./ZIndexLayer-_81h3bN-.js";import"./useAnimationId-BLdV4NOG.js";import"./ActivePoints-CRPdmnzs.js";import"./Dot-BHbC6SWf.js";import"./RegisterGraphicalItemId-D75UFrcW.js";import"./ErrorBarContext-kr74OQbY.js";import"./GraphicalItemClipPath-hNmJpUVR.js";import"./SetGraphicalItem-CgGxkUt7.js";import"./getRadiusAndStrokeWidthFromDot-B3GO9P3F.js";import"./ActiveShapeUtils-Cmphxx7v.js";import"./CartesianAxis-C8GWRYR8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
