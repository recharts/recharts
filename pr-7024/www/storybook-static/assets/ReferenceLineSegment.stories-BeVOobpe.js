import{e}from"./iframe-BbZhTIjX.js";import{R as i}from"./arrayEqualityCheck-DkKqnDzt.js";import{C as a}from"./ComposedChart-DswvV8lx.js";import{C as p}from"./CartesianGrid-BPBxIaVq.js";import{X as n}from"./XAxis-C9xRC5JP.js";import{Y as s}from"./YAxis-ktUi3e4g.js";import{L as c}from"./Line-DA0p8sx2.js";import{R as d}from"./ReferenceLine-DUE11lF1.js";import{R as g}from"./RechartsHookInspector-BEtvb3d9.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DpK6kTo-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DNXfyTKD.js";import"./hooks-xGvQVXJu.js";import"./axisSelectors-tXY5A5QT.js";import"./zIndexSlice-Dz-zn5zm.js";import"./renderedTicksSlice-Bw2BSgf6.js";import"./CartesianChart-CjVvsiSP.js";import"./chartDataContext-DGmstLWk.js";import"./CategoricalChart-B-wga6Ud.js";import"./CartesianAxis-TJWR5-DY.js";import"./Layer-BRjxkTBT.js";import"./Text-DoKSXl81.js";import"./DOMUtils-BPmVZuXj.js";import"./Label-Be7TSIhI.js";import"./ZIndexLayer-C9gNEIfS.js";import"./types-BKBSpGfD.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-B2BAtUcS.js";import"./ActivePoints-C1EnRHYt.js";import"./Dot-oTf8G_NC.js";import"./RegisterGraphicalItemId-NnVsob8d.js";import"./ErrorBarContext-DomgNI41.js";import"./GraphicalItemClipPath-DCNpup2d.js";import"./SetGraphicalItem-yYMMJ8ci.js";import"./useAnimationId-DVyCRxxH.js";import"./getRadiusAndStrokeWidthFromDot-CULUnYYv.js";import"./ActiveShapeUtils-cpKe4lwt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-E9CHGVoE.js";import"./Trapezoid-abIioDDU.js";import"./Sector-yd-JjZP_.js";import"./Symbols-CAuboXnu.js";import"./Curve-DGXqFy3O.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BeB1Guy7.js";import"./ChartSizeDimensions-CT9Oervl.js";import"./OffsetShower-D-jScXPc.js";import"./PlotAreaShower-FMUTuolU.js";const ce={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const de=["Segment"];export{t as Segment,de as __namedExportsOrder,ce as default};
