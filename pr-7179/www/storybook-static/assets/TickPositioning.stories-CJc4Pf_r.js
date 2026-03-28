import{e as t}from"./iframe-CQJPfyRy.js";import{R as n}from"./arrayEqualityCheck-Do-enXm5.js";import{L as s}from"./LineChart-B1m72ciF.js";import{L as c}from"./Line-C2VLHXFP.js";import{X as d}from"./XAxis-C55dSO1i.js";import{R as l}from"./RechartsHookInspector-BPipPUFl.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-0riu8XRb.js";import"./immer-DHWyBJal.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-7Czoz0bu.js";import"./index-asPVD2vd.js";import"./hooks-Br8DVu9M.js";import"./axisSelectors-gm8fWGo4.js";import"./d3-scale-0hh8p2_S.js";import"./zIndexSlice-BiBD01er.js";import"./renderedTicksSlice-DTP68QVC.js";import"./CartesianChart-CPXNCGau.js";import"./chartDataContext-DJi5hdYR.js";import"./CategoricalChart-CEJ--eNG.js";import"./Layer-BR9af65P.js";import"./ReactUtils-BwwuZj5u.js";import"./Label-BC7yp0Hg.js";import"./Text-DUnDznQK.js";import"./DOMUtils-D2gdOsD8.js";import"./ZIndexLayer-CPRNxtdQ.js";import"./ActivePoints-9_VA3S9i.js";import"./Dot-CkHgD_rL.js";import"./types-C_DlCak5.js";import"./RegisterGraphicalItemId-DMChCr2V.js";import"./ErrorBarContext-Dk7bnNHc.js";import"./GraphicalItemClipPath-CC9lmHGx.js";import"./SetGraphicalItem-Dq_i_ZrQ.js";import"./useAnimationId-CEC-e8Az.js";import"./getRadiusAndStrokeWidthFromDot-Cxhe8pLo.js";import"./ActiveShapeUtils-BA4ci1jq.js";import"./isPlainObject-CksZGLlM.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dj9r1Fs-.js";import"./Trapezoid-D7kT_7oQ.js";import"./Sector-D83NtDJL.js";import"./Symbols-l6c5y-Z_.js";import"./symbol-BeKwF9Wk.js";import"./step-8cZIHSos.js";import"./Curve-ChVqsMwJ.js";import"./CartesianAxis-DQSl9zNs.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-Dy-O-5Cx.js";import"./ChartSizeDimensions-LXLx4zNb.js";import"./OffsetShower-DO50Xpn-.js";import"./PlotAreaShower-5vmtZ6RI.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
