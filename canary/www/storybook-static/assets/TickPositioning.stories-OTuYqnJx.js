import{R as t}from"./iframe-BFObQXXM.js";import{R as m}from"./zIndexSlice-BvSBG_sk.js";import{L as s}from"./LineChart-Bp_cne0z.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-fvr9nFjR.js";import{X as l}from"./XAxis-qu1te6gL.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DjO6J8yc.js";import"./index-BDLQEm-M.js";import"./index-DuyOw6al.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BRFxqhI5.js";import"./isWellBehavedNumber-Di8XhGY_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D0l9eNV0.js";import"./axisSelectors-CVf0-qpU.js";import"./d3-scale-Da5OAhLE.js";import"./index-D88_648m.js";import"./index-DgBcae_n.js";import"./renderedTicksSlice-ElbwHqBe.js";import"./index-D3gbqmrd.js";import"./CartesianChart-D-DmleFH.js";import"./chartDataContext-DLE8D3iQ.js";import"./CategoricalChart-CTQAivkk.js";import"./Layer-B5sm7Diz.js";import"./Curve-vRM4WLtL.js";import"./types-D0QZpxYL.js";import"./step-DZUEZKzr.js";import"./path-DyVhHtw_.js";import"./activeStyles-CWTGeeaa.js";import"./Label-DDOQ4R0s.js";import"./Text-CJhUB4hq.js";import"./pageBackground-C-W7t-2X.js";import"./useId-C4vD49YQ.js";import"./useBackwardsCompatibleTheme-SoWlTCM6.js";import"./ZIndexLayer-Dx_I1S2M.js";import"./useAnimationId-5IpIdjB8.js";import"./dataEntryStyles-BYgKVvun.js";import"./ActivePoints-u30qQxp9.js";import"./Dot-D0UZAudw.js";import"./ErrorBarContext-A6KbAgUZ.js";import"./GraphicalItemClipPath-Veko-L0U.js";import"./SetGraphicalItem-UiOjxlQM.js";import"./getRadiusAndStrokeWidthFromDot-l8Ertzo7.js";import"./ActiveShapeUtils-3kPY9Bl6.js";import"./useEffectiveDataKey-DoMzN8uO.js";import"./CartesianAxis-LKjUZ976.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
