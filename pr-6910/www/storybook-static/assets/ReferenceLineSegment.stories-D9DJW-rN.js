import{e}from"./iframe-Qbvlqe9c.js";import{R as i}from"./arrayEqualityCheck-B3n_664E.js";import{C as a}from"./ComposedChart-dCvdXjW4.js";import{C as p}from"./CartesianGrid-BrR2o-p8.js";import{X as n}from"./XAxis-DvwXUl6_.js";import{Y as s}from"./YAxis-CbhDcywn.js";import{L as c}from"./Line-CETAi-Tq.js";import{R as d}from"./ReferenceLine-DNJssYEO.js";import{R as g}from"./RechartsHookInspector-Bcf65z8s.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-76Pg9xKV.js";import"./PolarUtils-1Zh54hEc.js";import"./RechartsWrapper-j0khHO2J.js";import"./hooks-C__9gfvB.js";import"./axisSelectors-DP3q5L3p.js";import"./zIndexSlice-Dd4fWTvl.js";import"./CartesianChart-BEe2ZeB9.js";import"./chartDataContext-meOOuMw1.js";import"./CategoricalChart-BN7dR1q_.js";import"./CartesianAxis-a9jFIi9h.js";import"./Layer-CGD9i9Tv.js";import"./Text-BhRNkj8s.js";import"./DOMUtils-D4R1mvUb.js";import"./Label-BjNpzDAS.js";import"./ZIndexLayer-BGnFu8Hz.js";import"./types-BIElRGEC.js";import"./ReactUtils-DDfXx9yL.js";import"./ActivePoints-Z50a9Y5S.js";import"./Dot-K6oNejLl.js";import"./RegisterGraphicalItemId-Bl4eT23s.js";import"./ErrorBarContext-BToEOD0T.js";import"./GraphicalItemClipPath-LG6KLgtm.js";import"./SetGraphicalItem-BGT_K21t.js";import"./useAnimationId-BMBkTPld.js";import"./getRadiusAndStrokeWidthFromDot-iWUSXSti.js";import"./ActiveShapeUtils-DIh0EQro.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dq-tt7hT.js";import"./Trapezoid-B2gFU9p-.js";import"./Sector-Byha0vVB.js";import"./Symbols-DUUTByO6.js";import"./Curve-viWUlKkP.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BFsVO8Up.js";import"./ChartSizeDimensions-DHXLFfdm.js";import"./OffsetShower-CcbpVL0P.js";import"./PlotAreaShower-Bw9dKf0L.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
