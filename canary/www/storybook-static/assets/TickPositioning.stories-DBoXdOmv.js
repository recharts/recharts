import{R as t}from"./iframe-CLOWWJpx.js";import{R as m}from"./zIndexSlice-Chs4RMZ4.js";import{L as s}from"./LineChart-CyuYRlEG.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-8To0Hkmm.js";import{X as l}from"./XAxis-5aclO3SU.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-NR7rmq0H.js";import"./index-D8vkw_WC.js";import"./index-CvPaOhKY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DCKMEUHg.js";import"./isWellBehavedNumber-Bkt9PZby.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-PtmXkiLl.js";import"./index-CoemtFTs.js";import"./index-gsgSuvG_.js";import"./axisSelectors-B6C-iAl6.js";import"./d3-scale-BWgGZ0ZC.js";import"./renderedTicksSlice-Dqa_BZU0.js";import"./CartesianChart-BghZLmrY.js";import"./chartDataContext-CMbA824e.js";import"./CategoricalChart--VJeMiVR.js";import"./Layer-GlnJsptq.js";import"./Curve-DZ0oaj1l.js";import"./types-B-e_P8o7.js";import"./step-CeEc6BtY.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DKcQidly.js";import"./Label-DG_GQs1i.js";import"./Text-CoBlae8g.js";import"./DOMUtils-cc_L-yud.js";import"./ZIndexLayer-NdFk7Llr.js";import"./useAnimationId-CXs0-Peu.js";import"./ActivePoints-DzcusPWJ.js";import"./Dot-DoW1vskp.js";import"./RegisterGraphicalItemId-D8sZKmnj.js";import"./ErrorBarContext-zURr2Pa5.js";import"./GraphicalItemClipPath-CzZgXvBv.js";import"./SetGraphicalItem-DBtV5dO_.js";import"./graphicalItemIdentity-DPGCfWOI.js";import"./ActiveShapeUtils-6rRdWU2Q.js";import"./RechartsThemeContext-CG7dbDKG.js";import"./CartesianAxis-Cg5r0ZYC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const pt=["TickPositioning"];export{r as TickPositioning,pt as __namedExportsOrder,at as default};
