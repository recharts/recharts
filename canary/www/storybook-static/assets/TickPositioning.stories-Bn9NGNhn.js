import{R as t}from"./iframe-c2lRejlG.js";import{R as m}from"./zIndexSlice-CxBOtYNT.js";import{L as s}from"./LineChart-2_6kDqkg.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Bm9hdzN4.js";import{X as l}from"./XAxis-CTi1ijiA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Cd-PQ1DC.js";import"./throttle-CLdsKjkB.js";import"./index-BPGiATtt.js";import"./index-IRYG05jg.js";import"./RechartsWrapper-7WfVgUuu.js";import"./axisSelectors-Deq2x5E-.js";import"./polarAxisSelectors-CqGqTVQP.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-FKe385CS.js";import"./index-flaxi9nt.js";import"./index-DiQunSZN.js";import"./renderedTicksSlice-CI_7c3pA.js";import"./index-DtkFulOp.js";import"./fillDefinitions-BJlWg_X2.js";import"./CartesianChart-B9TZHz33.js";import"./chartDataContext-D2dajo_O.js";import"./CategoricalChart-Da60SI3f.js";import"./getRadiusAndStrokeWidthFromDot-BLb9OMZN.js";import"./Layer-3thD2J8o.js";import"./Curve-C61f5jar.js";import"./types-DUYg5b1u.js";import"./step-k_HQUKGn.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CPzad5xB.js";import"./Label-CYzJLkW1.js";import"./Text-DUu108CD.js";import"./ZIndexLayer-wT8ty6aL.js";import"./ActivePoints-DZEdcjq5.js";import"./Dot-DNml-FEM.js";import"./activeStyles-71nScM55.js";import"./useAnimationId-DpyYZ0R1.js";import"./Symbols-ZMuAovUW.js";import"./symbol-BTyzRL6J.js";import"./ErrorBarContext-DkK2QSGk.js";import"./SetGraphicalItem-BqZrsCyw.js";import"./ActiveShapeUtils-CM6VEkzu.js";import"./useEffectiveDataKey-Dakyyayq.js";import"./CartesianAxis-OWNbVRjL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
