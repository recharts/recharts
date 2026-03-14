import{e}from"./iframe-DvuZWOTb.js";import{R as i}from"./arrayEqualityCheck-BBARzIRr.js";import{C as p}from"./ComposedChart-OEf0xrLY.js";import{C as a}from"./CartesianGrid-CDq5TP-K.js";import{X as n}from"./XAxis-DowQdhQL.js";import{Y as s}from"./YAxis-DIT5pVYc.js";import{L as c}from"./Line-Cq6zsUpN.js";import{R as d}from"./ReferenceLine-2pxm6xtR.js";import{R as g}from"./RechartsHookInspector-Cl4EGw9D.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BNfHMc3-.js";import"./immer-BHFkM9Mg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C8dH0HHg.js";import"./index-eU4Ehn4B.js";import"./hooks-43hsLZ0P.js";import"./axisSelectors-BnR_Cfp_.js";import"./d3-scale-BdRaduXu.js";import"./zIndexSlice-BABNjTcN.js";import"./renderedTicksSlice-BAodcevd.js";import"./CartesianChart-CnMFmEeq.js";import"./chartDataContext-BXYQ6GMf.js";import"./CategoricalChart-CPAqYbsf.js";import"./CartesianAxis-Dm47pK4a.js";import"./Layer-D0S2CDqI.js";import"./Text-CU_3ER1b.js";import"./DOMUtils-BxxJ-Wkd.js";import"./Label-CD05nnQG.js";import"./ZIndexLayer-DRMyD2Rp.js";import"./types-BkPBAcGb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-jSjmTH71.js";import"./ActivePoints-DPmz5x-b.js";import"./Dot-DYn7MakE.js";import"./RegisterGraphicalItemId-BH6ssqoP.js";import"./ErrorBarContext-Dt0Jqr2E.js";import"./GraphicalItemClipPath-DmmSLEF_.js";import"./SetGraphicalItem-Dkbl2A_A.js";import"./useAnimationId-oxTUA15o.js";import"./getRadiusAndStrokeWidthFromDot-DrFKHZSY.js";import"./ActiveShapeUtils-0RU40zhg.js";import"./isPlainObject-BJJzFz0o.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CpIWh0L4.js";import"./Trapezoid-BCrvbeh4.js";import"./Sector-Uwlbv7Cd.js";import"./Symbols-4yD0ZZ3H.js";import"./symbol-tCdMof47.js";import"./step-Cug99buo.js";import"./Curve-CApkeTVu.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CGCMEZS5.js";import"./ChartSizeDimensions-E7tryntV.js";import"./OffsetShower-BUvvOC4J.js";import"./PlotAreaShower-iq9hWQZ1.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ye=["Segment"];export{t as Segment,ye as __namedExportsOrder,Re as default};
