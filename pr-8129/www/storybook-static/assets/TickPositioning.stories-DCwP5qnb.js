import{R as t}from"./iframe-CDpmIgQT.js";import{R as m}from"./zIndexSlice-BfaxD0dh.js";import{L as s}from"./LineChart-CxB7_xWC.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-0hIul04-.js";import{X as l}from"./XAxis-3XA4-bKe.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-ihnr6TPx.js";import"./throttle-aImz7VVk.js";import"./index-DbYSlzY7.js";import"./index-Bltp8D05.js";import"./RechartsWrapper-CVUl_Te9.js";import"./axisSelectors-CxEn2HHB.js";import"./polarAxisSelectors-B_f6ZQwC.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D8Pupn_R.js";import"./index-DCFiKxFj.js";import"./index-zKAzIraE.js";import"./renderedTicksSlice-CZP368BE.js";import"./index-DtYOnMLm.js";import"./CartesianChart-DSMl8g4x.js";import"./ZIndexPortal-B9xw1t3t.js";import"./CategoricalChart-Bel6HtAa.js";import"./Layer-mHCkFu2a.js";import"./Curve-D7wdedao.js";import"./fillDefinitions-os6E-iMi.js";import"./pageBackground-JqsHu2De.js";import"./types-C_7I-XQd.js";import"./step-CbLfzlrV.js";import"./path-DyVhHtw_.js";import"./LabelList-IVU2RGL-.js";import"./Label-PB9tCobP.js";import"./Text-BSIquxO3.js";import"./DOMUtils-Cs7FGDH8.js";import"./ZIndexLayer-DJsGHloM.js";import"./ActivePoints-BB-NTxO3.js";import"./Dot-BEctbnXU.js";import"./activeStyles-BpeBFXJT.js";import"./useAnimationId-LIn9B9pI.js";import"./dataEntryStyles-tenSUrif.js";import"./Symbols-DArBJCV3.js";import"./symbol-MYiWw4z2.js";import"./ErrorBarContext-Bqx6IufA.js";import"./SetGraphicalItem-BpXWLUsD.js";import"./getRadiusAndStrokeWidthFromDot-DBydaLHm.js";import"./ActiveShapeUtils-CinHd9se.js";import"./useEffectiveDataKey-Dsusti8Y.js";import"./CartesianAxis-f-wQfyV-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const ct={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},dt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,dt as __namedExportsOrder,ct as default};
