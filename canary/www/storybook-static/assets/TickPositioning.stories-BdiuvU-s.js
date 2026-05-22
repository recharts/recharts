import{e as t}from"./iframe-BhUxTtiL.js";import{g as m}from"./arrayEqualityCheck-DppgWusB.js";import{L as s}from"./LineChart-L4wvqIBp.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-p3VovnKi.js";import{X as l}from"./XAxis-C73en9jh.js";import{R as v}from"./RechartsHookInspector-JMIq0pQS.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BwRhqspK.js";import"./immer-CHCHxlI3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BR1uoXx0.js";import"./index-XjGx_uyE.js";import"./hooks-DR2LEq6I.js";import"./axisSelectors-CJkBbfZc.js";import"./d3-scale-XHTmrGeR.js";import"./zIndexSlice-nXWOo65n.js";import"./renderedTicksSlice-CYNpjUFM.js";import"./CartesianChart-Bbu5UDic.js";import"./chartDataContext-l2E_xhbE.js";import"./CategoricalChart-BpuJQUho.js";import"./Curve-BICrVSEu.js";import"./types-Lg-gn8wA.js";import"./step-DotG6x7P.js";import"./path-DyVhHtw_.js";import"./Layer-BGQI9FGV.js";import"./ReactUtils-BLhQELGN.js";import"./Label-B-L_WnHM.js";import"./Text-_q4HIlMq.js";import"./DOMUtils-BPHETHho.js";import"./ZIndexLayer-BPpIaF6c.js";import"./ActivePoints-B8FRaVHI.js";import"./Dot-Bn8XUR1d.js";import"./RegisterGraphicalItemId-05uKE1t1.js";import"./ErrorBarContext-xJxnsNXv.js";import"./GraphicalItemClipPath-CLhlaT2j.js";import"./SetGraphicalItem-C4bg6-5U.js";import"./useAnimationId-B-QfnVAI.js";import"./getRadiusAndStrokeWidthFromDot-CjnN3OM9.js";import"./ActiveShapeUtils-BtaI_SKC.js";import"./CartesianAxis-Dg6rum68.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-6wyw6I_N.js";import"./ChartSizeDimensions-Bic6l-OJ.js";import"./OffsetShower-CD4roSzf.js";import"./PlotAreaShower-CXgcskuB.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const mt=["TickPositioning"];export{r as TickPositioning,mt as __namedExportsOrder,pt as default};
