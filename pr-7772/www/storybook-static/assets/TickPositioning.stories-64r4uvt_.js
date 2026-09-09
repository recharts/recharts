import{R as t}from"./iframe-DOP-jAxw.js";import{R as m}from"./zIndexSlice-iZLT4mgM.js";import{L as s}from"./LineChart-DlBZt8ph.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-PilCUCgO.js";import{X as l}from"./XAxis-DUVFq7Gr.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D7DQi97E.js";import"./index-CCuF4-CL.js";import"./index-zAmCVOdn.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C42OrRbv.js";import"./isWellBehavedNumber-aeEmpyhq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Q1Jm5bKD.js";import"./axisSelectors-B_fxjvJU.js";import"./d3-scale-DzSw552P.js";import"./index-bWqnTni2.js";import"./index-DtoMVaOV.js";import"./renderedTicksSlice-CNec-Jhj.js";import"./index-D_24CIxZ.js";import"./CartesianChart-PeHZ3LWB.js";import"./chartDataContext-CuKpjHMI.js";import"./CategoricalChart-CByA_zEa.js";import"./Layer-CsLYPkNS.js";import"./Curve-_tgXMq7w.js";import"./types-Bd_t3tQp.js";import"./step-DlXDgVUU.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D09OLiJi.js";import"./Label-BQxh1muY.js";import"./Text-BM4OLvWb.js";import"./DOMUtils-hJnM7D4i.js";import"./useId-DriqVEjQ.js";import"./useBackwardsCompatibleTheme-lpZr1fce.js";import"./ZIndexLayer-CERsRXD7.js";import"./useAnimationId-DvdWCYQm.js";import"./ActivePoints-BBWJLt59.js";import"./Dot-4jCuUfJZ.js";import"./RegisterGraphicalItemId-a8qjrkCj.js";import"./ErrorBarContext-3aBgegVQ.js";import"./GraphicalItemClipPath-BIJRZhz8.js";import"./SetGraphicalItem-BdxyruZp.js";import"./getRadiusAndStrokeWidthFromDot-1Y9AsD59.js";import"./ActiveShapeUtils-DE-7R1j_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-B-kSgpVr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
