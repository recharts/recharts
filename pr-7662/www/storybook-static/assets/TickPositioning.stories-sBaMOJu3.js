import{R as t}from"./iframe-cFlQwHEa.js";import{R as n}from"./zIndexSlice-DDYeRltP.js";import{L as s}from"./LineChart-B63Bi82v.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DJAGFMBk.js";import{X as l}from"./XAxis-B2GHVOpr.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DAdIMx4T.js";import"./index-DglaFOn3.js";import"./index-C-TRi17m.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C2OiAFwa.js";import"./isWellBehavedNumber-BSAPeCSS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BXBBXfmC.js";import"./index-CSK5_VVc.js";import"./index-Dtvx5j6b.js";import"./axisSelectors--mu7xJ5Y.js";import"./d3-scale-CkWKTTx7.js";import"./renderedTicksSlice-D983KGZ4.js";import"./CartesianChart-fiOEBM8R.js";import"./chartDataContext-BvjIPTZo.js";import"./CategoricalChart-BBemHSvC.js";import"./Layer-BgSWIZl1.js";import"./Curve-CyS7BkRL.js";import"./types-ChcMjuwl.js";import"./step-DcRYwHfR.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DKR9bXgi.js";import"./Label-JW-KtVqW.js";import"./Text-BuwjYicu.js";import"./DOMUtils-BFAGFFMB.js";import"./useId-B6yN-zUw.js";import"./useBackwardsCompatibleTheme-BqDTENvH.js";import"./ZIndexLayer-p7Pk0-Yp.js";import"./useAnimationId-BEPJjOtf.js";import"./ActivePoints-CjX0WMZa.js";import"./Dot-BayKRhRn.js";import"./RegisterGraphicalItemId-BQvNsPKC.js";import"./ErrorBarContext-BnnhnyAe.js";import"./GraphicalItemClipPath-uMqpd6od.js";import"./SetGraphicalItem-B-flkej3.js";import"./getRadiusAndStrokeWidthFromDot-CPAqKToh.js";import"./ActiveShapeUtils-CR14wFnm.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BIZkK73U.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
