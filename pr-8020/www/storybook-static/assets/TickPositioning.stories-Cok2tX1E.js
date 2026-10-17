import{R as t}from"./iframe-BYNQK8LM.js";import{R as m}from"./zIndexSlice-CnKvPC-T.js";import{L as s}from"./LineChart-2ynArXdk.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Bz6FXF4d.js";import{X as l}from"./XAxis-CBcIWiwv.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DlEVZZqo.js";import"./index-PSgPxbx_.js";import"./index-C0msNLyf.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-e-zsAsB1.js";import"./isWellBehavedNumber-BZZV9Me7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Di3THVkM.js";import"./axisSelectors-f_hhqOEQ.js";import"./d3-scale-D4yBTTO3.js";import"./index-Cg_72k7E.js";import"./index-CsXf8i4B.js";import"./renderedTicksSlice-D3c5wsjJ.js";import"./index-C5WITlKt.js";import"./CartesianChart-C_kwKDBD.js";import"./chartDataContext-clQVsdi0.js";import"./CategoricalChart-CJdqn6cX.js";import"./Layer-CWziNCLd.js";import"./Curve-CjpgSr7n.js";import"./types-8Tp7AoeZ.js";import"./step-CHupxKkt.js";import"./path-DyVhHtw_.js";import"./activeStyles-CDuvBT6X.js";import"./Label--8HpHVT6.js";import"./Text-uEN8Pqjn.js";import"./pageBackground-ezRX3My0.js";import"./useId-Dpi4gaCB.js";import"./useBackwardsCompatibleTheme-Dydi4_BE.js";import"./ZIndexLayer-DnQxIb9c.js";import"./useAnimationId-BA2hTS6j.js";import"./dataEntryStyles-BhOKhuEL.js";import"./ActivePoints-Cvp-MGqu.js";import"./Dot-Dz9YgpZb.js";import"./ErrorBarContext-ymRWszCz.js";import"./GraphicalItemClipPath-BzYQ5qPw.js";import"./SetGraphicalItem-C56xRO9a.js";import"./getRadiusAndStrokeWidthFromDot-B9dFz0h2.js";import"./ActiveShapeUtils-CozVnlhs.js";import"./useEffectiveDataKey-Cq2dQ4RC.js";import"./CartesianAxis-DHgd3hOW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
