import{R as t}from"./iframe-uEKx9k1N.js";import{R as m}from"./zIndexSlice-DY2SAwlF.js";import{L as s}from"./LineChart-mzuSYokE.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BSIz3Wv8.js";import{X as l}from"./XAxis-DqNwoQQz.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BszORo1S.js";import"./index-CSsm5ETf.js";import"./index-DPeMAw3v.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-ht_nEGGy.js";import"./isWellBehavedNumber-DQ4HTAG3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B8Jh4kUL.js";import"./index-Du90D5xv.js";import"./index-CgS1QQ0H.js";import"./renderedTicksSlice-DY-iZALX.js";import"./axisSelectors-w7ZWZmhc.js";import"./d3-scale-CoMxsikp.js";import"./CartesianChart-BzS97Wq2.js";import"./chartDataContext-w4FL8Pti.js";import"./CategoricalChart-ablhttF3.js";import"./Layer-BH5XLyL8.js";import"./Curve-DneOA6Ls.js";import"./types-BnkDZvgK.js";import"./step-F10w8TN4.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B35P9OvY.js";import"./Label-CitoXnqP.js";import"./Text-B8QKaTlG.js";import"./DOMUtils-CMP-Fz_P.js";import"./ZIndexLayer-ClIbinrc.js";import"./useAnimationId-ZeyHjL0b.js";import"./ActivePoints-BymWNzxJ.js";import"./Dot-F2Exn6rv.js";import"./RegisterGraphicalItemId-CTEk8rED.js";import"./ErrorBarContext-YXBGRjgp.js";import"./GraphicalItemClipPath-BIARRVEG.js";import"./SetGraphicalItem-CwhlaQHa.js";import"./getRadiusAndStrokeWidthFromDot-DTQnNiya.js";import"./ActiveShapeUtils-BahjRs48.js";import"./CartesianAxis-StFKOZ7o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
