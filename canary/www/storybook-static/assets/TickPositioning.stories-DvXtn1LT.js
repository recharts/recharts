import{e as t}from"./iframe-6KIzFwNo.js";import{R as n}from"./arrayEqualityCheck-CGqQmqAs.js";import{L as s}from"./LineChart-BVZ-QyFc.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BsmGvey2.js";import{X as l}from"./XAxis-D1NIlvkv.js";import{R as v}from"./RechartsHookInspector-DHKbTB6e.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CCemV21k.js";import"./immer-ql4DR2MT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BS52G--d.js";import"./index-CsYEUaZR.js";import"./hooks-DBLrG0Zs.js";import"./axisSelectors-IZ0_1Z0f.js";import"./d3-scale-CbScBmFc.js";import"./zIndexSlice-NyQa_NDp.js";import"./renderedTicksSlice-Bre3xjAe.js";import"./CartesianChart-BlXPw11X.js";import"./chartDataContext-BRQTC3wB.js";import"./CategoricalChart-C7SCseXA.js";import"./Layer-qh1dFQeJ.js";import"./ReactUtils-6iymp8WO.js";import"./Label-LIb90dQ2.js";import"./Text-EuDfZQJr.js";import"./DOMUtils-CF_DubJK.js";import"./ZIndexLayer-oU3hoYkX.js";import"./ActivePoints-DJj1zq0e.js";import"./Dot-CqmXJMhg.js";import"./types-Bw6Zsg7c.js";import"./RegisterGraphicalItemId-BJjNu8aV.js";import"./ErrorBarContext-BCQYaQUJ.js";import"./GraphicalItemClipPath-BiTFGdna.js";import"./SetGraphicalItem-B20_5yrQ.js";import"./useAnimationId-sBKnBvXo.js";import"./getRadiusAndStrokeWidthFromDot-Df503nhX.js";import"./ActiveShapeUtils-DmtFxvwi.js";import"./isPlainObject-CESm1hTz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BFSMfk7Q.js";import"./Trapezoid-R4CEZFO4.js";import"./Sector-BUTYQkfs.js";import"./Symbols-MySoeztG.js";import"./symbol-9PvFUqwr.js";import"./step-CIIfuNim.js";import"./Curve-BHLjwYFi.js";import"./CartesianAxis-ByaVWi8_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-D6ot0Q8y.js";import"./ChartSizeDimensions-Cv_HNug1.js";import"./OffsetShower-DwEE3buh.js";import"./PlotAreaShower-BdnS3yQL.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
