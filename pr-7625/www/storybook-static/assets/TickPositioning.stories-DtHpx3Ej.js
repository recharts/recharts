import{R as t}from"./iframe-zxb33ZNc.js";import{R as m}from"./zIndexSlice-D-761Vg8.js";import{L as s}from"./LineChart-cP333dp0.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DVclB8_O.js";import{X as l}from"./XAxis-DyyrbnA7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CFGr8cJA.js";import"./index-NFdtXm63.js";import"./index-Dy7fskO8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B762IN2m.js";import"./isWellBehavedNumber-C-R_UlW0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DnDLnjyJ.js";import"./index-C-3okO3A.js";import"./index-qRk_YJlx.js";import"./axisSelectors-Dv7CZoVg.js";import"./d3-scale-BDbFjNBn.js";import"./renderedTicksSlice-DRIJDHkm.js";import"./CartesianChart-DKaHYTMw.js";import"./chartDataContext-c74vlS-l.js";import"./CategoricalChart-ZwmRaYFc.js";import"./Layer-C3L05uBE.js";import"./Curve-BFfco-WU.js";import"./types-Dolw0ENN.js";import"./step-Bi5jdybT.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DMGgkPL-.js";import"./Label-DU6Rr4ia.js";import"./Text-KHBAPEp1.js";import"./DOMUtils-Dz-vbmjU.js";import"./ZIndexLayer-DbePcZGA.js";import"./useAnimationId-SEMOU1a_.js";import"./ActivePoints-rNpF2i82.js";import"./Dot-aKbZPoCq.js";import"./RegisterGraphicalItemId-BHi56vMH.js";import"./ErrorBarContext-Cv-hFLv9.js";import"./GraphicalItemClipPath-dZEprd-F.js";import"./SetGraphicalItem-DyIKS88p.js";import"./getRadiusAndStrokeWidthFromDot-BBU-nePS.js";import"./ActiveShapeUtils-B0CCDTVh.js";import"./RechartsThemeContext-DJQOtdEl.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DX_ZohL1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
