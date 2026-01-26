import{e}from"./iframe-PyjOQzGK.js";import{R as i}from"./arrayEqualityCheck-_dHyT-RZ.js";import{C as a}from"./ComposedChart-BVUASlqQ.js";import{C as p}from"./CartesianGrid-CLO--QcK.js";import{X as n}from"./XAxis-P49Iul1Y.js";import{Y as s}from"./YAxis-B6zPQ9mM.js";import{L as c}from"./Line-DIlKf69S.js";import{R as d}from"./ReferenceLine-CZIBDczk.js";import{R as g}from"./RechartsHookInspector-D26E9kzM.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-uwFRJaRu.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-C_qiBOfF.js";import"./hooks-Lbs_q-DW.js";import"./axisSelectors-BsdiAjZp.js";import"./zIndexSlice-B8KtXzX9.js";import"./CartesianChart-DdiktEiW.js";import"./chartDataContext--xq0wDov.js";import"./CategoricalChart-CggXLcLb.js";import"./CartesianAxis-DYXf8O7N.js";import"./Layer-CHnOmiRY.js";import"./Text-BMHdefpA.js";import"./DOMUtils-InBL681b.js";import"./Label-CvwrqBXQ.js";import"./ZIndexLayer-DUzVAEAH.js";import"./types-UMLEboQ_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-ChAGskY_.js";import"./ActivePoints-D6OmLLQF.js";import"./Dot-tggScJ5V.js";import"./RegisterGraphicalItemId-BTJ5pHFA.js";import"./ErrorBarContext-D5I_WxoZ.js";import"./GraphicalItemClipPath-Dnx8SYU_.js";import"./SetGraphicalItem-CfBIbOKf.js";import"./useAnimationId-DVpAz_Js.js";import"./getRadiusAndStrokeWidthFromDot-BrIH8QFd.js";import"./ActiveShapeUtils-ChuhRPpg.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BJG4_O5K.js";import"./Trapezoid-DucQEHEf.js";import"./Sector-hPc79hJa.js";import"./Symbols-Jat4kELE.js";import"./Curve-BookXfP4.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-uJDoNHNu.js";import"./ChartSizeDimensions-BahwbRey.js";import"./OffsetShower-C2jS-DP9.js";import"./PlotAreaShower-CwTougAK.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
