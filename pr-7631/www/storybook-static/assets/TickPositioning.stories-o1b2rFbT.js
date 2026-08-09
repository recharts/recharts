import{R as t}from"./iframe-D8LGzSZk.js";import{R as m}from"./zIndexSlice-D4In7Qwm.js";import{L as s}from"./LineChart-D5QTIoMv.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-ZoXFLPkA.js";import{X as l}from"./XAxis-C_x0Pf4s.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DBP8ZUoh.js";import"./index-NWBmwsqT.js";import"./index-BaqTm3t4.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BeJ0S4OV.js";import"./isWellBehavedNumber-D4yK7wtr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CZZbYxLA.js";import"./index-fhqam811.js";import"./index-DA6ZImtD.js";import"./axisSelectors-BOb7-s4k.js";import"./d3-scale-MiqNvyLk.js";import"./renderedTicksSlice-CA4Xyl-r.js";import"./CartesianChart-D_d2iI6W.js";import"./chartDataContext-Cw__b2Gb.js";import"./CategoricalChart-CdB0xgvp.js";import"./Layer-BAr2SIyH.js";import"./Curve-DT0m8y-G.js";import"./types-DdZOgyMd.js";import"./step-DqFmeUpS.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CHvu2d7x.js";import"./Label-Bqhs0VHz.js";import"./Text-Ck4AHDur.js";import"./DOMUtils-wR-VJIN5.js";import"./ZIndexLayer-DHXeXlB8.js";import"./useAnimationId-BUbByZru.js";import"./ActivePoints-OrQGZuXb.js";import"./Dot-Cpsl4ohG.js";import"./RegisterGraphicalItemId-Co71u55H.js";import"./ErrorBarContext-CERdVHDL.js";import"./graphicalItemIdentity-Cj_WIcRj.js";import"./SetGraphicalItem-CcV_dEEg.js";import"./getRadiusAndStrokeWidthFromDot-Cc17-_w5.js";import"./ActiveShapeUtils-325OC07p.js";import"./RechartsThemeContext-CPh4O7nx.js";import"./CartesianAxis-B5BkrXXa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const pt=["TickPositioning"];export{r as TickPositioning,pt as __namedExportsOrder,at as default};
