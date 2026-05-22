import{e as t}from"./iframe-DF4bgTei.js";import{g as m}from"./arrayEqualityCheck-BMFJWZLR.js";import{L as s}from"./LineChart-D_gMte7O.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BRJiVivl.js";import{X as l}from"./XAxis-DbY3ezb1.js";import{R as v}from"./RechartsHookInspector-D-0gsnbs.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BXVR8Nu8.js";import"./immer-MYTD12gY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BQPl6oVo.js";import"./index-BTdRTt63.js";import"./hooks-XeIQ09GK.js";import"./axisSelectors-r3e8Ogcr.js";import"./d3-scale-Dig20Cak.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-zLQdFJPR.js";import"./renderedTicksSlice-CPjOMDMT.js";import"./CartesianChart-DiQ110-r.js";import"./chartDataContext-nbJQ4Evh.js";import"./CategoricalChart-BwOuhOYL.js";import"./Layer-B2y3FrWZ.js";import"./Curve-BOvv8LQu.js";import"./types-D1G2vCVO.js";import"./step-BNKRdB7Z.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-NJgg5Z7A.js";import"./Label-BpQxBJRP.js";import"./Text-Cn-CsKa2.js";import"./DOMUtils-C5ULhfnp.js";import"./ZIndexLayer-k5HrhQv7.js";import"./useAnimationId-UfrY9hCr.js";import"./ActivePoints-DmxnIX1w.js";import"./Dot-BYGa6gij.js";import"./RegisterGraphicalItemId-BXLg-7qN.js";import"./ErrorBarContext-FGV68ztp.js";import"./GraphicalItemClipPath-DJtNLijn.js";import"./SetGraphicalItem-CZCtNcvF.js";import"./getRadiusAndStrokeWidthFromDot-gX3jCxFw.js";import"./ActiveShapeUtils-CkfODQkB.js";import"./CartesianAxis-OtzrWNBq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BJloLEZI.js";import"./ChartSizeDimensions-BYrQZ-ie.js";import"./OffsetShower-adDhQ1RV.js";import"./PlotAreaShower-CsKiIBy8.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,n)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:n,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const st=["TickPositioning"];export{r as TickPositioning,st as __namedExportsOrder,mt as default};
