import{e as t}from"./iframe-DVKGYMpC.js";import{R as n}from"./arrayEqualityCheck-C3dMZwVz.js";import{L as s}from"./LineChart-Dna1MShg.js";import{L as c}from"./Line-DM6-icql.js";import{X as d}from"./XAxis-WP1B-t-F.js";import{R as l}from"./RechartsHookInspector-BRvRKLe7.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-m52n9a41.js";import"./immer-mdmEhKTL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-VcgGm0Mh.js";import"./index-XfA7Rruh.js";import"./hooks-KmYc7udA.js";import"./axisSelectors-C6zo9Ho5.js";import"./d3-scale-CKFP8_y_.js";import"./zIndexSlice-BCKi_K05.js";import"./renderedTicksSlice-DNTEgzlA.js";import"./CartesianChart-20x7b3cD.js";import"./chartDataContext-DkfeKHKL.js";import"./CategoricalChart-lWTiO2LF.js";import"./Layer-Cbzg46jm.js";import"./ReactUtils-2VJeHFxo.js";import"./Label-CgM8GhgJ.js";import"./Text-D8j9jByl.js";import"./DOMUtils-Cq0pXhle.js";import"./ZIndexLayer-D9yE2b_P.js";import"./ActivePoints-D-CneBw2.js";import"./Dot-Du5UEN4g.js";import"./types-D5_2czw6.js";import"./RegisterGraphicalItemId-DFvy2IAN.js";import"./ErrorBarContext-D0RCHEkz.js";import"./GraphicalItemClipPath-Dbga3z9T.js";import"./SetGraphicalItem-Dd-xAAAu.js";import"./useAnimationId-BLC1f5rw.js";import"./getRadiusAndStrokeWidthFromDot-DUAFpNa5.js";import"./ActiveShapeUtils-DbiEWzYq.js";import"./isPlainObject-JLSnB0Dw.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BA2b7ur5.js";import"./Trapezoid-Byuc0lU9.js";import"./Sector-BMT_0fK5.js";import"./Symbols-CUdlDqJ5.js";import"./symbol-BuAcBDh_.js";import"./step-BPnB-OiB.js";import"./Curve-DFpbuCXU.js";import"./CartesianAxis-hM284rmA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-DH-aWMW3.js";import"./ChartSizeDimensions-DAFzj3WJ.js";import"./OffsetShower-lcp6F4HW.js";import"./PlotAreaShower-BUpHI0ia.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
