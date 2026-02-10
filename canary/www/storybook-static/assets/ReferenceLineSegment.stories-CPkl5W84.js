import{e}from"./iframe-BtK7K3Kv.js";import{R as i}from"./arrayEqualityCheck-CFfqZo_0.js";import{C as a}from"./ComposedChart-B_mHOkev.js";import{C as p}from"./CartesianGrid-GHJ_f6DI.js";import{X as n}from"./XAxis-DGpvny6L.js";import{Y as s}from"./YAxis-CwLMlwVC.js";import{L as c}from"./Line-W3QkIe3i.js";import{R as d}from"./ReferenceLine-BAX0Yg_A.js";import{R as g}from"./RechartsHookInspector-D4JLTX2d.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DWyLZAa9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DGVCpdWj.js";import"./hooks-60Pk7U7P.js";import"./axisSelectors-DMzn6YDV.js";import"./zIndexSlice-m57chh8X.js";import"./CartesianChart-CuRdEYaC.js";import"./chartDataContext-BRTsTQpm.js";import"./CategoricalChart-peX_-ePN.js";import"./CartesianAxis-BOqlO8Q1.js";import"./Layer-DV1icpzr.js";import"./Text-BW-lGQnj.js";import"./DOMUtils-z6sJWHwI.js";import"./Label-DynPPCJ6.js";import"./ZIndexLayer-DaJzxTrT.js";import"./types-CVJb2MOT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BJV4SHfz.js";import"./ActivePoints-BKOnFX-a.js";import"./Dot-4a706hev.js";import"./RegisterGraphicalItemId-BuTwWOrx.js";import"./ErrorBarContext-CiGlk53m.js";import"./GraphicalItemClipPath-3JZrHeBE.js";import"./SetGraphicalItem-CC-hIiO2.js";import"./useAnimationId-FO0Tg1s_.js";import"./getRadiusAndStrokeWidthFromDot--FuVWYJV.js";import"./ActiveShapeUtils-DG-TGbIe.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D_NKn9vF.js";import"./Trapezoid-C4MEq2xn.js";import"./Sector-8dbuSlIN.js";import"./Symbols-DqB8iXHv.js";import"./Curve-yPyY_uXZ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CPKyuAeN.js";import"./ChartSizeDimensions-C_sOGjRQ.js";import"./OffsetShower-dtmi7EOu.js";import"./PlotAreaShower-Di55GjjN.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
