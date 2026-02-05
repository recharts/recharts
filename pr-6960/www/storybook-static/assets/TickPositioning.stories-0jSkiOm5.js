import{e as t}from"./iframe-BDkb7FkG.js";import{R as s}from"./arrayEqualityCheck-B0TJyWD5.js";import{L as m}from"./LineChart-B2qKPL5H.js";import{L as c}from"./Line-CgXkRzu8.js";import{X as d}from"./XAxis-CmGav0vS.js";import{R as l}from"./RechartsHookInspector-BNEsfHz6.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BeK5tOdD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-mZGj0Z3E.js";import"./hooks-DxXidz5r.js";import"./axisSelectors-BNLmthUg.js";import"./zIndexSlice-CEfchlTx.js";import"./CartesianChart-D8s7iQvN.js";import"./chartDataContext-BN0HTO99.js";import"./CategoricalChart-QMn_55Fk.js";import"./Layer-DN29fGq2.js";import"./ReactUtils-Bu2m7OLZ.js";import"./Label-557v0PPI.js";import"./Text-DNxSgO5d.js";import"./DOMUtils-DkX8_PYo.js";import"./ZIndexLayer-CSKx51xZ.js";import"./ActivePoints-CkZqhQS2.js";import"./Dot-Cj5br_BU.js";import"./types-lD78ZLRW.js";import"./RegisterGraphicalItemId-CVSGS5U1.js";import"./ErrorBarContext-Cklgrfin.js";import"./GraphicalItemClipPath-PGYoXjM4.js";import"./SetGraphicalItem-D0--qzX6.js";import"./useAnimationId-Dt_DMrVN.js";import"./getRadiusAndStrokeWidthFromDot-B9swL3GN.js";import"./ActiveShapeUtils-BT6H0snO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CdEMe32h.js";import"./Trapezoid-BYTF93yz.js";import"./Sector-BDLqy63u.js";import"./Symbols-cZo6AVu-.js";import"./Curve-BhcGGWB4.js";import"./CartesianAxis-CqOMvTf3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BiD0RfS5.js";import"./ChartSizeDimensions-DMf6nTY3.js";import"./OffsetShower-CLob0hRN.js";import"./PlotAreaShower-DdbC7e3E.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,at as default};
