import{e as t}from"./iframe-DPQQART2.js";import{R as n}from"./arrayEqualityCheck-BDVhVf-C.js";import{L as s}from"./LineChart-R1i5j8mE.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DOKzQF_j.js";import{X as l}from"./XAxis-Dg1K6_fH.js";import{R as v}from"./RechartsHookInspector-BY990p5J.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cd3pKSWq.js";import"./immer-dq55Rz5k.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DC_xWfRE.js";import"./index-nGRWTrxk.js";import"./hooks-DXcftTpV.js";import"./axisSelectors-B504aTlT.js";import"./d3-scale-C2yFoO5R.js";import"./zIndexSlice-BUoZyNAT.js";import"./renderedTicksSlice-C1JV7OFv.js";import"./CartesianChart-CLNhkIDU.js";import"./chartDataContext-0uWjrM7s.js";import"./CategoricalChart-7Dzr-wy0.js";import"./Layer-BYcIhrnl.js";import"./ReactUtils-D4DJGTqa.js";import"./Label-C8kv474W.js";import"./Text-CViQHWzm.js";import"./DOMUtils-6osebbE8.js";import"./ZIndexLayer-Cp0zJDZz.js";import"./ActivePoints-CNiBL0AU.js";import"./Dot-CndRCnyF.js";import"./types-DnHa4Bsr.js";import"./RegisterGraphicalItemId-DOISCJhn.js";import"./ErrorBarContext-CyeM8Knn.js";import"./GraphicalItemClipPath-CE5KwO2y.js";import"./SetGraphicalItem-CxDeYlaA.js";import"./useAnimationId-DxUodg7H.js";import"./getRadiusAndStrokeWidthFromDot-CI-CHUDp.js";import"./ActiveShapeUtils-DelvD5C5.js";import"./isPlainObject-Cbsg7i00.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D56HZ_ik.js";import"./Trapezoid-BQHGElUM.js";import"./Sector-QSKBV-oi.js";import"./Symbols-DyAchY7x.js";import"./symbol-Dha6D-sP.js";import"./step-De3ZEy02.js";import"./Curve-D9PoEc7H.js";import"./CartesianAxis-CKdFXiLA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-OSeNAWG6.js";import"./ChartSizeDimensions-BOwpJgjF.js";import"./OffsetShower-DcT1D_xb.js";import"./PlotAreaShower-DM7QkzGT.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
