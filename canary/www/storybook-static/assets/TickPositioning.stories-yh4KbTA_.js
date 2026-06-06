import{R as t}from"./iframe-CLfZCDGm.js";import{R as m}from"./zIndexSlice-CA_idCig.js";import{L as s}from"./LineChart-CoJwYRW-.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DeRPzJVR.js";import{X as l}from"./XAxis-BYpmzEP_.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-QRpJ3co-.js";import"./index-DnUMf4Cl.js";import"./index-CDzW5wMM.js";import"./get-DkSz9-jm.js";import"./resolveDefaultProps-x0HcBOxj.js";import"./isWellBehavedNumber-COd4_fF0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-atPiLOuE.js";import"./index-DssGAL0P.js";import"./index-BOf2N6VY.js";import"./renderedTicksSlice-Chi1ci-p.js";import"./axisSelectors-DMG299p3.js";import"./d3-scale-Xh1lphWt.js";import"./string-B6fdYHAA.js";import"./CartesianChart-B0jH1uhv.js";import"./chartDataContext-BNkTUWKr.js";import"./CategoricalChart-BbsCvjmJ.js";import"./Layer-Byvx6_V4.js";import"./Curve-CEx7pPNr.js";import"./types-Dbi5OTiB.js";import"./step-BvrgBlnG.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-2Sc0l-_O.js";import"./Label-D3bkn6cZ.js";import"./Text-CGIrE8uN.js";import"./DOMUtils-BuwrxSLS.js";import"./ZIndexLayer-DyKLPJQn.js";import"./useAnimationId-vAkCmZi7.js";import"./ActivePoints-DxCVVL9F.js";import"./Dot-B2U87Uh_.js";import"./RegisterGraphicalItemId-BL3S-b5-.js";import"./ErrorBarContext-ltXyVCQ2.js";import"./GraphicalItemClipPath-DB3DHpQ4.js";import"./SetGraphicalItem-MghETS_R.js";import"./getRadiusAndStrokeWidthFromDot-Du9ACRIL.js";import"./ActiveShapeUtils-CmBRxm29.js";import"./CartesianAxis-CvEaQSy2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const at=["TickPositioning"];export{r as TickPositioning,at as __namedExportsOrder,ot as default};
