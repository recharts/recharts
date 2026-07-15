import{R as t}from"./iframe-CTZq4wow.js";import{R as m}from"./zIndexSlice-BugLLn2I.js";import{L as s}from"./LineChart-DVlEFzuv.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BSq-1OIA.js";import{X as l}from"./XAxis-DLDzw0JX.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CyDwbdt-.js";import"./index-BsdYqaGf.js";import"./index-CDrnfkiS.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-HvEOYUSi.js";import"./isWellBehavedNumber-o0IYSWOi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DfAH14um.js";import"./index-B4a7aOKY.js";import"./index-C9WAMmaw.js";import"./renderedTicksSlice-CnaOGMsT.js";import"./axisSelectors-CvXoECki.js";import"./d3-scale-oRxS8xLw.js";import"./CartesianChart-D9JMH5Z9.js";import"./chartDataContext-CjbWGJuj.js";import"./CategoricalChart-xMgetrMq.js";import"./Layer-B0eWkEir.js";import"./Curve-B2-DT88v.js";import"./types-Cmo79yaU.js";import"./step-BOqrsqeu.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-TPOIkuad.js";import"./Label-BA3Mm5Cp.js";import"./Text-Cu7BMLGl.js";import"./DOMUtils-DAhFjHam.js";import"./ZIndexLayer-JO4x2o2R.js";import"./useAnimationId-N1bAbizC.js";import"./ActivePoints-DduaoRit.js";import"./Dot-Ck1gikCj.js";import"./RegisterGraphicalItemId-CBhnZQJL.js";import"./ErrorBarContext-4wXqzGb4.js";import"./GraphicalItemClipPath-C2c2EBGK.js";import"./SetGraphicalItem-Dzd1nu2B.js";import"./getRadiusAndStrokeWidthFromDot-DY4tcjGE.js";import"./ActiveShapeUtils-BYg3ncJn.js";import"./CartesianAxis-Fbl6c-dp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
