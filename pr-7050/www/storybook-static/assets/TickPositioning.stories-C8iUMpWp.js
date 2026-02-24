import{e as t}from"./iframe-zwlZ9sO1.js";import{R as n}from"./arrayEqualityCheck-CJjag0zJ.js";import{L as s}from"./LineChart-C89fHwF7.js";import{L as c}from"./Line-CfwUAClX.js";import{X as d}from"./XAxis-CnAuA4rg.js";import{R as l}from"./RechartsHookInspector-DHSpqDma.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BQQGnYzX.js";import"./immer-BiA4uk1x.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C3nGIabu.js";import"./index-eUA2bMWQ.js";import"./hooks-DVdpADFp.js";import"./axisSelectors-B00kI0GG.js";import"./d3-scale-5RI03Ty3.js";import"./zIndexSlice-oDtJWVOP.js";import"./renderedTicksSlice-DgjXgpF0.js";import"./CartesianChart-DC-pRf_l.js";import"./chartDataContext-7-VMSKg2.js";import"./CategoricalChart-BEqoCUOW.js";import"./Layer-BoZ3FYfy.js";import"./ReactUtils-KsuQNZ47.js";import"./Label-IHkKI2op.js";import"./Text-tkFuu0zo.js";import"./DOMUtils-p8GgN5aM.js";import"./ZIndexLayer-DApcsQWW.js";import"./ActivePoints-DGPPefSL.js";import"./Dot-D8W5fYzP.js";import"./types-B9pmE4ka.js";import"./RegisterGraphicalItemId-HxfmjJrU.js";import"./ErrorBarContext-D80HzYFV.js";import"./GraphicalItemClipPath-DA28tNWG.js";import"./SetGraphicalItem-BCd9_sGO.js";import"./useAnimationId-BwEUZfoI.js";import"./getRadiusAndStrokeWidthFromDot-DJU7uBWj.js";import"./ActiveShapeUtils-DJB4inM1.js";import"./isPlainObject-DWYFOBoR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BsLE6Qwo.js";import"./Trapezoid-Dh6fdRWC.js";import"./Sector-1S-nbggX.js";import"./Symbols-ChQBVl9-.js";import"./symbol-By180QeN.js";import"./step-DUUdO3U1.js";import"./Curve-D-syDesq.js";import"./CartesianAxis--bPf-qQg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CfDL0XYd.js";import"./ChartSizeDimensions-DUwgzJDd.js";import"./OffsetShower-CZf4Y8fK.js";import"./PlotAreaShower-B03de4RT.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
