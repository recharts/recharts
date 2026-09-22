import{R as t}from"./iframe-D0zbLhxA.js";import{R as m}from"./zIndexSlice-CWkdbIA2.js";import{L as s}from"./LineChart-DbChykH9.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-whJSU_O5.js";import{X as l}from"./XAxis-C4BjHZeA.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B_CESfsw.js";import"./index-88DQaVXO.js";import"./index-CyOzo8aY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BgsmPYXb.js";import"./isWellBehavedNumber-x1jcTYzd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BY5Xz_58.js";import"./axisSelectors-BlTNsS6D.js";import"./d3-scale-DfMtHGNT.js";import"./index-BWHvlcOR.js";import"./index-Blp0C-1x.js";import"./renderedTicksSlice-DXlRaIPl.js";import"./index-Bnqxj0FR.js";import"./CartesianChart-BS4vd5Ws.js";import"./chartDataContext-CXCNMTYE.js";import"./CategoricalChart-0fndcTvE.js";import"./Layer-CmDCK7Pe.js";import"./Curve-DcMb9zNQ.js";import"./types-CtSuVyzs.js";import"./step-BSEqRnvY.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Wcsxci2q.js";import"./Label-BXZW4D8v.js";import"./Text-_UZJg8Mt.js";import"./DOMUtils-CI9OljrR.js";import"./useId-DQM9uYad.js";import"./useBackwardsCompatibleTheme-BiiWRDQN.js";import"./ZIndexLayer-BARNP0Xd.js";import"./useAnimationId-DmbXEcsZ.js";import"./ActivePoints-EMJbfe9W.js";import"./Dot-Dj6uRf99.js";import"./RegisterGraphicalItemId-FqWIkkm7.js";import"./ErrorBarContext-Bjv3Wf_t.js";import"./GraphicalItemClipPath-CTIN6h-2.js";import"./SetGraphicalItem-oTDI8Dya.js";import"./getRadiusAndStrokeWidthFromDot-CxIU_DtO.js";import"./ActiveShapeUtils-BN8uTuPe.js";import"./useGraphicalItemIdentity-Bpqle07f.js";import"./CartesianAxis-HOzTxsIt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
