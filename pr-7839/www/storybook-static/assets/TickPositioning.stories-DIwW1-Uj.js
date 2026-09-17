import{R as t}from"./iframe-MgA714vo.js";import{R as m}from"./zIndexSlice-BFtzjsbT.js";import{L as s}from"./LineChart-BOELxeBO.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DZr5k1zJ.js";import{X as l}from"./XAxis-BO_zCdYE.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CokMtKXH.js";import"./index-yQC3T5y5.js";import"./index-DFNNaDkT.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CB1SP_2F.js";import"./isWellBehavedNumber-DFMdcmiK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D1iPbMRH.js";import"./axisSelectors-D8SlF3gx.js";import"./d3-scale-DxJKI2TE.js";import"./index-Gf96Mz3o.js";import"./index-BISHQAp4.js";import"./renderedTicksSlice-C4wx_D1w.js";import"./index-Bvn5aErC.js";import"./CartesianChart-BsRTJ-St.js";import"./chartDataContext-j9c_a0aH.js";import"./CategoricalChart-DPsIkKm4.js";import"./Layer-B-SLfZPM.js";import"./Curve-BBMmlamO.js";import"./types-CZP1hKch.js";import"./step-Jmsq3o4W.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DYaErfcH.js";import"./Label-cwVDT-eO.js";import"./Text-DScWdIKY.js";import"./DOMUtils-79tWRulU.js";import"./useId-Wj9uSNps.js";import"./useBackwardsCompatibleTheme-DSXeHE4Z.js";import"./ZIndexLayer-CrYLcujZ.js";import"./useAnimationId-Dkacjwid.js";import"./ActivePoints-BYWv-6T2.js";import"./Dot-DxSSo-Hw.js";import"./RegisterGraphicalItemId-DjHk3rYd.js";import"./ErrorBarContext-DOEhJtWW.js";import"./GraphicalItemClipPath-CuTt-XI_.js";import"./SetGraphicalItem-C0yQ7ETh.js";import"./getRadiusAndStrokeWidthFromDot-DoNGVpMm.js";import"./ActiveShapeUtils-GenD1j5W.js";import"./useGraphicalItemIdentity-BtRSxKs5.js";import"./CartesianAxis-DiAsTuGj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
