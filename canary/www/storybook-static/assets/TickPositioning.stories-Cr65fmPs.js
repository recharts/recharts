import{R as t}from"./iframe-GBGc-iKq.js";import{R as m}from"./zIndexSlice-DP0tLqWW.js";import{L as s}from"./LineChart-7ySeNkY2.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BLIZlFIO.js";import{X as l}from"./XAxis-BBjH0uDR.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-9IN4E6VX.js";import"./index-WIkdQGR_.js";import"./index-Bj7NMbSa.js";import"./get-DICUyaHN.js";import"./resolveDefaultProps-DIrI2E0T.js";import"./isWellBehavedNumber-Lbc_fCaY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CY1_ev_Z.js";import"./index-DDYWU-5r.js";import"./index-DEGNeWRW.js";import"./renderedTicksSlice-CwhUMpGJ.js";import"./axisSelectors-DUsVRTIw.js";import"./d3-scale-Dym64WYU.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Ci5TMZqv.js";import"./chartDataContext-Di_sY_cY.js";import"./CategoricalChart-L_ONP4HK.js";import"./Layer-CDGRbd8f.js";import"./Curve-B9n6ABfY.js";import"./types-BTPiehg7.js";import"./step-CxLlu8x6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C29R-vhg.js";import"./Label-DSpdGeyH.js";import"./Text-B4CLUneY.js";import"./DOMUtils-BP3f5q3h.js";import"./ZIndexLayer-BMlwN-1Q.js";import"./useAnimationId-BXgA3n2L.js";import"./ActivePoints-CBmfjAqp.js";import"./Dot-Jn68Tyru.js";import"./RegisterGraphicalItemId-C9tnUoji.js";import"./ErrorBarContext-BIvto65z.js";import"./GraphicalItemClipPath-CocmCyqp.js";import"./SetGraphicalItem-5bSLaCIx.js";import"./getRadiusAndStrokeWidthFromDot-nN08QDm9.js";import"./ActiveShapeUtils-DlvuUpon.js";import"./CartesianAxis-DQP4bonx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const at=["TickPositioning"];export{r as TickPositioning,at as __namedExportsOrder,ot as default};
