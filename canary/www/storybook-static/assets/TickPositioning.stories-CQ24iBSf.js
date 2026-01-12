import{e as t}from"./iframe-CsBbFWpF.js";import{R as s}from"./arrayEqualityCheck-jcy1YLjA.js";import{L as m}from"./LineChart-DMyxn1iz.js";import{L as c}from"./Line-8NeaciPU.js";import{X as d}from"./XAxis-n00lD-aM.js";import{R as l}from"./RechartsHookInspector-Ce0vrec4.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Di-bRFCz.js";import"./PolarUtils-DudrDAyL.js";import"./RechartsWrapper-M1yD5X0u.js";import"./hooks-51EGl8Fk.js";import"./axisSelectors-C8uaVJja.js";import"./zIndexSlice-CXgHVliP.js";import"./CartesianChart-DlU5PpKX.js";import"./chartDataContext-C4MvfWzW.js";import"./CategoricalChart-BoRcIHlb.js";import"./Layer-B5pUJ7d6.js";import"./ReactUtils-B73M-NEp.js";import"./Label-vO0tFBMQ.js";import"./Text-CXOTFpC0.js";import"./DOMUtils-DCk3Ra7U.js";import"./ZIndexLayer-DoHUAHyH.js";import"./ActivePoints-BtxRiwR-.js";import"./Dot-pAY9JTIt.js";import"./types-DZkoNYJ-.js";import"./RegisterGraphicalItemId-DEKbhPBq.js";import"./ErrorBarContext-UJH6PLVM.js";import"./GraphicalItemClipPath-BGGubKyF.js";import"./SetGraphicalItem-D-yEZ2eQ.js";import"./useAnimationId-DQyCpAJd.js";import"./getRadiusAndStrokeWidthFromDot-Dzk2HrW3.js";import"./ActiveShapeUtils-Cp7opGs8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CRfJXidx.js";import"./Trapezoid-CqG9LomH.js";import"./Sector-DZ4anR9n.js";import"./Symbols-GutgQl5i.js";import"./Curve-BV6casI8.js";import"./CartesianAxis-DTyJ3mcB.js";import"./index-30ex7hAw.js";import"./ChartSizeDimensions-BxqurYlH.js";import"./OffsetShower-Cz9yhNvC.js";import"./PlotAreaShower-CYw1ViUZ.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
