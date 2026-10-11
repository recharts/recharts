import{R as t}from"./iframe-Cw8P3hI7.js";import{R as m}from"./zIndexSlice-B6SrSko1.js";import{L as s}from"./LineChart-Cevro9CN.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-B7HdxR7c.js";import{X as l}from"./XAxis-C7unxNtQ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DncpYTAI.js";import"./index-hRfftI4p.js";import"./index-eEhk_OBC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CZK0CaSv.js";import"./isWellBehavedNumber--H7puUW6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DvLLBked.js";import"./axisSelectors-BdH8dG4d.js";import"./d3-scale-Col4_9gh.js";import"./index-DNE8XmUi.js";import"./index-7P4EwiS4.js";import"./renderedTicksSlice-0hkvmYyZ.js";import"./index-C3ZLhd8h.js";import"./CartesianChart-D3LhbEp8.js";import"./chartDataContext-BishGWYu.js";import"./CategoricalChart-D-nlxD4a.js";import"./Layer-B6WOVeAl.js";import"./Curve-H-3Cg0VG.js";import"./types-Cja1RPDM.js";import"./step-Owe5mevZ.js";import"./path-DyVhHtw_.js";import"./activeStyles-BMrFolB2.js";import"./Label-D8Ksb0Iz.js";import"./Text-lKkTsdpR.js";import"./pageBackground-DDrjrzvM.js";import"./useId-QOeP90DB.js";import"./useBackwardsCompatibleTheme-CjwvaY8l.js";import"./ZIndexLayer-BaFHUXpS.js";import"./useAnimationId-DEkX1hYZ.js";import"./dataEntryStyles-Bh3IKYdr.js";import"./ActivePoints-D1HAeebE.js";import"./Dot-BPPIvgtF.js";import"./ErrorBarContext-CRE-8iE1.js";import"./GraphicalItemClipPath-DihUhOiW.js";import"./SetGraphicalItem-CCZzXSeX.js";import"./getRadiusAndStrokeWidthFromDot-0OZopViH.js";import"./ActiveShapeUtils-DrIy4kMk.js";import"./useEffectiveDataKey-Dh15qlQo.js";import"./CartesianAxis-D3FnIIlC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
