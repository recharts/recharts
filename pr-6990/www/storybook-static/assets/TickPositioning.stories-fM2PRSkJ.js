import{e as t}from"./iframe-uc6dFw_p.js";import{R as m}from"./arrayEqualityCheck-CQn2kQOi.js";import{L as s}from"./LineChart-BpnJQW3c.js";import{L as c}from"./Line-ByN8gtfV.js";import{X as d}from"./XAxis-bu2lwvBT.js";import{R as l}from"./RechartsHookInspector-IvFhBGHX.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-kGpremEA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DhOLU858.js";import"./hooks-vCWItnff.js";import"./axisSelectors-B8_chuAi.js";import"./zIndexSlice-WGd4Bakr.js";import"./renderedTicksSlice-nuZito-G.js";import"./CartesianChart-CgnwnU-y.js";import"./chartDataContext-Dmpd0AQd.js";import"./CategoricalChart-BjqK4Uyg.js";import"./Layer-DswXiCbz.js";import"./ReactUtils-Bs-3TSfa.js";import"./Label-D0b7Dnqv.js";import"./Text-Bqz-nWjx.js";import"./DOMUtils-DBQIyNfT.js";import"./ZIndexLayer-CxICY6ph.js";import"./ActivePoints-D6pcWJRZ.js";import"./Dot-CbTtT0Am.js";import"./types-BngWNVP1.js";import"./RegisterGraphicalItemId-Dzwld0hr.js";import"./ErrorBarContext-DROw9Wv2.js";import"./GraphicalItemClipPath-DhRCGnFu.js";import"./SetGraphicalItem-DzzG5GId.js";import"./useAnimationId-BjF_cXy3.js";import"./getRadiusAndStrokeWidthFromDot-DXA4nmLv.js";import"./ActiveShapeUtils-j7lBkeSN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B0I4wQZ7.js";import"./Trapezoid-BBf2jkzZ.js";import"./Sector-DJmKtBTn.js";import"./Symbols-ByXfoODU.js";import"./Curve-IfIaqkcg.js";import"./CartesianAxis-B3Lcnjmt.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-C4cmB5lh.js";import"./ChartSizeDimensions-DgaeT0Q8.js";import"./OffsetShower-CN5uyxGG.js";import"./PlotAreaShower-rJfWFAXI.js";const nt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
