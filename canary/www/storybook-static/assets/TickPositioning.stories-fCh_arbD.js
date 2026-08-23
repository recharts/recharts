import{R as t}from"./iframe-1Nx1Hwd8.js";import{R as n}from"./zIndexSlice-BPgffy3O.js";import{L as s}from"./LineChart-Bt5W1yKO.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-N-ZSdJCU.js";import{X as l}from"./XAxis-Iy9-nOhv.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BvcOGqjl.js";import"./index-BxODcotD.js";import"./index-BxXrUDFi.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BuS60Zcm.js";import"./isWellBehavedNumber-BZkA4GqO.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DOZVWK-P.js";import"./index-DrfO8rcp.js";import"./index-DuNxWLhT.js";import"./axisSelectors-C77-vGCj.js";import"./d3-scale-B_Ed44y-.js";import"./renderedTicksSlice-DdDjPDgD.js";import"./CartesianChart-CfBDZXwX.js";import"./chartDataContext-B9qtLtUj.js";import"./CategoricalChart-CmvqfSaL.js";import"./Layer-CY3HNiYQ.js";import"./Curve-BLyT9pX_.js";import"./types-CW2QSzeT.js";import"./step-DiCJ9NfT.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CvXLsYG2.js";import"./Label-CzY3tv0Q.js";import"./Text-D7Dvlpl9.js";import"./DOMUtils-CyzSDn7U.js";import"./useId-y9Z6ZhpG.js";import"./useBackwardsCompatibleTheme-CJcbMh-P.js";import"./ZIndexLayer-CgXwR33B.js";import"./useAnimationId-BUamwr57.js";import"./ActivePoints-C0mFYRu2.js";import"./Dot-CrNXlHuf.js";import"./RegisterGraphicalItemId-Ctsh4Fgt.js";import"./ErrorBarContext-aNneKhPH.js";import"./GraphicalItemClipPath-l6BikrPU.js";import"./SetGraphicalItem-CfAx1sDn.js";import"./getRadiusAndStrokeWidthFromDot-BvpolENt.js";import"./ActiveShapeUtils-K1kvzU25.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-zUKk9a_2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
