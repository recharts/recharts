import{e as t}from"./iframe-DrwMi_jY.js";import{R as n}from"./arrayEqualityCheck-B-j0Xn6j.js";import{L as s}from"./LineChart-CdXzl4_-.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BuQavlay.js";import{X as l}from"./XAxis-31NaFi-n.js";import{R as v}from"./RechartsHookInspector-Dgz_6twg.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-s4nUKxVc.js";import"./immer-CGi3HKm3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BPsUoTC1.js";import"./index-BfRPVrJS.js";import"./hooks-DuA_RFk6.js";import"./axisSelectors-Df-PAYL2.js";import"./d3-scale-CR0wzDjj.js";import"./zIndexSlice-Cq0CmY1s.js";import"./renderedTicksSlice-6MUNcuFU.js";import"./CartesianChart-C-l714_S.js";import"./chartDataContext-Dpw29ePn.js";import"./CategoricalChart-Cnq8zR7d.js";import"./Layer-DYkX7ETa.js";import"./ReactUtils-QKY7d0Xg.js";import"./Label-Y-xTk_cW.js";import"./Text-BDAX0lGk.js";import"./DOMUtils-JSRhYAW0.js";import"./ZIndexLayer-BvKo2Q94.js";import"./ActivePoints-DQSj2864.js";import"./Dot-Bm1SdT5p.js";import"./types-BfZOKs5E.js";import"./RegisterGraphicalItemId-C8YIxCe8.js";import"./ErrorBarContext-DoWBXbsV.js";import"./GraphicalItemClipPath-CHSUdKNG.js";import"./SetGraphicalItem-Bw_3CFfP.js";import"./useAnimationId-BDrjbpdr.js";import"./getRadiusAndStrokeWidthFromDot-CvXHsMkU.js";import"./ActiveShapeUtils-BuFEUH-Q.js";import"./isPlainObject-DaSvI5No.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-s1druNuz.js";import"./Trapezoid-AXqmqz4r.js";import"./Sector-DniAdCyK.js";import"./Symbols-B6BVciUF.js";import"./symbol-B1XBVJt7.js";import"./step-8t-ymKLI.js";import"./Curve-B_0v1Aat.js";import"./CartesianAxis-DnPHxzem.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CmbvRTYj.js";import"./ChartSizeDimensions-D4m-G81R.js";import"./OffsetShower-r4JmIKW8.js";import"./PlotAreaShower-CAZL1ycm.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
