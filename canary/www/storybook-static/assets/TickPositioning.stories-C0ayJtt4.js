import{R as t}from"./iframe-DehjRTS0.js";import{R as m}from"./zIndexSlice-Or93N-XC.js";import{L as s}from"./LineChart-CqkgILZR.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-5vGDPRrb.js";import{X as l}from"./XAxis-Cg2bfD3w.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CMD_wJjc.js";import"./throttle-DesffiZ0.js";import"./index-DETf35J4.js";import"./index-CwuhsW6L.js";import"./RechartsWrapper-CRtSS_eM.js";import"./axisSelectors-DZdKwAWL.js";import"./polarAxisSelectors-Ka3IcW3O.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C22MolAx.js";import"./index-CXT-2IyT.js";import"./index-KpNlVNDm.js";import"./renderedTicksSlice-Ct6BbSAX.js";import"./index-kCr6N--m.js";import"./fillDefinitions-DhW3x4ou.js";import"./CartesianChart-CgHz7Gaf.js";import"./chartDataContext-BjcKNpHZ.js";import"./CategoricalChart-DkUvkRm5.js";import"./Layer-DlT20hA_.js";import"./Curve-D6YGUkKE.js";import"./types-Be7PvpBk.js";import"./step-BGdpfV3H.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-DzT0ep5z.js";import"./Label-D6Z-0Dfn.js";import"./Text-CTuG3Uwk.js";import"./ZIndexLayer-DkIV4AJ1.js";import"./ActivePoints-CFvg43Jt.js";import"./Dot-DF2koN3g.js";import"./activeStyles-CTG2KgqA.js";import"./useAnimationId-DcJ3b19B.js";import"./Symbols-C5Duu2Up.js";import"./symbol-CWMlQuGp.js";import"./ErrorBarContext-CF1ouw75.js";import"./SetGraphicalItem-Doit17ow.js";import"./getRadiusAndStrokeWidthFromDot-B4Nwvyfh.js";import"./ActiveShapeUtils-D-equOl3.js";import"./useEffectiveDataKey-7YBRaAIn.js";import"./CartesianAxis-CwmDOfi4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,mt as __namedExportsOrder,pt as default};
