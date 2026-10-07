import{R as t}from"./iframe-ZTC5pSfT.js";import{R as m}from"./zIndexSlice-CiW62Ghg.js";import{L as s}from"./LineChart-BRX-BxAd.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Oh1arZa1.js";import{X as l}from"./XAxis-Oh1yCkiB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-KrxK4z_U.js";import"./index-CzSCaBER.js";import"./index-B4ZumRW0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BUix77YN.js";import"./isWellBehavedNumber-6xDPwo21.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-mhohCDVl.js";import"./axisSelectors-K6KGYDFF.js";import"./d3-scale-Cpr3RseV.js";import"./index-CIre6itI.js";import"./index-C6jgkA61.js";import"./renderedTicksSlice-2JPEuPfq.js";import"./index-BMMDR1qW.js";import"./CartesianChart-BkfStbLb.js";import"./chartDataContext-CsGZnfHI.js";import"./CategoricalChart-Cp6s7k2U.js";import"./Layer-jaIUArAZ.js";import"./Curve-DbdnYDgr.js";import"./types-C79EZ9QB.js";import"./step-Q9TOfcF_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-sBBBQ_aJ.js";import"./Label-CMugnJA-.js";import"./Text-DaoB-dFq.js";import"./DOMUtils-DpY81Anq.js";import"./useId-PK-UNRth.js";import"./useBackwardsCompatibleTheme-DAjVS6k9.js";import"./ZIndexLayer-ilP_ZZPQ.js";import"./useAnimationId-BB_b0zsq.js";import"./ActivePoints-LVJzz7nF.js";import"./Dot-YLlzKOXh.js";import"./RegisterGraphicalItemId-9ha_OJ2S.js";import"./ErrorBarContext-C3dRgdy-.js";import"./GraphicalItemClipPath-aJ1mq8DH.js";import"./SetGraphicalItem-C-6wJbAO.js";import"./getRadiusAndStrokeWidthFromDot-B8rGLwDc.js";import"./ActiveShapeUtils-D8W511PY.js";import"./useGraphicalItemIdentity-CBZHm2cX.js";import"./CartesianAxis-CC0XJ4Ez.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
