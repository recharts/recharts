import{R as t}from"./iframe-DQS4myAB.js";import{R as n}from"./zIndexSlice-CRKGO7km.js";import{L as s}from"./LineChart-Ds6S1qMZ.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DQDSu0_w.js";import{X as l}from"./XAxis-BNsLkqf_.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BsoZ_hEn.js";import"./index-C2aL9BgM.js";import"./index-DDMxvxUH.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BIteYQ9K.js";import"./isWellBehavedNumber-zK_PJpDu.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-A-SxCpKR.js";import"./index-Bqu6H91U.js";import"./index-CvvA9CVv.js";import"./axisSelectors-DX4jdBfR.js";import"./d3-scale-5kESFzKL.js";import"./renderedTicksSlice-C2h8Z4jj.js";import"./CartesianChart-T2RwwuUW.js";import"./chartDataContext-BIeQL6Ui.js";import"./CategoricalChart-bL4PqON3.js";import"./Layer-BZTFzIOK.js";import"./Curve-Biukq7ie.js";import"./types-lJpcgJl2.js";import"./step-CQkxY-v0.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B7OZIGbB.js";import"./Label-BA6rOHS2.js";import"./Text-GAhVF71G.js";import"./DOMUtils-DInenL_7.js";import"./useId-BeKVfcQc.js";import"./useBackwardsCompatibleTheme-CRkmgrCS.js";import"./ZIndexLayer-HtJhw_Ro.js";import"./useAnimationId-C6swfQ_N.js";import"./ActivePoints-Di6LpqPi.js";import"./Dot-DsGcbXq1.js";import"./RegisterGraphicalItemId-Dq93b8dF.js";import"./ErrorBarContext-CpV7w0Pv.js";import"./GraphicalItemClipPath-CdlG8-5u.js";import"./SetGraphicalItem-CetdGSA-.js";import"./getRadiusAndStrokeWidthFromDot-TGRMyQOP.js";import"./ActiveShapeUtils-BHK0lPEL.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-C-8QqbQf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,mt as default};
