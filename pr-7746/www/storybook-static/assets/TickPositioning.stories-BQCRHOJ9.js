import{R as t}from"./iframe-CGBDVxE-.js";import{R as m}from"./zIndexSlice-Dcoi5C6v.js";import{L as s}from"./LineChart-BB0r3Mhj.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-eMAUoNnx.js";import{X as l}from"./XAxis-Ynp2iGfo.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-r4SgwsRS.js";import"./index-hboVxxbY.js";import"./index-DBtrqjyz.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DFx1_FeE.js";import"./isWellBehavedNumber-BDUfwR7p.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-R5wdE7Du.js";import"./axisSelectors-DpEiq2v9.js";import"./d3-scale-BEr64TMX.js";import"./index-BIKEo4sh.js";import"./index-WvwT3848.js";import"./renderedTicksSlice-D93v-Tca.js";import"./index-DyBKUzQK.js";import"./CartesianChart-DkeZbNrD.js";import"./chartDataContext-BUzll-9F.js";import"./CategoricalChart-_qdlKxZa.js";import"./Layer-BQpheWca.js";import"./Curve-D7CJuFyB.js";import"./types-ALxpiXvN.js";import"./step-DHP97Yog.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BodTqMda.js";import"./Label-rN0i5HX0.js";import"./Text-DzBijb3H.js";import"./DOMUtils-D0ua0v6z.js";import"./useId-BXTAvIyb.js";import"./useBackwardsCompatibleTheme-B_EiPeE9.js";import"./ZIndexLayer-BQMQ-79w.js";import"./useAnimationId-Dg5PDt8u.js";import"./ActivePoints-DVb5cL5_.js";import"./Dot-CBmDQuzq.js";import"./RegisterGraphicalItemId-B6GAZHe-.js";import"./ErrorBarContext-vv2ECrtE.js";import"./GraphicalItemClipPath-CHQFwdrq.js";import"./SetGraphicalItem-CIMjPr92.js";import"./getRadiusAndStrokeWidthFromDot-XfT2XWrG.js";import"./ActiveShapeUtils-tQSQ8w1p.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BmUJzq6P.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
