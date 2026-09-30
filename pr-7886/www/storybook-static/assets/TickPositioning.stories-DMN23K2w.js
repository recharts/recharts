import{R as t}from"./iframe-DrNDVdUV.js";import{R as m}from"./zIndexSlice-CtU9gDeX.js";import{L as s}from"./LineChart-CouNR-XO.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BEblYiYN.js";import{X as l}from"./XAxis-CYMSKzPe.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-yi_4PIaU.js";import"./index-CcUsqpS-.js";import"./index-uubsNt5S.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CGCnXzV6.js";import"./isWellBehavedNumber-6ms7Qni5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CftVGGIb.js";import"./axisSelectors-83UqlNkf.js";import"./d3-scale-Dtw5RV1H.js";import"./index-C02YBhOv.js";import"./index-DG6hdvW2.js";import"./renderedTicksSlice-D-gEAZZ9.js";import"./index-f04P2rVP.js";import"./CartesianChart-AI3x8M6-.js";import"./chartDataContext-B5-7BCeK.js";import"./CategoricalChart-CAcrwHX_.js";import"./Layer-MqQXVAAH.js";import"./Curve-zuUGMSY-.js";import"./types-xpc3POF2.js";import"./step-H8KTZm7H.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BSenOuGe.js";import"./Label-S1smMv2d.js";import"./Text-B6IFXijX.js";import"./DOMUtils-CJOGT8qc.js";import"./useId-DvlibiBq.js";import"./useBackwardsCompatibleTheme-D28mWunQ.js";import"./ZIndexLayer-DVXiBMpv.js";import"./useAnimationId-CQqGpr63.js";import"./ActivePoints-BXxdB6el.js";import"./Dot-Djo_ehgJ.js";import"./RegisterGraphicalItemId-yZiy6jFu.js";import"./ErrorBarContext-DCn9mgoR.js";import"./GraphicalItemClipPath-BWcxuFET.js";import"./SetGraphicalItem-Cpl9rbNJ.js";import"./getRadiusAndStrokeWidthFromDot-pk4w0c3i.js";import"./ActiveShapeUtils-DMJhm59f.js";import"./useGraphicalItemIdentity-CyeNl3AJ.js";import"./CartesianAxis-D9QKlyxu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
