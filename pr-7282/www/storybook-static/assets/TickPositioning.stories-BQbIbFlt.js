import{e as t}from"./iframe-KDaejyXN.js";import{R as n}from"./arrayEqualityCheck-Dl9si1nG.js";import{L as s}from"./LineChart-LIE9GsFd.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-D4d4pIVB.js";import{X as l}from"./XAxis-CUWzsXQO.js";import{R as v}from"./RechartsHookInspector-BNR7Zm8b.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BkMgUNPT.js";import"./immer-CeGNtgFu.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D4JhW72j.js";import"./index-DSI_5Wf4.js";import"./hooks-CwyWi44i.js";import"./axisSelectors-BceHH7kX.js";import"./d3-scale-CG0ZS8xo.js";import"./zIndexSlice-rJuXE5Mc.js";import"./renderedTicksSlice-B9nrJdqK.js";import"./CartesianChart-CCFhyuSh.js";import"./chartDataContext-B8zHImkQ.js";import"./CategoricalChart-BdhxEmbd.js";import"./Layer-SuuPoHJx.js";import"./ReactUtils-Cz14zwuP.js";import"./Label-qsNuh3C9.js";import"./Text-QAqYT_st.js";import"./DOMUtils-nQzBqLwC.js";import"./ZIndexLayer-ByxBNcmF.js";import"./ActivePoints-9qhwqgPR.js";import"./Dot-BonfgY2V.js";import"./types-D57AIWPR.js";import"./RegisterGraphicalItemId-Dm0pQXAu.js";import"./ErrorBarContext-BOfeTKVj.js";import"./GraphicalItemClipPath-D6jTsWti.js";import"./SetGraphicalItem-F9UKQ2Ti.js";import"./useAnimationId-BgX8Z8_i.js";import"./getRadiusAndStrokeWidthFromDot-BSb3e5WQ.js";import"./ActiveShapeUtils-CHydaFDW.js";import"./isPlainObject-DwPMRYDf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B7hb1YKX.js";import"./Trapezoid-DebRFFpI.js";import"./Sector-Dm_k8cyb.js";import"./Symbols-DZnm1ivu.js";import"./symbol-BVVD6ru2.js";import"./step-DG8IXFxN.js";import"./Curve-CK8qujc-.js";import"./CartesianAxis-BiIKu8kc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BtJXyiTG.js";import"./ChartSizeDimensions-DVpdAMro.js";import"./OffsetShower-CxuZTe0D.js";import"./PlotAreaShower-N-DfZF_A.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
