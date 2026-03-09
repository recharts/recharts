import{e as t}from"./iframe-zNZ6gtuS.js";import{R as n}from"./arrayEqualityCheck-Dt2SCAs7.js";import{L as s}from"./LineChart-DOtL0QJf.js";import{L as c}from"./Line-c3RRemFq.js";import{X as d}from"./XAxis-DgIpX0Qf.js";import{R as l}from"./RechartsHookInspector-C4FQcsDn.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DRoPYLx6.js";import"./immer-M5VU9jjz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C9d9AYjY.js";import"./index-FhY_ESTg.js";import"./hooks-CbBhgown.js";import"./axisSelectors-CtziQzAW.js";import"./d3-scale-B2IzxI2Z.js";import"./zIndexSlice-DvWemZ8b.js";import"./renderedTicksSlice-D_TKCYvY.js";import"./CartesianChart-C4jVrU_0.js";import"./chartDataContext-Cti6NzM5.js";import"./CategoricalChart-B0XYoVAJ.js";import"./Layer-BQ0S_2Uh.js";import"./ReactUtils-CDHy-yxP.js";import"./Label-BCeegupp.js";import"./Text-BklBVUCs.js";import"./DOMUtils-FYWG6Ion.js";import"./ZIndexLayer-BqvP1SAm.js";import"./ActivePoints-CYKr6AgU.js";import"./Dot-DYFOoPhj.js";import"./types-ynSAt5pr.js";import"./RegisterGraphicalItemId-B9AuoKeF.js";import"./ErrorBarContext-DueqJhS_.js";import"./GraphicalItemClipPath-CbT-MflU.js";import"./SetGraphicalItem-C5rIwT1-.js";import"./useAnimationId-C73SjrYi.js";import"./getRadiusAndStrokeWidthFromDot-OAyCmPPZ.js";import"./ActiveShapeUtils-CGpmN3Ni.js";import"./isPlainObject-BwG0gXsU.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BOPBXjWX.js";import"./Trapezoid-D3gu8WeD.js";import"./Sector-BY1ck4On.js";import"./Symbols-D7LFKWCm.js";import"./symbol-31gnSDTi.js";import"./step-CCZqHQ-h.js";import"./Curve-o1yhe_oH.js";import"./CartesianAxis-CVokkLFp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-NY9m0Yqy.js";import"./ChartSizeDimensions-kkrl-9fd.js";import"./OffsetShower-ZOCzTQ0h.js";import"./PlotAreaShower-CmvJo0mK.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
