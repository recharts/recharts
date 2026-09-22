import{R as t}from"./iframe-V0uWMpm8.js";import{R as m}from"./zIndexSlice-DUX4TIf3.js";import{L as s}from"./LineChart-wtBmxsSQ.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BEwRsXkJ.js";import{X as l}from"./XAxis-DRAr1kyY.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CmD5MtuF.js";import"./index-D_MUhraT.js";import"./index-DPqbft9D.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-aKGdeQK0.js";import"./isWellBehavedNumber-MEUC6Th_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CCLf8n2o.js";import"./axisSelectors-SQHKz4ZO.js";import"./d3-scale-BJHPeQPf.js";import"./index-kjeSN6uv.js";import"./index-3fJcv3y4.js";import"./renderedTicksSlice-DZhKT_zE.js";import"./index-SLBi9NdX.js";import"./CartesianChart-DXwmQtN1.js";import"./chartDataContext-CQKtni77.js";import"./CategoricalChart-zmhxTVhd.js";import"./Layer--mIrdw0x.js";import"./Curve-Dbv7OhLZ.js";import"./types-CDLzu-PR.js";import"./step-Z9qPbZSL.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BOhMHwpv.js";import"./Label-2hyP-tsc.js";import"./Text-CDsr0dRv.js";import"./DOMUtils-BW4dN_KI.js";import"./useId--nrsw05H.js";import"./useBackwardsCompatibleTheme-CEplzgd4.js";import"./ZIndexLayer-DivbHHVg.js";import"./useAnimationId-Dtpy8skx.js";import"./ActivePoints-BYb_Gd1q.js";import"./Dot-BU72Jr9Q.js";import"./RegisterGraphicalItemId-XrZ7XOK-.js";import"./ErrorBarContext-De7ujaEj.js";import"./GraphicalItemClipPath-B0v9QHui.js";import"./SetGraphicalItem-DNGP3yw2.js";import"./getRadiusAndStrokeWidthFromDot-Bet3JchB.js";import"./ActiveShapeUtils-CaWetUUl.js";import"./useGraphicalItemIdentity-BcaMYi1E.js";import"./CartesianAxis-DtLaMWrT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
