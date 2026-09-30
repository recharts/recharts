import{R as t}from"./iframe-CgcESoS_.js";import{R as m}from"./zIndexSlice-C9Cb6Bbs.js";import{L as s}from"./LineChart-BN4_IZ-e.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BSyeHdkf.js";import{X as l}from"./XAxis-DGXMp8Is.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CQ8B3fUq.js";import"./index-1XAen2V_.js";import"./index-D8jvDgL_.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-veeYoS0W.js";import"./isWellBehavedNumber-DhEFf9E-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DtWJJ1V3.js";import"./axisSelectors-C7-DsMGo.js";import"./d3-scale-D8W7M27y.js";import"./index-BTxBwUxJ.js";import"./index-C9UQ_w7z.js";import"./renderedTicksSlice-B_kIuOFM.js";import"./index-jPmp1Ffa.js";import"./CartesianChart-BTQK_Cp5.js";import"./chartDataContext-DUBSEFa9.js";import"./CategoricalChart-BFNKJgcW.js";import"./Layer-Dw6zZzpv.js";import"./Curve-I_wsWTHV.js";import"./types-8FiI2U_s.js";import"./step-VHdIkk64.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-tEo2zXLi.js";import"./Label-_q8lYILX.js";import"./Text-BcEh6RFZ.js";import"./DOMUtils-Cw9s48Kn.js";import"./useId-Dc2THN-S.js";import"./useBackwardsCompatibleTheme-BFuFikoj.js";import"./ZIndexLayer-DED1yjXT.js";import"./useAnimationId-C9QrN9Yt.js";import"./ActivePoints-D3Y1-NiW.js";import"./Dot-Jzlb3m1I.js";import"./RegisterGraphicalItemId-BEYzOUyb.js";import"./ErrorBarContext-ZU3bae9x.js";import"./GraphicalItemClipPath-C3tOgX87.js";import"./SetGraphicalItem-D2ZPo27B.js";import"./getRadiusAndStrokeWidthFromDot-ChHrtsAw.js";import"./ActiveShapeUtils-Cy154cWG.js";import"./useGraphicalItemIdentity-ry1LG-EM.js";import"./CartesianAxis-CyNZQ6so.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
