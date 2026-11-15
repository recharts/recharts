import{R as t}from"./iframe-B2PzCMaw.js";import{R as m}from"./zIndexSlice-D2yQeuEI.js";import{L as s}from"./LineChart-MH_SG76l.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BuZqDult.js";import{X as l}from"./XAxis-hYV9QQyh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DhYGu3Pl.js";import"./throttle-DjegI8Tm.js";import"./index-BhJHCUKu.js";import"./index-DBXzZd1T.js";import"./RechartsWrapper-hk-Vj6y4.js";import"./axisSelectors-jPkZuWdd.js";import"./polarAxisSelectors-fU1kcxI4.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BTQYnDFg.js";import"./index-CU8WBM5i.js";import"./index-DS5yNlDY.js";import"./renderedTicksSlice-CHYqXqJx.js";import"./index-KnJExrJ_.js";import"./fillDefinitions-85fgVbiv.js";import"./CartesianChart-g3SkQicD.js";import"./chartDataContext-CqAbLC2U.js";import"./CategoricalChart-Pw3GxjZO.js";import"./Layer-qWAN0MNZ.js";import"./Curve-36hHeCTa.js";import"./types-BQ9HRUUW.js";import"./step-BzcUBi6T.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BUMHKDbc.js";import"./Label-dW2fYkfR.js";import"./Text-587hVFVv.js";import"./ZIndexLayer-P8eiWDF3.js";import"./ActivePoints-z0ZX6SBd.js";import"./Dot-QX5dxkLv.js";import"./activeStyles-dbWrPfDr.js";import"./useAnimationId-C33gpbVv.js";import"./Symbols-BR81WChd.js";import"./symbol-Yo8Gegd9.js";import"./ErrorBarContext-BWeZxt5m.js";import"./SetGraphicalItem-BYuG84UQ.js";import"./getRadiusAndStrokeWidthFromDot-CBoQ2zXz.js";import"./ActiveShapeUtils-Ch3_ahrz.js";import"./useEffectiveDataKey-DQekwkZ0.js";import"./CartesianAxis-p63YhqCL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,mt as __namedExportsOrder,pt as default};
