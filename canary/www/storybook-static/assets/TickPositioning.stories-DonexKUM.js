import{R as t}from"./iframe-DFlWwuKT.js";import{R as m}from"./zIndexSlice-DTl3Es75.js";import{L as s}from"./LineChart-DJlDcaw9.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BBf0J4Pb.js";import{X as l}from"./XAxis-9-A5V75m.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D8jnmLcF.js";import"./index-BUYqSBiu.js";import"./index-ClU2ON40.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C-JEXzOC.js";import"./isWellBehavedNumber-SARVqwHy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CGvYSOfx.js";import"./axisSelectors-DjksfEx4.js";import"./d3-scale--iSGTKPS.js";import"./index-L-g3VAbm.js";import"./index-xbsAyBNd.js";import"./renderedTicksSlice-CCjZBqyR.js";import"./index-DATKdWyT.js";import"./CartesianChart-DW2e8sMm.js";import"./chartDataContext-BIDgL1iJ.js";import"./CategoricalChart-B-7TRfVL.js";import"./Layer-URuQnAjL.js";import"./Curve-BoAyROId.js";import"./types-BOBvmLK9.js";import"./step-DPc2nVCG.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B-WGLUSk.js";import"./Label-Cg_hrWdd.js";import"./Text-7kqB13RI.js";import"./DOMUtils-CYU7OgfG.js";import"./useId-CRaXWjDX.js";import"./useBackwardsCompatibleTheme-DQ42sPpY.js";import"./ZIndexLayer-DHVkI8jl.js";import"./useAnimationId-mTQIyJO-.js";import"./ActivePoints-BjXgqI1Z.js";import"./Dot-iIg854rO.js";import"./RegisterGraphicalItemId-Dc_pYr9G.js";import"./ErrorBarContext-DzGj33gU.js";import"./GraphicalItemClipPath-DvdfNGh6.js";import"./SetGraphicalItem-B77033X0.js";import"./getRadiusAndStrokeWidthFromDot-54dC4Ufn.js";import"./ActiveShapeUtils-B5PusxhY.js";import"./useGraphicalItemIdentity-w3ZvPmOP.js";import"./CartesianAxis-C9eM4ktZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
