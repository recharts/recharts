import{R as t}from"./iframe-dnbYLFAD.js";import{R as n}from"./zIndexSlice-Tzq48rK3.js";import{L as s}from"./LineChart-BP7gb6j2.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Cp5WLj85.js";import{X as l}from"./XAxis-BSFcOfEW.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CrGf0NM1.js";import"./index-D5_wYljM.js";import"./index-EbTzNNy6.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DaDkCz04.js";import"./isWellBehavedNumber-B4er61T0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CUiYn_74.js";import"./axisSelectors-BxcK-66k.js";import"./d3-scale-DOYXtK-0.js";import"./index-C2tfzzVf.js";import"./index-BeP9odN1.js";import"./renderedTicksSlice-ByAoIIAo.js";import"./index-Dcl79aHz.js";import"./CartesianChart-l5SDlhyQ.js";import"./chartDataContext-kt33HbbB.js";import"./CategoricalChart-BIzQL4lC.js";import"./Layer-BJ7lSbQt.js";import"./Curve-By68icMD.js";import"./types-ryOPFJaw.js";import"./step-Mew-CIDE.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CZJCXzZR.js";import"./Label-DfEdNEi7.js";import"./Text-BaKv6O4H.js";import"./DOMUtils-BtlArb_7.js";import"./useId-BZKwUvxw.js";import"./useBackwardsCompatibleTheme-QZyWgv_8.js";import"./ZIndexLayer-DjGyUWfd.js";import"./useAnimationId-p2irW4JC.js";import"./ActivePoints-D6BTfiYQ.js";import"./Dot-BOs-mB4N.js";import"./RegisterGraphicalItemId-BpbR-Lho.js";import"./ErrorBarContext-Bpb4kfuY.js";import"./GraphicalItemClipPath-DvPPmxSV.js";import"./SetGraphicalItem-BXaCF56M.js";import"./getRadiusAndStrokeWidthFromDot-BaTLVLjz.js";import"./ActiveShapeUtils-BbwV3h3t.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-sVyuEsJd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const nt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
