import{e as t}from"./iframe-DA7dsAjt.js";import{R as n}from"./arrayEqualityCheck-B2Tullra.js";import{L as s}from"./LineChart-B00JAxeq.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-0_vX2c1I.js";import{X as l}from"./XAxis-D3BVUN8u.js";import{R as v}from"./RechartsHookInspector-DyuMbIeF.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B7E-EJR0.js";import"./immer-CgNeP4Cn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DUd0AjRv.js";import"./index-CjGLS6_1.js";import"./hooks-D-1ZrX9e.js";import"./axisSelectors-BJkuMl5j.js";import"./d3-scale-vc3zo1Az.js";import"./zIndexSlice-QK0EAxoG.js";import"./renderedTicksSlice-izlEPV0Q.js";import"./CartesianChart-BGT6UcsB.js";import"./chartDataContext-COI91jzY.js";import"./CategoricalChart-OHcwZY8x.js";import"./Layer-CA2bGkBA.js";import"./ReactUtils-Cqv1MuoY.js";import"./Label-BbSyBdDv.js";import"./Text-BDZGl2AG.js";import"./DOMUtils-g7EKoefO.js";import"./ZIndexLayer-CtisNWGZ.js";import"./ActivePoints-CYKlTQ6D.js";import"./Dot-B0m4Ez5e.js";import"./types-BGlT9ghA.js";import"./RegisterGraphicalItemId-Cw14-A1S.js";import"./ErrorBarContext-Exwfj4Ew.js";import"./GraphicalItemClipPath-CU2uvT1M.js";import"./SetGraphicalItem-M42qZfYw.js";import"./useAnimationId-Ow7TV2bH.js";import"./getRadiusAndStrokeWidthFromDot-DJFGm-Zo.js";import"./ActiveShapeUtils-WqUyYvVV.js";import"./isPlainObject-BtsggNmX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C-tNMC4o.js";import"./Trapezoid-CUQqnsJW.js";import"./Sector-CYPQyxpp.js";import"./Symbols-BhPyOpJM.js";import"./symbol-Cme7zaAq.js";import"./step-D3Kjh6oK.js";import"./Curve-CSUb-Mmt.js";import"./CartesianAxis-5nCOjy0L.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-WFnamGGq.js";import"./ChartSizeDimensions-DOvk2LHO.js";import"./OffsetShower-G9RnNqRi.js";import"./PlotAreaShower-BULJQmBU.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ht=["TickPositioning"];export{r as TickPositioning,ht as __namedExportsOrder,vt as default};
