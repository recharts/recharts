import{R as t}from"./iframe-CkvJyCps.js";import{R as m}from"./zIndexSlice-Ui89VFRT.js";import{L as s}from"./LineChart-nd3gPtTb.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BWXEwsOW.js";import{X as l}from"./XAxis-Cs2owod8.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DgDNnF1i.js";import"./index-BX-3EqNW.js";import"./index-BsiD65Ad.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DCKyJEY4.js";import"./isWellBehavedNumber-DqH8GE3H.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CjY8J2vT.js";import"./index-Cjf8FZO7.js";import"./index-D8Jo1LfZ.js";import"./renderedTicksSlice-BMi6DZwf.js";import"./axisSelectors-CC2H0zuo.js";import"./d3-scale-Crqr5kEu.js";import"./CartesianChart-DFWFnz0T.js";import"./chartDataContext-BT6jQe_1.js";import"./CategoricalChart-E0pKYNLO.js";import"./Layer-C4byj5K8.js";import"./Curve-OKr52WO3.js";import"./types-CzkLD6k1.js";import"./step-KO3U5RtM.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CNADXJdo.js";import"./Label-BMESeQSE.js";import"./Text-R9sJDfcz.js";import"./DOMUtils-CxWIP_C8.js";import"./ZIndexLayer-t0g3b6Ty.js";import"./useAnimationId-jBCdM9CL.js";import"./ActivePoints-D5IySJuv.js";import"./Dot-CltbR6Uk.js";import"./RegisterGraphicalItemId-p5LXpBOx.js";import"./ErrorBarContext-CbXX-ZBj.js";import"./GraphicalItemClipPath-Ci1KSEKS.js";import"./SetGraphicalItem-BSfhP0b_.js";import"./getRadiusAndStrokeWidthFromDot-BhqCzyG1.js";import"./ActiveShapeUtils-DlrbS-G4.js";import"./CartesianAxis-mgc-X0Bi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
