import{R as t}from"./iframe-Ek26OKJE.js";import{R as m}from"./zIndexSlice-Cb7AOhUN.js";import{L as s}from"./LineChart-B15OONtS.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-B_mB8jRL.js";import{X as l}from"./XAxis-BnPYeIW7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-nAaWLAvW.js";import"./index-Bhq43Y8T.js";import"./index-CH5hGN9X.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DikHbtvd.js";import"./isWellBehavedNumber-C3YqTazs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B_5MzBNC.js";import"./axisSelectors-BZyUnxor.js";import"./d3-scale-Di7qtVT_.js";import"./index-CVfvjw4V.js";import"./index-CddS4NP_.js";import"./renderedTicksSlice-Bw9pF84S.js";import"./index-tmDn5Ue5.js";import"./CartesianChart-BUYt3N23.js";import"./chartDataContext-q8RiqEic.js";import"./CategoricalChart-Co9RgHLu.js";import"./Layer-DRl71Sg_.js";import"./Curve-8tFNvOBV.js";import"./types-USIGaiIt.js";import"./step-DzHhz21P.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B7V8aYKV.js";import"./Label-Bl-xJBza.js";import"./Text-DbwWqm58.js";import"./DOMUtils-BY_uPlRS.js";import"./useId-rsWHAn-D.js";import"./useBackwardsCompatibleTheme-Drt73puE.js";import"./ZIndexLayer-CR_MqsJe.js";import"./useAnimationId-CwN306xk.js";import"./ActivePoints-CnBuc0OH.js";import"./Dot-CSgA8HWq.js";import"./RegisterGraphicalItemId-DmFzdfAb.js";import"./ErrorBarContext-Cn_05uOu.js";import"./GraphicalItemClipPath-BeXUWsOJ.js";import"./SetGraphicalItem-OIwhrDsV.js";import"./getRadiusAndStrokeWidthFromDot-Dg98J8GV.js";import"./ActiveShapeUtils-AftK0wfE.js";import"./useGraphicalItemIdentity-CLabRpL-.js";import"./CartesianAxis-D3cjFJua.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
