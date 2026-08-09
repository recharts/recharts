import{R as t}from"./iframe-osdC7w3x.js";import{R as m}from"./zIndexSlice-deUrzjsz.js";import{L as s}from"./LineChart-xXTseTwi.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-ChMsZBXA.js";import{X as l}from"./XAxis-B__lQt6h.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-yBEImYyh.js";import"./index-Dk6HIvLW.js";import"./index-DYD_OYQh.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BjlKs9r7.js";import"./isWellBehavedNumber-Ch_81v8O.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BwYigjFj.js";import"./index-0D71YoJz.js";import"./index-BnccS2yU.js";import"./axisSelectors-D59_Gagr.js";import"./d3-scale-Dxvyh_dk.js";import"./renderedTicksSlice-BzoWiF6G.js";import"./CartesianChart-D55rucOT.js";import"./chartDataContext-DGjFZnBH.js";import"./CategoricalChart-CACDpCto.js";import"./Layer-CRq3eSZM.js";import"./Curve-CnankNoj.js";import"./types-PJaZpOTb.js";import"./step-BWmIUyya.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DHXks09V.js";import"./Label-CRRMP5SS.js";import"./Text-HkDUvF78.js";import"./DOMUtils-CpdlvjrD.js";import"./ZIndexLayer-C_4Zumz8.js";import"./useAnimationId-T5o_BkmZ.js";import"./ActivePoints-XOhn4AON.js";import"./Dot-CXtOSde0.js";import"./RegisterGraphicalItemId-Bpt47ePh.js";import"./ErrorBarContext-DDxN4O9o.js";import"./GraphicalItemClipPath-CchViqUF.js";import"./SetGraphicalItem-Qozm5Dg5.js";import"./getRadiusAndStrokeWidthFromDot-aTO7lmXX.js";import"./ActiveShapeUtils-DA6oNeNX.js";import"./RechartsThemeContext-4-tV1CA2.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-D1s41LT1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
