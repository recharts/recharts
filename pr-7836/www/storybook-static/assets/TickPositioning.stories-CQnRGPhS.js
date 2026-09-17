import{R as t}from"./iframe-Dpvc5Yjz.js";import{R as m}from"./zIndexSlice-Dho3i8T5.js";import{L as s}from"./LineChart-Ds7U4xIc.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-D72OFrJ_.js";import{X as l}from"./XAxis-DH81C7oh.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-ChqzHVQ0.js";import"./index-Bl2eW-CY.js";import"./index-CVG-Xgr5.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CRYxfVCI.js";import"./isWellBehavedNumber-C1q3yIjs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Y3ZAzA3v.js";import"./axisSelectors-B0MCU6bk.js";import"./d3-scale-B7bmEbYw.js";import"./index-D1MAn6gI.js";import"./index-BGJHRM8B.js";import"./renderedTicksSlice-oAd8rZHP.js";import"./index-hEOzvS9k.js";import"./CartesianChart-AKEzFsPm.js";import"./chartDataContext-BXOKjidD.js";import"./CategoricalChart-kI0T_bBx.js";import"./Layer-DB4rVtgq.js";import"./Curve-D8gKKjbw.js";import"./types-PTwxeL9Y.js";import"./step-CbGZbdjm.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dqknvwue.js";import"./Label-DIzmtP1_.js";import"./Text-DV8ChouY.js";import"./DOMUtils-B1JUaPdm.js";import"./useId-BTdNu9Gm.js";import"./useBackwardsCompatibleTheme-CtPFlS3s.js";import"./ZIndexLayer-BroloYIp.js";import"./useAnimationId-8x9555ZS.js";import"./ActivePoints-_iSEV7nC.js";import"./Dot-BbHheHK4.js";import"./RegisterGraphicalItemId-BrxaJpgc.js";import"./ErrorBarContext-DgnCQmwB.js";import"./GraphicalItemClipPath-DoYX_rje.js";import"./SetGraphicalItem-WpaZzJ--.js";import"./getRadiusAndStrokeWidthFromDot-BNtk_UOf.js";import"./ActiveShapeUtils-B4yE9O3b.js";import"./useGraphicalItemIdentity-B6UUBA8h.js";import"./CartesianAxis-6_XALvtr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
