import{e as t}from"./iframe-Cq-B9b4f.js";import{R as n}from"./arrayEqualityCheck-CUWGBawt.js";import{L as s}from"./LineChart-D-YqT4Ha.js";import{L as c}from"./Line-DmJynrg5.js";import{X as d}from"./XAxis-mkVuJ6ru.js";import{R as l}from"./RechartsHookInspector-TtpIOyZU.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DhciczEd.js";import"./immer-BjLhSv_k.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ChVZ2Oxv.js";import"./index-BFFNc0YW.js";import"./hooks-QDD28VjS.js";import"./axisSelectors-BgfEPtN4.js";import"./d3-scale-CWQsdIsg.js";import"./zIndexSlice-Di_upqq6.js";import"./renderedTicksSlice-Bgy9EKjI.js";import"./CartesianChart-Dc8WF-dR.js";import"./chartDataContext-0fGuXHUE.js";import"./CategoricalChart-ByiniKNN.js";import"./Layer-D-rMBlaW.js";import"./ReactUtils-DE2SzpPB.js";import"./Label-BzBxAWSn.js";import"./Text-rY40w2fD.js";import"./DOMUtils-06HVeAr7.js";import"./ZIndexLayer-DheZEBBb.js";import"./ActivePoints-d3GWU6BJ.js";import"./Dot-UnlO1r7U.js";import"./types--yHmHFNL.js";import"./RegisterGraphicalItemId-paQBjngI.js";import"./ErrorBarContext-DspuidON.js";import"./GraphicalItemClipPath-CioYfDga.js";import"./SetGraphicalItem-CTMfJU_s.js";import"./useAnimationId-DXcWRCnH.js";import"./getRadiusAndStrokeWidthFromDot-C1Vb4TNN.js";import"./ActiveShapeUtils-BlQ6Z5B2.js";import"./isPlainObject-uQm6Hr4Y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-6bO7r_4r.js";import"./Trapezoid-B2U15woU.js";import"./Sector-C1hvtgaN.js";import"./Symbols-cf93Ahow.js";import"./symbol-BzYV9rTp.js";import"./step-DUU-NJz1.js";import"./Curve-CYxX35BT.js";import"./CartesianAxis-DaBzYhAa.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-DJG8mPG-.js";import"./ChartSizeDimensions-BkgXq5jD.js";import"./OffsetShower-D2w7QLxq.js";import"./PlotAreaShower-CD-Amm5T.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
