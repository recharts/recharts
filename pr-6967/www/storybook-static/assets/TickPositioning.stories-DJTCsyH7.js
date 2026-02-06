import{e as t}from"./iframe-C-p_RB-q.js";import{R as s}from"./arrayEqualityCheck-B-MvrmN7.js";import{L as m}from"./LineChart-Dvl5yZA_.js";import{L as c}from"./Line-f8-Tfw2u.js";import{X as d}from"./XAxis-C08WqI39.js";import{R as l}from"./RechartsHookInspector-A7vZopTv.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BfiJbh6P.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DIdR0t3A.js";import"./hooks-DG7RHIxl.js";import"./axisSelectors-P0AOwwEl.js";import"./zIndexSlice-5lbCpu3W.js";import"./CartesianChart-DeBYB_B4.js";import"./chartDataContext-CVzSSW0I.js";import"./CategoricalChart-yUclNHQf.js";import"./Layer-C7f6suDu.js";import"./ReactUtils-Dp-34n25.js";import"./Label-C5MK-SLm.js";import"./Text-DfkyYgyy.js";import"./DOMUtils-BepXqo9m.js";import"./ZIndexLayer-DCWgaX-H.js";import"./ActivePoints-CNFNRQXL.js";import"./Dot-D0Fu4E1o.js";import"./types-GK0667Eh.js";import"./RegisterGraphicalItemId-x_swwYN6.js";import"./ErrorBarContext-DqfvC5Ba.js";import"./GraphicalItemClipPath-DWus76r9.js";import"./SetGraphicalItem-B3lQSLw7.js";import"./useAnimationId-DU1HvgwT.js";import"./getRadiusAndStrokeWidthFromDot-6LmPg7Vv.js";import"./ActiveShapeUtils-CQt1QMv8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C3AEn-NX.js";import"./Trapezoid-3HlUouXc.js";import"./Sector-Dx36qTvv.js";import"./Symbols-pu40Z5kC.js";import"./Curve-p-GL7vDw.js";import"./CartesianAxis-B6zbzI9s.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-wD3bNdwk.js";import"./ChartSizeDimensions-CiN-UjJt.js";import"./OffsetShower-zEoXuM_S.js";import"./PlotAreaShower-Di2aU-hi.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
