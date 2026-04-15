import{e as t}from"./iframe-2KzY7SZI.js";import{R as n}from"./arrayEqualityCheck-C_KFC4aG.js";import{L as s}from"./LineChart-C3UQrEdb.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-B_bmc7jI.js";import{X as l}from"./XAxis-IZqHvSRM.js";import{R as v}from"./RechartsHookInspector-BfBUolA6.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DCkyn-XH.js";import"./immer-BbCSCUWa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-6FLOJafv.js";import"./index-DWwY0oag.js";import"./hooks-D41MmbXB.js";import"./axisSelectors-btICR-6o.js";import"./d3-scale-YB1UXNlF.js";import"./zIndexSlice-DkD_gkVE.js";import"./renderedTicksSlice-DkyMgPSK.js";import"./CartesianChart-BjELWt2X.js";import"./chartDataContext-Cd81LqCh.js";import"./CategoricalChart-XS_rytPK.js";import"./Layer-CDY6haxt.js";import"./ReactUtils-CP-aoZRs.js";import"./Label-30J3b0Tu.js";import"./Text-D9eiSsSq.js";import"./DOMUtils-qhd3ut3X.js";import"./ZIndexLayer-CjxdKwx6.js";import"./ActivePoints-A9eI8SQH.js";import"./Dot-D6GzpgpC.js";import"./types-C82LLnNR.js";import"./RegisterGraphicalItemId-vClWkM0Z.js";import"./ErrorBarContext-CYcgyRmM.js";import"./GraphicalItemClipPath-D6n4jgua.js";import"./SetGraphicalItem-BxWbQ_06.js";import"./useAnimationId-DwCOtHiA.js";import"./getRadiusAndStrokeWidthFromDot-PInnfI7S.js";import"./ActiveShapeUtils-CWrruK-s.js";import"./isPlainObject-k6awtQUp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CQd-B1Q8.js";import"./Trapezoid-BF_TMfHF.js";import"./Sector-Bhzm6McX.js";import"./Symbols-BgWJ7GGh.js";import"./symbol-D5FcbSZZ.js";import"./step-B9r6R9dH.js";import"./Curve-D8MF2fMv.js";import"./CartesianAxis-iQKBE-lF.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-DuC9ckfX.js";import"./ChartSizeDimensions-OFKXx0KH.js";import"./OffsetShower-C_p34O5g.js";import"./PlotAreaShower-BviaC-V-.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
