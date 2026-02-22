import{e as t}from"./iframe-daRyhr9r.js";import{R as n}from"./arrayEqualityCheck-2Pg-cl6R.js";import{L as s}from"./LineChart-2fYXYEKC.js";import{L as c}from"./Line-lb90ucHj.js";import{X as d}from"./XAxis-CvxqYJF6.js";import{R as l}from"./RechartsHookInspector-Dokqg7We.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BvBz7hsS.js";import"./immer-C5a-5af_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C9EF5VFS.js";import"./index-CdQ0cAhw.js";import"./hooks-DA2pBF9B.js";import"./axisSelectors-Bbgcz-jZ.js";import"./d3-scale-CDmp_quo.js";import"./zIndexSlice-B_dP-4_H.js";import"./renderedTicksSlice-BTk_Zw15.js";import"./CartesianChart-DkSXqfIZ.js";import"./chartDataContext-BrPbwshQ.js";import"./CategoricalChart-IEhmtzxN.js";import"./Layer-Bnvu8mRz.js";import"./ReactUtils-Dnts_VJo.js";import"./Label-C2V68gYo.js";import"./Text-D-j5LY5X.js";import"./DOMUtils-CuoS797S.js";import"./ZIndexLayer-B8DbAkQv.js";import"./ActivePoints-B0i6PuG-.js";import"./Dot-Czq-4Zob.js";import"./types-B1BFfyfQ.js";import"./RegisterGraphicalItemId-idmB961p.js";import"./ErrorBarContext-CeBeQ7um.js";import"./GraphicalItemClipPath-CSX8rQ5J.js";import"./SetGraphicalItem-BO-TqYJN.js";import"./useAnimationId-DzCJLB3u.js";import"./getRadiusAndStrokeWidthFromDot-C8K1qojG.js";import"./ActiveShapeUtils-BwOb2O47.js";import"./isPlainObject-Lpl2eom0.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D0FBXqMT.js";import"./Trapezoid-C-VqU7dw.js";import"./Sector-g7YAEghM.js";import"./Symbols-CmmXLG0z.js";import"./symbol-Bh5t8BoD.js";import"./step-Bh8CmZPH.js";import"./Curve-CNVfap9K.js";import"./CartesianAxis-BAyDOgMb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-AR7D8lqg.js";import"./ChartSizeDimensions-B_gACk3Q.js";import"./OffsetShower-Cbu4mMas.js";import"./PlotAreaShower-CyrKPvGx.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
