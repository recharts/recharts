import{R as t}from"./iframe-CdBlg-At.js";import{R as m}from"./zIndexSlice-Bd2ctzyz.js";import{L as s}from"./LineChart--S3b8ipQ.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DD9BeI-K.js";import{X as l}from"./XAxis-2XVZuSLi.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BMwUG5uc.js";import"./index-Yyk8WWPT.js";import"./index-D9Herklh.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BE0meIIe.js";import"./isWellBehavedNumber-DGTEliAX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BtwnjrPH.js";import"./axisSelectors-B8B8qq9w.js";import"./d3-scale-BBzFAB1R.js";import"./index-BTlZQ11f.js";import"./index-COSgbA9u.js";import"./renderedTicksSlice-D-b_FiBU.js";import"./index-B_ni8hx5.js";import"./CartesianChart-5haPaxu4.js";import"./chartDataContext-8OMpeo_C.js";import"./CategoricalChart-KxwhOg8o.js";import"./Layer-DJ6KlbON.js";import"./Curve-C6WQoFll.js";import"./types-BwgN4eIA.js";import"./step-CSVR4QN1.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DF8TZk9M.js";import"./Label-BhvRy9p8.js";import"./Text-B72QzR_J.js";import"./DOMUtils-B8jV7L5A.js";import"./useId-CTQIK8VB.js";import"./useBackwardsCompatibleTheme-DVBTPBZT.js";import"./ZIndexLayer-BRtQaXip.js";import"./useAnimationId-C5J-XAz0.js";import"./ActivePoints-DeQkjxY4.js";import"./Dot-6-JAF9mR.js";import"./RegisterGraphicalItemId-CHEBFfi8.js";import"./ErrorBarContext-CT7bwl-o.js";import"./GraphicalItemClipPath-DCCqyqY0.js";import"./SetGraphicalItem-BiBqIxpO.js";import"./getRadiusAndStrokeWidthFromDot-D0f765St.js";import"./ActiveShapeUtils-DmMWVfaj.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-CVVHUAde.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
