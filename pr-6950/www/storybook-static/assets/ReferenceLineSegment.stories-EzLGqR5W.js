import{e}from"./iframe-CBadok3R.js";import{R as i}from"./arrayEqualityCheck-D8DZf4E7.js";import{C as a}from"./ComposedChart-Dc_UJsoP.js";import{C as p}from"./CartesianGrid-NQ1HzpRF.js";import{X as n}from"./XAxis-CuDJTYDf.js";import{Y as s}from"./YAxis-CkBODHFa.js";import{L as c}from"./Line-vL2LKnJQ.js";import{R as d}from"./ReferenceLine-CJJRfYms.js";import{R as g}from"./RechartsHookInspector-Ccr9vg9I.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DOVzV-iD.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-BOMW4Wfi.js";import"./hooks-CvcnYJr5.js";import"./axisSelectors-7aa3p4xy.js";import"./zIndexSlice-Cb0fYcD4.js";import"./CartesianChart-DhdNdBtI.js";import"./chartDataContext-PjfwFb0T.js";import"./CategoricalChart-DgHJ04hm.js";import"./CartesianAxis-BWCbP_kU.js";import"./Layer-CZpxdYtD.js";import"./Text-CvdY0hNo.js";import"./DOMUtils-DOxIp63n.js";import"./Label-B9arnFZu.js";import"./ZIndexLayer-gNsJWqo_.js";import"./types-D0Nc3U-x.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BQuPA_dW.js";import"./ActivePoints-C4zMx6Rr.js";import"./Dot-D8cjCII1.js";import"./RegisterGraphicalItemId-BOD2PtEe.js";import"./ErrorBarContext-DNzUHuOB.js";import"./GraphicalItemClipPath-BGNJr3YU.js";import"./SetGraphicalItem-tnjDANmy.js";import"./useAnimationId-DFBNL1tZ.js";import"./getRadiusAndStrokeWidthFromDot-B43QJ_Z5.js";import"./ActiveShapeUtils-ZvkivxeS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DyKJpDnd.js";import"./Trapezoid-BHZLmvdE.js";import"./Sector-hPIyOnR6.js";import"./Symbols-mEW1LXrD.js";import"./Curve-D-ytcwuR.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-AunjJ6Z9.js";import"./ChartSizeDimensions-rprNa-Kn.js";import"./OffsetShower-Dh3F56nH.js";import"./PlotAreaShower-CfQIUSEt.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
