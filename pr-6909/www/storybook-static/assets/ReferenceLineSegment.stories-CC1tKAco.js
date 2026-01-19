import{e}from"./iframe-DvdxI6dC.js";import{R as i}from"./arrayEqualityCheck-DXUAObl0.js";import{C as a}from"./ComposedChart-YdiELtKV.js";import{C as p}from"./CartesianGrid-DGiABNyR.js";import{X as n}from"./XAxis-DJowtDGC.js";import{Y as s}from"./YAxis-Qq9BKQtQ.js";import{L as c}from"./Line-BdbR2_0r.js";import{R as d}from"./ReferenceLine-Hjyw-Y1x.js";import{R as g}from"./RechartsHookInspector-B_PrFdYH.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DH7aS_Cz.js";import"./PolarUtils-BY4iZmOi.js";import"./RechartsWrapper-BLfZDcOn.js";import"./hooks-DrOmiLx6.js";import"./axisSelectors-4CKM8Xol.js";import"./zIndexSlice-JVJMXPV9.js";import"./CartesianChart-CVXjEBNC.js";import"./chartDataContext-D9T_3Pfc.js";import"./CategoricalChart-Cx_ZKXH4.js";import"./CartesianAxis-CptW6PK3.js";import"./Layer-QQplstvs.js";import"./Text-DcBx6qw-.js";import"./DOMUtils-XQErKiOi.js";import"./Label-zPyZ6EuZ.js";import"./ZIndexLayer-Cnm_-Zvz.js";import"./types-8AXfgSIv.js";import"./ReactUtils-DqWjpCBi.js";import"./ActivePoints-BSveXf-N.js";import"./Dot-DSDPr-6Z.js";import"./RegisterGraphicalItemId-C1Pco6VZ.js";import"./ErrorBarContext-CaA_0bex.js";import"./GraphicalItemClipPath-DNpqs3F2.js";import"./SetGraphicalItem-B3AbHWGd.js";import"./useAnimationId-Dy3gyKDZ.js";import"./getRadiusAndStrokeWidthFromDot-BCM2WAWf.js";import"./ActiveShapeUtils-CgduogxH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CeQtanoQ.js";import"./Trapezoid-BNKT4KGX.js";import"./Sector-DWkTEbbM.js";import"./Symbols-BZsKNNtj.js";import"./Curve-BRTvsj-M.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CwHutVPN.js";import"./ChartSizeDimensions-Dk78WGJs.js";import"./OffsetShower-BP3lO1NK.js";import"./PlotAreaShower-DiTB-vHo.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
