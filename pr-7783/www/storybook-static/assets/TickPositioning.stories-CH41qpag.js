import{R as t}from"./iframe-DzgNGLlq.js";import{R as m}from"./zIndexSlice-CTnIst4D.js";import{L as s}from"./LineChart-4gvp03GY.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DUp_JOgK.js";import{X as l}from"./XAxis-Cw-Rs66g.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-uLx0gES7.js";import"./index-BQnnRDe7.js";import"./index-8oVCWn1c.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CaF46lB1.js";import"./isWellBehavedNumber-BgtbXlLK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CboTFEd7.js";import"./axisSelectors-94eYl4rY.js";import"./d3-scale-yT9SK4Da.js";import"./index-C14b3CKC.js";import"./index-Xa_KNetQ.js";import"./renderedTicksSlice-Bkx7Xpqk.js";import"./index-Dbv9pvOZ.js";import"./CartesianChart-Dev9z_OT.js";import"./chartDataContext-BBsc4T1N.js";import"./CategoricalChart-CJCvkzIF.js";import"./Layer-OlcmJ5EJ.js";import"./Curve-jqISDG95.js";import"./types-jKlbb9F_.js";import"./step-CuPD0mOn.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Cm23KMMu.js";import"./Label-B2-HhKmy.js";import"./Text-Cmcmp6Rw.js";import"./DOMUtils-qoFWhjfZ.js";import"./useId-lk8BfN7M.js";import"./useBackwardsCompatibleTheme-CWFDA9S4.js";import"./ZIndexLayer-BSDazUEj.js";import"./useAnimationId-CKHGdmz-.js";import"./ActivePoints-DkCNlDk1.js";import"./Dot-BwV8U2lv.js";import"./RegisterGraphicalItemId-CGkeXCMx.js";import"./ErrorBarContext-BTHVw71_.js";import"./GraphicalItemClipPath-0iLoH1-r.js";import"./SetGraphicalItem-BCo8L_08.js";import"./getRadiusAndStrokeWidthFromDot-BoQ0loRr.js";import"./ActiveShapeUtils-O11gFqO3.js";import"./useGraphicalItemIdentity-BAh9vCkO.js";import"./CartesianAxis-Cz79nqzF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,st as __namedExportsOrder,mt as default};
