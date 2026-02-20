import{e as t}from"./iframe-Caz6nZ2I.js";import{R as m}from"./arrayEqualityCheck-CcFxY-Xq.js";import{L as s}from"./LineChart-DYX7Vvcr.js";import{L as c}from"./Line-CqZ6cal9.js";import{X as d}from"./XAxis-Dd-oJpip.js";import{R as l}from"./RechartsHookInspector-DDSzpp5A.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DAfTexXm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BaD7RcsJ.js";import"./hooks-CDeGIHYi.js";import"./axisSelectors-CATtk_Ip.js";import"./zIndexSlice-BOArh4At.js";import"./renderedTicksSlice-Dm3Q4on6.js";import"./CartesianChart-Dac4qaSb.js";import"./chartDataContext-Ckz2ERDZ.js";import"./CategoricalChart-3KZweWrA.js";import"./Layer-B1GIAb1E.js";import"./ReactUtils-R8D9NurX.js";import"./Label-Ek7Phs8Z.js";import"./Text-CLjo-AK5.js";import"./DOMUtils-CnTHdE3M.js";import"./ZIndexLayer-BLDjT7Qj.js";import"./ActivePoints-3_Sh9GV6.js";import"./Dot-UGjQcPgw.js";import"./types-8IoGCZ4X.js";import"./RegisterGraphicalItemId-t2v7UQtx.js";import"./ErrorBarContext-BJza0ZIr.js";import"./GraphicalItemClipPath-Cv5KZpMj.js";import"./SetGraphicalItem-DOmEhcN0.js";import"./useAnimationId-DFkOU0Go.js";import"./getRadiusAndStrokeWidthFromDot-DzStaRem.js";import"./ActiveShapeUtils-D4vAh-I1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DOnXuvZA.js";import"./Trapezoid-z6JJWRCw.js";import"./Sector-0pp4XTlb.js";import"./Symbols-C3i96Wdn.js";import"./Curve-B5Ob5vne.js";import"./CartesianAxis-DlMujoQ4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BX6q2UKF.js";import"./ChartSizeDimensions-C4z1FuV2.js";import"./OffsetShower-BJHPKe79.js";import"./PlotAreaShower-BuE2Upo9.js";const nt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
