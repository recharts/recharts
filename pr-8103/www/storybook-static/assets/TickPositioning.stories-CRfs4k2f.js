import{R as t}from"./iframe-B87OnEHe.js";import{R as m}from"./zIndexSlice-CayLxsD5.js";import{L as s}from"./LineChart-CR0dorHT.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CNmt-EGB.js";import{X as l}from"./XAxis-P4dvE_Lf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BO6btQ4Q.js";import"./throttle-DxXe2fSX.js";import"./index-BAzLdDjX.js";import"./index-DvKC7fGa.js";import"./RechartsWrapper-C4kU4M5n.js";import"./axisSelectors-DZJywaTf.js";import"./polarAxisSelectors-DUkdlQZC.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BoPllMsy.js";import"./index-BmBjwPgJ.js";import"./index-Cizw57Lu.js";import"./renderedTicksSlice-Db8-13BV.js";import"./index-DKiqyqcX.js";import"./CartesianChart-B_5wOWKW.js";import"./ZIndexPortal-BhrD04L0.js";import"./CategoricalChart-DOgCDtrc.js";import"./Layer-B5mZFZkh.js";import"./Curve-CzFk349I.js";import"./types-CvQS_eYG.js";import"./step-Dlj9Cqyz.js";import"./path-DyVhHtw_.js";import"./LabelList-DteE4Y6d.js";import"./Label-CCuY2Era.js";import"./Text-DwFYMnaM.js";import"./pageBackground-CO_WqCks.js";import"./ZIndexLayer-v9eepHO2.js";import"./dataEntryStyles-B54Iq7xi.js";import"./ActivePoints-Bws5v7as.js";import"./Dot-5T458_dG.js";import"./activeStyles-gtCHrDIH.js";import"./useAnimationId-DHS0idNw.js";import"./Symbols-C5l9Kmbi.js";import"./symbol-Bou66IFx.js";import"./RegisterGraphicalItemId-CXcrjxG2.js";import"./ErrorBarContext-DgiLcLgY.js";import"./SetGraphicalItem-t5mD_xbz.js";import"./getRadiusAndStrokeWidthFromDot-tXoAwvPO.js";import"./ActiveShapeUtils-KYdt019M.js";import"./useEffectiveDataKey-D32F3nXW.js";import"./CartesianAxis-O93eF2fQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
