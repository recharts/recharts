import{R as t}from"./iframe-Dgm4gy-U.js";import{R as m}from"./zIndexSlice-CiwacDpC.js";import{L as s}from"./LineChart-B0txdDe2.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CUAXGkMg.js";import{X as l}from"./XAxis-CfrEw3PN.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-zAOqa1T8.js";import"./index-DB1nW_kS.js";import"./index-B8zxjei6.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dd95FcLW.js";import"./isWellBehavedNumber-BJRZFbyv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ZSLGTFtH.js";import"./axisSelectors-mj5UOSEK.js";import"./d3-scale-CRCwBtC_.js";import"./index-BdUNqqcp.js";import"./index-CjMT8r2k.js";import"./renderedTicksSlice-DyR3wyNf.js";import"./index-C9uskWuj.js";import"./CartesianChart-BqW0iuwz.js";import"./chartDataContext-DoVd5A16.js";import"./CategoricalChart-DkwsSuns.js";import"./Layer-BihfHLDn.js";import"./Curve-CtDZfaqJ.js";import"./types-BUhHmnCY.js";import"./step-BcutOZJj.js";import"./path-DyVhHtw_.js";import"./activeStyles-DhaHnmuT.js";import"./Label-D7CpXrZ4.js";import"./Text-8gs2XgOQ.js";import"./pageBackground-Cm2lHn8y.js";import"./useId-C1YsdgdZ.js";import"./useBackwardsCompatibleTheme-BpARltC_.js";import"./ZIndexLayer-IYsblH0Q.js";import"./useAnimationId-Bq4IYhf5.js";import"./dataEntryStyles-DqmWF7tK.js";import"./ActivePoints-BL0uan1q.js";import"./Dot-DF3bSaZ9.js";import"./ErrorBarContext-DQKU8Ti5.js";import"./GraphicalItemClipPath-D_X4MzO8.js";import"./SetGraphicalItem-Dc743XQT.js";import"./getRadiusAndStrokeWidthFromDot-LRjZ0GPt.js";import"./ActiveShapeUtils-CQNP7AWp.js";import"./useEffectiveDataKey-Dpv4-4ke.js";import"./CartesianAxis-B7Oepgsg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
