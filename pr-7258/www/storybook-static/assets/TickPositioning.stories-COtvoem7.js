import{e as t}from"./iframe-dL2OVy5F.js";import{R as n}from"./arrayEqualityCheck-CaMvItyo.js";import{L as s}from"./LineChart-PeNK8VCY.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Dq6GxaVC.js";import{X as l}from"./XAxis-B86_r9Ch.js";import{R as v}from"./RechartsHookInspector-BZsexvc_.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-7Zncxn1v.js";import"./immer-DHklT898.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-2xnsmZbF.js";import"./index-C8r_0QEC.js";import"./hooks-CtDQVu0u.js";import"./axisSelectors-Do7BkVsn.js";import"./d3-scale-3VqrHCN7.js";import"./zIndexSlice-DAYnIbZH.js";import"./renderedTicksSlice-D7ViyujS.js";import"./CartesianChart-CQEHzqI9.js";import"./chartDataContext-BXPlG8LR.js";import"./CategoricalChart-BZHJ_HjV.js";import"./Layer-BrlL2tOs.js";import"./ReactUtils-A9WQzOkM.js";import"./Label-C6izcScL.js";import"./Text-Bwe6nLXh.js";import"./DOMUtils-Ci6QTQ3e.js";import"./ZIndexLayer-BvENavnS.js";import"./ActivePoints-BcsZ0pU5.js";import"./Dot-DNIsMwyQ.js";import"./types-LCDeNazI.js";import"./RegisterGraphicalItemId-BLl1AU5h.js";import"./ErrorBarContext-Ba1R8w21.js";import"./GraphicalItemClipPath-B9R00R0l.js";import"./SetGraphicalItem-CczBCiBC.js";import"./useAnimationId-C4Vc8PxM.js";import"./getRadiusAndStrokeWidthFromDot-Dsgl31AO.js";import"./ActiveShapeUtils-6me4R15I.js";import"./isPlainObject-O_SkrgJ1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-XiX3CaBX.js";import"./Trapezoid-Jy6pnob6.js";import"./Sector-4mD4Ykg7.js";import"./Symbols-3zNmirWo.js";import"./symbol-BGt6k0O8.js";import"./step-CSrZegzj.js";import"./Curve-DLwP9u8w.js";import"./CartesianAxis-BKf97Rvg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-D_cVMinZ.js";import"./ChartSizeDimensions-CL0i_3ns.js";import"./OffsetShower-CTFYQb52.js";import"./PlotAreaShower-CS9RsVg8.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
