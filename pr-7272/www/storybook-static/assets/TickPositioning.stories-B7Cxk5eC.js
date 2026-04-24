import{e as t}from"./iframe-BB47BP_R.js";import{R as n}from"./arrayEqualityCheck-DsmpO4hY.js";import{L as s}from"./LineChart-DrFdoDpx.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-bLTmUZ5A.js";import{X as l}from"./XAxis-DQxW9k0r.js";import{R as v}from"./RechartsHookInspector-Bw_zVSe3.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ChHsTaSR.js";import"./immer-BPWc-cD_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dv8Lspfl.js";import"./index-hrFcE4SI.js";import"./hooks-0PGFTC0L.js";import"./axisSelectors-DwtBuocC.js";import"./d3-scale-DgdfyRiI.js";import"./zIndexSlice-BL1P8vjr.js";import"./renderedTicksSlice-CRYHzUP0.js";import"./CartesianChart-iArLd4YM.js";import"./chartDataContext-CX2kZkbq.js";import"./CategoricalChart-nIJc5rAa.js";import"./Layer-CRK7-uYr.js";import"./ReactUtils-EZ_AUGtU.js";import"./Label-C6JmnJH6.js";import"./Text-BaUe6hyp.js";import"./DOMUtils-nrc65p4C.js";import"./ZIndexLayer-DNdZ_4fl.js";import"./ActivePoints-uz5dhsjB.js";import"./Dot-CtP3KVPS.js";import"./types-DuFBytmr.js";import"./RegisterGraphicalItemId-BStK0gR5.js";import"./ErrorBarContext-zf4eWKzk.js";import"./GraphicalItemClipPath-4XrHnf0Z.js";import"./SetGraphicalItem-BjF_TCCf.js";import"./useAnimationId-CZw8U2vZ.js";import"./getRadiusAndStrokeWidthFromDot-Dy6dZFhg.js";import"./ActiveShapeUtils-C06yHpcU.js";import"./isPlainObject-DJ4Ss-Vn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DCPvPDZL.js";import"./Trapezoid-Bue5bot_.js";import"./Sector-pI1eovgo.js";import"./Symbols-BE9_Ndbl.js";import"./symbol-CvKjPx-j.js";import"./step-CIqLegi0.js";import"./Curve-DocFTLoT.js";import"./CartesianAxis-BRoz3wmQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-C_6qwcxC.js";import"./ChartSizeDimensions-BMFZIPSb.js";import"./OffsetShower-CPW2UGpW.js";import"./PlotAreaShower-CjbeU8IP.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
