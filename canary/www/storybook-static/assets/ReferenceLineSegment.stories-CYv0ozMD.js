import{e}from"./iframe-B49GSwh0.js";import{R as i}from"./arrayEqualityCheck-DINBFxv3.js";import{C as a}from"./ComposedChart-DRfqwsU9.js";import{C as p}from"./CartesianGrid-C0HJQEi1.js";import{X as n}from"./XAxis-D-J-5rSI.js";import{Y as s}from"./YAxis--1-yNCnR.js";import{L as c}from"./Line-Cr1GgxdN.js";import{R as d}from"./ReferenceLine-Bbhs8YsO.js";import{R as g}from"./RechartsHookInspector-OdbWm_9I.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C-joITAz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-csJjzcSq.js";import"./hooks--sxETzV1.js";import"./axisSelectors-CUIhtG5P.js";import"./zIndexSlice-BRDipK6V.js";import"./CartesianChart-CCaI-Ryf.js";import"./chartDataContext-Bk-Ja4C1.js";import"./CategoricalChart-B5pRHHkW.js";import"./CartesianAxis-hdd-vl6G.js";import"./Layer-D1N02uqa.js";import"./Text-gOylDML8.js";import"./DOMUtils-CT05d_hW.js";import"./Label-CpKUDdzk.js";import"./ZIndexLayer-BDRmqb48.js";import"./types-OGa7TdGT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-yuOGi8sn.js";import"./ActivePoints-DAZjB2zT.js";import"./Dot-Dh4m0OXw.js";import"./RegisterGraphicalItemId-DpeQt7zq.js";import"./ErrorBarContext-Kb4FINZU.js";import"./GraphicalItemClipPath-DFKAd39R.js";import"./SetGraphicalItem-CkvQT2hd.js";import"./useAnimationId-CWbWu1ju.js";import"./getRadiusAndStrokeWidthFromDot-CDrV5QBb.js";import"./ActiveShapeUtils-JgGGelTB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CdQI0GjN.js";import"./Trapezoid-BEs5OYZ_.js";import"./Sector-CcMeAO1d.js";import"./Symbols-BhCWiDph.js";import"./Curve-D2h7ncG8.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DmOyJeTl.js";import"./ChartSizeDimensions-CBThhMTI.js";import"./OffsetShower-Cs62sl11.js";import"./PlotAreaShower-DCgwyzvC.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
