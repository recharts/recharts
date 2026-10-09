import{R as t}from"./iframe-BPYH2WpS.js";import{R as m}from"./zIndexSlice-CRIY2DI-.js";import{L as s}from"./LineChart-CRB086Uy.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-T-KkaNIg.js";import{X as l}from"./XAxis-Cp4YLkQ5.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-xyVQD3_H.js";import"./index-BlMmEtsK.js";import"./index-DJpd9u5l.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CGvNj-Ia.js";import"./isWellBehavedNumber-CF5FkEe7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CeSqC8qM.js";import"./axisSelectors-BixSNhmq.js";import"./d3-scale-C1nlw5KN.js";import"./index-CWtZ8b1U.js";import"./index-B4bTdLCM.js";import"./renderedTicksSlice-6vdJGY0j.js";import"./index-BPYK78er.js";import"./CartesianChart-CvYs98y7.js";import"./chartDataContext-kSMgmHGF.js";import"./CategoricalChart-Biw_xsj3.js";import"./Layer-C2LXKbkN.js";import"./Curve-CSa72MMA.js";import"./types-CqopvqdC.js";import"./step-lFEaXGaU.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C-cMTO2B.js";import"./Label-DVwS1qXs.js";import"./Text-zynwh62u.js";import"./DOMUtils-BPeWtLKN.js";import"./useId-BE8oxSSZ.js";import"./useBackwardsCompatibleTheme-D75GrB32.js";import"./ZIndexLayer-BSe5AwCg.js";import"./useAnimationId-BKqfl7rh.js";import"./ActivePoints-Ds7Vxzg0.js";import"./Dot-b-Hlrxis.js";import"./RegisterGraphicalItemId-BFsJivb8.js";import"./ErrorBarContext-BJvfmcx_.js";import"./GraphicalItemClipPath-B49DsmcO.js";import"./SetGraphicalItem-rIgP9mSO.js";import"./getRadiusAndStrokeWidthFromDot-Bg7bX7Mu.js";import"./ActiveShapeUtils-Ds20vJPV.js";import"./useGraphicalItemIdentity-AHFKb_mu.js";import"./CartesianAxis-CGCKig2C.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
