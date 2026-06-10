import{R as t}from"./iframe-Cd3J5nRN.js";import{R as m}from"./zIndexSlice-wIODfcHB.js";import{L as s}from"./LineChart-BIvfILPn.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-AwPNXD7j.js";import{X as l}from"./XAxis-CAq4kERr.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-D6_cV7mT.js";import"./index-DYlcgjqt.js";import"./index-BK5to_p5.js";import"./get-CrzYsNNZ.js";import"./resolveDefaultProps-BAOUvy4N.js";import"./isWellBehavedNumber-jGn4h3zq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-4JmG_mcb.js";import"./index-CLQBN1dD.js";import"./index-DkbQm4bl.js";import"./renderedTicksSlice-DUoWqaFq.js";import"./axisSelectors-BTr0cSxw.js";import"./d3-scale-DxsYWkxB.js";import"./string-B6fdYHAA.js";import"./CartesianChart-QShZ6Qyv.js";import"./chartDataContext-DQMMfvFX.js";import"./CategoricalChart-z0DLkqJ1.js";import"./Layer-C0-faibl.js";import"./Curve-B0MYcAMh.js";import"./types-DvVhAiRy.js";import"./step-CxP-HNru.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dhj62weC.js";import"./Label-x5qCkJ5y.js";import"./Text-BQiCL8pu.js";import"./DOMUtils-C0pcSgNu.js";import"./ZIndexLayer-DbYdMZ0m.js";import"./useAnimationId-Bd8ziSRa.js";import"./ActivePoints-IkVOH40p.js";import"./Dot-DwJjJto9.js";import"./RegisterGraphicalItemId-DPItxssW.js";import"./ErrorBarContext-DfRZ0VKD.js";import"./GraphicalItemClipPath-CZRSWXrI.js";import"./SetGraphicalItem-DYeKk97u.js";import"./getRadiusAndStrokeWidthFromDot-DvmlTDI9.js";import"./ActiveShapeUtils-DEonU6C1.js";import"./CartesianAxis-CQodEWot.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const at=["TickPositioning"];export{r as TickPositioning,at as __namedExportsOrder,ot as default};
