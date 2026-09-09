import{R as t}from"./iframe-Dn8vQZEp.js";import{R as m}from"./zIndexSlice-XUx2oJl_.js";import{L as s}from"./LineChart-s14xJC2T.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-mZ5HbPHC.js";import{X as l}from"./XAxis-CB79oGK-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-fPZ-AFkd.js";import"./index-CuDTIlBD.js";import"./index-BhPh_0Mo.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-jBHMfbnT.js";import"./isWellBehavedNumber-Drx6zYdA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bhkt7zRT.js";import"./axisSelectors-DcgT4KNV.js";import"./d3-scale-CzizY4ry.js";import"./index-CjS_XyhA.js";import"./index-Drl0y4WP.js";import"./renderedTicksSlice-eRTKLRMo.js";import"./index-Bmxz4y8Z.js";import"./CartesianChart-B9QNJ1CX.js";import"./chartDataContext-mZgxnkA9.js";import"./CategoricalChart-DAypclSw.js";import"./Layer-BJv5m_kT.js";import"./Curve-WjJYEJJ2.js";import"./types-BtKkYRP2.js";import"./step-DZtB5o_b.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BnMcWdWM.js";import"./Label-Bvs0nTDG.js";import"./Text-D0E0CgcA.js";import"./DOMUtils-T9kk7XzM.js";import"./useId-ClKCYS2F.js";import"./useBackwardsCompatibleTheme-DuANBb0k.js";import"./ZIndexLayer-8Cv1ome6.js";import"./useAnimationId-DNL11RNx.js";import"./ActivePoints-CJcQvon7.js";import"./Dot-CNAi9nFI.js";import"./RegisterGraphicalItemId-BEcpOk8N.js";import"./ErrorBarContext-1UXxdVKa.js";import"./GraphicalItemClipPath-DwUubEvw.js";import"./SetGraphicalItem-wP6-k6q-.js";import"./getRadiusAndStrokeWidthFromDot-CS00mpN0.js";import"./ActiveShapeUtils-Czlcjg-Z.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BNezq43E.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
