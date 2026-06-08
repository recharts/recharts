import{R as t}from"./iframe-DhtJ7XT9.js";import{R as m}from"./zIndexSlice-Cyl_38qZ.js";import{L as s}from"./LineChart-BZXc6vgn.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-E8j5PUVA.js";import{X as l}from"./XAxis-J3EL6z9G.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-C_Dt4QUB.js";import"./index-DTiOXBm6.js";import"./index-Dy3Dnjis.js";import"./get-DhiNYMWj.js";import"./resolveDefaultProps-BPtkQdI7.js";import"./isWellBehavedNumber-BgBeU-y_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DW50izWv.js";import"./index-C3B0n__O.js";import"./index-oGt5PMWE.js";import"./renderedTicksSlice-DPSLbyPQ.js";import"./axisSelectors-BpKxpkpF.js";import"./d3-scale-4zEsHVES.js";import"./string-B6fdYHAA.js";import"./CartesianChart-D-Z4Ej1T.js";import"./chartDataContext-Cf1gYJ5h.js";import"./CategoricalChart-BvhJOhQN.js";import"./Layer-nlXR0D_W.js";import"./Curve-Dqu8WPkG.js";import"./types-CLlZJjoC.js";import"./step-CPd-nqqu.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D0rQfZQx.js";import"./Label-Dca6KvYU.js";import"./Text-CqnnGvfO.js";import"./DOMUtils-BvTkEDRU.js";import"./ZIndexLayer-Cs-V2L6r.js";import"./useAnimationId-LwDoReja.js";import"./ActivePoints-Dr8Ax-C8.js";import"./Dot-BJDprnUj.js";import"./RegisterGraphicalItemId-xETxoZW3.js";import"./ErrorBarContext-C_o2ElKr.js";import"./GraphicalItemClipPath-ClwgD8YP.js";import"./SetGraphicalItem-Cm2Uf41M.js";import"./getRadiusAndStrokeWidthFromDot-Bj473EA9.js";import"./ActiveShapeUtils-BKy8UOMn.js";import"./CartesianAxis-D_A7dWIR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
