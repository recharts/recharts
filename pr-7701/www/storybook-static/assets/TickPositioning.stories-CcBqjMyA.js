import{R as t}from"./iframe-n1jsfVDG.js";import{R as n}from"./zIndexSlice-BRlbTYqB.js";import{L as s}from"./LineChart-PHcoPUnS.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CYxi_v-i.js";import{X as l}from"./XAxis-XfJlYZND.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BndXY2H8.js";import"./index-CgFE3bjK.js";import"./index-WXWaFicj.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BAQjLDG_.js";import"./isWellBehavedNumber-51Xh59nn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CtxvIequ.js";import"./axisSelectors-7NZ6PaeE.js";import"./d3-scale-DHoUxLai.js";import"./index-CBp2l__h.js";import"./index-DNYwsh8I.js";import"./renderedTicksSlice-rKTqRgg8.js";import"./index-C2dJWAfM.js";import"./CartesianChart-Dfjy31tx.js";import"./chartDataContext-XRtQdSke.js";import"./CategoricalChart-CYGfKh2e.js";import"./Layer-CoRWBRFX.js";import"./Curve-B5xOTs2B.js";import"./types-DxCRAK1R.js";import"./step-B7eMn8MW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CK27PxaM.js";import"./Label-B5dy1Vd6.js";import"./Text-BwTkl3FB.js";import"./DOMUtils-B7JqCpD5.js";import"./useId-CqUHn1t3.js";import"./useBackwardsCompatibleTheme-BrtymnuF.js";import"./ZIndexLayer-B-b1Mp40.js";import"./useAnimationId-DmMej8H7.js";import"./ActivePoints-BgeuL4dW.js";import"./Dot-BWSVmybM.js";import"./RegisterGraphicalItemId-CfRcyWlO.js";import"./ErrorBarContext-Ba37a78Y.js";import"./GraphicalItemClipPath-COfUJuyE.js";import"./SetGraphicalItem-DGwR4qus.js";import"./getRadiusAndStrokeWidthFromDot-CpUR_Izt.js";import"./ActiveShapeUtils-D8gDtxNc.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-9JtcSgtY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const nt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
