import{R as t}from"./iframe-BmCEaXnl.js";import{R as m}from"./zIndexSlice-CCSErHLO.js";import{L as s}from"./LineChart-zz32sg1E.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BEG7jfGv.js";import{X as l}from"./XAxis-u0XIPlGG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CFAPbmi-.js";import"./throttle-qcDxTsLf.js";import"./index-BqP1aJDu.js";import"./index-F6n6DaVK.js";import"./RechartsWrapper-e4k-RA_5.js";import"./axisSelectors-jGKN6-F9.js";import"./polarAxisSelectors-pAXQteq7.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DOe-rCGU.js";import"./index-BTkbJW8j.js";import"./index-B6BvyTbH.js";import"./renderedTicksSlice-2egCQc0E.js";import"./index-C_f_Jppx.js";import"./CartesianChart-r4VMNRon.js";import"./ZIndexPortal-QH_cbCJt.js";import"./CategoricalChart-DB6XzEGw.js";import"./Layer-BpXqwf7v.js";import"./Curve-03O0PZm6.js";import"./types-_yr4vfnQ.js";import"./step-Ci6oOROy.js";import"./path-DyVhHtw_.js";import"./LabelList-BgUgtMai.js";import"./Label-BMv4awTg.js";import"./Text-CVqIJR2f.js";import"./DOMUtils-C4PB-VGE.js";import"./ZIndexLayer-CQzpYkd8.js";import"./ActivePoints-CcCwLUJA.js";import"./Dot-BKYa8qvg.js";import"./activeStyles-D5gryLfg.js";import"./useAnimationId-DcrGLg07.js";import"./dataEntryStyles-D18H_t3x.js";import"./fillDefinitions-Cf5kf7-L.js";import"./Symbols-CZzsW6XG.js";import"./symbol-CysJXLfa.js";import"./ErrorBarContext-D_xcSKmk.js";import"./SetGraphicalItem-CsEqG3iP.js";import"./getRadiusAndStrokeWidthFromDot-CTKwmZ8b.js";import"./ActiveShapeUtils-DMtsKFiW.js";import"./useEffectiveDataKey-CdWL-HwP.js";import"./CartesianAxis-MWIUmivx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,ct as __namedExportsOrder,st as default};
