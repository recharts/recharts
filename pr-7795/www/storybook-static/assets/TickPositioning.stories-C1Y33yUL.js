import{R as t}from"./iframe-C3lSaTFw.js";import{R as m}from"./zIndexSlice-CVjGcfFW.js";import{L as s}from"./LineChart-BKSw9Ox6.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DICJfQJU.js";import{X as l}from"./XAxis-MYsgX6vB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BAVesAqd.js";import"./index-8Y4ihDcT.js";import"./index-CyFP1eEz.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cy9S0LxM.js";import"./isWellBehavedNumber-tLnZyTMG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CM9ySMEh.js";import"./axisSelectors-BkcaIfMI.js";import"./d3-scale-3ZX1sJwh.js";import"./index-Dt3obc0C.js";import"./index-BruKCsOi.js";import"./renderedTicksSlice-BCrJLlNF.js";import"./index-CCHBt1wf.js";import"./CartesianChart-66zTmp_E.js";import"./chartDataContext-8kJMOLTT.js";import"./CategoricalChart-PbT_m_Z4.js";import"./Layer-DCoygAxl.js";import"./Curve-D4S8erUE.js";import"./types-BmaDYfeO.js";import"./step-DxtN-o39.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BIU8Piw-.js";import"./Label-DRjcihT7.js";import"./Text-H-IPTcTj.js";import"./DOMUtils-DW6zNYNN.js";import"./useId-ByxRmCjV.js";import"./useBackwardsCompatibleTheme-BMLwE0D6.js";import"./ZIndexLayer-BIuAiCXb.js";import"./useAnimationId-Dtjg15yn.js";import"./ActivePoints-CS5Q6FEx.js";import"./Dot-zciZMpDM.js";import"./RegisterGraphicalItemId-C6IEzR7X.js";import"./ErrorBarContext-urOk63oK.js";import"./GraphicalItemClipPath-CWU7eMW9.js";import"./SetGraphicalItem-BLqiLXhC.js";import"./getRadiusAndStrokeWidthFromDot-p4PngwyL.js";import"./ActiveShapeUtils-Dqjt7W9Y.js";import"./useGraphicalItemIdentity-B93Md1_E.js";import"./CartesianAxis-BQ-frZs4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
