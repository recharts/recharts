import{R as t}from"./iframe-WAmwAwqv.js";import{R as n}from"./zIndexSlice-B7760TIp.js";import{L as s}from"./LineChart-CWpTLN8M.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DurF_OOw.js";import{X as l}from"./XAxis-C0HQ7bAn.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DaWJmTtS.js";import"./index-dES25ELm.js";import"./index-BtWjEEaM.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-SfzQDdEE.js";import"./isWellBehavedNumber-BFdGE5VX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DKs-TVlY.js";import"./index-BrLHScrZ.js";import"./index-BaF8VV2T.js";import"./axisSelectors-P4MAoEAr.js";import"./d3-scale-B9CJnMVD.js";import"./renderedTicksSlice-QjUf-6mF.js";import"./CartesianChart-1FQk5Fvk.js";import"./chartDataContext-DyeMEqHY.js";import"./CategoricalChart-BhQV0u5E.js";import"./Layer-CduouMU4.js";import"./Curve-sYCo-eDU.js";import"./types-MF287rET.js";import"./step-BqQm5Gfz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dygs4a37.js";import"./Label-BI58xTcy.js";import"./Text-BQOM4h-3.js";import"./DOMUtils-BipZejVj.js";import"./useId-C6WCz-Hg.js";import"./useBackwardsCompatibleTheme-BbiUPV5J.js";import"./ZIndexLayer-BMgwtUUQ.js";import"./useAnimationId-DhhiM2kh.js";import"./ActivePoints-CCxDSDuJ.js";import"./Dot-BMicymMQ.js";import"./RegisterGraphicalItemId-eBpDv0na.js";import"./ErrorBarContext-BIoHTUJq.js";import"./GraphicalItemClipPath-Dnbhxb72.js";import"./SetGraphicalItem-CTKvKbys.js";import"./getRadiusAndStrokeWidthFromDot-7A-aLYCL.js";import"./ActiveShapeUtils-C0CPvy3n.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BJa8Ix1s.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,mt as default};
