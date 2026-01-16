import{e as t}from"./iframe-Daa7gVLq.js";import{R as s}from"./arrayEqualityCheck-DHiMbEr4.js";import{L as m}from"./LineChart-DeAHavZw.js";import{L as c}from"./Line-B5G8X7n4.js";import{X as d}from"./XAxis-9jKN-_DJ.js";import{R as l}from"./RechartsHookInspector-5CuZ5Ttw.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CqeH2zdA.js";import"./PolarUtils-BgeQKPj6.js";import"./RechartsWrapper-DHnB2RYt.js";import"./hooks-DRpX0LFg.js";import"./axisSelectors-BSy2Ei6Q.js";import"./zIndexSlice-DRH3Lnc3.js";import"./CartesianChart-D3r6q5qA.js";import"./chartDataContext-C9HoDYmp.js";import"./CategoricalChart-B6hlTMds.js";import"./Layer-CGvX8Aev.js";import"./ReactUtils-DBjM8e5X.js";import"./Label-Czm8SDG7.js";import"./Text-WZTWBxCY.js";import"./DOMUtils-CqCd1ysC.js";import"./ZIndexLayer-BpC0cLWO.js";import"./ActivePoints-CnyDSr4M.js";import"./Dot-DRRuIu69.js";import"./types-C4ZPTuLr.js";import"./RegisterGraphicalItemId-C9_vaDSC.js";import"./ErrorBarContext-C3qObGNC.js";import"./GraphicalItemClipPath-CdixPI_Q.js";import"./SetGraphicalItem-SUpveLj9.js";import"./useAnimationId-ahZSEp8i.js";import"./getRadiusAndStrokeWidthFromDot-DQjBSxKW.js";import"./ActiveShapeUtils-BKnbDBiu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DdCOnFsR.js";import"./Trapezoid-BpmoHtq5.js";import"./Sector-BNry3-1y.js";import"./Symbols-Ct_d7yT0.js";import"./Curve-CWMRaKtl.js";import"./CartesianAxis-BVtnbRV6.js";import"./index-hu5OYDiu.js";import"./ChartSizeDimensions-b43WqGvd.js";import"./OffsetShower-11IB6J7X.js";import"./PlotAreaShower-B0b4w-E6.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
