import{R as t}from"./iframe-BJZoea5Q.js";import{R as m}from"./zIndexSlice-3SrN7G8I.js";import{L as s}from"./LineChart-C79lDmel.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BNZk4sLa.js";import{X as l}from"./XAxis-x49kq4XJ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DhjtP12Z.js";import"./index-eqi9YN1t.js";import"./index-BDOUu_G8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-p2HAfk0o.js";import"./isWellBehavedNumber-PsmwNW5h.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CEdFNSj2.js";import"./axisSelectors-10L_Paee.js";import"./d3-scale-Bo47ZJJr.js";import"./index-BdI0Temb.js";import"./index-Q3HRKpx2.js";import"./renderedTicksSlice-DjcslC9u.js";import"./index-ey4yeO--.js";import"./CartesianChart-DDkwxTw9.js";import"./chartDataContext-2iVlib8J.js";import"./CategoricalChart-DYS4mlap.js";import"./Layer-CY8EZbPL.js";import"./Curve-C2T2vEED.js";import"./types-DB2bYquS.js";import"./step-DQt_azzu.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B1n61v19.js";import"./Label-CKHttH-g.js";import"./Text-C846DGO8.js";import"./DOMUtils-DMsPd0Jf.js";import"./useId-CgY4hBIS.js";import"./useBackwardsCompatibleTheme-cb-KLBvK.js";import"./ZIndexLayer-gq-nfNXC.js";import"./useAnimationId-DIbB0gmH.js";import"./ActivePoints-BIetIDgh.js";import"./Dot-CgLNu5xp.js";import"./RegisterGraphicalItemId-lL7ggMEp.js";import"./ErrorBarContext-CE1fn35z.js";import"./GraphicalItemClipPath-BEj7XwPx.js";import"./SetGraphicalItem-BvBiLTUU.js";import"./getRadiusAndStrokeWidthFromDot-DajYH82O.js";import"./ActiveShapeUtils-t9roLBb8.js";import"./useGraphicalItemIdentity-CiHiONr1.js";import"./CartesianAxis-zlv9iD03.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
