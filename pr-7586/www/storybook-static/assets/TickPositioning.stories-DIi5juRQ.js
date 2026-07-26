import{R as t}from"./iframe-Bj-yQnc2.js";import{R as m}from"./zIndexSlice-DO4y32gA.js";import{L as s}from"./LineChart-jPI1RMxb.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DVqKkASG.js";import{X as l}from"./XAxis-XI4N_gb4.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CZQMCJbJ.js";import"./index-CXIrlcaX.js";import"./index-C2KJTwEF.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-7WXWf9aL.js";import"./isWellBehavedNumber-A843S5PG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BjwBN1rR.js";import"./index-npMcpUBc.js";import"./index-CUdhCrp9.js";import"./renderedTicksSlice-CagdShEY.js";import"./axisSelectors-DPyctkFQ.js";import"./d3-scale-rY2RSZRS.js";import"./CartesianChart-lhfYoKGZ.js";import"./chartDataContext-CFjDBvvT.js";import"./CategoricalChart-CavyJHAU.js";import"./Layer-BLp5IiBu.js";import"./Curve-CeWd9qmA.js";import"./types-YXwkeCBT.js";import"./step-C2Z_nim4.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DUyUCCX0.js";import"./Label-Cm9vMlt2.js";import"./Text-RzD6k6DF.js";import"./DOMUtils-DVhKp59x.js";import"./ZIndexLayer-CZNNIEzh.js";import"./useAnimationId-Yo_b-bos.js";import"./ActivePoints-BIrCi9Or.js";import"./Dot-B130eiz7.js";import"./RegisterGraphicalItemId-DueteZ3j.js";import"./ErrorBarContext-ft-NJLsc.js";import"./GraphicalItemClipPath-B-sHbKa-.js";import"./SetGraphicalItem-DWNEhJuv.js";import"./getRadiusAndStrokeWidthFromDot-BwxuSyAu.js";import"./ActiveShapeUtils-BoActjfk.js";import"./CartesianAxis-Dfz3FhFq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
