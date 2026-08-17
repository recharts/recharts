import{R as t}from"./iframe-D_SBmach.js";import{R as m}from"./zIndexSlice-C-84-lKY.js";import{L as s}from"./LineChart-l4dUrI0T.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-C9ajzZ_E.js";import{X as l}from"./XAxis-DH-ZgwOK.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dlx_LjAj.js";import"./index-cqta4xpR.js";import"./index-B3RrYXmh.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bvyrx_D_.js";import"./isWellBehavedNumber-CqdfCsRm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CFoCu-Y8.js";import"./index-rdN2tPCT.js";import"./index-Dl7bNBwv.js";import"./axisSelectors-T3miAVW7.js";import"./d3-scale-BqLpL1Tc.js";import"./renderedTicksSlice-D04XWQ7B.js";import"./CartesianChart-TtiOfZnr.js";import"./chartDataContext-DBogxY-2.js";import"./CategoricalChart-lLmfaMcS.js";import"./Layer-Be605v_j.js";import"./Curve-Mu286cSN.js";import"./types-CKo4Bnww.js";import"./step-DTNf_sWS.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DZGph_C9.js";import"./Label-CdDqsnQd.js";import"./Text-Bw10gxla.js";import"./DOMUtils-DrunKDJC.js";import"./useBackwardsCompatibleTheme-CD7phNhZ.js";import"./ZIndexLayer-B6Mf8DJp.js";import"./useAnimationId-BA2h0Ua8.js";import"./ActivePoints-CURbINes.js";import"./Dot-CVIHEjDA.js";import"./RegisterGraphicalItemId-Cdozmspz.js";import"./ErrorBarContext-B-lCMwxo.js";import"./GraphicalItemClipPath-D8_vcKpW.js";import"./SetGraphicalItem-BiSwI4Xl.js";import"./getRadiusAndStrokeWidthFromDot-Cq9L4k3r.js";import"./ActiveShapeUtils-CZ0w88RB.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BQ5_-jT8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,pt as default};
