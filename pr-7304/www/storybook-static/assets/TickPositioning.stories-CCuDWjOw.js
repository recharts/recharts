import{e as t}from"./iframe-C1XJGX3t.js";import{R as n}from"./arrayEqualityCheck-BpeTDNly.js";import{L as s}from"./LineChart-CJ8-KU5u.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CdDOB73K.js";import{X as l}from"./XAxis-F1KgXCzm.js";import{R as v}from"./RechartsHookInspector-GAphqeRz.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DoOIdNyO.js";import"./immer-DdA_cEFp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Jcx6MylA.js";import"./index-BMIXdyLv.js";import"./hooks-DkyxLj8R.js";import"./axisSelectors-0L8Hl7-Q.js";import"./d3-scale-DfhtN67L.js";import"./zIndexSlice-YaBRx6kS.js";import"./renderedTicksSlice-ROonkpc2.js";import"./CartesianChart-DfX14VSl.js";import"./chartDataContext-COU-oqyF.js";import"./CategoricalChart-B6tCsX7-.js";import"./Layer-Dk6O6-C9.js";import"./ReactUtils-DetlFOn3.js";import"./Label-B-UiuQeI.js";import"./Text-CHym7YYQ.js";import"./DOMUtils-PN4-Wh3o.js";import"./ZIndexLayer-f3tuaVy9.js";import"./ActivePoints-CpaNcRJG.js";import"./Dot-CY448ZsK.js";import"./types-BO06-FVT.js";import"./RegisterGraphicalItemId-brpvqGPp.js";import"./ErrorBarContext-DDoiyoEo.js";import"./GraphicalItemClipPath-BPrExOyo.js";import"./SetGraphicalItem-VIgAq4Q4.js";import"./useAnimationId-Bi2kUagW.js";import"./getRadiusAndStrokeWidthFromDot-wpqoSr7D.js";import"./ActiveShapeUtils-C4hn4FRv.js";import"./isPlainObject-NaqmG00y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DhXh8lWP.js";import"./Trapezoid-CN-9c4Ka.js";import"./Sector-CK40XgG2.js";import"./Symbols-DjZQJjpC.js";import"./symbol-BPY5wxKC.js";import"./step-BSNAUXbk.js";import"./Curve-B6o2gEbs.js";import"./CartesianAxis-CUdmmf-V.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-FCQIpD8D.js";import"./ChartSizeDimensions-B31rA8_p.js";import"./OffsetShower-bDh9UTlF.js";import"./PlotAreaShower-ByyJWnzF.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
