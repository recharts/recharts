import{R as t}from"./iframe-ZPRKoU1G.js";import{R as m}from"./zIndexSlice-BsSz6rnO.js";import{L as s}from"./LineChart-ByVixgLP.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-B1M2NTAD.js";import{X as l}from"./XAxis-C6ITfnkV.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Dqh26iK6.js";import"./index-CDtIYzd-.js";import"./index-DWchyl7z.js";import"./get-CGa3_Ok6.js";import"./resolveDefaultProps-DXwWTI5c.js";import"./isWellBehavedNumber-C1VSg6lY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BYyxQWjf.js";import"./index-D9shaHbl.js";import"./index-CyTcUuX3.js";import"./renderedTicksSlice-Bj0AstQ5.js";import"./axisSelectors-B6X9oFFj.js";import"./d3-scale-YZIwu0YS.js";import"./string-B6fdYHAA.js";import"./CartesianChart-9gHk08A4.js";import"./chartDataContext-C8DnaOK4.js";import"./CategoricalChart-C8cl1dv9.js";import"./Layer-Cw8ar51S.js";import"./Curve-ePYEilGq.js";import"./types-BUDAoUUu.js";import"./step-BGVwbWHg.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D4M5eO1p.js";import"./Label-BBlujwtM.js";import"./Text-Cx16epvV.js";import"./DOMUtils-CWTdPns0.js";import"./ZIndexLayer-C_hsauba.js";import"./useAnimationId-CZUjtEje.js";import"./ActivePoints-BkkgePC3.js";import"./Dot-DfLTDUuc.js";import"./RegisterGraphicalItemId-NfBTs_Yc.js";import"./ErrorBarContext-C1hygpA9.js";import"./GraphicalItemClipPath-DcCaGC5D.js";import"./SetGraphicalItem-Dl4Vmegz.js";import"./getRadiusAndStrokeWidthFromDot-BJaZ3V1E.js";import"./ActiveShapeUtils-T50lNrG4.js";import"./CartesianAxis-BoMdju9k.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
