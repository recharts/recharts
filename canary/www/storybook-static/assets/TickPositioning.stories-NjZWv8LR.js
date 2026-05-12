import{e as t}from"./iframe-m4iUvHHE.js";import{R as n}from"./arrayEqualityCheck-h_ZmhyNH.js";import{L as s}from"./LineChart-OazyYQzk.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-B2TAto9y.js";import{X as l}from"./XAxis-D0aRIGij.js";import{R as v}from"./RechartsHookInspector-DquHYSn_.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DyxbBsOP.js";import"./immer-g1bGLmSg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-F72CiqvA.js";import"./index-CrxMp6gE.js";import"./hooks-DWsntCpj.js";import"./axisSelectors-DfPlbHbP.js";import"./d3-scale-Y-jFDeRI.js";import"./zIndexSlice-CKy2olf2.js";import"./renderedTicksSlice-BEB6E7mo.js";import"./CartesianChart-_tfuwHZj.js";import"./chartDataContext-BiqezE3h.js";import"./CategoricalChart-9uAdVsVQ.js";import"./Layer-CcrS99IB.js";import"./ReactUtils-BGxD9cqm.js";import"./Label-BCusTt26.js";import"./Text-B9di0q31.js";import"./DOMUtils-BJmvgBqy.js";import"./ZIndexLayer-DebxKBww.js";import"./ActivePoints-MuJUPiBM.js";import"./Dot-NbYBXchV.js";import"./types-ipm49NW_.js";import"./RegisterGraphicalItemId-uusu-k8r.js";import"./ErrorBarContext-CisfXBtR.js";import"./GraphicalItemClipPath-BgZNml_V.js";import"./SetGraphicalItem-DEb8ASoe.js";import"./useAnimationId-CowdAHeu.js";import"./getRadiusAndStrokeWidthFromDot-uhw_xs2j.js";import"./ActiveShapeUtils-DWhLewKE.js";import"./isPlainObject-BVIwbHuq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BNlZhouO.js";import"./Trapezoid-BQrLMZHr.js";import"./Sector-0LK2YG6H.js";import"./Symbols-B9jGSpgT.js";import"./symbol-Chx5djFD.js";import"./step-BaU1N5Sx.js";import"./Curve-lACOSqJl.js";import"./CartesianAxis-CqSuAZnU.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-5r_S6fe4.js";import"./ChartSizeDimensions-L8mur3p1.js";import"./OffsetShower-BU7tduPK.js";import"./PlotAreaShower-C2wXuw9M.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
