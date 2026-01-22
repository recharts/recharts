import{e as t}from"./iframe-DTIyp44P.js";import{R as s}from"./arrayEqualityCheck-CROVUPPr.js";import{L as m}from"./LineChart-BNbknmjN.js";import{L as c}from"./Line-Dm90Di08.js";import{X as d}from"./XAxis-C5uFpCOY.js";import{R as l}from"./RechartsHookInspector-D8bdCWM1.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CEVdASN5.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CMatZq67.js";import"./hooks-BoTdYeVb.js";import"./axisSelectors-DKeWHk_r.js";import"./zIndexSlice-CpP_hw3f.js";import"./CartesianChart-BYE7R-XT.js";import"./chartDataContext-DEKYo5U6.js";import"./CategoricalChart-DBE0EroA.js";import"./Layer-CNvBRmF0.js";import"./ReactUtils-BtxPFKgx.js";import"./Label-CM6isse0.js";import"./Text-oi_VPtbj.js";import"./DOMUtils-51XpcVVM.js";import"./ZIndexLayer-J9Ech39_.js";import"./ActivePoints-BGCbkuuz.js";import"./Dot-CleSK0nt.js";import"./types-CLTao0pZ.js";import"./RegisterGraphicalItemId-Bq2lDHMm.js";import"./ErrorBarContext-4Fy8J4Om.js";import"./GraphicalItemClipPath-fQ9wLHT4.js";import"./SetGraphicalItem-BpKNPEn8.js";import"./useAnimationId-cUd_sss9.js";import"./getRadiusAndStrokeWidthFromDot-avL-XlUZ.js";import"./ActiveShapeUtils-rB0qGo-m.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C99nylwM.js";import"./Trapezoid-C-AINK0-.js";import"./Sector-BVwTJui3.js";import"./Symbols-BXEo6yiB.js";import"./Curve-QqkAraw2.js";import"./CartesianAxis-C2UO2Q74.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-DH6qoWff.js";import"./ChartSizeDimensions-AlgeFMWv.js";import"./OffsetShower-Ytqxw96A.js";import"./PlotAreaShower-IGOsRXvZ.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,at as default};
