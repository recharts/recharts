import{R as t}from"./iframe-DQ5pdRpT.js";import{R as m}from"./zIndexSlice-DQojUU3D.js";import{L as s}from"./LineChart-ypURthnM.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-B8q4YFfc.js";import{X as l}from"./XAxis-BbDJVinv.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-j7vxqIWJ.js";import"./index-B42gFx1y.js";import"./index-CKPKUGRw.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C2j2eShk.js";import"./isWellBehavedNumber-DO3SFpF7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper--EivWNjp.js";import"./index-CUdIWJWE.js";import"./index-CUVFW2Mq.js";import"./axisSelectors-BLoeM8Ql.js";import"./d3-scale-CzelId51.js";import"./renderedTicksSlice-DZuwhgdB.js";import"./CartesianChart-DCEWo6vx.js";import"./chartDataContext-BANEa2Gn.js";import"./CategoricalChart-DmEP8iSm.js";import"./Layer-BrLbSCb2.js";import"./Curve-Co2BFljk.js";import"./types-DwD8FSIs.js";import"./step-BcS8HbZG.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bmg4d13Y.js";import"./Label-ogcMQvX_.js";import"./Text-BbwznCj8.js";import"./DOMUtils-3opGu7KJ.js";import"./ZIndexLayer-LAqpTUNY.js";import"./useAnimationId-Bjim9SiW.js";import"./ActivePoints-DNNEApCY.js";import"./Dot-CSL_Jnkg.js";import"./RegisterGraphicalItemId-gNTwGCiB.js";import"./ErrorBarContext-PCXvp0W_.js";import"./GraphicalItemClipPath-Cbyv8QGz.js";import"./SetGraphicalItem-BopL2iik.js";import"./graphicalItemIdentity-DhpqhoFM.js";import"./ActiveShapeUtils-ZRRc_Clb.js";import"./RechartsThemeContext-DYFm3WDH.js";import"./CartesianAxis-9E3w2iOb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const pt=["TickPositioning"];export{r as TickPositioning,pt as __namedExportsOrder,at as default};
