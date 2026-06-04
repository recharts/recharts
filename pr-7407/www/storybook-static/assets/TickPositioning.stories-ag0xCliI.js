import{R as t}from"./iframe-cxp8IH44.js";import{R as m}from"./zIndexSlice-DVvPLO9J.js";import{L as s}from"./LineChart-C3nI9I5A.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Dugp2-IC.js";import{X as l}from"./XAxis-BkiXq_ih.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BpTgB28d.js";import"./index-CJSUwDUV.js";import"./index-B9dWKkkc.js";import"./get-nRRBkHtC.js";import"./resolveDefaultProps-BXDigy9W.js";import"./isWellBehavedNumber-B-r9_3tz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-9oJQLgI7.js";import"./index-CMrkNKT4.js";import"./index-BUvfJbFI.js";import"./renderedTicksSlice-BJt7M2Lj.js";import"./axisSelectors-zbfaG1VW.js";import"./d3-scale-DFFI4GOw.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CmvmLWgk.js";import"./chartDataContext-BRXzicv6.js";import"./CategoricalChart-xGtZpTrE.js";import"./Layer-B0Ha3WJZ.js";import"./Curve-BrvgjqsR.js";import"./types-CPiShJxU.js";import"./step-D24hPJDM.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C411RvpV.js";import"./Label-C4cvj6qY.js";import"./Text-Bq45-f5m.js";import"./DOMUtils-BnT4arHk.js";import"./ZIndexLayer-jeREbB3U.js";import"./useAnimationId-B_RJXvak.js";import"./ActivePoints-B4uvin-c.js";import"./Dot-DdYUl2fA.js";import"./RegisterGraphicalItemId-BwO4qHQJ.js";import"./ErrorBarContext-DMac8CzA.js";import"./GraphicalItemClipPath-B7_MorTP.js";import"./SetGraphicalItem-DEAw5QhZ.js";import"./getRadiusAndStrokeWidthFromDot-DjjQR4pM.js";import"./ActiveShapeUtils-DV6TMhk4.js";import"./CartesianAxis-HJMOOyg_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
