import{R as t}from"./iframe-DwwIEbnV.js";import{R as n}from"./zIndexSlice-CQLOtaPs.js";import{L as s}from"./LineChart-wQ6d5ScA.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-B-nrSDyv.js";import{X as l}from"./XAxis-Cz_Rnhgj.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Blsl_VHV.js";import"./index-8KuM36sP.js";import"./index-DybJUNaL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BAdQSn8_.js";import"./isWellBehavedNumber-8UixZU7J.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BuqxCVgz.js";import"./axisSelectors-Cxc5coFg.js";import"./d3-scale-DUeQ8AUA.js";import"./index-DnZ0PMCs.js";import"./index-Dy8lu7uT.js";import"./renderedTicksSlice-COQyRYk9.js";import"./index-DEjMF1lf.js";import"./CartesianChart-CyJUqNIj.js";import"./chartDataContext-UFw-Jz6V.js";import"./CategoricalChart-COFTchkj.js";import"./Layer-6Fp4VzoQ.js";import"./Curve-DrEaRkOl.js";import"./types-DYVbiWe3.js";import"./step-CWAHA4V_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Ds3KeOI2.js";import"./Label-BBU3iKAi.js";import"./Text-CoeOXdGz.js";import"./DOMUtils-Da_EKwNY.js";import"./useId-ccy3SIu_.js";import"./useBackwardsCompatibleTheme-Fn2SpsbR.js";import"./ZIndexLayer-B_JcFefp.js";import"./useAnimationId-Cx0Chyvr.js";import"./ActivePoints-DJFnJVEG.js";import"./Dot-DmrEwaiX.js";import"./RegisterGraphicalItemId-BM_5HpC8.js";import"./ErrorBarContext-BgIeQnXJ.js";import"./GraphicalItemClipPath-CajkPYvX.js";import"./SetGraphicalItem-jtaJvjxx.js";import"./getRadiusAndStrokeWidthFromDot-jdfKPlMV.js";import"./ActiveShapeUtils-D4ijpv1W.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-Duh3rzkN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const nt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
