import{e}from"./iframe-DKKmvtM4.js";import{R as i}from"./arrayEqualityCheck-BH7M1_Mo.js";import{C as a}from"./ComposedChart-DEbE_DRg.js";import{C as p}from"./CartesianGrid-C2yYFyNz.js";import{X as n}from"./XAxis-D0l8_bF1.js";import{Y as s}from"./YAxis-opqB1HJ5.js";import{L as c}from"./Line-CXcs_8eO.js";import{R as d}from"./ReferenceLine-B_QB_f7C.js";import{R as g}from"./RechartsHookInspector-_f5C5MnG.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BKSvQ-CI.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-DSOfgqQ4.js";import"./hooks-CAZEb-K2.js";import"./axisSelectors-BwBIfn7P.js";import"./zIndexSlice-AjUFaEiP.js";import"./CartesianChart-DhY9l1Jf.js";import"./chartDataContext-C3SlyDgH.js";import"./CategoricalChart-BpOJCian.js";import"./CartesianAxis-BfEn85oF.js";import"./Layer-CRV4337m.js";import"./Text-sKIHJABx.js";import"./DOMUtils-CGnu9ifx.js";import"./Label-Da19cvil.js";import"./ZIndexLayer-ub3Xu4w-.js";import"./types-Bj4-1oYY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CYxP7B05.js";import"./ActivePoints-C4GM9BP6.js";import"./Dot-Mxkn0j7-.js";import"./RegisterGraphicalItemId-D_mkL-K8.js";import"./ErrorBarContext-BUSUJFaK.js";import"./GraphicalItemClipPath-BPF3OyQO.js";import"./SetGraphicalItem-DxgYEhry.js";import"./useAnimationId-Hx06RWvS.js";import"./getRadiusAndStrokeWidthFromDot-D2gJ4jd4.js";import"./ActiveShapeUtils-czniNIT7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B6ULbvfC.js";import"./Trapezoid-RWF7Vajg.js";import"./Sector-Dn7O6oob.js";import"./Symbols-CMo2qdsV.js";import"./Curve-Cf01ES6k.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-COzuImjz.js";import"./ChartSizeDimensions-C-W9gvmn.js";import"./OffsetShower-BXtHvm8O.js";import"./PlotAreaShower-CYWF0naR.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
