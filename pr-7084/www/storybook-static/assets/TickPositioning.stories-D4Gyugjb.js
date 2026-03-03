import{e as t}from"./iframe-D5au-B4R.js";import{R as n}from"./arrayEqualityCheck-DjoT1CkP.js";import{L as s}from"./LineChart-ByBV-nct.js";import{L as c}from"./Line-GBkSu3V2.js";import{X as d}from"./XAxis-Djz3Z4bE.js";import{R as l}from"./RechartsHookInspector-DFTuWkwy.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DoxDJzak.js";import"./immer-Uxla1AdH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B2p68SqA.js";import"./index-CqclXjSb.js";import"./hooks-CjYYqk-o.js";import"./axisSelectors-CPPpM5-p.js";import"./d3-scale-DAtNW_dV.js";import"./zIndexSlice-Dfjz8HwK.js";import"./renderedTicksSlice-NNQLBsMs.js";import"./CartesianChart-B5W05POX.js";import"./chartDataContext-CVbY0bI2.js";import"./CategoricalChart-CjFfaA5A.js";import"./Layer-N2rtvF3c.js";import"./ReactUtils-BP9EaRxl.js";import"./Label-CgqPFnns.js";import"./Text-CodnAT-D.js";import"./DOMUtils-CCC5iRCA.js";import"./ZIndexLayer-D3P9nzyJ.js";import"./ActivePoints-BozXtQ62.js";import"./Dot-DOxQIUAd.js";import"./types-C71ySwku.js";import"./RegisterGraphicalItemId-wh7gYtX8.js";import"./ErrorBarContext-BKfr8U3o.js";import"./GraphicalItemClipPath-BSyS1Brn.js";import"./SetGraphicalItem-BsfuYCoV.js";import"./useAnimationId-B8Se4RD-.js";import"./getRadiusAndStrokeWidthFromDot-sXJnO0M5.js";import"./ActiveShapeUtils-XCFf1hjH.js";import"./isPlainObject-c9Qdn0OS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dfyov816.js";import"./Trapezoid-CE1-MrL0.js";import"./Sector-JrfJaAcz.js";import"./Symbols-DA9it_1u.js";import"./symbol-DYMTv-17.js";import"./step-BXVfDqRU.js";import"./Curve-Cud4Oq3s.js";import"./CartesianAxis-fQqkoIc6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-47pdZWe1.js";import"./ChartSizeDimensions-ITlssz9c.js";import"./OffsetShower-r5ZHHhNG.js";import"./PlotAreaShower-Ck8CTF06.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ht=["TickPositioning"];export{r as TickPositioning,ht as __namedExportsOrder,vt as default};
