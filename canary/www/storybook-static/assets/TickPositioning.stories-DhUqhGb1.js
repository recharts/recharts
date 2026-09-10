import{R as t}from"./iframe-D-sDuIqM.js";import{R as m}from"./zIndexSlice-DkRDAG1K.js";import{L as s}from"./LineChart-DYK0mMsv.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Dg79dF8E.js";import{X as l}from"./XAxis-C9qauAI0.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BwwGSoU-.js";import"./index-DOwSNtIW.js";import"./index-D-ZcLjnp.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DRUr7G4m.js";import"./isWellBehavedNumber-n1fKw3Ik.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BR0dPwJa.js";import"./axisSelectors-CcFzWzBk.js";import"./d3-scale-D2yJqL8j.js";import"./index-sXSxEpdM.js";import"./index-DlgBIkPT.js";import"./renderedTicksSlice-DoL3t7Bc.js";import"./index-Dfhf8xit.js";import"./CartesianChart-ZdAO4m3f.js";import"./chartDataContext-DR95QKXv.js";import"./CategoricalChart-Bvu_kn7d.js";import"./Layer-C3zxw81n.js";import"./Curve-CiGjQv1I.js";import"./types-D7y8jC37.js";import"./step-CSXkfkZq.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CAyQvTlC.js";import"./Label-mzqnfF5y.js";import"./Text-cGP75sAD.js";import"./DOMUtils-BlK1UfYz.js";import"./useId-DJy_IGRL.js";import"./useBackwardsCompatibleTheme-Bt2NRZPB.js";import"./ZIndexLayer-Dl5V_Hf6.js";import"./useAnimationId-BdWTgj5e.js";import"./ActivePoints-Ctj_jtde.js";import"./Dot-nUj7Emhk.js";import"./RegisterGraphicalItemId-BpgvVZBx.js";import"./ErrorBarContext-COUU5Hme.js";import"./GraphicalItemClipPath-BqyJWtfu.js";import"./SetGraphicalItem-CoBxoWuP.js";import"./getRadiusAndStrokeWidthFromDot-CyWtRfsI.js";import"./ActiveShapeUtils-B7KMSlGv.js";import"./useGraphicalItemIdentity-CglCalgl.js";import"./CartesianAxis-Bbla4SrJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
