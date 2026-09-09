import{R as t}from"./iframe-CUWBn4q2.js";import{R as m}from"./zIndexSlice-CXDrS8ji.js";import{L as s}from"./LineChart-DAcaVZJh.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-QQwDXclT.js";import{X as l}from"./XAxis-BLeODyW3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D674SENT.js";import"./index-CLYmkFIA.js";import"./index-9Wsbece1.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D0umfLoR.js";import"./isWellBehavedNumber-C7RzZnbq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D0kr3yQ2.js";import"./axisSelectors-BtjPkbxT.js";import"./d3-scale-CSrhJk_u.js";import"./index-C3m0kF0l.js";import"./index-BRlPI1a6.js";import"./renderedTicksSlice-x_-J1N5G.js";import"./index-B1_r5ctg.js";import"./CartesianChart-DasXIysH.js";import"./chartDataContext-CWpZ_4LY.js";import"./CategoricalChart-C2VzdUWy.js";import"./Layer-B2jZ5e2I.js";import"./Curve-C937f4F6.js";import"./types-Cm8He0RL.js";import"./step-DEVBfr_J.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DFCeZ6-M.js";import"./Label-kwBf54iY.js";import"./Text-DyTjweFw.js";import"./DOMUtils-DIgt7RHT.js";import"./useId-D5YR5LZL.js";import"./useBackwardsCompatibleTheme-D6xiuF9M.js";import"./ZIndexLayer-D2yQ2Oeh.js";import"./useAnimationId-75oMmLO2.js";import"./ActivePoints-BpXzUdPZ.js";import"./Dot-BGhESmiF.js";import"./RegisterGraphicalItemId-xVBFXNgo.js";import"./ErrorBarContext-BKxRmBr1.js";import"./GraphicalItemClipPath-g7UOCVV4.js";import"./SetGraphicalItem-DiC6WCa5.js";import"./getRadiusAndStrokeWidthFromDot-18D5zGZY.js";import"./ActiveShapeUtils-BbASsAoV.js";import"./useGraphicalItemIdentity-B8tF-TLM.js";import"./CartesianAxis-B28nXVtL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
