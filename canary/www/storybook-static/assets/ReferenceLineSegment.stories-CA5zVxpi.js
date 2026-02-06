import{e}from"./iframe-DxZX8v3W.js";import{R as i}from"./arrayEqualityCheck-CHFkqTV_.js";import{C as a}from"./ComposedChart-BGkEXwf1.js";import{C as p}from"./CartesianGrid-DQNeuEVT.js";import{X as n}from"./XAxis-DzPSb7qL.js";import{Y as s}from"./YAxis-CpMOxs2p.js";import{L as c}from"./Line-kMI0-8qe.js";import{R as d}from"./ReferenceLine-BFRJY_I0.js";import{R as g}from"./RechartsHookInspector-EozXGI-d.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DhuxpMgF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DMTy2N8_.js";import"./hooks-B7xKXdiJ.js";import"./axisSelectors-CsqEoZpJ.js";import"./zIndexSlice-DbH822fK.js";import"./CartesianChart-BGtowRh8.js";import"./chartDataContext-kn-jHXwi.js";import"./CategoricalChart-CLJuTuVW.js";import"./CartesianAxis-DPUMtDOy.js";import"./Layer-BPZWkKY5.js";import"./Text-BjDK3asE.js";import"./DOMUtils-BxXkT_Dg.js";import"./Label-DcVTU5jd.js";import"./ZIndexLayer-u2cA8wLh.js";import"./types-DXQoRjfG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BR0ZodR6.js";import"./ActivePoints-ChW3PNAb.js";import"./Dot-6gTSKkj_.js";import"./RegisterGraphicalItemId-DtMUd9c3.js";import"./ErrorBarContext-BbaI3C-C.js";import"./GraphicalItemClipPath-DHNbR-WC.js";import"./SetGraphicalItem-BXOgfpPM.js";import"./useAnimationId-DTZHXicx.js";import"./getRadiusAndStrokeWidthFromDot-9yl6HY0F.js";import"./ActiveShapeUtils-umUGRO3f.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ZKdZP-LA.js";import"./Trapezoid-B8lDUleJ.js";import"./Sector-C4RYsjmR.js";import"./Symbols-ByPpWVp2.js";import"./Curve-amoMOh-y.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-59kLrafc.js";import"./ChartSizeDimensions-DNmKalNs.js";import"./OffsetShower-Bf42ilrd.js";import"./PlotAreaShower-CjZ5fG5L.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
