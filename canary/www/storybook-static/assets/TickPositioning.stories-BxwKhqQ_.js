import{R as t}from"./iframe-jjE6mnhE.js";import{R as m}from"./zIndexSlice-BF8b2iUS.js";import{L as s}from"./LineChart-mkGLRK60.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-B1oFq1NW.js";import{X as l}from"./XAxis-BmSvbO1p.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DkPV1tJ5.js";import"./index-4Q1Js_Gc.js";import"./index-CHxyqgyq.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DrW6c44U.js";import"./isWellBehavedNumber-D962mg0S.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-G0-O6wcd.js";import"./axisSelectors-Da2-5Qyb.js";import"./d3-scale-BsTwUgiH.js";import"./index-wKhQr2dB.js";import"./index-CQ_ODmEo.js";import"./renderedTicksSlice-B5bTJB_6.js";import"./index-SutJufb7.js";import"./CartesianChart-Bv2YRKvd.js";import"./chartDataContext-BtBmRnZH.js";import"./CategoricalChart-CHDbAtKm.js";import"./Layer-DvjfGsuf.js";import"./Curve-CIYNdT84.js";import"./types-D-bzS3aM.js";import"./step-Bkxoj6hz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CKtAdJL6.js";import"./Label-CLl4R84L.js";import"./Text-yk6NtqvR.js";import"./DOMUtils-ClCL_aT_.js";import"./useId-qpgQMwe5.js";import"./useBackwardsCompatibleTheme-UPDRFRx4.js";import"./ZIndexLayer-OM7L_4ys.js";import"./useAnimationId-B8D6e613.js";import"./ActivePoints-DAEG3IaC.js";import"./Dot-D5qpHCDc.js";import"./RegisterGraphicalItemId-DLqbcJJV.js";import"./ErrorBarContext-CT6ZQdcj.js";import"./GraphicalItemClipPath-Cb68eAOX.js";import"./SetGraphicalItem-BUG0SFHa.js";import"./getRadiusAndStrokeWidthFromDot-B-GOq11T.js";import"./ActiveShapeUtils-Bi6thO6h.js";import"./useGraphicalItemIdentity-D5HmZ81h.js";import"./CartesianAxis-Ce-_Po8B.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
