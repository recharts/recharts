import{R as t}from"./iframe-BieQWE3D.js";import{R as m}from"./zIndexSlice-BYxygo-S.js";import{L as s}from"./LineChart-Dk6SXHR_.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-2mh_gerJ.js";import{X as l}from"./XAxis-G4vRwmKg.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C6pqxX0n.js";import"./index-DS0rELK-.js";import"./index-CiDtTrDL.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-0J6uDFJb.js";import"./isWellBehavedNumber-By2uQy27.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BQPdhE90.js";import"./index-BK9-NO1n.js";import"./index-D3zDokgn.js";import"./renderedTicksSlice-BWxb2yva.js";import"./axisSelectors-CKN_GV_q.js";import"./d3-scale-Sw7i2UsL.js";import"./CartesianChart-D6JA1RXb.js";import"./chartDataContext-DiNSnyrd.js";import"./CategoricalChart-BTFUnlUn.js";import"./Layer-NUCJMvF3.js";import"./Curve-SVdp-0Yk.js";import"./types-CIzADBdv.js";import"./step-DHAVsB3S.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-fhCf9-7A.js";import"./Label-D0PWYGmJ.js";import"./Text-DkEmFVu0.js";import"./DOMUtils-B828G3hP.js";import"./ZIndexLayer-BHodRoAu.js";import"./useAnimationId-3OlCfqca.js";import"./ActivePoints-DO-UWoAa.js";import"./Dot-80pmkl_3.js";import"./RegisterGraphicalItemId-DxgNfXcN.js";import"./ErrorBarContext-D6txdMKi.js";import"./GraphicalItemClipPath-O6SSxJbU.js";import"./SetGraphicalItem-ucOefQZ-.js";import"./getRadiusAndStrokeWidthFromDot-BzkGhJ7K.js";import"./ActiveShapeUtils-CZK7c2Ij.js";import"./CartesianAxis-DpF5IQ2O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
