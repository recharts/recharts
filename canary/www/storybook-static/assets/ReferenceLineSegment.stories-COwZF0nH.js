import{e}from"./iframe-BGOJmNjB.js";import{R as i}from"./arrayEqualityCheck-BjRvnt0s.js";import{C as a}from"./ComposedChart-DGq6XYiu.js";import{C as p}from"./CartesianGrid-CLjZO7hV.js";import{X as n}from"./XAxis-CH74Oy12.js";import{Y as s}from"./YAxis-BYgICbJJ.js";import{L as c}from"./Line-BD6OPy20.js";import{R as d}from"./ReferenceLine-DY9Me5ja.js";import{R as g}from"./RechartsHookInspector-Cgn96sot.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BSJBVX4C.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-h16g3EQQ.js";import"./hooks-Nz6DJ1YN.js";import"./axisSelectors-Lz_2OI8_.js";import"./zIndexSlice-DAfFf7yA.js";import"./CartesianChart-OgoW6u2Y.js";import"./chartDataContext-aYFPQGqf.js";import"./CategoricalChart-DgJaNq2v.js";import"./CartesianAxis-CTaqfxTH.js";import"./Layer-LxxzUP-k.js";import"./Text-BhvB3_o-.js";import"./DOMUtils-CB_Ew6lr.js";import"./Label-Bv9s524x.js";import"./ZIndexLayer-4QAOL5IQ.js";import"./types-DLAnyyDj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BB1AONhv.js";import"./ActivePoints-Cito15fk.js";import"./Dot-L7IF6gmL.js";import"./RegisterGraphicalItemId-BpPOmR2M.js";import"./ErrorBarContext-5jw4fggF.js";import"./GraphicalItemClipPath-CldBUZWH.js";import"./SetGraphicalItem-CMM_HPdn.js";import"./useAnimationId-G8K3lY41.js";import"./getRadiusAndStrokeWidthFromDot-haPIcnOU.js";import"./ActiveShapeUtils-DNGFFUmc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ChTFz8xc.js";import"./Trapezoid-DXqtA9Y7.js";import"./Sector-Bdq99Tgd.js";import"./Symbols-NLXHxAGu.js";import"./Curve-Bf5GHIVx.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CbiKP7W2.js";import"./ChartSizeDimensions-DlrFd0zO.js";import"./OffsetShower-CQ-BgPhh.js";import"./PlotAreaShower-C5FoW2lp.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ce=["Segment"];export{t as Segment,ce as __namedExportsOrder,se as default};
