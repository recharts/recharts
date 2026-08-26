import{R as t}from"./iframe-Yg2vC8jl.js";import{R as n}from"./zIndexSlice-BElsb48m.js";import{L as s}from"./LineChart-CncEzfcg.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Cc2La8TY.js";import{X as l}from"./XAxis-BCD8PGRZ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BaCh1BSI.js";import"./index-CHZ1utW3.js";import"./index-CN9KpfAX.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bsa29K_S.js";import"./isWellBehavedNumber-DQgk1tKw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-rNmWVTcA.js";import"./axisSelectors-nv9p39UG.js";import"./d3-scale-DXOKnb1o.js";import"./index--8spWne3.js";import"./index-B_F5nQFz.js";import"./renderedTicksSlice-ChVEhIgt.js";import"./index-CqWRosMe.js";import"./CartesianChart-C7IlXP4I.js";import"./chartDataContext-Dlt4sLo1.js";import"./CategoricalChart-EUZHEGq1.js";import"./Layer-B4IabIdW.js";import"./Curve-DpihRFk6.js";import"./types-DJ9rCugd.js";import"./step-DK4VgiZ3.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CaVCuQAN.js";import"./Label-D-3Je9Ku.js";import"./Text-DdvnI_Yn.js";import"./DOMUtils-CUUEg-Ut.js";import"./useId-CIFQ64hu.js";import"./useBackwardsCompatibleTheme-ByLQZtu6.js";import"./ZIndexLayer-DxM-QnJb.js";import"./useAnimationId-DsPfmOTd.js";import"./ActivePoints-BlvoLXcy.js";import"./Dot-C9WYn9kj.js";import"./RegisterGraphicalItemId-DblvaP9s.js";import"./ErrorBarContext-BRhPIJ9q.js";import"./GraphicalItemClipPath-Ow_WyG3Z.js";import"./SetGraphicalItem-V-QFpaIF.js";import"./getRadiusAndStrokeWidthFromDot-hxmc-IYv.js";import"./ActiveShapeUtils-Ch49efhn.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-D_n_4bqq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const nt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
