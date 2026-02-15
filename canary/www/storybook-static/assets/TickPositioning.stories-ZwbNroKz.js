import{e as t}from"./iframe-yr43iL0r.js";import{R as m}from"./arrayEqualityCheck-CCQ3u8Vd.js";import{L as s}from"./LineChart-BUtK01_l.js";import{L as c}from"./Line-DPN0sTqh.js";import{X as d}from"./XAxis-CO6uFh57.js";import{R as l}from"./RechartsHookInspector-DBIDewuF.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Dq1WM_rK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CBwzaw9q.js";import"./hooks-DV8SPP2s.js";import"./axisSelectors-CxU8esto.js";import"./zIndexSlice-BFVNfIo_.js";import"./renderedTicksSlice-C-Ibv-v0.js";import"./CartesianChart-XyvFTYw0.js";import"./chartDataContext-CzToVTlc.js";import"./CategoricalChart-NU99wwp5.js";import"./Layer-CmzX8B_O.js";import"./ReactUtils-BmYUR6Pw.js";import"./Label-BXAwjjII.js";import"./Text-D8JJ6HaF.js";import"./DOMUtils-Dis7On6r.js";import"./ZIndexLayer-Cs9veiYj.js";import"./ActivePoints-C__HlfVm.js";import"./Dot-DO5eF7L8.js";import"./types-C8fXyDYe.js";import"./RegisterGraphicalItemId-CyCvhas2.js";import"./ErrorBarContext-OMAqLqYv.js";import"./GraphicalItemClipPath-Cvcgdpb5.js";import"./SetGraphicalItem-BOYYMY6l.js";import"./useAnimationId-CevQg5hG.js";import"./getRadiusAndStrokeWidthFromDot-DEWUqlIZ.js";import"./ActiveShapeUtils-tkDZnXJM.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-KnzijHvw.js";import"./Trapezoid-BsqiFDvD.js";import"./Sector-BWGZTQIf.js";import"./Symbols-DYDfKw0L.js";import"./Curve-BbMbMcrT.js";import"./CartesianAxis-DoAv_8BM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BF6TeZpk.js";import"./ChartSizeDimensions-DVhO3wZZ.js";import"./OffsetShower-po89n_GW.js";import"./PlotAreaShower-uj30a7QU.js";const nt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const pt=["TickPositioning"];export{r as TickPositioning,pt as __namedExportsOrder,nt as default};
