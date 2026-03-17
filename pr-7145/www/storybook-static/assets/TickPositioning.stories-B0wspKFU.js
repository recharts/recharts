import{e as t}from"./iframe-BTtdS09W.js";import{R as n}from"./arrayEqualityCheck-Cr7uheU5.js";import{L as s}from"./LineChart-FIvbi4LX.js";import{L as c}from"./Line-BlgG3M-A.js";import{X as d}from"./XAxis-BIGryZaf.js";import{R as l}from"./RechartsHookInspector-CAlJBqiK.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BNjLFhbQ.js";import"./immer-h2tBWHbd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CVSfFbBC.js";import"./index-qoIXPrbj.js";import"./hooks-D1OOIbEZ.js";import"./axisSelectors-C-C-XPOd.js";import"./d3-scale-cMqm19h5.js";import"./zIndexSlice-upTe-uMW.js";import"./renderedTicksSlice-DJkpJNhd.js";import"./CartesianChart-ClmLpAb4.js";import"./chartDataContext-ByF2cza-.js";import"./CategoricalChart-DC4azccj.js";import"./Layer-CG03jz1V.js";import"./ReactUtils-DVOsTE35.js";import"./Label-DQKpHpKK.js";import"./Text-bWAVTtUg.js";import"./DOMUtils-WKcDWUte.js";import"./ZIndexLayer-CbMDIpL4.js";import"./ActivePoints-B3QE05Z9.js";import"./Dot-PYiq21Zo.js";import"./types-DbbwF8j4.js";import"./RegisterGraphicalItemId-3lWinSBd.js";import"./ErrorBarContext-amKR2pcK.js";import"./GraphicalItemClipPath-5TXw2OKP.js";import"./SetGraphicalItem-BR57Hu8e.js";import"./useAnimationId-D12e2U_3.js";import"./getRadiusAndStrokeWidthFromDot-B3UN4p5A.js";import"./ActiveShapeUtils-BJOC9-wX.js";import"./isPlainObject-LS29Qx7o.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CIL45UrG.js";import"./Trapezoid-DqH5uCSa.js";import"./Sector-U4JfKldd.js";import"./Symbols-DPD-AVYc.js";import"./symbol-C5fxreGH.js";import"./step-8k9vNXVF.js";import"./Curve-DdtOV6ZM.js";import"./CartesianAxis-Bttov5cI.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-DrM9enLn.js";import"./ChartSizeDimensions-DNML0thn.js";import"./OffsetShower-CC2yWEZE.js";import"./PlotAreaShower-4F-cactL.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
