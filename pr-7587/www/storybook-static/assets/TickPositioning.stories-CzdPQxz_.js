import{R as t}from"./iframe-DPsVQxbE.js";import{R as m}from"./zIndexSlice-1brzNbqc.js";import{L as s}from"./LineChart-BidktN2X.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CWQOFj66.js";import{X as l}from"./XAxis-CYt1-RxN.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cj8wAsiz.js";import"./index-B1wCn-3B.js";import"./index-B_Y-xmpq.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BIwKMjhn.js";import"./isWellBehavedNumber-Chc7VT9N.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BCXiW-f1.js";import"./index-DB0est9g.js";import"./index-CYr1DPeq.js";import"./renderedTicksSlice-CC_kknQZ.js";import"./axisSelectors-CEp7-2uA.js";import"./d3-scale-BNrinBxy.js";import"./CartesianChart-DMOmnFKA.js";import"./chartDataContext-Cc6AxfML.js";import"./CategoricalChart-Bd2BlG5y.js";import"./Layer-DGWGYgzk.js";import"./Curve-DtEeL5Gu.js";import"./types-ColFKgNS.js";import"./step-BU8nTjqD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BlseN1Dx.js";import"./Label-C2Rhcs8s.js";import"./Text-B4JB7zPj.js";import"./DOMUtils-D6NwHzOL.js";import"./ZIndexLayer-MqiRX2rl.js";import"./useAnimationId-CtVxLpdf.js";import"./ActivePoints-qcduKxyw.js";import"./Dot-COXcIf5D.js";import"./RegisterGraphicalItemId-MGM9At2R.js";import"./ErrorBarContext-B2jO-XEn.js";import"./GraphicalItemClipPath-Dj3im7iZ.js";import"./SetGraphicalItem-CNwLGNNY.js";import"./getRadiusAndStrokeWidthFromDot-f0ZiEHIa.js";import"./ActiveShapeUtils-iUHBQUNz.js";import"./CartesianAxis-D5qEkVje.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const at=["TickPositioning"];export{r as TickPositioning,at as __namedExportsOrder,ot as default};
