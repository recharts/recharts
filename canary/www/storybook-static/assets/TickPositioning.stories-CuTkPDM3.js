import{e as t}from"./iframe-BBcCu4tW.js";import{R as n}from"./arrayEqualityCheck-CIoNRuby.js";import{L as s}from"./LineChart-gbFMSOiC.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-C5n5D2in.js";import{X as l}from"./XAxis-BPDxC347.js";import{R as v}from"./RechartsHookInspector-BC_P3cZY.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CnZaYM7o.js";import"./immer-B-ffdvVM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B_0gdr0q.js";import"./index-B4OVM0gu.js";import"./hooks-BezqoFaW.js";import"./axisSelectors-DiO1RUhK.js";import"./d3-scale-wrbXHqm2.js";import"./zIndexSlice-CQ5dV6Tf.js";import"./renderedTicksSlice-qHXvxWkJ.js";import"./CartesianChart-CyTvOQNc.js";import"./chartDataContext-D3FIgu0K.js";import"./CategoricalChart-BMbsuZm1.js";import"./Layer-BqjItK9e.js";import"./ReactUtils-CK6hPv_Y.js";import"./Label-CVOeCU9m.js";import"./Text-x4pxLanI.js";import"./DOMUtils-BzbpMFLz.js";import"./ZIndexLayer-C7yDhLaY.js";import"./ActivePoints-DtB9X2U8.js";import"./Dot-DIIdBfpA.js";import"./types-BYSx98h-.js";import"./RegisterGraphicalItemId-zcKV7aTa.js";import"./ErrorBarContext-DHR2hShJ.js";import"./GraphicalItemClipPath-C4HnTmHF.js";import"./SetGraphicalItem-nt8-T9NJ.js";import"./useAnimationId-Cz7XNO3G.js";import"./getRadiusAndStrokeWidthFromDot-RM0GOVzs.js";import"./ActiveShapeUtils-CnMsGTMX.js";import"./isPlainObject-ByEPh_9t.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-6s0YHElS.js";import"./Trapezoid-CCXIiWsl.js";import"./Sector-V-b8xmGp.js";import"./Symbols-DeFezQUo.js";import"./symbol-dMCmyDlw.js";import"./step-CTgfjT4Z.js";import"./Curve-kTZvT6-S.js";import"./CartesianAxis-BamwTcDK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-DwDsLBsF.js";import"./ChartSizeDimensions-B3sIk0p_.js";import"./OffsetShower-CyfsTZlA.js";import"./PlotAreaShower-NtxTDk3F.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
