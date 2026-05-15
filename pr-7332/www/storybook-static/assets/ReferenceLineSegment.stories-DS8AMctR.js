import{e}from"./iframe-BwSUf2T9.js";import{R as i}from"./arrayEqualityCheck-kNUesU9n.js";import{C as p}from"./ComposedChart-DIEhpHjl.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-TC7LM2zJ.js";import{X as s}from"./XAxis-DMsA7lKM.js";import{Y as c}from"./YAxis-CuVkr_B5.js";import{L as d}from"./Line-BN5F3gve.js";import{R as g}from"./ReferenceLine-DHqXPgH-.js";import{R as f}from"./RechartsHookInspector-DKqzdAWN.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CvrFLXNt.js";import"./immer-7Mb6ATLS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-4BCl0_T5.js";import"./index-DweiLrJJ.js";import"./hooks-DWJz6m6D.js";import"./axisSelectors-BxFZbnk8.js";import"./d3-scale-4uUuwoJk.js";import"./zIndexSlice-CtGAVWci.js";import"./renderedTicksSlice-BDQYkSRg.js";import"./CartesianChart-Bob7JQC-.js";import"./chartDataContext-DGesBm7c.js";import"./CategoricalChart-DQIJaSSS.js";import"./CartesianAxis-D9SaV3-s.js";import"./Layer-CG8DX7G3.js";import"./Text-BIBt_YS0.js";import"./DOMUtils-DuReS6JS.js";import"./Label-cBW6O7Up.js";import"./ZIndexLayer-Bv5glbFY.js";import"./types-CNlhQ7_N.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BlFNJVa6.js";import"./ActivePoints-dru_eoBO.js";import"./Dot-CW3ALvSp.js";import"./RegisterGraphicalItemId-fD1_o_b6.js";import"./ErrorBarContext-BaQDv8aw.js";import"./GraphicalItemClipPath-bwNzittR.js";import"./SetGraphicalItem-DlbF6pEY.js";import"./useAnimationId-DY4wSWRx.js";import"./getRadiusAndStrokeWidthFromDot-DGBZLmVX.js";import"./ActiveShapeUtils-N1muSzDi.js";import"./isPlainObject-BZM5eFQe.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CW7YI0Bu.js";import"./Trapezoid-BeLgkWe2.js";import"./Sector-D_JRIQS4.js";import"./Symbols-CCCMBfqC.js";import"./symbol-Cn5r8HhL.js";import"./step-CwM1BVfC.js";import"./Curve-DXAcp3xR.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D71go6ze.js";import"./ChartSizeDimensions-DuDQVVyz.js";import"./OffsetShower-3pww61PI.js";import"./PlotAreaShower-CkcQ7s4a.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
