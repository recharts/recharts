import{e as t}from"./iframe-BDEQfIlb.js";import{R as s}from"./arrayEqualityCheck-BA5tHTkl.js";import{L as m}from"./LineChart-953LT7xs.js";import{L as c}from"./Line-CL2F8gdZ.js";import{X as d}from"./XAxis-NhsKtlV2.js";import{R as l}from"./RechartsHookInspector-BP4qljDX.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D0yWPBKj.js";import"./PolarUtils-KAlgtJ9T.js";import"./RechartsWrapper-CST4_BZP.js";import"./hooks-Cc5861FD.js";import"./axisSelectors-W9GqkCkL.js";import"./zIndexSlice-B88C6q2R.js";import"./CartesianChart-Cqd8BAy6.js";import"./chartDataContext-BX7wQqVg.js";import"./CategoricalChart-BAadDSZ5.js";import"./Layer-Con5T55J.js";import"./ReactUtils-B2Wxyi5A.js";import"./Label-B9k6RWTG.js";import"./Text-9oQB2ulB.js";import"./DOMUtils-C_B6oJip.js";import"./ZIndexLayer-CzQ7dqjv.js";import"./ActivePoints-_KCIb0BH.js";import"./Dot-CuzOurFG.js";import"./types-tr7QhDo_.js";import"./RegisterGraphicalItemId-B-_vEcYf.js";import"./ErrorBarContext-BVoK2OG_.js";import"./GraphicalItemClipPath-Cxm1A7e8.js";import"./SetGraphicalItem-mM5uupNM.js";import"./useAnimationId-fPMh2rE3.js";import"./getRadiusAndStrokeWidthFromDot-CeQbAwGD.js";import"./ActiveShapeUtils-DSG0DNjO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DZIbf3UH.js";import"./Trapezoid-D-MMn83p.js";import"./Sector-CDYiU8tv.js";import"./Symbols-CIf3O2Az.js";import"./Curve-apm-ZytV.js";import"./CartesianAxis-Dj71nMX3.js";import"./index-D0u2n02A.js";import"./ChartSizeDimensions-DKCYbGH7.js";import"./OffsetShower-BiVSgjK5.js";import"./PlotAreaShower-D2oOPDsU.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
