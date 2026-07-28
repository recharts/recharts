import{R as t}from"./iframe-Byz0CZgU.js";import{R as m}from"./zIndexSlice-DotL-Jp7.js";import{L as s}from"./LineChart-DX0uSktk.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CzBaFcfy.js";import{X as l}from"./XAxis-BUPL4hjC.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-4aokm5Ko.js";import"./index-CK-fZH2A.js";import"./index-CQCdoqal.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DuQSjIkO.js";import"./isWellBehavedNumber-B1YKzF79.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D5qdTAip.js";import"./index-CNmE48Wz.js";import"./index-D4FuUZjH.js";import"./renderedTicksSlice-BW0ZnHiJ.js";import"./axisSelectors-CN4g76wg.js";import"./d3-scale-D3FDPfRZ.js";import"./CartesianChart-QxAb7wSw.js";import"./chartDataContext-E1G0KTyW.js";import"./CategoricalChart-Dqx0x7Kl.js";import"./Layer-jJo0ut9m.js";import"./Curve-BcJaCZSu.js";import"./types-DE0YJD6S.js";import"./step-Cb3pk4Rp.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-2XdTa_Uh.js";import"./Label-DuUl9C5P.js";import"./Text-DEkD8bId.js";import"./DOMUtils-DwTCLKyl.js";import"./ZIndexLayer-DaxIl4jI.js";import"./useAnimationId-CqGGvgKC.js";import"./ActivePoints-CwZhWFk3.js";import"./Dot-B1fpIP2w.js";import"./RegisterGraphicalItemId-CPoQFzzX.js";import"./ErrorBarContext-D4-M1cf3.js";import"./GraphicalItemClipPath-CC2ibiyE.js";import"./SetGraphicalItem-D0qKavYL.js";import"./getRadiusAndStrokeWidthFromDot-BTyL3OgJ.js";import"./ActiveShapeUtils-RF04AL4M.js";import"./RechartsThemeContext-DfGqi-Ay.js";import"./CartesianAxis-B3F7THN1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const pt=["TickPositioning"];export{r as TickPositioning,pt as __namedExportsOrder,at as default};
