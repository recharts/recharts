import{e}from"./iframe-Dw3q2J_C.js";import{R as i}from"./arrayEqualityCheck-CyZN96pQ.js";import{C as a}from"./ComposedChart-qdmZkWDY.js";import{C as p}from"./CartesianGrid-BHFrmdCe.js";import{X as n}from"./XAxis-BkGhyUaZ.js";import{Y as s}from"./YAxis-Rj4UToqR.js";import{L as c}from"./Line-c1IAKOzu.js";import{R as d}from"./ReferenceLine-_KKVdseC.js";import{R as g}from"./RechartsHookInspector-CjBXEdYk.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BpxWTFo7.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-BxCpSvqF.js";import"./hooks-CXCEGVm_.js";import"./axisSelectors-Bj4F6VGN.js";import"./zIndexSlice-CgOi6Kpf.js";import"./CartesianChart-BoeRzCq2.js";import"./chartDataContext-toYkGVnu.js";import"./CategoricalChart-D0JPHmvG.js";import"./CartesianAxis-Dx05xS85.js";import"./Layer-kgIv22jT.js";import"./Text-DlpZzH26.js";import"./DOMUtils-9f_FxyP7.js";import"./Label-BTeufvbK.js";import"./ZIndexLayer-QOZqstTD.js";import"./types-BJHbMGwM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CRr71kpZ.js";import"./ActivePoints-D4tj1Ft8.js";import"./Dot-U-LLWdez.js";import"./RegisterGraphicalItemId-CrW_A7sx.js";import"./ErrorBarContext-CH81KESR.js";import"./GraphicalItemClipPath-BL_BqIRg.js";import"./SetGraphicalItem-C0Kooi_K.js";import"./useAnimationId-BJQnqM8-.js";import"./getRadiusAndStrokeWidthFromDot-DUMZDB8N.js";import"./ActiveShapeUtils-CnPzR9TY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CdkJqkle.js";import"./Trapezoid-BYebN7Pj.js";import"./Sector-C3UDCS_F.js";import"./Symbols-CuhIBlUX.js";import"./Curve-DlYk4-Kk.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-cG5s137W.js";import"./ChartSizeDimensions-BOI7XDYO.js";import"./OffsetShower-shA12VSX.js";import"./PlotAreaShower-DksCyK2N.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
