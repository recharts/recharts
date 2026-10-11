import{R as t}from"./iframe-CBWhl09v.js";import{R as m}from"./zIndexSlice-B1AH5YJS.js";import{L as s}from"./LineChart-B1d6Zhb_.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-B0sSvzHP.js";import{X as l}from"./XAxis-tzQHqynD.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-bJqzO9Ic.js";import"./index-BkuzBr4Q.js";import"./index-DAR39XB6.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CJSj2XgG.js";import"./isWellBehavedNumber-CSPLhkuq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BU6mzVyD.js";import"./axisSelectors-B6qdSbwV.js";import"./d3-scale-BNKhe_xR.js";import"./index-D8EheK28.js";import"./index-rVwT5Wbe.js";import"./renderedTicksSlice-GOLzDKAI.js";import"./index-CFTfJwzV.js";import"./CartesianChart-BcuREG8f.js";import"./chartDataContext-CWF_m6e5.js";import"./CategoricalChart-Dvk5cwWF.js";import"./Layer-DxeVA2bX.js";import"./Curve-B56TGwB_.js";import"./types-Dq74-fjW.js";import"./step-CZA2KIrz.js";import"./path-DyVhHtw_.js";import"./activeStyles-BZ5qRbpV.js";import"./Label-CJ9xjWYO.js";import"./Text-fMbisw4f.js";import"./pageBackground-zeq0PAuW.js";import"./useId-KLEpqtFg.js";import"./useBackwardsCompatibleTheme-Z7_zoiGA.js";import"./ZIndexLayer-DmDmq8bi.js";import"./useAnimationId-T7zgTeVd.js";import"./dataEntryStyles-CZ7XLNEq.js";import"./ActivePoints-mIk3yLeC.js";import"./Dot-BHORkSEl.js";import"./ErrorBarContext-Bcceb6pe.js";import"./GraphicalItemClipPath-DGC1RDqu.js";import"./SetGraphicalItem-Dvg6XScA.js";import"./getRadiusAndStrokeWidthFromDot-B1PyR7dw.js";import"./ActiveShapeUtils-DJCIfDMk.js";import"./useGraphicalItemIdentity-BtkPyjJj.js";import"./CartesianAxis-BGPUbFHg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
