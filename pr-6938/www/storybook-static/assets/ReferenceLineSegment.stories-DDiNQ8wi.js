import{e}from"./iframe-DsOUfprP.js";import{R as i}from"./arrayEqualityCheck-DjO11PbP.js";import{C as a}from"./ComposedChart-bIhTAvLw.js";import{C as p}from"./CartesianGrid-CE8LIB2Q.js";import{X as n}from"./XAxis-CfXuJc3U.js";import{Y as s}from"./YAxis-hF6Y_Nk5.js";import{L as c}from"./Line-Bsatc-QO.js";import{R as d}from"./ReferenceLine-BX7ZJqnk.js";import{R as g}from"./RechartsHookInspector-mhd3rbsm.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-ZmhcaTjs.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-DwZNGVuW.js";import"./hooks-wPJ0hpZq.js";import"./axisSelectors-CJQMQFai.js";import"./zIndexSlice-Dgi_woyo.js";import"./CartesianChart-BHRGlbKq.js";import"./chartDataContext-Dq9n1Njf.js";import"./CategoricalChart-BNNYxF9g.js";import"./CartesianAxis-Cr7pmBhV.js";import"./Layer-LWw9M75d.js";import"./Text-D4hbrhbx.js";import"./DOMUtils-C9zx0qvq.js";import"./Label-CbeoYjYN.js";import"./ZIndexLayer-kg9R7P8d.js";import"./types-PuShQX9K.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CwDP136p.js";import"./ActivePoints-D2olhcFn.js";import"./Dot-DDC52ur4.js";import"./RegisterGraphicalItemId-BjXMbvNS.js";import"./ErrorBarContext-D6eG4SLo.js";import"./GraphicalItemClipPath-DG39ifF4.js";import"./SetGraphicalItem-CQYRXGzG.js";import"./useAnimationId-zJAyy6w7.js";import"./getRadiusAndStrokeWidthFromDot-4V8YrcAz.js";import"./ActiveShapeUtils-CdiCAAYX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DqV75pSw.js";import"./Trapezoid-tgNCAV59.js";import"./Sector-ClMrTgKg.js";import"./Symbols-DhTE1eBy.js";import"./Curve-DNHLMjMe.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-G8W79pF2.js";import"./ChartSizeDimensions-CtzLecLz.js";import"./OffsetShower-CmgUZqHD.js";import"./PlotAreaShower-Da3_E1UK.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
