import{R as t}from"./iframe-BpPwD_oK.js";import{R as m}from"./zIndexSlice-CZskftau.js";import{L as s}from"./LineChart-BTJEcHVT.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-C-mXzzMU.js";import{X as l}from"./XAxis-Dja-Llqh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-oHxAH6y3.js";import"./throttle-jRz9fd5W.js";import"./index-BDbYb2y7.js";import"./index-C-Ap2UZI.js";import"./RechartsWrapper-DtJNI11v.js";import"./axisSelectors-CCOlr32b.js";import"./polarAxisSelectors-gNxk2Qvg.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CBz-jIwW.js";import"./index-sbP1X6JH.js";import"./index-C3FSz61l.js";import"./renderedTicksSlice-BacllR_T.js";import"./index-DaSN1dEV.js";import"./fillDefinitions-BoqwWLdI.js";import"./CartesianChart-DUDm0Jrf.js";import"./ZIndexPortal-CPCtvPJx.js";import"./CategoricalChart-BCsFwQg5.js";import"./Layer-uKCEWQEh.js";import"./Curve-CsmQrmZK.js";import"./types-C3LEdY55.js";import"./step-uxJcfdRW.js";import"./path-DyVhHtw_.js";import"./LabelList-CdwfQdaD.js";import"./Label-Dm2gX9XZ.js";import"./Text-BhQ_ePKx.js";import"./DOMUtils-BrCWiXlY.js";import"./ZIndexLayer-BfN85Ldf.js";import"./ActivePoints-rm17DGg7.js";import"./Dot-D_vqSwmx.js";import"./activeStyles-BKBboL8s.js";import"./useAnimationId-DjPYETUK.js";import"./dataEntryStyles-CSbDp-Df.js";import"./Symbols-CmOlxG5J.js";import"./symbol-CEUG_TNl.js";import"./ErrorBarContext-C5It2V8R.js";import"./SetGraphicalItem-CtMfZbBm.js";import"./getRadiusAndStrokeWidthFromDot-BkFKvs15.js";import"./ActiveShapeUtils-D3pEehn2.js";import"./useEffectiveDataKey-CeotyzvV.js";import"./CartesianAxis-DPe5aXb5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,ct as __namedExportsOrder,st as default};
