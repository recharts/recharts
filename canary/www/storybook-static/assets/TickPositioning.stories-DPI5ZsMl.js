import{R as t}from"./iframe-CpH4jn8g.js";import{R as m}from"./zIndexSlice-CMsbRcVo.js";import{L as s}from"./LineChart-ov3sJMxb.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CTejxpOS.js";import{X as l}from"./XAxis-BqLLe0Cs.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-C21IJxSF.js";import"./index--z9jIKZg.js";import"./index-wpdvZnuB.js";import"./get-DfDzGUS7.js";import"./resolveDefaultProps-DGN954Kv.js";import"./isWellBehavedNumber-6OhSnnoK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-TUYhIbD6.js";import"./index-B6von4ou.js";import"./index-CB2lo7iV.js";import"./renderedTicksSlice-D-wmUWoC.js";import"./axisSelectors-Bq_vtAr0.js";import"./d3-scale-hekr18xW.js";import"./CartesianChart-BW_KV3Uo.js";import"./chartDataContext-CNUo9Q_N.js";import"./CategoricalChart-CJCbZaD2.js";import"./Layer-CpyyR4fH.js";import"./Curve-2uMIoq2i.js";import"./types-CDIAbI3v.js";import"./step-COWbUyG4.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BjSZm7AL.js";import"./Label-BID2wGRS.js";import"./Text-DxL0BXFO.js";import"./DOMUtils-BSMSB0a3.js";import"./ZIndexLayer-FLcdyCMW.js";import"./useAnimationId-DOUqN62f.js";import"./ActivePoints-9ROC9Lt_.js";import"./Dot-CxmB6f2U.js";import"./RegisterGraphicalItemId-BwHF-Xvv.js";import"./ErrorBarContext-DQcN79r3.js";import"./GraphicalItemClipPath-CjdnX9P0.js";import"./SetGraphicalItem-BKY8M4LB.js";import"./getRadiusAndStrokeWidthFromDot-BpydaN9S.js";import"./ActiveShapeUtils-DtM6eKjz.js";import"./CartesianAxis-lejBVVP2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ot=["TickPositioning"];export{r as TickPositioning,ot as __namedExportsOrder,it as default};
