import{e}from"./iframe-BUAHB1JE.js";import{R as i}from"./arrayEqualityCheck-D5cvBvD0.js";import{C as a}from"./ComposedChart-nJQCUmgK.js";import{C as p}from"./CartesianGrid-kaY3iQec.js";import{X as n}from"./XAxis-DeVneqRd.js";import{Y as s}from"./YAxis-DerY_BUY.js";import{L as c}from"./Line-BMwtlPHX.js";import{R as d}from"./ReferenceLine-CjxaHI-j.js";import{R as g}from"./RechartsHookInspector-DyBVLxQ5.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DB3crruI.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-D3Kz3rBL.js";import"./hooks-CLHcqW-j.js";import"./axisSelectors-nwFqxBSg.js";import"./zIndexSlice-DtimrYBU.js";import"./CartesianChart-CykHEv8Z.js";import"./chartDataContext-CsNatWbQ.js";import"./CategoricalChart-CgjnwgmC.js";import"./CartesianAxis-Ne59jWj5.js";import"./Layer-Cm056lbD.js";import"./Text-Cz010pA5.js";import"./DOMUtils-xg92JkXT.js";import"./Label-DycKUeOS.js";import"./ZIndexLayer-CvBAZeUB.js";import"./types-ztb1_leN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-kUjnR9HA.js";import"./ActivePoints-pyP3ozvA.js";import"./Dot-BGsAxFXQ.js";import"./RegisterGraphicalItemId-Wzb-45_P.js";import"./ErrorBarContext-BPyiRwXa.js";import"./GraphicalItemClipPath-DAz0o25b.js";import"./SetGraphicalItem-jsgYVNOw.js";import"./useAnimationId-Dqqe1r9b.js";import"./getRadiusAndStrokeWidthFromDot-Dv5iWKAB.js";import"./ActiveShapeUtils-IOesA3uZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C5TZFuIg.js";import"./Trapezoid-DhqC00At.js";import"./Sector-ZEGPqrgm.js";import"./Symbols-B668NUUf.js";import"./Curve-U_sOEQqK.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-C8QR5MVL.js";import"./ChartSizeDimensions-DxM1dHTb.js";import"./OffsetShower-CLEQK-Rx.js";import"./PlotAreaShower-Xx92qV_c.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
