import{R as t}from"./iframe-Qmct8dPL.js";import{R as m}from"./zIndexSlice-DXIqEK91.js";import{L as s}from"./LineChart-CvNXxjFZ.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-B9HMr-R-.js";import{X as l}from"./XAxis-9J-zU-e3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-OLGJV50e.js";import"./index-BiNiAG-8.js";import"./index-Y-_D5N0e.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-1ACdwYcX.js";import"./isWellBehavedNumber-B8_5eiwl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CA8gYP8X.js";import"./axisSelectors-DQj7dDoX.js";import"./d3-scale-BxubizPM.js";import"./index-JkwU9wUv.js";import"./index-Cl8DEeo-.js";import"./renderedTicksSlice-C_XZvXHS.js";import"./index-yzCwrxwp.js";import"./CartesianChart-BKFAhLSe.js";import"./chartDataContext-phyyW0XT.js";import"./CategoricalChart-kEDlcm2-.js";import"./Layer-DivV_9FZ.js";import"./Curve-BWSQwgQs.js";import"./types-R1YvGwXP.js";import"./step-DllQQmGx.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bqna9ZlZ.js";import"./Label-B1HxkUUU.js";import"./Text-CqCSaO_p.js";import"./DOMUtils-CVrddbmH.js";import"./useId-BXFGZ7WB.js";import"./useBackwardsCompatibleTheme-BkhTNX9-.js";import"./ZIndexLayer-1SjAyyP_.js";import"./useAnimationId-DreFRpzI.js";import"./ActivePoints-Bxhr0cL_.js";import"./Dot-CegM_aDK.js";import"./RegisterGraphicalItemId-xOabcHeQ.js";import"./ErrorBarContext-C9Rble42.js";import"./GraphicalItemClipPath-B4CCgAUu.js";import"./SetGraphicalItem-Dm7pFyfQ.js";import"./getRadiusAndStrokeWidthFromDot-BXmHQhOs.js";import"./ActiveShapeUtils-QE8CXMAG.js";import"./useGraphicalItemIdentity-BCZesqSu.js";import"./CartesianAxis-BRUXhqMv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
