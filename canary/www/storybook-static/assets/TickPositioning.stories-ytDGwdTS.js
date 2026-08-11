import{R as t}from"./iframe-IXBD7Hhe.js";import{R as m}from"./zIndexSlice-Bx8LfIjs.js";import{L as s}from"./LineChart-DC73wMG6.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CBDt_Hjf.js";import{X as l}from"./XAxis-XUByFPwA.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cb9pxaut.js";import"./index-BH3ea_oR.js";import"./index-CLS2dsqf.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-LMM2s1w5.js";import"./isWellBehavedNumber-DuIg09Ee.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C6CdKiKJ.js";import"./index-DHkJVPjU.js";import"./index-P0vZTmxc.js";import"./axisSelectors-Cllx2Xbl.js";import"./d3-scale-DP7A7DdQ.js";import"./renderedTicksSlice-DFEnKLGW.js";import"./CartesianChart-GzQbM-WD.js";import"./chartDataContext-TL9Jhgyo.js";import"./CategoricalChart-CsZZ-_Ww.js";import"./Layer-CznxcDV0.js";import"./Curve-BH0BT-1U.js";import"./types-ootxRHuI.js";import"./step-CYiGRfb_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C0wExScK.js";import"./Label-COpsAeG1.js";import"./Text-CKl7HfzI.js";import"./DOMUtils-CIca5pvR.js";import"./ZIndexLayer-BDgiHtX6.js";import"./useAnimationId-DKTTaUff.js";import"./ActivePoints-CHxp0sMa.js";import"./Dot-CqTh5SAj.js";import"./RegisterGraphicalItemId-c9Yy-XmY.js";import"./ErrorBarContext-Bg5OE5lB.js";import"./GraphicalItemClipPath-DnF330yG.js";import"./SetGraphicalItem-D7LoeNCT.js";import"./getRadiusAndStrokeWidthFromDot-CdGZqJil.js";import"./ActiveShapeUtils-DQ7ehDLd.js";import"./RechartsThemeContext-Dmq8UOW5.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-vF0DZ8PI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,pt as default};
