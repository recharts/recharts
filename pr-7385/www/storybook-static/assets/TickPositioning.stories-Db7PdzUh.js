import{c as t}from"./iframe-CmE1Gw1b.js";import{g as m}from"./zIndexSlice-CPvazyt5.js";import{L as s}from"./LineChart-B4BqX6tl.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-iL4IvS3b.js";import{X as l}from"./XAxis-CsAE-1wy.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-D0ucvycs.js";import"./index-Cxu3QwYw.js";import"./index-BRRHmhT0.js";import"./get-Xs9eC5t9.js";import"./resolveDefaultProps-DMnLPor7.js";import"./isWellBehavedNumber-iiy358B8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D8R_Xy2B.js";import"./index-DBnd1KA6.js";import"./index-CVCvCqpB.js";import"./renderedTicksSlice-CPDsz2oQ.js";import"./axisSelectors-DB3YTJ5D.js";import"./d3-scale-CvKKQLFm.js";import"./CartesianChart-CVLVFTZa.js";import"./chartDataContext-BRP4CbYg.js";import"./CategoricalChart-dsp09r-Q.js";import"./Curve-DNUM0bVP.js";import"./types-DmTRT5mp.js";import"./step-CCTJ90gO.js";import"./path-DyVhHtw_.js";import"./Layer-abY4Fjir.js";import"./ReactUtils-BAXLe4Ge.js";import"./Label-Cvukc7WC.js";import"./Text-BQZJ76YD.js";import"./DOMUtils-omFfYIeV.js";import"./ZIndexLayer-DHcHf456.js";import"./ActivePoints-BZYNmVQi.js";import"./Dot-mUoWRWq3.js";import"./RegisterGraphicalItemId-B-oWQNZS.js";import"./ErrorBarContext-BpCSl48G.js";import"./GraphicalItemClipPath-BhaC-7pi.js";import"./SetGraphicalItem-DE9GuFyM.js";import"./useAnimationId-D3nuvCaK.js";import"./getRadiusAndStrokeWidthFromDot-DrN6QQp7.js";import"./ActiveShapeUtils-C_GLb3KM.js";import"./CartesianAxis-CAtPdKeh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
