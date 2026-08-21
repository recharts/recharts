import{R as t}from"./iframe-Badwul9q.js";import{R as n}from"./zIndexSlice-CEPqA6uv.js";import{L as s}from"./LineChart-DEzdcQEX.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Bq5Pip6f.js";import{X as l}from"./XAxis-DwaxFHEN.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BG2Qy65h.js";import"./index-BL44lg5f.js";import"./index-D1wsKNYb.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DH92j3VQ.js";import"./isWellBehavedNumber-kTcazBa4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DT9_WEbf.js";import"./index-BAZVFS-Q.js";import"./index-BjECjR4R.js";import"./axisSelectors-CTwDlHnv.js";import"./d3-scale-TLUlZmuF.js";import"./renderedTicksSlice-BDycl-yX.js";import"./CartesianChart-D8iyGmBz.js";import"./chartDataContext-Bt38eSkc.js";import"./CategoricalChart-1ZyUfD1N.js";import"./Layer-D6-JDPxR.js";import"./Curve-BaVpsYCr.js";import"./types-DAsbYWRO.js";import"./step-B8WIZZ5_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D7VnlwSp.js";import"./Label-UqWUh_Dj.js";import"./Text-h9Iu7ZeD.js";import"./DOMUtils-BA3evV1C.js";import"./useId-DvG1S0KZ.js";import"./useBackwardsCompatibleTheme-BCTNxxa7.js";import"./ZIndexLayer-DzsdJFep.js";import"./useAnimationId-jiUA16Df.js";import"./ActivePoints-B6c6f_ub.js";import"./Dot-1XO9AD1Q.js";import"./RegisterGraphicalItemId-f2QL4JQB.js";import"./ErrorBarContext-DRSE_a5E.js";import"./GraphicalItemClipPath-CN8tu77t.js";import"./SetGraphicalItem-DT7eapgt.js";import"./getRadiusAndStrokeWidthFromDot-qvEZslpV.js";import"./ActiveShapeUtils-CF5WFyvr.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-C8y8cQTk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
