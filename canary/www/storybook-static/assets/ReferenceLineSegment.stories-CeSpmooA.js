import{e}from"./iframe-qFyPNvi_.js";import{R as i}from"./arrayEqualityCheck-BR44KOOG.js";import{C as a}from"./ComposedChart-ANDNIb_y.js";import{C as p}from"./CartesianGrid-8Lbkprhq.js";import{X as n}from"./XAxis-B5Ueyu7e.js";import{Y as s}from"./YAxis-B1s9pj0r.js";import{L as c}from"./Line-uOvaDpg7.js";import{R as d}from"./ReferenceLine-6hq-EHmP.js";import{R as g}from"./RechartsHookInspector-Ce3qLbRt.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CiVGu3Bt.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-DM4_tnRN.js";import"./hooks-aCDbeiPX.js";import"./axisSelectors-De9afnke.js";import"./zIndexSlice-yXhSr7sB.js";import"./CartesianChart-DplX7WDC.js";import"./chartDataContext-byZU3wA9.js";import"./CategoricalChart-Bg7JUw0R.js";import"./CartesianAxis-BrVa5ao-.js";import"./Layer-B9wfXqHf.js";import"./Text-icE1XF3t.js";import"./DOMUtils-EYrslgiu.js";import"./Label-CaGvlJzM.js";import"./ZIndexLayer-B3rHEP_M.js";import"./types-BhYGGyZO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Dn42083y.js";import"./ActivePoints-B2Q4-VFp.js";import"./Dot-BYbcpD57.js";import"./RegisterGraphicalItemId-Dwao3Q82.js";import"./ErrorBarContext-tV2jexXK.js";import"./GraphicalItemClipPath-SzdiLGTP.js";import"./SetGraphicalItem-C4lKL51b.js";import"./useAnimationId-CBoODHVq.js";import"./getRadiusAndStrokeWidthFromDot-CpZPzij5.js";import"./ActiveShapeUtils-m1fmtbZZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C4WR-Qi1.js";import"./Trapezoid-hMqWhzEj.js";import"./Sector-CLe_yWi6.js";import"./Symbols-CPIOcRRv.js";import"./Curve-Bf-6f0us.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CxM5gQIi.js";import"./ChartSizeDimensions-QfvN_Ah7.js";import"./OffsetShower-BUMougLk.js";import"./PlotAreaShower-CjC9fWZt.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
