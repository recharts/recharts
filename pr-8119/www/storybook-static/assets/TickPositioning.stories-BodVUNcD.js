import{R as t}from"./iframe-FiuXs261.js";import{R as m}from"./zIndexSlice-D8yz0c_i.js";import{L as s}from"./LineChart-CmGGWmgQ.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-M2EO-pwK.js";import{X as l}from"./XAxis-Bb3iEGS4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BihUq3X9.js";import"./throttle-CYeAiCIk.js";import"./index-LYf9fdMT.js";import"./index-CrJ_p8tR.js";import"./RechartsWrapper-PYqIov25.js";import"./axisSelectors-C9DIlOnm.js";import"./polarAxisSelectors-C8b7BSTM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CtDFr3v-.js";import"./index-I95GPJkK.js";import"./index-CGxDoIWw.js";import"./renderedTicksSlice-B2WUnf26.js";import"./index-C5CBIWPP.js";import"./CartesianChart-BGhHw0Sw.js";import"./ZIndexPortal-a8T82K_T.js";import"./CategoricalChart-C7XeD-rb.js";import"./Layer-BMNQgcyM.js";import"./Curve-CjJsHvFZ.js";import"./types-CG6SsZFp.js";import"./step-AV-3KlMf.js";import"./path-DyVhHtw_.js";import"./LabelList-DRqt9mVh.js";import"./Label-DgCFchF-.js";import"./Text-CNbe1Pgb.js";import"./DOMUtils-DMtknFU5.js";import"./ZIndexLayer-BuK4cbp4.js";import"./ActivePoints-Ddv2UM3f.js";import"./Dot-BFh-_60U.js";import"./activeStyles-DrCvysIi.js";import"./useAnimationId-DgiqBF0b.js";import"./dataEntryStyles-BABJdaaS.js";import"./Symbols-vnM3HbbD.js";import"./symbol-DlnVlajL.js";import"./ErrorBarContext-GrhwdkVF.js";import"./SetGraphicalItem-CXpshRR6.js";import"./getRadiusAndStrokeWidthFromDot-4di0vwKC.js";import"./ActiveShapeUtils-D11w1Cqa.js";import"./useEffectiveDataKey-BS1bhAcI.js";import"./CartesianAxis-pVZ2WZ4j.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
