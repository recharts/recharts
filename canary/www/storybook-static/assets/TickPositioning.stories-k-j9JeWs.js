import{R as t}from"./iframe-Cuw567ao.js";import{R as m}from"./zIndexSlice-BuAoIKSs.js";import{L as s}from"./LineChart-DNTH3u8j.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DlwGtjpP.js";import{X as l}from"./XAxis-CFLpq8b6.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bjmeh804.js";import"./index-DPZE1hYp.js";import"./index-CitLG62V.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-EeLa_nJM.js";import"./isWellBehavedNumber-B73u9WX2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dc_lFngx.js";import"./axisSelectors-C6YnqdB_.js";import"./d3-scale-sEI--FZR.js";import"./index-DSKcUbNG.js";import"./index-1-Kpwwt_.js";import"./renderedTicksSlice-DdMSNSAt.js";import"./index-CYPd_aD4.js";import"./CartesianChart-D-_oA4AU.js";import"./chartDataContext-CU7BnpPX.js";import"./CategoricalChart-BLUN9mEz.js";import"./Layer-T72FoYEi.js";import"./Curve-DpAcFiD4.js";import"./types-BooOBCdC.js";import"./step-oaTKbJ5-.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B1juRf7B.js";import"./Label-BJjrjkoL.js";import"./Text-DEJPj4XQ.js";import"./DOMUtils-mjR2JQA6.js";import"./useId-JkOEL8Mu.js";import"./useBackwardsCompatibleTheme-CpTahyhZ.js";import"./ZIndexLayer-b9cpcpRU.js";import"./useAnimationId-7XVM7nxW.js";import"./ActivePoints-DUj5MP15.js";import"./Dot-DhnV0obD.js";import"./RegisterGraphicalItemId-COeScAua.js";import"./ErrorBarContext-DsK39YKv.js";import"./GraphicalItemClipPath-DroKw-TI.js";import"./SetGraphicalItem--pdnWjmL.js";import"./getRadiusAndStrokeWidthFromDot-D9Yg2xkO.js";import"./ActiveShapeUtils-P98ujLW0.js";import"./useGraphicalItemIdentity-DXn-ONdl.js";import"./CartesianAxis-D-JaI_zt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
