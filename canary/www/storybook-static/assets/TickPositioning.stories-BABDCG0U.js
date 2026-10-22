import{R as t}from"./iframe-DsTklGd_.js";import{R as m}from"./zIndexSlice-BtbFiuZY.js";import{L as s}from"./LineChart-BdsV4prH.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BpWz7ZGo.js";import{X as l}from"./XAxis-CCdXtDxp.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DdQ2CShf.js";import"./index-BXaEWxS9.js";import"./index-CDyKR3cz.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Bms6p2jX.js";import"./isWellBehavedNumber-CnKVaaX2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DgwcOqsJ.js";import"./axisSelectors-DYheqAyK.js";import"./d3-scale-m8FOg4h4.js";import"./index-DPiom88R.js";import"./index-DwiZHk90.js";import"./renderedTicksSlice-BKqQhYx3.js";import"./index-blk6unfu.js";import"./CartesianChart-CPHbQoR9.js";import"./chartDataContext-PmdzKedQ.js";import"./CategoricalChart-DoFDJCgx.js";import"./Layer-CZKgQj5k.js";import"./Curve-BNsFHGFj.js";import"./types-CPppnSS0.js";import"./step-DT1sNEdD.js";import"./path-DyVhHtw_.js";import"./activeStyles-CRt5O3EE.js";import"./Label-D9BiQh3x.js";import"./Text-BbSBkVqk.js";import"./pageBackground-BHVKZknb.js";import"./useId-Dh4XaEh2.js";import"./useBackwardsCompatibleTheme-DVVyS6sc.js";import"./ZIndexLayer-DFFwnPWa.js";import"./useAnimationId-DDiQkgxw.js";import"./dataEntryStyles-Cfp8oK59.js";import"./ActivePoints-B7jiKkUq.js";import"./Dot-DzYpmtjj.js";import"./ErrorBarContext-BpgUGbiX.js";import"./GraphicalItemClipPath-K8g7er1I.js";import"./SetGraphicalItem-Bi7lJTO4.js";import"./getRadiusAndStrokeWidthFromDot-D7P1mq2m.js";import"./ActiveShapeUtils-Cg3stx7N.js";import"./useEffectiveDataKey-yxNF_elp.js";import"./CartesianAxis-CPZLjXk4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
