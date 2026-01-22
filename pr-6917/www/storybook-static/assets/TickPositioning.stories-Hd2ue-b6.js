import{e as t}from"./iframe-D2DyXbcn.js";import{R as s}from"./arrayEqualityCheck-WjtHcJHc.js";import{L as m}from"./LineChart--Wsp0J1e.js";import{L as c}from"./Line-D8rfWtVU.js";import{X as d}from"./XAxis-B_Rkajbb.js";import{R as l}from"./RechartsHookInspector-CDdA-ZFQ.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DA54HTPm.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-BOCCBYR7.js";import"./hooks-JMcNkC16.js";import"./axisSelectors-opT4Xs9T.js";import"./zIndexSlice-BQ_BDZqW.js";import"./CartesianChart-Ba4FxLXC.js";import"./chartDataContext-Dwil6t7E.js";import"./CategoricalChart-D5ZcD5Yb.js";import"./Layer-BwzoyCOr.js";import"./ReactUtils-D1zizFIc.js";import"./Label-CjanQvYq.js";import"./Text-rvIJXzXo.js";import"./DOMUtils-C9-GhUPU.js";import"./ZIndexLayer-NA5ERVnG.js";import"./ActivePoints-BMPW0nm-.js";import"./Dot-BkDSgj5P.js";import"./types-uxMSZ2Tc.js";import"./RegisterGraphicalItemId-D3Xr-RN7.js";import"./ErrorBarContext-C7pLQCZx.js";import"./GraphicalItemClipPath-BOs3atUy.js";import"./SetGraphicalItem-NSh_bPoh.js";import"./useAnimationId-D72jT57q.js";import"./getRadiusAndStrokeWidthFromDot-BJgqpW3E.js";import"./ActiveShapeUtils-C8QFtNhq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DDAmNHcJ.js";import"./Trapezoid-CuHn90H-.js";import"./Sector-D91ncyh4.js";import"./Symbols-f5SXrcZl.js";import"./Curve-O5r-1d1a.js";import"./CartesianAxis-YVPJ9daY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-B5oQXnTT.js";import"./ChartSizeDimensions-1xcDn5yB.js";import"./OffsetShower-DmmXcLnJ.js";import"./PlotAreaShower-CpTy_FbM.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,at as default};
