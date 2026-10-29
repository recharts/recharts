import{R as t}from"./iframe-DpFoyu2v.js";import{R as m}from"./zIndexSlice-BR5-by35.js";import{L as s}from"./LineChart-CLP_sqqe.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DsODaGkU.js";import{X as l}from"./XAxis-B0PuBmnr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Bl7dCfEE.js";import"./throttle-CbL9mvVE.js";import"./index-CXkQwc1T.js";import"./index-Dvxsi2Qy.js";import"./RechartsWrapper-BNB2siqp.js";import"./axisSelectors-DsRIuzGY.js";import"./polarAxisSelectors-CoSF9I4I.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DFMCrQku.js";import"./index-CQQQihly.js";import"./index-DPbLagXs.js";import"./renderedTicksSlice-DLxnQ8Ny.js";import"./index-J5LyVsrM.js";import"./CartesianChart-C9Oi4Bgl.js";import"./ZIndexPortal-j1WUiNyF.js";import"./CategoricalChart-CbXZ5UqK.js";import"./Layer-C27d_lJh.js";import"./Curve-CrBw6Qm3.js";import"./types-nITqZw6s.js";import"./step-DIzEC01T.js";import"./path-DyVhHtw_.js";import"./LabelList-BcqFX_Cs.js";import"./Label-RSQOEDTQ.js";import"./Text-B1i7DvDe.js";import"./DOMUtils-I7Jj66xj.js";import"./ZIndexLayer-Q15FdZk9.js";import"./ActivePoints--ch9wTnx.js";import"./Dot-BBDn528y.js";import"./activeStyles-Dlv-kHFt.js";import"./useAnimationId-DcTYtpTG.js";import"./dataEntryStyles-BSD8zeo1.js";import"./Symbols-BqVxLZyQ.js";import"./symbol-Bc1WE4jB.js";import"./ErrorBarContext-C0P4PP3P.js";import"./SetGraphicalItem-BiUFphqr.js";import"./getRadiusAndStrokeWidthFromDot-DS-6kW0Q.js";import"./ActiveShapeUtils-DOhyqEjv.js";import"./useEffectiveDataKey-D3EJWYit.js";import"./CartesianAxis-C3Cmf1pW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
