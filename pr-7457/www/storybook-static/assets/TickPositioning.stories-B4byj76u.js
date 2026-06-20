import{R as t}from"./iframe-CFGBW6xJ.js";import{R as m}from"./zIndexSlice-XhnqXoNc.js";import{L as s}from"./LineChart-eJOqUSVN.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-2oU_qbEN.js";import{X as l}from"./XAxis-B5InI_Kd.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DtmFdOpm.js";import"./index-vCzC4pRL.js";import"./index-NCfgaf-E.js";import"./get-mKIhZXA3.js";import"./resolveDefaultProps-i0oJ6jVU.js";import"./isWellBehavedNumber-DJD9cKo6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CeVvleXl.js";import"./index-Ce00Lp11.js";import"./index-DR9UVvVc.js";import"./renderedTicksSlice-C1DK2pZn.js";import"./axisSelectors-DdfSIe4x.js";import"./d3-scale-D5-KS2M5.js";import"./CartesianChart-CwzI3k7V.js";import"./chartDataContext-pI-MCrLM.js";import"./CategoricalChart-BnGkeJlY.js";import"./Layer-DZ-_1tbp.js";import"./Curve-CuTnLBXp.js";import"./types-CFb2awxA.js";import"./step-Bu8chpKv.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-SqXWEHcu.js";import"./Label-Dw9n6-WD.js";import"./Text-DdBs_uLw.js";import"./DOMUtils-DpRJCm6O.js";import"./ZIndexLayer-DWvdc9Et.js";import"./useAnimationId-nIrPYsqA.js";import"./ActivePoints-Ci_EruSJ.js";import"./Dot-6sp_j_Uz.js";import"./RegisterGraphicalItemId-D7MzpaGX.js";import"./ErrorBarContext-qfoo4UXw.js";import"./GraphicalItemClipPath-CKVLZrRA.js";import"./SetGraphicalItem-Bj9a8OJ5.js";import"./getRadiusAndStrokeWidthFromDot-BxgONI-A.js";import"./ActiveShapeUtils-CwRTe6Q2.js";import"./CartesianAxis-B6GxQRPi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
