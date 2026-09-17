import{R as t}from"./iframe-DmaTyynO.js";import{R as m}from"./zIndexSlice-C61SZGFC.js";import{L as s}from"./LineChart-DuaGwSK4.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DxjJsn0p.js";import{X as l}from"./XAxis-Nv8Uh7AY.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DMA9KLNR.js";import"./index-OHCUWRAn.js";import"./index-V9EvyoG7.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CtyyIUUO.js";import"./isWellBehavedNumber-BK90QDph.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BGC7v2QA.js";import"./axisSelectors-BM_a9F6K.js";import"./d3-scale-DI5fHYPy.js";import"./index-HETsTNte.js";import"./index-COAu8Zax.js";import"./renderedTicksSlice-DqtLTQXs.js";import"./index-C4wr6Lq-.js";import"./CartesianChart-BKxlRmtn.js";import"./chartDataContext-DAmq05uD.js";import"./CategoricalChart-BUSfmukV.js";import"./Layer-CKq6pjpc.js";import"./Curve-Bgge_Gh-.js";import"./types-DmC6Y3U4.js";import"./step-D7AfTI4H.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BAF8K0tv.js";import"./Label-CMdX73k3.js";import"./Text-2AUGODc6.js";import"./DOMUtils-BpsSUmre.js";import"./useId-3sGAzHtm.js";import"./useBackwardsCompatibleTheme-DqjXKSq9.js";import"./ZIndexLayer-Cc-SqaEZ.js";import"./useAnimationId-DxNsV_0m.js";import"./ActivePoints-CNIiMQe1.js";import"./Dot-CR2DCP22.js";import"./RegisterGraphicalItemId-CDWIwrm3.js";import"./ErrorBarContext-uI5M5418.js";import"./GraphicalItemClipPath-DsQ7p0LM.js";import"./SetGraphicalItem-D6LEIG6h.js";import"./getRadiusAndStrokeWidthFromDot-DfMtRmCC.js";import"./ActiveShapeUtils-BIrsW6YR.js";import"./useGraphicalItemIdentity-Cz-Bal4G.js";import"./CartesianAxis-CUMWkMKo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
