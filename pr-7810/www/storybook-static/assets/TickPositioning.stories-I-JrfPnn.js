import{R as t}from"./iframe-Ds6TFLkC.js";import{R as m}from"./zIndexSlice-BKrqz3Xt.js";import{L as s}from"./LineChart-BVlULXky.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DZDTbY-k.js";import{X as l}from"./XAxis-DBKmF-Ih.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-5Eq1kaaq.js";import"./index-ClPOgP6S.js";import"./index-C9niY2XO.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B7a2m4Ka.js";import"./isWellBehavedNumber-LBH0mcE-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CJwlXMvA.js";import"./axisSelectors-CNkxeY96.js";import"./d3-scale-CUyqRA-V.js";import"./index-CVuBNUrf.js";import"./index-BuCwMnJX.js";import"./renderedTicksSlice-F4QCvYob.js";import"./index-BK5RQvEH.js";import"./CartesianChart-CQ_Lc8CK.js";import"./chartDataContext-8-sBB6AR.js";import"./CategoricalChart-mnoE3YYU.js";import"./Layer-DsMiZb8_.js";import"./Curve-dfqdvFF3.js";import"./types-DqUBeAy_.js";import"./step-DGJiOV5Z.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bite-60b.js";import"./Label-2c4G7wLB.js";import"./Text-CQENvntP.js";import"./DOMUtils-CAtVF91U.js";import"./useId-DhelI0MM.js";import"./useBackwardsCompatibleTheme-eHtj-G5x.js";import"./ZIndexLayer-BVTJP5jP.js";import"./useAnimationId-wJ9zl-lu.js";import"./ActivePoints-BxShO8-B.js";import"./Dot-BCPXm70l.js";import"./RegisterGraphicalItemId-B4xTnp7Z.js";import"./ErrorBarContext-CEkkj6v_.js";import"./GraphicalItemClipPath-C-q0-wOK.js";import"./SetGraphicalItem-A2_dyvg9.js";import"./getRadiusAndStrokeWidthFromDot-C9T1jis-.js";import"./ActiveShapeUtils-BJP1sGvV.js";import"./useGraphicalItemIdentity-onk1vmff.js";import"./CartesianAxis-CuptNImc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
