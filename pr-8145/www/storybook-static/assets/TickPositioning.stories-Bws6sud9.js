import{R as t}from"./iframe-B5EBEutQ.js";import{R as m}from"./zIndexSlice-BS5hvVSM.js";import{L as s}from"./LineChart-Bof-e_RY.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CtFf5VG7.js";import{X as l}from"./XAxis-C0OgGT6V.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CBLh7NYz.js";import"./throttle-B9WW5VMA.js";import"./index-C_XmK0o8.js";import"./index-C5geO6kL.js";import"./RechartsWrapper-BC-brhau.js";import"./axisSelectors-CLoHgdoC.js";import"./polarAxisSelectors-CqmKpuRO.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-iNRnE1hH.js";import"./index-BF-QrOX1.js";import"./index-DOPYkGg1.js";import"./renderedTicksSlice-B_QLVgTg.js";import"./index-DxeJdFG6.js";import"./fillDefinitions-FU64iHqp.js";import"./CartesianChart-YkNn32dh.js";import"./ZIndexPortal-D0P5glPn.js";import"./CategoricalChart-DwIu15RM.js";import"./Layer-BYAjyABW.js";import"./Curve-Di7q2eVu.js";import"./types-BmtCPhIx.js";import"./step-DSuuF4zz.js";import"./path-DyVhHtw_.js";import"./LabelList-BsIU2Cho.js";import"./Label-Bho88syw.js";import"./Text-BVXkgzAF.js";import"./DOMUtils-EesDyIQg.js";import"./ZIndexLayer-2f9RfWsU.js";import"./ActivePoints-GUWB2UUS.js";import"./Dot-DmpikD8L.js";import"./activeStyles-CuQ8L2cy.js";import"./useAnimationId-5jS9WdgM.js";import"./dataEntryStyles-DbY2Nm9f.js";import"./Symbols-BFE2HVM6.js";import"./symbol-Uauys67f.js";import"./ErrorBarContext-dLbqY2mz.js";import"./SetGraphicalItem-WzwPCAJ5.js";import"./getRadiusAndStrokeWidthFromDot-BJYN0Za2.js";import"./ActiveShapeUtils-CrbC1Zls.js";import"./useEffectiveDataKey-BNkN63Yq.js";import"./CartesianAxis-7YbWTN27.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
