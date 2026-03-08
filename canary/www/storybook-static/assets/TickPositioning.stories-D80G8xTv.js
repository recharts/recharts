import{e as t}from"./iframe-CV07hTJo.js";import{R as n}from"./arrayEqualityCheck-DZYwMANi.js";import{L as s}from"./LineChart-C0em9gyy.js";import{L as c}from"./Line-hUrqHSMM.js";import{X as d}from"./XAxis-D8-FPQnZ.js";import{R as l}from"./RechartsHookInspector-ouq6dPls.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps--Z_AJC6X.js";import"./immer-DZr-3B4h.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B_A_zLwr.js";import"./index-BbPZUkKO.js";import"./hooks-hiQan1d_.js";import"./axisSelectors-Colr1FXT.js";import"./d3-scale-Dsv-X1x3.js";import"./zIndexSlice-bGazLamm.js";import"./renderedTicksSlice-BVud2Eit.js";import"./CartesianChart-DxPhfcnf.js";import"./chartDataContext-Diiede2r.js";import"./CategoricalChart-BXVtqco4.js";import"./Layer-CjSu9kHg.js";import"./ReactUtils-C6WIusF5.js";import"./Label-DYpp1LIm.js";import"./Text-DQ9H0cYG.js";import"./DOMUtils-tjr3CYLs.js";import"./ZIndexLayer-Bsxd_xbk.js";import"./ActivePoints-DKxtfJTG.js";import"./Dot-CJkLJ9KV.js";import"./types-BW-iMsEE.js";import"./RegisterGraphicalItemId-C78YkPgS.js";import"./ErrorBarContext-CcVjgEJt.js";import"./GraphicalItemClipPath-DbLJ1P35.js";import"./SetGraphicalItem-CWJSiYUF.js";import"./useAnimationId-DLuTmxa5.js";import"./getRadiusAndStrokeWidthFromDot-DlSSP4S2.js";import"./ActiveShapeUtils-dmrR1-Re.js";import"./isPlainObject-BDdyHw-3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D3uD8Idm.js";import"./Trapezoid-C129hHgo.js";import"./Sector-BzLPim6R.js";import"./Symbols-DUW3Pbjx.js";import"./symbol-D3LFYW8o.js";import"./step-DxAhMwRF.js";import"./Curve-6Ct2z4dM.js";import"./CartesianAxis-DglFdQa3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-NB669Q6L.js";import"./ChartSizeDimensions-DYT9YPss.js";import"./OffsetShower-CIa2yD69.js";import"./PlotAreaShower-Lc3Ppbaa.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
