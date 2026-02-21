import{e as t}from"./iframe-Bu-inuC_.js";import{R as n}from"./arrayEqualityCheck-DU89AxsE.js";import{L as s}from"./LineChart-nzpQheVg.js";import{L as c}from"./Line-QmWmoYT_.js";import{X as d}from"./XAxis-B7Sm-Q2v.js";import{R as l}from"./RechartsHookInspector-kfypTTkJ.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CsH4psWY.js";import"./immer-XJQsdFk2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DprTEw8A.js";import"./index-DtrjCIe1.js";import"./hooks-B2OsnqL5.js";import"./axisSelectors-Cj-Rs3MP.js";import"./d3-scale-BAf69j3g.js";import"./zIndexSlice-jAGqg83w.js";import"./renderedTicksSlice-CV5QPe8g.js";import"./CartesianChart-D_KSdiR0.js";import"./chartDataContext-CNWF4aQ0.js";import"./CategoricalChart-CbSijQZS.js";import"./Layer-Dlph539k.js";import"./ReactUtils-CbatvDS3.js";import"./Label-Bztw_jsS.js";import"./Text-C9R9pE-c.js";import"./DOMUtils-D9MAnWMp.js";import"./ZIndexLayer-XPmioUZb.js";import"./ActivePoints-4FzqXwK2.js";import"./Dot-C-ngH4D5.js";import"./types-kezhLfGE.js";import"./RegisterGraphicalItemId-D1pnqeqs.js";import"./ErrorBarContext-DApypuO7.js";import"./GraphicalItemClipPath-Tj00x8Wp.js";import"./SetGraphicalItem-Brp5xTx2.js";import"./useAnimationId-BQHAYEwx.js";import"./getRadiusAndStrokeWidthFromDot-ClhAYeel.js";import"./ActiveShapeUtils-BT0ZFYuE.js";import"./isPlainObject-Dg1QCtSt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ih3X5Nav.js";import"./Trapezoid-DN15z973.js";import"./Sector-K5K0caPh.js";import"./Symbols-CfIo9P3Y.js";import"./symbol-DCuuGdc1.js";import"./step-CG3E5dJ5.js";import"./Curve-SSe25XRS.js";import"./CartesianAxis-RY4R-JEB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CiBd-8tu.js";import"./ChartSizeDimensions-BFqzoU52.js";import"./OffsetShower-D2S5vzbK.js";import"./PlotAreaShower-BXNxywRo.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
