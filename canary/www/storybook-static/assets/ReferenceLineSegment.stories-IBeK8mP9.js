import{e}from"./iframe-b3l0oylc.js";import{R as i}from"./arrayEqualityCheck-CjMmMQbn.js";import{C as a}from"./ComposedChart-Ci_ymdae.js";import{C as p}from"./CartesianGrid-BJVKZUb8.js";import{X as n}from"./XAxis-DQI4GC2q.js";import{Y as s}from"./YAxis-DBt_3tXp.js";import{L as c}from"./Line-wmhGAa8E.js";import{R as d}from"./ReferenceLine-BAw9gPRk.js";import{R as g}from"./RechartsHookInspector-XGSushi8.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DcvR48Du.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-IoQ4cwV3.js";import"./hooks-oM9vQQeZ.js";import"./axisSelectors-CzoiwyvX.js";import"./zIndexSlice-6dxWRD0w.js";import"./CartesianChart-Cua76ACG.js";import"./chartDataContext-L6gYrL26.js";import"./CategoricalChart-CbwsmCPP.js";import"./CartesianAxis-BaEBZn5E.js";import"./Layer-2yxRimi5.js";import"./Text-BgZlmGMw.js";import"./DOMUtils-CVqp0zn7.js";import"./Label-DllavO7s.js";import"./ZIndexLayer-CtStE837.js";import"./types-DcS7TQb1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BwdRCLdj.js";import"./ActivePoints-DgMTYwE1.js";import"./Dot-CRE9dNM4.js";import"./RegisterGraphicalItemId-oaPJX1wj.js";import"./ErrorBarContext-4m-euoOZ.js";import"./GraphicalItemClipPath-DZsikywZ.js";import"./SetGraphicalItem-DuxrODNH.js";import"./useAnimationId-DdymZr7z.js";import"./getRadiusAndStrokeWidthFromDot-BXhx89qn.js";import"./ActiveShapeUtils-S04EWH8U.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DDSw7OX0.js";import"./Trapezoid-DOQrObtz.js";import"./Sector-BhL684me.js";import"./Symbols-CncGFVbc.js";import"./Curve-1kQ3M0AJ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BKFod4yn.js";import"./ChartSizeDimensions-CUrkzphw.js";import"./OffsetShower-DDSZRjCY.js";import"./PlotAreaShower-BzpNRyRF.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
