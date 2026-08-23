import{R as t}from"./iframe-J2FnkNkN.js";import{R as n}from"./zIndexSlice-CIfx3dbz.js";import{L as s}from"./LineChart-D1kBRbrQ.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BrRmSeyv.js";import{X as l}from"./XAxis-9YTS4CGv.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dd6uK12C.js";import"./index-DOkoL7Wj.js";import"./index-DRH1Q61C.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C36Ti6I7.js";import"./isWellBehavedNumber-Bda2kxwI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-tuonj_dH.js";import"./index-udl5h_c3.js";import"./index-B1zoM-7H.js";import"./axisSelectors-XOgqlW54.js";import"./d3-scale-BnVmKfe4.js";import"./renderedTicksSlice-uiaDKKzv.js";import"./CartesianChart-7orgvIwE.js";import"./chartDataContext-DsIZ8kzc.js";import"./CategoricalChart-Dws3VtHh.js";import"./Layer-B9c44e16.js";import"./Curve-CNSL121i.js";import"./types-cmsIqA-S.js";import"./step-B2sXv2yh.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DaE3ZoZL.js";import"./Label-Bl3T8NIS.js";import"./Text-DoArQ2iR.js";import"./DOMUtils-DrtZ7889.js";import"./useId-BqCnyWtn.js";import"./useBackwardsCompatibleTheme-iB5pgxqo.js";import"./ZIndexLayer-BcQVAnhI.js";import"./useAnimationId-B8FTTFdD.js";import"./ActivePoints-Cu9CSGsi.js";import"./Dot-BQU71g_n.js";import"./RegisterGraphicalItemId-4W54GOXR.js";import"./ErrorBarContext-nAJ3rKAi.js";import"./GraphicalItemClipPath-BR02B87f.js";import"./SetGraphicalItem-B2-Omghc.js";import"./getRadiusAndStrokeWidthFromDot-DwBzFWb4.js";import"./ActiveShapeUtils-DbeW4ISg.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-yBNynPDV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
