import{R as t}from"./iframe-BcaWFD7u.js";import{R as n}from"./zIndexSlice-bS7cYBKO.js";import{L as s}from"./LineChart-Y7MqeJQt.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CtVnRj6L.js";import{X as l}from"./XAxis-DD0jXpQz.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dz1UTb_M.js";import"./index-DD-aKuCi.js";import"./index-DVZ7kkny.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CqMML5sA.js";import"./isWellBehavedNumber-BP6UcqH1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C-VIMVig.js";import"./index-Cgtj3oPE.js";import"./index-xxpNQb8f.js";import"./axisSelectors-D0fMBFBE.js";import"./d3-scale-CjZBqtB1.js";import"./renderedTicksSlice-naYz1W_2.js";import"./CartesianChart-CjI4gSTo.js";import"./chartDataContext-BwgPsUMn.js";import"./CategoricalChart-CgNZHuyL.js";import"./Layer-BhtJX80Y.js";import"./Curve-DaA6zKZn.js";import"./types-BCqYYX1O.js";import"./step-CXwuHX1W.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-e5mGDN3Y.js";import"./Label-C-frAhmf.js";import"./Text-C02gRxFY.js";import"./DOMUtils-BvzyNhX6.js";import"./useId-Dsncsbnj.js";import"./useBackwardsCompatibleTheme-R44_v_zH.js";import"./ZIndexLayer-CI7tJTJS.js";import"./useAnimationId-DDgucPPX.js";import"./ActivePoints-CvqJbqjR.js";import"./Dot-DD0Nn15x.js";import"./RegisterGraphicalItemId-C3WPLV-4.js";import"./ErrorBarContext-CyXVsRn2.js";import"./GraphicalItemClipPath-BL_hooiS.js";import"./SetGraphicalItem-BClSdCLV.js";import"./getRadiusAndStrokeWidthFromDot-DyVM-7ZZ.js";import"./ActiveShapeUtils-BL97HDhi.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-D8v1d9Y9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
