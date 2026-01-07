import{e as t}from"./iframe-CjnSqbHY.js";import{R as s}from"./arrayEqualityCheck-Cu3uzYRG.js";import{L as m}from"./LineChart-CwnTd978.js";import{L as c}from"./Line-Cn7LoADd.js";import{X as d}from"./XAxis-BjLd7C2C.js";import{R as l}from"./RechartsHookInspector-Df5OjUd3.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B-Bnboba.js";import"./PolarUtils-Dtm6FADD.js";import"./RechartsWrapper-Bjy9O6Bl.js";import"./hooks-z5iYR9uK.js";import"./axisSelectors-2WFqeeny.js";import"./zIndexSlice-B31h325U.js";import"./CartesianChart-QvBm8Fl6.js";import"./chartDataContext-OrqrGnHW.js";import"./CategoricalChart-CVHNAiHm.js";import"./Layer-BPLY51e7.js";import"./ReactUtils-Bdj2Y15E.js";import"./Label-DvPPISHS.js";import"./Text-CLMmVwol.js";import"./DOMUtils-Bui7kyZ-.js";import"./ZIndexLayer-6i7cawcn.js";import"./ActivePoints-Djyh2ioT.js";import"./Dot-BiSTmROa.js";import"./types-BYGLnYta.js";import"./RegisterGraphicalItemId-B25edjY0.js";import"./ErrorBarContext-YKLWr-xE.js";import"./GraphicalItemClipPath-BH8EdR6E.js";import"./SetGraphicalItem-RCHMBw2A.js";import"./useAnimationId-BIU6gnQ_.js";import"./getRadiusAndStrokeWidthFromDot-DJkck7K5.js";import"./ActiveShapeUtils-B0wPh4Lu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DRbwIDD9.js";import"./Trapezoid-BpUw0ZK8.js";import"./Sector-CCKEyOJh.js";import"./Symbols-wzrVuNDj.js";import"./Curve-5ylBOp_W.js";import"./CartesianAxis-D2VxaDmK.js";import"./index-BmN97iZD.js";import"./ChartSizeDimensions-BYQzTjU5.js";import"./OffsetShower-BP7aiJM0.js";import"./PlotAreaShower-CvhWYGuu.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
