import{R as t}from"./iframe-0BZy6ovm.js";import{R as m}from"./zIndexSlice-BIk5RwDD.js";import{L as s}from"./LineChart-DY4IBODK.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BqjDeTuk.js";import{X as l}from"./XAxis-CpzBATa7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DiDu5xyi.js";import"./index-TucVX7sw.js";import"./index-BJl6RyTQ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DgX86JLB.js";import"./isWellBehavedNumber-D86CElyX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DN-j5lzD.js";import"./index-C9HBA5-V.js";import"./index-BRBcTSHI.js";import"./axisSelectors-D-aV3CxY.js";import"./d3-scale-D3apC1JT.js";import"./renderedTicksSlice-BqoCmvXn.js";import"./CartesianChart-n4Lt6mFH.js";import"./chartDataContext-BAuSJd-k.js";import"./CategoricalChart-hrSTyr7f.js";import"./Layer-6uGVVV7y.js";import"./Curve-80kkET8R.js";import"./types-CUmyHBBS.js";import"./step-LsS_armE.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B0lHzkOL.js";import"./Label-C0FrVcAE.js";import"./Text-Bh7Xcfw9.js";import"./DOMUtils-D2BAAnEX.js";import"./useBackwardsCompatibleTheme-CXpr_aCI.js";import"./ZIndexLayer-AgSG9OQ6.js";import"./useAnimationId-D-aszzjL.js";import"./ActivePoints-Cv_MWE-P.js";import"./Dot-B2MNIfB_.js";import"./RegisterGraphicalItemId-BhyVkMoB.js";import"./ErrorBarContext-D0zljKj-.js";import"./GraphicalItemClipPath-BgcM8yOE.js";import"./SetGraphicalItem-CM7A1obe.js";import"./getRadiusAndStrokeWidthFromDot-BStcUf-0.js";import"./ActiveShapeUtils-BtFIRlOA.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-D2KJhy7k.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
