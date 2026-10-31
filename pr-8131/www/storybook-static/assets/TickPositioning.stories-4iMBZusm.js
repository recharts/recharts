import{R as t}from"./iframe-B0md2XL3.js";import{R as m}from"./zIndexSlice-DA0iP-6p.js";import{L as s}from"./LineChart-BNnNIx5L.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Dwcg0Xhw.js";import{X as l}from"./XAxis-DLCMfyHC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DYFy43g1.js";import"./throttle-Bg4_NSFj.js";import"./index-B6b7n9vZ.js";import"./index-CoDrYRaw.js";import"./RechartsWrapper-CWXf9YtC.js";import"./axisSelectors-CGXaSNKn.js";import"./polarAxisSelectors-EKUmLX1r.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-uqFZU7-w.js";import"./index-B1ySaIl-.js";import"./index-GRpTxPRT.js";import"./renderedTicksSlice-CmqrGULL.js";import"./index-CPY9oK3E.js";import"./fillDefinitions-3Vzegl5l.js";import"./CartesianChart-8QvfRZzW.js";import"./ZIndexPortal-CrQK9kpR.js";import"./CategoricalChart-niTwkvl-.js";import"./Layer-CEcbE5Mj.js";import"./Curve-s1Q-eWha.js";import"./types-k-hf9hch.js";import"./step-B9w_ahFS.js";import"./path-DyVhHtw_.js";import"./LabelList-CC8uMe5u.js";import"./Label-B4OtwMWB.js";import"./Text-iaFwzHQc.js";import"./DOMUtils-BnN7LMKo.js";import"./ZIndexLayer-n48hyeCj.js";import"./ActivePoints-CQgXp3HY.js";import"./Dot-BK9EjXwp.js";import"./activeStyles-CvpZ-3cp.js";import"./useAnimationId-OzV8hXkE.js";import"./dataEntryStyles-QaPc2U0F.js";import"./Symbols-D_2SQKur.js";import"./symbol-CSqYEM7h.js";import"./ErrorBarContext-CrVPyI6s.js";import"./SetGraphicalItem-fxalM_Sw.js";import"./getRadiusAndStrokeWidthFromDot-Dy9C3gHL.js";import"./ActiveShapeUtils-DacyCGB1.js";import"./useEffectiveDataKey-B6E0gPoB.js";import"./CartesianAxis-ib9y6Jw_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
