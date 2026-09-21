import{R as t}from"./iframe-C_u1NPXq.js";import{R as m}from"./zIndexSlice-D4vNODax.js";import{L as s}from"./LineChart-DoEKyRKj.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Do5qQsI6.js";import{X as l}from"./XAxis-5AKDuUiC.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B6uw1bdh.js";import"./index-C5_PYkqz.js";import"./index-BAmjystd.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Du-QS2vu.js";import"./isWellBehavedNumber-BXJecvkc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BFhYeyxK.js";import"./axisSelectors-ClVjVkSn.js";import"./d3-scale-CA32_7ZH.js";import"./index-DFS_VDHO.js";import"./index-BGZsApoZ.js";import"./renderedTicksSlice-7TbUk5kV.js";import"./index-ChjG3lJf.js";import"./CartesianChart-CHKIuE1P.js";import"./chartDataContext-CkGBCjv4.js";import"./CategoricalChart-B7Ubj1Y5.js";import"./Layer-B3fcXYMK.js";import"./Curve-CaQ3Xb8z.js";import"./types-CMh3udVy.js";import"./step-Dh3cXytf.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BBge8Oki.js";import"./Label-4YL6LIZD.js";import"./Text-V-XbkyPz.js";import"./DOMUtils-COAF9wVa.js";import"./useId-DJNZORW6.js";import"./useBackwardsCompatibleTheme-nG_PFK3f.js";import"./ZIndexLayer-D3gVBGpt.js";import"./useAnimationId-GgyVLnbG.js";import"./ActivePoints-CI6FJtyy.js";import"./Dot-CycumfnH.js";import"./RegisterGraphicalItemId-eQxwtpTA.js";import"./ErrorBarContext-BDzlZSzL.js";import"./GraphicalItemClipPath-j2cLfrt9.js";import"./SetGraphicalItem-DbKh9IZb.js";import"./getRadiusAndStrokeWidthFromDot-tymVsWd9.js";import"./ActiveShapeUtils-BCBUr_LW.js";import"./useGraphicalItemIdentity-DhPf_S2E.js";import"./CartesianAxis-CfxEFnrg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
