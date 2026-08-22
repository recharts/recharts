import{R as t}from"./iframe-COdQ-_i9.js";import{R as n}from"./zIndexSlice-BAUHEZhm.js";import{L as s}from"./LineChart-C23cnykn.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DFXQ4cY5.js";import{X as l}from"./XAxis-LizApVv-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DRdGH59w.js";import"./index-nH6MfLbp.js";import"./index-m-v483sf.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-dt-7inwK.js";import"./isWellBehavedNumber-B44fORf2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BTy3ifzR.js";import"./index-DZp6-Cy2.js";import"./index-CaZNwhso.js";import"./axisSelectors-DbJ1cRpx.js";import"./d3-scale-CMt_xflf.js";import"./renderedTicksSlice-hdjV5rOA.js";import"./CartesianChart--ZzFWipT.js";import"./chartDataContext-C8omdLZa.js";import"./CategoricalChart-BY1Qswpd.js";import"./Layer-LpNLyWgX.js";import"./Curve-K6myfO05.js";import"./types-Blz_Jgjg.js";import"./step-CqirpvzS.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ePeQa2pM.js";import"./Label-CFb-_bkR.js";import"./Text-BgPldVXh.js";import"./DOMUtils-Di9E6LdJ.js";import"./useId-CipAwz_I.js";import"./useBackwardsCompatibleTheme-Cu3drd5h.js";import"./ZIndexLayer-BadBbMoS.js";import"./useAnimationId-B94kpDIK.js";import"./ActivePoints-ekgNIGe7.js";import"./Dot-BSGkTFAh.js";import"./RegisterGraphicalItemId-WjWZ93CB.js";import"./ErrorBarContext-C4XMoDIN.js";import"./GraphicalItemClipPath-BoTywd6M.js";import"./SetGraphicalItem-DdM0uyL7.js";import"./getRadiusAndStrokeWidthFromDot-CyRm1MKY.js";import"./ActiveShapeUtils-CaEJ6Khj.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-gJenpmBs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
