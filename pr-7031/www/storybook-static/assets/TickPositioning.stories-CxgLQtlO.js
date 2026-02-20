import{e as t}from"./iframe-d3qCsCxk.js";import{R as m}from"./arrayEqualityCheck-BSeezrw4.js";import{L as s}from"./LineChart-B1hJuhZS.js";import{L as c}from"./Line-CpGJ1HTg.js";import{X as d}from"./XAxis-BmRFblia.js";import{R as l}from"./RechartsHookInspector-ILLh7APk.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BEotyltG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B3juZhR0.js";import"./hooks-BtAJA35U.js";import"./axisSelectors-dcntBxT_.js";import"./zIndexSlice-umaRj-LL.js";import"./renderedTicksSlice--Joe2iCZ.js";import"./CartesianChart-BmufPzla.js";import"./chartDataContext-DW0jkWxK.js";import"./CategoricalChart-0siU3dfK.js";import"./Layer-CUjYvDWI.js";import"./ReactUtils-DxKtCUtQ.js";import"./Label-oam-p3Cf.js";import"./Text-Bh5Zv3nu.js";import"./DOMUtils-ClX6mTKm.js";import"./ZIndexLayer-D3LUzJCs.js";import"./ActivePoints-2SOqbbwT.js";import"./Dot-BxRgbJKp.js";import"./types-B3TZRrDh.js";import"./RegisterGraphicalItemId-CAywyS_0.js";import"./ErrorBarContext-BMBoMP-k.js";import"./GraphicalItemClipPath-BCrb_h12.js";import"./SetGraphicalItem-CRxXrGVb.js";import"./useAnimationId-OmpdHa5n.js";import"./getRadiusAndStrokeWidthFromDot-BjqSPYty.js";import"./ActiveShapeUtils-Yg-0vCe1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D73JO-29.js";import"./Trapezoid-BSm40zBl.js";import"./Sector-VkuL4GRN.js";import"./Symbols-XJ3mO982.js";import"./Curve-D8rLd4C3.js";import"./CartesianAxis-CyPlzw3T.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-DStWVrKL.js";import"./ChartSizeDimensions-B6KXJ3cA.js";import"./OffsetShower-BqFAEUk2.js";import"./PlotAreaShower-CwAbREDh.js";const nt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const pt=["TickPositioning"];export{r as TickPositioning,pt as __namedExportsOrder,nt as default};
