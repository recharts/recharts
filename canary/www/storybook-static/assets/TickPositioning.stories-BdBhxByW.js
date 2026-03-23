import{e as t}from"./iframe-Ct0PK1iZ.js";import{R as n}from"./arrayEqualityCheck-cSrg192z.js";import{L as s}from"./LineChart-CHIpQrjQ.js";import{L as c}from"./Line-4WhNdwJc.js";import{X as d}from"./XAxis-ZfaBuFta.js";import{R as l}from"./RechartsHookInspector-Ct0UJLxA.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CkDZ6rk0.js";import"./immer-C_0hot5p.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-JBNrYn90.js";import"./index-e5TdOq0j.js";import"./hooks-B5ECIQG0.js";import"./axisSelectors-DfI31pZt.js";import"./d3-scale-BIuiM5G6.js";import"./zIndexSlice-C0pIss81.js";import"./renderedTicksSlice-Xed-5Uzt.js";import"./CartesianChart-F11oHMFT.js";import"./chartDataContext-Be_hCN-X.js";import"./CategoricalChart-DBM3lb6I.js";import"./Layer-BFqbkghr.js";import"./ReactUtils-C9XhBs7w.js";import"./Label-kZgIL_LG.js";import"./Text-D7gtJPhg.js";import"./DOMUtils-DZtY6UXL.js";import"./ZIndexLayer-CPK1fMG2.js";import"./ActivePoints-Bv-BLGDJ.js";import"./Dot-B3FhOR5M.js";import"./types-B_QiL_OE.js";import"./RegisterGraphicalItemId-DG67JJW9.js";import"./ErrorBarContext-C_IVi_zE.js";import"./GraphicalItemClipPath-DIAe0jt7.js";import"./SetGraphicalItem-BiB1viSJ.js";import"./useAnimationId-DhoQEmEH.js";import"./getRadiusAndStrokeWidthFromDot-BJC5mRjp.js";import"./ActiveShapeUtils-UwLXsB-I.js";import"./isPlainObject-B12Z6ZLF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bk1l59Or.js";import"./Trapezoid-BzWb9o7I.js";import"./Sector-6TbuA5HM.js";import"./Symbols-Cz5Eatoq.js";import"./symbol-ORh8C_38.js";import"./step-CfNjb2F4.js";import"./Curve-BtTKqNeq.js";import"./CartesianAxis-DpFipx6Q.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-DoqQxHuh.js";import"./ChartSizeDimensions-Blj7cX2O.js";import"./OffsetShower-kOurDMwT.js";import"./PlotAreaShower-CxG6J2wp.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
