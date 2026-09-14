import{R as t}from"./iframe-C8hleUub.js";import{R as m}from"./zIndexSlice-vCE-ybpn.js";import{L as s}from"./LineChart-D1_N9eUn.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-ByuQgILV.js";import{X as l}from"./XAxis-R1M6mi21.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DqZhpB0B.js";import"./index-YGCqGUHr.js";import"./index-Ybsy0-7F.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-K4N7KwiK.js";import"./isWellBehavedNumber-B3eGUodw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C_qv-3Hz.js";import"./axisSelectors-2_wVdrP-.js";import"./d3-scale-5YAUGhno.js";import"./index-BNE3_iNf.js";import"./index-DRei1T7T.js";import"./renderedTicksSlice-NbxY696c.js";import"./index-D7OGaE6M.js";import"./CartesianChart-BMIYUzX5.js";import"./chartDataContext-CXErNkaS.js";import"./CategoricalChart-ZxlZFsha.js";import"./Layer-Bnkm0B65.js";import"./Curve-CIcYFtSq.js";import"./types-CanoAHyf.js";import"./step-DrIu7wrv.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CjbyLJ1n.js";import"./Label-Dx4oA-8H.js";import"./Text-CGkuih9W.js";import"./DOMUtils-Chkxh9Pu.js";import"./useId-BChEDpq7.js";import"./useBackwardsCompatibleTheme-D4jGgcPz.js";import"./ZIndexLayer-BFXWo7W3.js";import"./useAnimationId-lPT865ra.js";import"./ActivePoints-CMDHZxxf.js";import"./Dot-CXjyuPw6.js";import"./RegisterGraphicalItemId-BA4uM9gD.js";import"./ErrorBarContext-DZ7sAk5y.js";import"./GraphicalItemClipPath-LpKqTX6v.js";import"./SetGraphicalItem-KHbn2Vk7.js";import"./getRadiusAndStrokeWidthFromDot-DVFiqn2t.js";import"./ActiveShapeUtils-BDBm5gcU.js";import"./useGraphicalItemIdentity-FCLYk-L1.js";import"./CartesianAxis-D9UtSAv7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
