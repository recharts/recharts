import{R as t}from"./iframe-BQrvPSLN.js";import{R as n}from"./zIndexSlice-7Hw-ZWkF.js";import{L as s}from"./LineChart-B8UiaPpG.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DjugYbR2.js";import{X as l}from"./XAxis-COEcW9k3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-0gn-kluv.js";import"./index-n8L9L6eU.js";import"./index-DCJ-lssY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dldn7S-M.js";import"./isWellBehavedNumber--jy1hcq-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bwj5H6_7.js";import"./axisSelectors-rztmSPpu.js";import"./d3-scale-Dpwc0BRN.js";import"./index-C-4Z9rOq.js";import"./index-Cod02e9Y.js";import"./renderedTicksSlice-DgYqXOgC.js";import"./index-JVOuHVdP.js";import"./CartesianChart-Bonfnn_6.js";import"./chartDataContext-BgdaUcoV.js";import"./CategoricalChart-DzUyeNOX.js";import"./Layer-BL59xEeu.js";import"./Curve-BvFQjNVt.js";import"./types-DmUtaJkc.js";import"./step-Dz5dQj2m.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DoNW6X9C.js";import"./Label-fnZYxsAf.js";import"./Text-CV4rnU1k.js";import"./DOMUtils-DGTFhh_s.js";import"./useId-Cxn74IfF.js";import"./useBackwardsCompatibleTheme-DM-kCCC-.js";import"./ZIndexLayer-B-lyDO19.js";import"./useAnimationId-DGJmUGW3.js";import"./ActivePoints-DNIiWjQ1.js";import"./Dot-BNdpCbfX.js";import"./RegisterGraphicalItemId-D_J9lCCC.js";import"./ErrorBarContext-M_C8hAbg.js";import"./GraphicalItemClipPath-ZQcwoD7Q.js";import"./SetGraphicalItem-DNCLDvoD.js";import"./getRadiusAndStrokeWidthFromDot-Da7-LUzg.js";import"./ActiveShapeUtils-Ds3BnvmO.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-wwQP6TZJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const nt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const st=["TickPositioning"];export{r as TickPositioning,st as __namedExportsOrder,nt as default};
