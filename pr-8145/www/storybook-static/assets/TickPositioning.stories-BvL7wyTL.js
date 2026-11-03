import{R as t}from"./iframe-C9Icmvn-.js";import{R as m}from"./zIndexSlice-BtEgXkTj.js";import{L as s}from"./LineChart-C8PKGvzB.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CQVEJkC8.js";import{X as l}from"./XAxis-3c-aZ5Pt.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Ca82pTCc.js";import"./throttle-BP58Oxor.js";import"./index-Dmxp60UK.js";import"./index-OnkxBtFQ.js";import"./RechartsWrapper-CtHkjOy7.js";import"./axisSelectors-C12AZXdM.js";import"./polarAxisSelectors-BlT-4ON5.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DZcRnjza.js";import"./index-WAfrpxeX.js";import"./index-D9kzRPzU.js";import"./renderedTicksSlice-wh0y1ne7.js";import"./index-Dwiu-D7S.js";import"./fillDefinitions-BsgJeWYO.js";import"./CartesianChart-TwWF9vdI.js";import"./ZIndexPortal-Dm-GjtZl.js";import"./CategoricalChart-PMdsySjF.js";import"./Layer-wqByJTCO.js";import"./Curve-C441Qxgg.js";import"./types-C9Uy4GKt.js";import"./step-DBIWc43o.js";import"./path-DyVhHtw_.js";import"./LabelList-BBURyYAC.js";import"./Label-B5iIonTH.js";import"./Text-sNGi1G51.js";import"./DOMUtils-B21FeQ1N.js";import"./ZIndexLayer-B_nMkGpF.js";import"./ActivePoints-CHnUvRu_.js";import"./Dot-DC8dfn9r.js";import"./activeStyles-h91K6JZi.js";import"./useAnimationId-BL9AhoYr.js";import"./dataEntryStyles-BjZqswDr.js";import"./Symbols-ColLzRAz.js";import"./symbol-4cE6vjyv.js";import"./ErrorBarContext-BlDg14Jm.js";import"./SetGraphicalItem-xkXC5Q40.js";import"./getRadiusAndStrokeWidthFromDot-Df9gcykC.js";import"./ActiveShapeUtils-B_TPSWTk.js";import"./useEffectiveDataKey-C0LxQIpq.js";import"./CartesianAxis-R6B48fBq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,ct as __namedExportsOrder,st as default};
