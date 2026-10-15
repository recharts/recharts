import{R as t}from"./iframe-DW88jlWE.js";import{R as m}from"./zIndexSlice-DVK4421h.js";import{L as s}from"./LineChart-BlckqTSO.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-eHeA353O.js";import{X as l}from"./XAxis-DR4MLdhh.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DdwERQOb.js";import"./index-CYoLVhib.js";import"./index-DKd_R_4T.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BeGeeMAY.js";import"./isWellBehavedNumber-DJEibIDK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D6Qja1Rv.js";import"./axisSelectors-BvsqhHdG.js";import"./d3-scale-B9KsqEcg.js";import"./index-DGoH4J8D.js";import"./index-CTYHixiw.js";import"./renderedTicksSlice-CBsnm3d5.js";import"./index-DfrCmWVV.js";import"./CartesianChart-DB1uC4rj.js";import"./chartDataContext-DYk24gQd.js";import"./CategoricalChart-Bfzcp6tQ.js";import"./Layer-1wEz8tGE.js";import"./Curve-Dh68tpzp.js";import"./types-CqLteoP0.js";import"./step-DBxmXEXg.js";import"./path-DyVhHtw_.js";import"./activeStyles-D70ZhOkY.js";import"./Label-woFms0xV.js";import"./Text-BEy-xjYS.js";import"./pageBackground-D5Jdtqol.js";import"./useId-DsKCuo-O.js";import"./useBackwardsCompatibleTheme-DRnujEnS.js";import"./ZIndexLayer-NojUaQJi.js";import"./useAnimationId-CJ2VkiZA.js";import"./dataEntryStyles-BR960LqV.js";import"./ActivePoints-uBvMOKmI.js";import"./Dot-uVIbcFi4.js";import"./ErrorBarContext-Cf7bjtdd.js";import"./GraphicalItemClipPath-BGSGPFhH.js";import"./SetGraphicalItem-CiG8FS9q.js";import"./getRadiusAndStrokeWidthFromDot-jzOKzrlC.js";import"./ActiveShapeUtils-sQdrYNDC.js";import"./useEffectiveDataKey-OZ4YR6rc.js";import"./CartesianAxis-BAGJBH6f.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
