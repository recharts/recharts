import{e as t}from"./iframe-DDnGsu5h.js";import{R as n}from"./arrayEqualityCheck-b4GtS9KF.js";import{L as s}from"./LineChart-cU647Pqq.js";import{L as c}from"./Line-B4wil4Rf.js";import{X as d}from"./XAxis-_OohREfq.js";import{R as l}from"./RechartsHookInspector-BSABdRIX.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-fGyvU07W.js";import"./immer-Wl9pIdwq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CV2CC7gc.js";import"./index-d0V4PGet.js";import"./hooks-CvD5OSLo.js";import"./axisSelectors-K5XPsZJJ.js";import"./d3-scale-CMnVuEfq.js";import"./zIndexSlice-CzCRY4NE.js";import"./renderedTicksSlice-C6o-1nzY.js";import"./CartesianChart-B6G_xsde.js";import"./chartDataContext-BS9VYmJ6.js";import"./CategoricalChart-DhfYtuLa.js";import"./Layer-BQ5I3ZR3.js";import"./ReactUtils-LLGJjmJY.js";import"./Label-Cq1Jw9bg.js";import"./Text-DIC51zN-.js";import"./DOMUtils-jQ5hfjUg.js";import"./ZIndexLayer-CSa4Hu6m.js";import"./ActivePoints-Bm7ShVQX.js";import"./Dot-BvK9-kYF.js";import"./types-VBSg6qfW.js";import"./RegisterGraphicalItemId-BptZQ5zb.js";import"./ErrorBarContext-Bza5L9FQ.js";import"./GraphicalItemClipPath-wpXTFAhB.js";import"./SetGraphicalItem-Bpj0QyBT.js";import"./useAnimationId-CsY2QYNS.js";import"./getRadiusAndStrokeWidthFromDot-BQH46_oi.js";import"./ActiveShapeUtils-Qp0g2m0V.js";import"./isPlainObject-dg6p2L4N.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CItL8Q7z.js";import"./Trapezoid-sOsheLpd.js";import"./Sector-DVi4Mpj4.js";import"./Symbols-BliKz0Rz.js";import"./symbol-DvZtmJVK.js";import"./step-NA2d-6xM.js";import"./Curve-CVMF8Bc_.js";import"./CartesianAxis-C4D4URoI.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-DFiQJbL_.js";import"./ChartSizeDimensions-BTgFhtFz.js";import"./OffsetShower-C6Pk8qlF.js";import"./PlotAreaShower-Dg7-kQiU.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
