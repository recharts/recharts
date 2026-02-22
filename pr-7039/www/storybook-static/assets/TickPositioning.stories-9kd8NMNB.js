import{e as t}from"./iframe-BAkhr1dX.js";import{R as n}from"./arrayEqualityCheck-ws_I-Su9.js";import{L as s}from"./LineChart-p-KD7BL6.js";import{L as c}from"./Line-BedHLVHg.js";import{X as d}from"./XAxis-DFbVQKiI.js";import{R as l}from"./RechartsHookInspector-CZGFYlgB.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CNqTx6xA.js";import"./immer-CpzDDdx2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C6vYGZxV.js";import"./index-Cogrk3y-.js";import"./hooks-BQ6EMEQX.js";import"./axisSelectors-5IeRVjyJ.js";import"./d3-scale-D4vzySek.js";import"./zIndexSlice-DySAbts1.js";import"./renderedTicksSlice-KIutDziH.js";import"./CartesianChart-JKhVhhuI.js";import"./chartDataContext-BxZ2tnlW.js";import"./CategoricalChart-BEpc5Jb6.js";import"./Layer-ChOUaBRc.js";import"./ReactUtils-CLeHX5Ip.js";import"./Label-C63pHtg-.js";import"./Text-DEUhZcIO.js";import"./DOMUtils-B-z1kise.js";import"./ZIndexLayer-D9oqm7-r.js";import"./ActivePoints-CD0GXcpd.js";import"./Dot-JL6yZKot.js";import"./types-UutyoBzA.js";import"./RegisterGraphicalItemId-BbgywdL0.js";import"./ErrorBarContext-DGlqNFZc.js";import"./GraphicalItemClipPath-wygGc-U-.js";import"./SetGraphicalItem-D74ae6eQ.js";import"./useAnimationId-DpHYdy2q.js";import"./getRadiusAndStrokeWidthFromDot-BlTIAy7U.js";import"./ActiveShapeUtils-xtyk6YAI.js";import"./isPlainObject-_51Ij8KQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DGk7C1pp.js";import"./Trapezoid-XKQAH1TM.js";import"./Sector-CoTacwlm.js";import"./Symbols-BpFdmF0L.js";import"./symbol-BeaTf5eH.js";import"./step-BqWOfOpT.js";import"./Curve-oAmAnVW8.js";import"./CartesianAxis-DhYmi_Op.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CEM5lfG1.js";import"./ChartSizeDimensions-DS99mPzw.js";import"./OffsetShower-BN9FCNNs.js";import"./PlotAreaShower-DjsLqly8.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
