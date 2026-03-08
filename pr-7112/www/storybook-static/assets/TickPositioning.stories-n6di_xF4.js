import{e as t}from"./iframe-CLI455N8.js";import{R as n}from"./arrayEqualityCheck-DGATYUvM.js";import{L as s}from"./LineChart-CT3cO6cv.js";import{L as c}from"./Line-tHQrI0Gy.js";import{X as d}from"./XAxis-D9lstoZk.js";import{R as l}from"./RechartsHookInspector-B0jcEhQg.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CegQPTcY.js";import"./immer-DmWp1HVW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BiomK5HP.js";import"./index-BwppRXXR.js";import"./hooks-Doc11HYF.js";import"./axisSelectors-BdO5JamF.js";import"./d3-scale-BI_Xdw0D.js";import"./zIndexSlice-D_mnyKw0.js";import"./renderedTicksSlice-CceCuUpi.js";import"./CartesianChart-Bvwnl3Az.js";import"./chartDataContext-1HoxnSEy.js";import"./CategoricalChart-M5ONOIR4.js";import"./Layer-C2gLD8qT.js";import"./ReactUtils-D6yH62ZJ.js";import"./Label-DZ3NTBbi.js";import"./Text-B9IImLk3.js";import"./DOMUtils-DwfKCbJu.js";import"./ZIndexLayer-Bu63NknL.js";import"./ActivePoints-BykxdX5n.js";import"./Dot-DEiLNns9.js";import"./types-BBHZriQH.js";import"./RegisterGraphicalItemId-DhtbT04w.js";import"./ErrorBarContext-CHpZdGkV.js";import"./GraphicalItemClipPath-5s_f3x1V.js";import"./SetGraphicalItem-MRBrVOH2.js";import"./useAnimationId-CjNefpky.js";import"./getRadiusAndStrokeWidthFromDot-CtHwe_Ur.js";import"./ActiveShapeUtils-CFqNdOfc.js";import"./isPlainObject-BZ_hFATh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C4yn2vQK.js";import"./Trapezoid-B6vgceDf.js";import"./Sector-RnRqdmAJ.js";import"./Symbols-B_3hTHr3.js";import"./symbol-BobG1HrB.js";import"./step-Bbb8NlBF.js";import"./Curve-jc1v2UsA.js";import"./CartesianAxis-DTFJnQq6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-DzCTiCHw.js";import"./ChartSizeDimensions-CHU61BQR.js";import"./OffsetShower-B0bvPXsU.js";import"./PlotAreaShower-wBW1mPFi.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
