import{R as t}from"./iframe-CCA1dLWD.js";import{R as m}from"./zIndexSlice-Bqs-eJ8p.js";import{L as s}from"./LineChart-BGONc8N4.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DzXrLh5M.js";import{X as l}from"./XAxis-B02ZLuLQ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D3xpLLdH.js";import"./index-C97djya6.js";import"./index-BTapAtmF.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DAFAxP68.js";import"./isWellBehavedNumber-CUTtCnYO.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ci54jWLi.js";import"./axisSelectors-ueWwuThv.js";import"./d3-scale-BdepyZ_B.js";import"./index-Cyg8bGg4.js";import"./index-CVq5gi49.js";import"./renderedTicksSlice-CuWBxFlw.js";import"./index-Cah2JXyu.js";import"./CartesianChart-CTE6kj-2.js";import"./chartDataContext-CLCJusst.js";import"./CategoricalChart-mUCs8Qny.js";import"./Layer-CmH8ISrU.js";import"./Curve-6_pS1I8Z.js";import"./types-B2426EfA.js";import"./step-pmX9eUCr.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bwhxgw5t.js";import"./Label-C7jyVHZg.js";import"./Text-Cxmc4hoL.js";import"./DOMUtils-B9q-UHbd.js";import"./useId-C-4rQrJ2.js";import"./useBackwardsCompatibleTheme-B-BtV5HU.js";import"./ZIndexLayer-BsYZhZ4O.js";import"./useAnimationId-BZsPKArS.js";import"./ActivePoints-D5cnScbI.js";import"./Dot-PvcySOeb.js";import"./RegisterGraphicalItemId-BRUpoP9Q.js";import"./ErrorBarContext-C-MqMGv0.js";import"./GraphicalItemClipPath-DcQmHX6S.js";import"./SetGraphicalItem-6HsvsmQk.js";import"./getRadiusAndStrokeWidthFromDot-CgH2ac05.js";import"./ActiveShapeUtils-zvjqERUF.js";import"./useGraphicalItemIdentity-CJ147Nvu.js";import"./CartesianAxis-ClD0AQ8W.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,st as __namedExportsOrder,mt as default};
