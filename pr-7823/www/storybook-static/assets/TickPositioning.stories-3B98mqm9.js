import{R as t}from"./iframe-BehVlOkm.js";import{R as m}from"./zIndexSlice-CdmzvBWn.js";import{L as s}from"./LineChart-C4IiSSV_.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-xZ_IkCzK.js";import{X as l}from"./XAxis-CQVzim4L.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-3ebqMYzS.js";import"./index-nl04o6LQ.js";import"./index-lttadt3D.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-9hqPoiPG.js";import"./isWellBehavedNumber-BwNlQ7J1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-0yqzaTB4.js";import"./axisSelectors-DyVT26JG.js";import"./d3-scale-DlStqn9j.js";import"./index-CaKklxJL.js";import"./index-BrZJdMim.js";import"./renderedTicksSlice-dw4JvkQu.js";import"./index-BxFZJssh.js";import"./CartesianChart-DZXsAfAP.js";import"./chartDataContext-COawrzjC.js";import"./CategoricalChart-Bb7rG0O4.js";import"./Layer-Drrwe-kT.js";import"./Curve-DIgGrV17.js";import"./types-CAE_u7CX.js";import"./step-DaHJvpwY.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DX3Aqvyi.js";import"./Label-3Vi5DR-p.js";import"./Text-DdbsBRSW.js";import"./DOMUtils-DRfi6Z_9.js";import"./useId-TSoobfid.js";import"./useBackwardsCompatibleTheme-DC96YUQX.js";import"./ZIndexLayer-C8fMsiAz.js";import"./useAnimationId-PYM0HN7I.js";import"./ActivePoints-CSlqy7_R.js";import"./Dot-BJdMpeRo.js";import"./RegisterGraphicalItemId-B_HypSlK.js";import"./ErrorBarContext-BsuukL4-.js";import"./GraphicalItemClipPath-DHrIaKZQ.js";import"./SetGraphicalItem-ke9OEdFg.js";import"./getRadiusAndStrokeWidthFromDot-Dn20e6Na.js";import"./ActiveShapeUtils-DgsGKv18.js";import"./useGraphicalItemIdentity-CpoXyJzx.js";import"./CartesianAxis-Dh9d1hc7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
