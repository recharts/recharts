import{e as t}from"./iframe-CkFXM4wB.js";import{R as n}from"./arrayEqualityCheck-YTUxoqUB.js";import{L as s}from"./LineChart-Cr9i5T2V.js";import{L as c}from"./Line-DrdnGU3b.js";import{X as d}from"./XAxis-BrfBiI3E.js";import{R as l}from"./RechartsHookInspector-B3xLxxYl.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CgSC7b_8.js";import"./immer-VfMLklKA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BszZHVIX.js";import"./index-BdUYKJku.js";import"./hooks-DcZa8pcT.js";import"./axisSelectors-CJKN5-Iu.js";import"./d3-scale-DufYgqIf.js";import"./zIndexSlice-B5-XLxo_.js";import"./renderedTicksSlice-DBeHnZTe.js";import"./CartesianChart-bKq-XmFS.js";import"./chartDataContext-BpQAywsQ.js";import"./CategoricalChart-Mr91sBr1.js";import"./Layer-dIWMs8k-.js";import"./ReactUtils-YGQ827Cl.js";import"./Label-BRTUkEBL.js";import"./Text-B-XsujPt.js";import"./DOMUtils-BTVGwpKA.js";import"./ZIndexLayer-4pe948L1.js";import"./ActivePoints-BuiTIuA5.js";import"./Dot-tTXkn-xi.js";import"./types-CUTS6MB0.js";import"./RegisterGraphicalItemId-ChGWl6rQ.js";import"./ErrorBarContext-CePwVUjY.js";import"./GraphicalItemClipPath-DuUyvYTP.js";import"./SetGraphicalItem-DJLRAQ5n.js";import"./useAnimationId-C9BYbESN.js";import"./getRadiusAndStrokeWidthFromDot-DSs9rVtO.js";import"./ActiveShapeUtils-CAJHYtrp.js";import"./isPlainObject-BUyihnnB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-aTEw3KI1.js";import"./Trapezoid-BrsI-zno.js";import"./Sector-DMfw9vpP.js";import"./Symbols-D5HyOKc9.js";import"./symbol-C6JS3ts9.js";import"./step-CbyAEdw5.js";import"./Curve-KgtuRfAG.js";import"./CartesianAxis-Bb-zNiAP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-D5JWzaIV.js";import"./ChartSizeDimensions-DcpLG0d2.js";import"./OffsetShower-BfJno29D.js";import"./PlotAreaShower-DrDSYf2L.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
