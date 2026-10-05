import{R as t}from"./iframe-Xtjdy8K6.js";import{R as m}from"./zIndexSlice-Ca3_di9O.js";import{L as s}from"./LineChart-BSAgiykc.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-ClPESsPf.js";import{X as l}from"./XAxis-Dsuy05EW.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BJfO_UKv.js";import"./index-CD-q9qaf.js";import"./index-I4ONaVXX.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Boep7u7P.js";import"./isWellBehavedNumber-CZ785SIV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DLU1mxV-.js";import"./axisSelectors-CubJTdeO.js";import"./d3-scale-DZ-m0TzD.js";import"./index-BwTAVpnp.js";import"./index-DLvKfnax.js";import"./renderedTicksSlice-BtArWvvy.js";import"./index-Cf61T-z_.js";import"./CartesianChart-uyYSGYFX.js";import"./chartDataContext-h8VmgL2W.js";import"./CategoricalChart-BG0XVVA5.js";import"./Layer-FeyHjh4s.js";import"./Curve-_q4HdrfF.js";import"./types-DxDlUmLu.js";import"./step-C43hkdfh.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CiMNNQac.js";import"./Label-BQUl4kmN.js";import"./Text-LNKD3nQn.js";import"./DOMUtils-BmMu5huz.js";import"./useId-DBEZo7IS.js";import"./useBackwardsCompatibleTheme-JVp1trOZ.js";import"./ZIndexLayer-B714zacF.js";import"./useAnimationId-CuSCtoXZ.js";import"./ActivePoints-B88QV3Sj.js";import"./Dot-D52dYvYg.js";import"./RegisterGraphicalItemId-5IcKOSXK.js";import"./ErrorBarContext-DcFzK2E8.js";import"./GraphicalItemClipPath-CULhMThP.js";import"./SetGraphicalItem-BUfBrIkK.js";import"./getRadiusAndStrokeWidthFromDot-DLeCgjsD.js";import"./ActiveShapeUtils-kAxIXwKe.js";import"./useGraphicalItemIdentity-BFTytd0c.js";import"./CartesianAxis-CmHtOK-l.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
