import{R as t}from"./iframe-Dbaqfuxw.js";import{R as m}from"./zIndexSlice-CcFmF_GZ.js";import{L as s}from"./LineChart-Dwd6Y2GG.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BIC9rMP6.js";import{X as l}from"./XAxis-B8p6yjl5.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Y8aMRwU5.js";import"./index-A3AcgQ4H.js";import"./index-CQt4Xl-S.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-xjFLpEsL.js";import"./isWellBehavedNumber-BxE9MI33.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dl5FKPzp.js";import"./index-Da5KZnpm.js";import"./index-BrtWnZP9.js";import"./axisSelectors-BumiVa5e.js";import"./d3-scale-HmOGYUjs.js";import"./renderedTicksSlice-DpL__K8R.js";import"./CartesianChart-BXfYtqIv.js";import"./chartDataContext-4k7YbnXG.js";import"./CategoricalChart-CFxz42EG.js";import"./Layer-BXzB5K08.js";import"./Curve-CTO_mN3-.js";import"./types-CVDIv1Cb.js";import"./step-E3pvPVWS.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-y-MKsCpX.js";import"./Label-BcEDWRMz.js";import"./Text-Be1RjgkE.js";import"./DOMUtils-CWVgWmzu.js";import"./ZIndexLayer-CpQayApT.js";import"./useAnimationId-CsoHoZpG.js";import"./ActivePoints-CymzKczQ.js";import"./Dot-B0ezNCXB.js";import"./RegisterGraphicalItemId-BZO7dJhg.js";import"./ErrorBarContext-lpnJ7mOQ.js";import"./GraphicalItemClipPath-r0eQUgnA.js";import"./SetGraphicalItem-D1VXM8vc.js";import"./getRadiusAndStrokeWidthFromDot-BIpM0DDc.js";import"./ActiveShapeUtils-BwZZXBow.js";import"./RechartsThemeContext-60DgJeSx.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DGjRHc2j.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
