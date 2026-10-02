import{R as t}from"./iframe-B0sakJiE.js";import{R as m}from"./zIndexSlice-C2JoSOuc.js";import{L as s}from"./LineChart-D5dd-ycI.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-84fb3iOh.js";import{X as l}from"./XAxis-BMxSzB1I.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C7TX7owl.js";import"./index-DsNYe81z.js";import"./index-BXQEz9WW.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-ssIH5a_N.js";import"./isWellBehavedNumber-DiVn1zM4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BpIUDAEt.js";import"./axisSelectors-DAvStXmd.js";import"./d3-scale-CBENh8dV.js";import"./index-CshZKuHv.js";import"./index-B_LLgB3d.js";import"./renderedTicksSlice-BPkvdwOw.js";import"./index-7d7qLSfx.js";import"./CartesianChart-BkOoMrfQ.js";import"./chartDataContext-Bl9ftmGr.js";import"./CategoricalChart-i5JvNUXt.js";import"./Layer-CcOy9dqf.js";import"./Curve-B_1SwL8s.js";import"./types-BxUBO_Vd.js";import"./step-step2nKl.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DhCfcvtd.js";import"./Label-CXhmz5va.js";import"./Text-YdcYRLnk.js";import"./DOMUtils-Cp8HsdRc.js";import"./useId-ByzngA9u.js";import"./useBackwardsCompatibleTheme-yTt122QS.js";import"./ZIndexLayer-C7T7VX-U.js";import"./useAnimationId-fISgZVPU.js";import"./ActivePoints-REhV00gC.js";import"./Dot-CHjZWmhk.js";import"./RegisterGraphicalItemId-BMnnO_Y6.js";import"./ErrorBarContext-lXq8p5sv.js";import"./GraphicalItemClipPath-DDSyttGC.js";import"./SetGraphicalItem-BtMMOS1d.js";import"./getRadiusAndStrokeWidthFromDot-Bo_6wHZf.js";import"./ActiveShapeUtils-DnkyzZr6.js";import"./useGraphicalItemIdentity-CN480731.js";import"./CartesianAxis-6gx2DY-1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
