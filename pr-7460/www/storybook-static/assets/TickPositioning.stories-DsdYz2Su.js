import{R as t}from"./iframe-D-d0UxKx.js";import{R as m}from"./zIndexSlice-BzS2rwPG.js";import{L as s}from"./LineChart-Pa2w6mgZ.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DfVKxJkd.js";import{X as l}from"./XAxis-D-U3c8PB.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Bcymh1Oy.js";import"./index-hrPGNLyo.js";import"./index-Ch_o8Zsm.js";import"./get-DvwB2phC.js";import"./resolveDefaultProps-BULhiKbt.js";import"./isWellBehavedNumber-Cwzb-39K.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-eUO8gZBV.js";import"./index-BFabSAMq.js";import"./index-CSjSfLNV.js";import"./renderedTicksSlice-Dhujer-i.js";import"./axisSelectors-gJCz_NoR.js";import"./d3-scale-CAmzDAEa.js";import"./CartesianChart-CfHu0MoO.js";import"./chartDataContext-SgkfnsQg.js";import"./CategoricalChart-_USPwHCV.js";import"./Layer-DoiILNSz.js";import"./Curve-BbmMMCNF.js";import"./types-CjTc4pGQ.js";import"./step-DyColUtB.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BX5PTjVC.js";import"./Label-1pCxWysR.js";import"./Text-BFbCMtys.js";import"./DOMUtils-BKfb6-ez.js";import"./ZIndexLayer-ikBJbvxL.js";import"./useAnimationId-TLS-J4It.js";import"./ActivePoints-DL-7xiHM.js";import"./Dot-BZoK9nPq.js";import"./RegisterGraphicalItemId-P4cnc2kT.js";import"./ErrorBarContext-9wDlrEu1.js";import"./GraphicalItemClipPath-CHhCw_J2.js";import"./SetGraphicalItem-B0zIa8gn.js";import"./getRadiusAndStrokeWidthFromDot-Bs94Qetl.js";import"./ActiveShapeUtils-BYmp4x7X.js";import"./CartesianAxis-BYNBLpS-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
