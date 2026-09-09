import{R as t}from"./iframe-5Ln2iLqA.js";import{R as m}from"./zIndexSlice-DFex-upv.js";import{L as s}from"./LineChart-DRhloam_.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-0wKA-RqY.js";import{X as l}from"./XAxis-C-UtlQCm.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BvN7rUxU.js";import"./index-CzncCR4k.js";import"./index-D7j-yBVr.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-IjnCGfXZ.js";import"./isWellBehavedNumber-CdZO7OXS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BHuvBmBF.js";import"./axisSelectors-BMU5_zje.js";import"./d3-scale-DUTFXTFy.js";import"./index-SDNpyV8r.js";import"./index-1g9ahHpc.js";import"./renderedTicksSlice-B6ULVZ0v.js";import"./index-LP2TzsJ5.js";import"./CartesianChart-1RwtF1h6.js";import"./chartDataContext-BWMyO-qW.js";import"./CategoricalChart-no-3Z0-_.js";import"./Layer-DAiXs0AA.js";import"./Curve-CjwJajTH.js";import"./types-DPL8-78e.js";import"./step-Dlf9LIeZ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-axJun3VY.js";import"./Label-9F2YL2wp.js";import"./Text-oIzTAhmK.js";import"./DOMUtils-Cf_dBvDb.js";import"./useId-DeG95-BA.js";import"./useBackwardsCompatibleTheme-C1dsWZXc.js";import"./ZIndexLayer-ZmLJud1E.js";import"./useAnimationId-CJTvG1Qi.js";import"./ActivePoints-CyfXnlmG.js";import"./Dot-BtmEb1H2.js";import"./RegisterGraphicalItemId-08XYAnQ7.js";import"./ErrorBarContext-Mgqq5-U9.js";import"./GraphicalItemClipPath-CFv0pGXv.js";import"./SetGraphicalItem-woQRWKGe.js";import"./getRadiusAndStrokeWidthFromDot-Cd93T_Q0.js";import"./ActiveShapeUtils-DterXnUU.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-TNvZ3AHE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
