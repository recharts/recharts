import{R as t}from"./iframe-JTvlYrAE.js";import{R as n}from"./zIndexSlice-D7ZMgfig.js";import{L as s}from"./LineChart-BIPZqDk2.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BHsO2LXO.js";import{X as l}from"./XAxis-D-RPwoLI.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CXxUHuO5.js";import"./index-oSnD0z-O.js";import"./index-DIk0NYXt.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BQ8E1HnC.js";import"./isWellBehavedNumber-DZJ-wKuN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DxDGjzAu.js";import"./axisSelectors-5nOHG62L.js";import"./d3-scale-CyiZcwJt.js";import"./index-6AYKMmGX.js";import"./index-C7e_DiH0.js";import"./renderedTicksSlice-DqB8pESJ.js";import"./index-C2cjqz89.js";import"./CartesianChart-Car3Atj3.js";import"./chartDataContext-r6ewa5Wc.js";import"./CategoricalChart-Dv8UcXMC.js";import"./Layer-OemeYySJ.js";import"./Curve-D4vRDLjT.js";import"./types-BAT4N-Js.js";import"./step-8zevn7on.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CtaNoYLp.js";import"./Label-DVdjMuKO.js";import"./Text-Dg334Fxc.js";import"./DOMUtils-9u-qTQJC.js";import"./useId-Ddv-MCTo.js";import"./useBackwardsCompatibleTheme-DrI3o7cI.js";import"./ZIndexLayer-DRiAaxZ2.js";import"./useAnimationId-B-nvf5O7.js";import"./ActivePoints-ox6ksdpi.js";import"./Dot-CrFaSuhf.js";import"./RegisterGraphicalItemId-5DR47K5z.js";import"./ErrorBarContext-C1DfV54u.js";import"./GraphicalItemClipPath-BqO5vOXC.js";import"./SetGraphicalItem-3AS-SEti.js";import"./getRadiusAndStrokeWidthFromDot-BDnKC9y1.js";import"./ActiveShapeUtils-BXOO9Xzj.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BCWZ119m.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const nt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const st=["TickPositioning"];export{r as TickPositioning,st as __namedExportsOrder,nt as default};
