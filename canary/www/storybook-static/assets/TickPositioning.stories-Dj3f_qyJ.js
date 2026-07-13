import{R as t}from"./iframe-upOKpTfC.js";import{R as m}from"./zIndexSlice-3kJy4_5s.js";import{L as s}from"./LineChart-aGj3yosi.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-C6XO9CBA.js";import{X as l}from"./XAxis-g3--B4Im.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DFA1f5tU.js";import"./index-fzhcIN9D.js";import"./index-BjDbck5L.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-C5MbGZTR.js";import"./isWellBehavedNumber-DrMtPoxC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BGh022Wu.js";import"./index-C-2GXdQU.js";import"./index-Bjw8W24w.js";import"./renderedTicksSlice-_aeWYehA.js";import"./axisSelectors-Bm__5HSH.js";import"./d3-scale-BoRQfYQu.js";import"./CartesianChart-C0cpSp27.js";import"./chartDataContext-CULDGz5L.js";import"./CategoricalChart-CtBwRsb8.js";import"./Layer-Bv6NwOOo.js";import"./Curve-D2bD0YW0.js";import"./types-Bdshst7h.js";import"./step-DhetwtCK.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DNy5Onjp.js";import"./Label-CWWfz4NX.js";import"./Text-CuI103ie.js";import"./DOMUtils-BQfF-HWt.js";import"./ZIndexLayer-CN5osLDH.js";import"./useAnimationId-ypM0JLm_.js";import"./ActivePoints-CvqveQ6d.js";import"./Dot-CWeDp1FL.js";import"./RegisterGraphicalItemId-CKwYBx4V.js";import"./ErrorBarContext-BpEoBZZy.js";import"./GraphicalItemClipPath-CwmaU6d7.js";import"./SetGraphicalItem-DYmFEset.js";import"./getRadiusAndStrokeWidthFromDot-CMxxoR3Y.js";import"./ActiveShapeUtils-DdQ7UgVU.js";import"./CartesianAxis-CO3H2wW4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
