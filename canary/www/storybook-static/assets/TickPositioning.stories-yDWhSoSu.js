import{R as t}from"./iframe-5rlHu5E0.js";import{R as m}from"./zIndexSlice-Dvv9j-PL.js";import{L as s}from"./LineChart-Co21MkTd.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DqGhY_qo.js";import{X as l}from"./XAxis-QaJfpBkQ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BEcUjoVL.js";import"./index-De9KIq3f.js";import"./index-CPjGkxRF.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DMzoBuFc.js";import"./isWellBehavedNumber-CtQc_19S.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B_1S-WX9.js";import"./index-CRexnrp9.js";import"./index-CgDVIgvd.js";import"./axisSelectors-XpGDVkFI.js";import"./d3-scale-DQPeDNzN.js";import"./renderedTicksSlice-BU2rLD4L.js";import"./CartesianChart-CTBAwDjg.js";import"./chartDataContext-_d8W5FBB.js";import"./CategoricalChart-fg3LMOIt.js";import"./Layer-B7qTvwXJ.js";import"./Curve-D7O-jO1k.js";import"./types-_FdMQlV7.js";import"./step-BcoQtodi.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CcRowb6W.js";import"./Label-dTTzfWAl.js";import"./Text-BWBZmFaQ.js";import"./DOMUtils-Cgsp7qZK.js";import"./useBackwardsCompatibleTheme-CU4QNWlg.js";import"./ZIndexLayer-CC4VGBXC.js";import"./useAnimationId-9v2us4V5.js";import"./ActivePoints-uOYRpmEx.js";import"./Dot-jf28pyfo.js";import"./RegisterGraphicalItemId-DiVn-hPt.js";import"./ErrorBarContext-B7azcaum.js";import"./GraphicalItemClipPath-BY5WrhEA.js";import"./SetGraphicalItem-B4wCJH3k.js";import"./getRadiusAndStrokeWidthFromDot-DgCt5gXI.js";import"./ActiveShapeUtils-DcbSHq-a.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-C1R_DLLS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,pt as default};
