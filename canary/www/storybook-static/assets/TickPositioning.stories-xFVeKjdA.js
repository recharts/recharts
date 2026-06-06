import{R as t}from"./iframe-DyLoEKVT.js";import{R as m}from"./zIndexSlice-BMJvLT6-.js";import{L as s}from"./LineChart-C_b7mVzM.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DRaTauJz.js";import{X as l}from"./XAxis-9OVyrDRG.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BagcJtG2.js";import"./index-ChIcT5we.js";import"./index-DlqbmUdM.js";import"./get-DowO2FG-.js";import"./resolveDefaultProps-v4--KFNE.js";import"./isWellBehavedNumber-DNtaqKPn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper--UzxIxEu.js";import"./index-CufWBdFA.js";import"./index-PISW76kq.js";import"./renderedTicksSlice-BqkZndXs.js";import"./axisSelectors-CnSKWHKt.js";import"./d3-scale-CTXcb0ZT.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BuXwJSrD.js";import"./chartDataContext-DJBEQzNo.js";import"./CategoricalChart-nR7o8SXq.js";import"./Layer-1PJWGF6B.js";import"./Curve-aK0jXQoR.js";import"./types-ChV1_7kb.js";import"./step-BI2jLazT.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DZ2CDn43.js";import"./Label-Bc99EiAM.js";import"./Text-DbHSmtym.js";import"./DOMUtils-DO9od7PA.js";import"./ZIndexLayer-DHFxHLUr.js";import"./useAnimationId-C3XlQNNz.js";import"./ActivePoints-Cgvb9XOf.js";import"./Dot-Cj91nRDm.js";import"./RegisterGraphicalItemId-CalLmt4D.js";import"./ErrorBarContext-CuSWRyRz.js";import"./GraphicalItemClipPath-B_O83OKV.js";import"./SetGraphicalItem-Ve1ljg4L.js";import"./getRadiusAndStrokeWidthFromDot-BLbyixQ6.js";import"./ActiveShapeUtils-DR5RhSUS.js";import"./CartesianAxis-DVRkpibw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const at=["TickPositioning"];export{r as TickPositioning,at as __namedExportsOrder,ot as default};
