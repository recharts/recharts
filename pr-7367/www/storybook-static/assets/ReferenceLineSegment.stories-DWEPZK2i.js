import{e}from"./iframe-Dnf4AlLR.js";import{g as i}from"./arrayEqualityCheck-UrcKYzS0.js";import{C as a}from"./ComposedChart-B93d8mqD.js";import{p}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid-DZQbzxdE.js";import{X as s}from"./XAxis-DLWfACul.js";import{Y as c}from"./YAxis-BV2CBSac.js";import{L as d}from"./Line-rMlsh7WZ.js";import{R as g}from"./ReferenceLine-BjKx3Kwz.js";import{R as f}from"./RechartsHookInspector-OLBh2oCI.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BqkLROOU.js";import"./immer-DA9BPlnc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DAmqBWgG.js";import"./index-D1BDiruz.js";import"./hooks-ByMCROpL.js";import"./axisSelectors-VRydpu3s.js";import"./d3-scale-Cb8N1VfB.js";import"./zIndexSlice-BgXAgJL3.js";import"./renderedTicksSlice-CTDdadeF.js";import"./CartesianChart-CTkTDluY.js";import"./chartDataContext-D6OzkCBP.js";import"./CategoricalChart-DESZNtyF.js";import"./CartesianAxis-DIOPUoh9.js";import"./Layer-V8ImnEZB.js";import"./Text-BH203wB1.js";import"./DOMUtils-DeOIiqB-.js";import"./Label-B_crGnD8.js";import"./ZIndexLayer-DOX2ldNu.js";import"./types-DHYQQjs9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-Ca-XrmBQ.js";import"./step-BhFSNpdr.js";import"./path-DyVhHtw_.js";import"./ReactUtils-C1SR2qhB.js";import"./ActivePoints-DtjEEYK2.js";import"./Dot-2Bj9Ykgw.js";import"./RegisterGraphicalItemId-26wIU3J0.js";import"./ErrorBarContext-DnPqunZ7.js";import"./GraphicalItemClipPath-u2mX7OG7.js";import"./SetGraphicalItem-B1dso5Ln.js";import"./useAnimationId-Bo3VYg8c.js";import"./getRadiusAndStrokeWidthFromDot-DUWC1cP5.js";import"./ActiveShapeUtils-D2qQQTmk.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DhYdY39W.js";import"./ChartSizeDimensions-xg99Q5LG.js";import"./OffsetShower-CsmBnO90.js";import"./PlotAreaShower-CowJNvBY.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ge=["Segment"];export{t as Segment,ge as __namedExportsOrder,de as default};
