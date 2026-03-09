import{e as t}from"./iframe-BMiRdtzi.js";import{R as n}from"./arrayEqualityCheck-Da9FQhP8.js";import{L as s}from"./LineChart-Do5o3jYZ.js";import{L as c}from"./Line-BwxhCkq8.js";import{X as d}from"./XAxis-zYIEy4Nj.js";import{R as l}from"./RechartsHookInspector-PXISS_9s.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BbcxzGSI.js";import"./immer-CeUHRJUh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D1Zuj5aj.js";import"./index-CFZ_txX2.js";import"./hooks-Dj-8y2kZ.js";import"./axisSelectors-Dhmk1Apf.js";import"./d3-scale-lZPJgZrs.js";import"./zIndexSlice-DXZuZUhc.js";import"./renderedTicksSlice-DuZcooa-.js";import"./CartesianChart-hRI6eS0t.js";import"./chartDataContext-FBHrtSoZ.js";import"./CategoricalChart-DDM_7pl3.js";import"./Layer-D9Oz3zOW.js";import"./ReactUtils-f9rIQTZx.js";import"./Label-BNGz4hpX.js";import"./Text-KMtMbVYS.js";import"./DOMUtils-D9vxTovY.js";import"./ZIndexLayer-BSi_oIk9.js";import"./ActivePoints-BU8KSqCe.js";import"./Dot-BugqpfmD.js";import"./types-nLF0_SAW.js";import"./RegisterGraphicalItemId-_26M4VR4.js";import"./ErrorBarContext-CzWKH65H.js";import"./GraphicalItemClipPath-DVqZ2J0u.js";import"./SetGraphicalItem-DG59MNm5.js";import"./useAnimationId-5Oa7E8I_.js";import"./getRadiusAndStrokeWidthFromDot-B57zRP1H.js";import"./ActiveShapeUtils-ien1uv2Y.js";import"./isPlainObject-CocMjk2l.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B7gjhdc4.js";import"./Trapezoid-YEyIDayp.js";import"./Sector-CiduAPVO.js";import"./Symbols-DfsWCoSA.js";import"./symbol-Dypj6TZZ.js";import"./step-BA38JlTy.js";import"./Curve-B8D8lFuj.js";import"./CartesianAxis-B9OgjJ9q.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BxIeWHLt.js";import"./ChartSizeDimensions-CNT6A0OH.js";import"./OffsetShower-Bzn-sKNm.js";import"./PlotAreaShower-B0eURlXX.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
