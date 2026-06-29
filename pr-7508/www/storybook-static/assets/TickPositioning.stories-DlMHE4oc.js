import{R as t}from"./iframe-CCxa2X_3.js";import{R as m}from"./zIndexSlice-CjS-6Q6g.js";import{L as s}from"./LineChart-DECqCDCO.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Hi10lWtZ.js";import{X as l}from"./XAxis-DgXTsbE5.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DVixtPip.js";import"./index-BTMSijfB.js";import"./index-Bu6kQjLM.js";import"./get-BWGRxCzY.js";import"./resolveDefaultProps-DiPmn6d5.js";import"./isWellBehavedNumber-D-qJMApD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-2JrQYSBT.js";import"./index-HidsIZF1.js";import"./index-DtdyiYMy.js";import"./renderedTicksSlice-BZsMGLS6.js";import"./axisSelectors-DutwzDNX.js";import"./d3-scale-BD_lAQxm.js";import"./CartesianChart-BqBORtky.js";import"./chartDataContext-un8h0oN7.js";import"./CategoricalChart-BETRAeyd.js";import"./Layer-DSUD-a_F.js";import"./Curve-DuMlNmnh.js";import"./types-BCrxJhqI.js";import"./step-Cx1fSWqJ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CtF1ph7i.js";import"./Label-BbbTGnnM.js";import"./Text-zmbPwYi6.js";import"./DOMUtils-D9dcGvYT.js";import"./ZIndexLayer-DK9HGDkh.js";import"./useAnimationId-Qtosu25G.js";import"./ActivePoints-DMw22gL4.js";import"./Dot-BqRYjtmh.js";import"./RegisterGraphicalItemId-Co8JXb8t.js";import"./ErrorBarContext-DiexwYLt.js";import"./GraphicalItemClipPath-hMgxAXNq.js";import"./SetGraphicalItem-BLsqb4fN.js";import"./getRadiusAndStrokeWidthFromDot-CMMqsGHP.js";import"./ActiveShapeUtils-D6Ox5ImN.js";import"./CartesianAxis-06zEjNAD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
