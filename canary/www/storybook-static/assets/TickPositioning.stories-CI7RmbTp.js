import{R as t}from"./iframe-CtCQjsM6.js";import{R as m}from"./zIndexSlice-Dyeq-kTm.js";import{L as s}from"./LineChart-DovjRP5V.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-NxW5NSXA.js";import{X as l}from"./XAxis-CP213xw9.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-UADZssR3.js";import"./index-bMzOaRnN.js";import"./index-Bc49u6WD.js";import"./get-CXMuCFS1.js";import"./resolveDefaultProps-y277M-17.js";import"./isWellBehavedNumber-DC3h_5lt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BsRB8VD4.js";import"./index-DMhTMs3j.js";import"./index-Dt6Mya9l.js";import"./renderedTicksSlice-B82fdgBY.js";import"./axisSelectors-CBHiYL8s.js";import"./d3-scale-DSObG5R7.js";import"./CartesianChart-DWPXJ9eR.js";import"./chartDataContext-BDCa3fVu.js";import"./CategoricalChart-D-CCIGyN.js";import"./Layer-ikVkc87V.js";import"./Curve-DqaQE-u7.js";import"./types-DG_xuUOr.js";import"./step-DspZ-7xm.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D-nX9UUI.js";import"./Label-DEKQSx_8.js";import"./Text-CVHSYFxZ.js";import"./DOMUtils-DONZhdVB.js";import"./ZIndexLayer-bXnB7Pr5.js";import"./useAnimationId-BByU_EIU.js";import"./ActivePoints-8IGesqBK.js";import"./Dot-BSPimWYR.js";import"./RegisterGraphicalItemId-CJP7sNi_.js";import"./ErrorBarContext-DA8eqje8.js";import"./GraphicalItemClipPath-BwbwGImN.js";import"./SetGraphicalItem-XJT0KcUL.js";import"./getRadiusAndStrokeWidthFromDot-CdTXnSwA.js";import"./ActiveShapeUtils-sx5PAodz.js";import"./CartesianAxis-BR8NQrXr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
