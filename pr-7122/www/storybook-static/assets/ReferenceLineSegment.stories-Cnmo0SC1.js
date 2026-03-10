import{e}from"./iframe-DuNEY226.js";import{R as i}from"./arrayEqualityCheck-DDMqu3f1.js";import{C as p}from"./ComposedChart-DmWeIfHx.js";import{C as a}from"./CartesianGrid-BNTlTqSI.js";import{X as n}from"./XAxis-DdwDbuRS.js";import{Y as s}from"./YAxis-QXoWtC2j.js";import{L as c}from"./Line-DFK2_Aj2.js";import{R as d}from"./ReferenceLine-aLbkesQD.js";import{R as g}from"./RechartsHookInspector-CfHmmsr6.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C-2Byojj.js";import"./immer-BVAwiqUd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CEqZKjHf.js";import"./index-D7ubYLAP.js";import"./hooks-DB_oXYxy.js";import"./axisSelectors-DAR8t-c9.js";import"./d3-scale-CgGCPdr7.js";import"./zIndexSlice-CRDA7WbI.js";import"./renderedTicksSlice-BQwvsrpL.js";import"./CartesianChart-v-wDegKF.js";import"./chartDataContext-D8l2QHPQ.js";import"./CategoricalChart-C_g1w3w0.js";import"./CartesianAxis-BtkWVQbW.js";import"./Layer-D_n9WiuW.js";import"./Text-Dc6VXTKK.js";import"./DOMUtils-C-AY4UId.js";import"./Label-DKCGVJ9i.js";import"./ZIndexLayer-CZdiz2vD.js";import"./types-D9KOomKd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DRluxBO3.js";import"./ActivePoints-Ckq0cMoj.js";import"./Dot-Cr0aUliX.js";import"./RegisterGraphicalItemId-BWMdn6qI.js";import"./ErrorBarContext-CbQdG_x_.js";import"./GraphicalItemClipPath-CeHrZ0UX.js";import"./SetGraphicalItem-CfNV3Vyt.js";import"./useAnimationId-DN_Wn8rj.js";import"./getRadiusAndStrokeWidthFromDot-DIHVKzb4.js";import"./ActiveShapeUtils-BVtqisMr.js";import"./isPlainObject-DB3_XzF8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CkXHm1Ql.js";import"./Trapezoid-BXsyVm6P.js";import"./Sector-b9d-huvK.js";import"./Symbols-Dk3gQBwn.js";import"./symbol-4CsV8iHb.js";import"./step-CHzygN7O.js";import"./Curve-ipLw690D.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CE1COEz0.js";import"./ChartSizeDimensions-CTe7q-3t.js";import"./OffsetShower-CpVXhOAG.js";import"./PlotAreaShower-CXvEQ9OL.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ye=["Segment"];export{t as Segment,ye as __namedExportsOrder,Re as default};
