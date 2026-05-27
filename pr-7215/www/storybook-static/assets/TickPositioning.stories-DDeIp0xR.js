import{e as t}from"./iframe-FqQriuOU.js";import{g as m}from"./arrayEqualityCheck-D81yCQ_E.js";import{L as s}from"./LineChart-Cd2DCj8j.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-4-mxtk0F.js";import{X as l}from"./XAxis-rE-0ziVR.js";import{R as v}from"./RechartsHookInspector-Bzl8PNqn.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CH-QvTob.js";import"./immer-majn-qZf.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CApzUvyj.js";import"./index-B7L9uR1Y.js";import"./hooks-B_UbI8Xu.js";import"./axisSelectors-_fK9ZDWF.js";import"./d3-scale-i74XhqWc.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-f7paLzdj.js";import"./renderedTicksSlice-C4IzMNte.js";import"./CartesianChart-DL9N19jV.js";import"./chartDataContext-8vaUd_eG.js";import"./CategoricalChart-D0upkKoq.js";import"./Layer-dRSSbr5y.js";import"./Curve-bxiY4w-f.js";import"./types-CfmOzYIG.js";import"./step-DRejhJRi.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BOrN0e6v.js";import"./Label-CKdOaAhH.js";import"./Text-DPCTz-gd.js";import"./DOMUtils-BuFom25w.js";import"./ZIndexLayer-C869JS3k.js";import"./useAnimationId-CwJGQlGj.js";import"./ActivePoints-p2Wn9c62.js";import"./Dot-CoDBEdb8.js";import"./RegisterGraphicalItemId-W17uiJWi.js";import"./ErrorBarContext-BDkPCebh.js";import"./GraphicalItemClipPath-BYvnIWBH.js";import"./SetGraphicalItem-w0uUjr7L.js";import"./getRadiusAndStrokeWidthFromDot-Bl0IsbtV.js";import"./ActiveShapeUtils-DpMDeTgr.js";import"./CartesianAxis-BeuIWSvD.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-FNdgkUyx.js";import"./ChartSizeDimensions-BmkjlCCd.js";import"./OffsetShower-6wrSmmyT.js";import"./PlotAreaShower-MAtCIzZg.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,n)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:n,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const st=["TickPositioning"];export{r as TickPositioning,st as __namedExportsOrder,mt as default};
