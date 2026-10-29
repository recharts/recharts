import{R as t}from"./iframe-B3-vagTW.js";import{R as m}from"./zIndexSlice-ZzyVUAHl.js";import{L as s}from"./LineChart-CibVOE3J.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-D8DdECJH.js";import{X as l}from"./XAxis-DFfS9226.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-qRvlmwXA.js";import"./throttle-CY8bAEWp.js";import"./index-SDu6d5_I.js";import"./index-DuceAH_t.js";import"./RechartsWrapper-CddNfr5P.js";import"./axisSelectors-HaoK80F7.js";import"./polarAxisSelectors-D6Jg6oqH.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C4523EFb.js";import"./index-D2TNbHS1.js";import"./index-qrs8hmxN.js";import"./renderedTicksSlice-D2e62elM.js";import"./index-Bf39JYYB.js";import"./CartesianChart-B6mp8hDI.js";import"./ZIndexPortal-C2SecuQr.js";import"./CategoricalChart-xcg0VLQw.js";import"./Layer-PmVaLGrp.js";import"./Curve-DWZFjGCn.js";import"./types-BBjBCtu2.js";import"./step-BN6dVKvX.js";import"./path-DyVhHtw_.js";import"./LabelList-MPu8rBts.js";import"./Label-vZvIOvi1.js";import"./Text-BuzE9c3N.js";import"./DOMUtils-_lgsh9Yh.js";import"./ZIndexLayer-D9XZSYmm.js";import"./ActivePoints-DAC4XsL1.js";import"./Dot-D46CiK3O.js";import"./activeStyles-mevkhAS-.js";import"./useAnimationId-mixmWsfB.js";import"./dataEntryStyles-FOCBXEG_.js";import"./Symbols-ETwvKCIL.js";import"./symbol-DMAPBY15.js";import"./ErrorBarContext-B_sCBDRD.js";import"./SetGraphicalItem-CRfd0rzO.js";import"./getRadiusAndStrokeWidthFromDot-DTvCyfLo.js";import"./ActiveShapeUtils-b384wv9G.js";import"./useEffectiveDataKey-pQIYsbLr.js";import"./CartesianAxis-Cwp1aQTy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,st as __namedExportsOrder,mt as default};
