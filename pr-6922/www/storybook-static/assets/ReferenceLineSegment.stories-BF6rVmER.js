import{e}from"./iframe-3ssOB91Q.js";import{R as i}from"./arrayEqualityCheck-RWElLsK2.js";import{C as a}from"./ComposedChart-4-taPps0.js";import{C as p}from"./CartesianGrid-r34ttTM3.js";import{X as n}from"./XAxis-B0PHajli.js";import{Y as s}from"./YAxis-CCiXb5zT.js";import{L as c}from"./Line-C4lbmCvW.js";import{R as d}from"./ReferenceLine-DUsZnIbs.js";import{R as g}from"./RechartsHookInspector-DHP-9GZN.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-ctxcgNcU.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-8idYzD5u.js";import"./hooks-6a0TNfIB.js";import"./axisSelectors-DTH02zf7.js";import"./zIndexSlice-ho1ylgk9.js";import"./CartesianChart-D-chxrPJ.js";import"./chartDataContext-CBnI5hri.js";import"./CategoricalChart-CW0qn3M9.js";import"./CartesianAxis-B8B5j-ea.js";import"./Layer-W17HINYn.js";import"./Text-BvProlO0.js";import"./DOMUtils-DJ-ugNhO.js";import"./Label-DzudoiWU.js";import"./ZIndexLayer-CTlKz5-T.js";import"./types-CfIL69ww.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DVrxVJVb.js";import"./ActivePoints-CGehM9Vx.js";import"./Dot-BXBhG_dq.js";import"./RegisterGraphicalItemId-K0GLMkuF.js";import"./ErrorBarContext-Btf7Lyk8.js";import"./GraphicalItemClipPath-BNmYXfJz.js";import"./SetGraphicalItem-D9Cn0Thc.js";import"./useAnimationId-C6CpCegT.js";import"./getRadiusAndStrokeWidthFromDot-NOrRJQ9f.js";import"./ActiveShapeUtils-D4XQIZp-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BrCnLm7V.js";import"./Trapezoid-bVA-uN3w.js";import"./Sector-2W0uOEF9.js";import"./Symbols-CXbAeeaq.js";import"./Curve-D5W7Bwp2.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Cewrc6A2.js";import"./ChartSizeDimensions-BSxBFCsp.js";import"./OffsetShower-BDSx3j6G.js";import"./PlotAreaShower-DLNjbvna.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
