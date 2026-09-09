import{R as t}from"./iframe-CiBEWf8Q.js";import{R as m}from"./zIndexSlice-CF6C51G2.js";import{L as s}from"./LineChart-weBr3X4t.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CSsqXF3e.js";import{X as l}from"./XAxis-CbgzK4MI.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Br6qQatL.js";import"./index-ChQP2zgF.js";import"./index-DQl4yRvy.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cheer07s.js";import"./isWellBehavedNumber-CTCV4BvK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DwV4v4eg.js";import"./axisSelectors-B1sNcXcW.js";import"./d3-scale-DOQDVnBo.js";import"./index-B7Lle2z-.js";import"./index-4YB-Ccb_.js";import"./renderedTicksSlice-CoMChRdU.js";import"./index-2IKC_5hn.js";import"./CartesianChart-J5V6zdaG.js";import"./chartDataContext-DDFLXgxQ.js";import"./CategoricalChart-D02G0NrG.js";import"./Layer-Cb-HZ0sR.js";import"./Curve-smW2CuEl.js";import"./types-P989fbDX.js";import"./step-CTJEDYn1.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BvlvVcPM.js";import"./Label-DPc6TFRy.js";import"./Text-CsV3VR-3.js";import"./DOMUtils-9fJMrmCV.js";import"./useId-fAK_bkox.js";import"./useBackwardsCompatibleTheme-CXlfy45z.js";import"./ZIndexLayer-D9-T3nqJ.js";import"./useAnimationId-DjyXFux3.js";import"./ActivePoints-C9WTSqpm.js";import"./Dot-CmAzU2u7.js";import"./RegisterGraphicalItemId-CHeBqfEu.js";import"./ErrorBarContext-BpAFB1gw.js";import"./GraphicalItemClipPath-DMEdIjUU.js";import"./SetGraphicalItem-CegZ7sSO.js";import"./getRadiusAndStrokeWidthFromDot-bLR0mN7s.js";import"./ActiveShapeUtils-BlIjGu9a.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DSFQC2E9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
