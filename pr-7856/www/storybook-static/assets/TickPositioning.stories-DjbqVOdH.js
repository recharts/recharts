import{R as t}from"./iframe-B-kCJkOw.js";import{R as m}from"./zIndexSlice-Clv-Wr_e.js";import{L as s}from"./LineChart-ngQzD0Xa.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CGQuGR8D.js";import{X as l}from"./XAxis-C88jehXC.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DVuM4iFd.js";import"./index-DcAa2UuL.js";import"./index-CBKTbWE1.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BhhOMDdt.js";import"./isWellBehavedNumber-C4FzwffV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D3el3knR.js";import"./axisSelectors-DT9SmTCn.js";import"./d3-scale-IzH54SGl.js";import"./index-2QimBBuf.js";import"./index-BVh04Hzh.js";import"./renderedTicksSlice-C6ma__-i.js";import"./index-CmAyTwir.js";import"./CartesianChart-C3VLYHct.js";import"./chartDataContext-CikOGl8V.js";import"./CategoricalChart-CVXqoPY8.js";import"./Layer-DUmzLecA.js";import"./Curve-__pvox1D.js";import"./types-1S0vnYpD.js";import"./step-DoJnsDJu.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BgnTcQ58.js";import"./Label-CshHc_P8.js";import"./Text-DvIEDZcH.js";import"./DOMUtils-CWJWmJqm.js";import"./useId-DGNKKzIZ.js";import"./useBackwardsCompatibleTheme-D27rYUis.js";import"./ZIndexLayer-yM8iQkyd.js";import"./useAnimationId-Bkh3_vjS.js";import"./ActivePoints-DYudjPxL.js";import"./Dot-BKZoXX6K.js";import"./RegisterGraphicalItemId-DX8EYk4F.js";import"./ErrorBarContext-PD5E_qHe.js";import"./GraphicalItemClipPath-Bf7ClEec.js";import"./SetGraphicalItem-DlY4dRC7.js";import"./getRadiusAndStrokeWidthFromDot-DPuw4jnu.js";import"./ActiveShapeUtils-C14ipRtW.js";import"./useGraphicalItemIdentity-wZgDD3hk.js";import"./CartesianAxis-DmQK4you.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
