import{R as t}from"./iframe-C9xnj3fa.js";import{R as m}from"./zIndexSlice-CcurngJa.js";import{L as s}from"./LineChart-DM45Enu7.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CeHzBY0l.js";import{X as l}from"./XAxis-CqLpIx_r.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Brqxe2vY.js";import"./throttle-Brv_8OQk.js";import"./index-HR2zHK1s.js";import"./index-CGQL5uib.js";import"./RechartsWrapper-BTsf-RRm.js";import"./axisSelectors-Ci_X7Owa.js";import"./polarAxisSelectors-D4sMq_tB.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Bt8PJZEG.js";import"./index-jCX_JL39.js";import"./index-DsrYsm3j.js";import"./renderedTicksSlice-w5XdGCx4.js";import"./index-HliY0Ktb.js";import"./CartesianChart-ZuYtKyhz.js";import"./ZIndexPortal-CioIZ4EI.js";import"./CategoricalChart-Dkc5AhoM.js";import"./Layer-DDMBpFba.js";import"./Curve-CKzhw-Lm.js";import"./fillDefinitions-JiW6eW7Z.js";import"./pageBackground-BZHE6_vS.js";import"./types-DG6esOZW.js";import"./step-FdCzkuxT.js";import"./path-DyVhHtw_.js";import"./LabelList-Dl-1RIBv.js";import"./Label-BDFDhH9S.js";import"./Text-BlDPHkKw.js";import"./DOMUtils-rMdb-gP0.js";import"./ZIndexLayer-BqHotqUl.js";import"./ActivePoints-CONJtR6k.js";import"./Dot-GKhzlTQm.js";import"./activeStyles-D9Ul1Rn7.js";import"./useAnimationId-CE3S5svQ.js";import"./dataEntryStyles-DUCKxZ4T.js";import"./Symbols-Cm6DVkmF.js";import"./symbol-B6aiZ8Bc.js";import"./ErrorBarContext-CpFpfUyn.js";import"./SetGraphicalItem-CW9QGr42.js";import"./getRadiusAndStrokeWidthFromDot-BiTQJ7fn.js";import"./ActiveShapeUtils-3CPPp2aV.js";import"./useEffectiveDataKey-Bl0Ac7JR.js";import"./CartesianAxis-CWptnmGh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const ct={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},dt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,dt as __namedExportsOrder,ct as default};
