import{R as t}from"./iframe-Ce1K7ebi.js";import{R as m}from"./zIndexSlice-8Zo3fsoU.js";import{L as s}from"./LineChart-DT5pJmHK.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Beg62wAW.js";import{X as l}from"./XAxis-3C9aClrU.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-wBCCevMF.js";import"./index-s0WSFyA7.js";import"./index-AjZPfGGe.js";import"./get-BJIMs5EG.js";import"./resolveDefaultProps-DSV9zLoY.js";import"./isWellBehavedNumber-CQ8pg5Hb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BrIlX8W1.js";import"./index-BorxIHRi.js";import"./index-gt-wl4xF.js";import"./renderedTicksSlice-GRKlOorj.js";import"./axisSelectors-CwdMfS2t.js";import"./d3-scale-Dx0XyOwO.js";import"./CartesianChart-BDjFqgQH.js";import"./chartDataContext-CPsHUBNm.js";import"./CategoricalChart-CSIi67W8.js";import"./Layer-B1_feEXA.js";import"./Curve-BMLS1vNR.js";import"./types-EmN6t4vl.js";import"./step-fKuN5Fcd.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DUKSjkGs.js";import"./Label-CmiiW9da.js";import"./Text-BYOeWYK5.js";import"./DOMUtils-DkFEIDQF.js";import"./ZIndexLayer-CVK_cW1P.js";import"./useAnimationId-BsE4V4Ok.js";import"./ActivePoints-DVEwrhzj.js";import"./Dot-fVsrRUzo.js";import"./RegisterGraphicalItemId-CAijELDs.js";import"./ErrorBarContext-ZtUvHt5X.js";import"./GraphicalItemClipPath-DDqY4rhz.js";import"./SetGraphicalItem-CTmxPNcP.js";import"./getRadiusAndStrokeWidthFromDot-B3GcRvO7.js";import"./ActiveShapeUtils-DLpYpzZO.js";import"./CartesianAxis-vXS1PjkI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
