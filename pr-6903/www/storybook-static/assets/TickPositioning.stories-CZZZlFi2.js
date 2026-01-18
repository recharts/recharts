import{e as t}from"./iframe-oKMzB0d-.js";import{R as s}from"./arrayEqualityCheck-Caoo2I2E.js";import{L as m}from"./LineChart-D9yrf0T2.js";import{L as c}from"./Line-Bwc4TWJK.js";import{X as d}from"./XAxis-DlRmKJ01.js";import{R as l}from"./RechartsHookInspector-BzEUDXeW.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BTiWYe8E.js";import"./PolarUtils-BvDSiGX_.js";import"./RechartsWrapper-CTDVW_mD.js";import"./hooks-CriE4jYz.js";import"./axisSelectors-igA0S6xv.js";import"./zIndexSlice-BjyYTZgT.js";import"./CartesianChart-CEC_RciI.js";import"./chartDataContext-CTkSsRq2.js";import"./CategoricalChart-CKuwRZ5o.js";import"./Layer-Drq4I3c8.js";import"./ReactUtils-BHQlFXLR.js";import"./Label-CUg786Ba.js";import"./Text-BAYt6EI9.js";import"./DOMUtils-xOASrBrw.js";import"./ZIndexLayer-pfpD2pdJ.js";import"./ActivePoints-B2gNLb__.js";import"./Dot-p7_Nmurg.js";import"./types-Bjx9mdsH.js";import"./RegisterGraphicalItemId-Bt6_4oI2.js";import"./ErrorBarContext-DSBHo_om.js";import"./GraphicalItemClipPath-AaekTZGq.js";import"./SetGraphicalItem-BmLbSZv4.js";import"./useAnimationId-D0v972Sk.js";import"./getRadiusAndStrokeWidthFromDot-CV18y5aL.js";import"./ActiveShapeUtils-r0uOmI_9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CfUKIL1Q.js";import"./Trapezoid-D0zfblCG.js";import"./Sector-DAIlPrp3.js";import"./Symbols-mKBUz55k.js";import"./Curve-C8ob2FQq.js";import"./CartesianAxis-D9OPLMCI.js";import"./index-Bw063qfE.js";import"./ChartSizeDimensions-BmK2dJEG.js";import"./OffsetShower-B2D8CtyY.js";import"./PlotAreaShower-DVDhbnca.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const at=["TickPositioning"];export{r as TickPositioning,at as __namedExportsOrder,ot as default};
