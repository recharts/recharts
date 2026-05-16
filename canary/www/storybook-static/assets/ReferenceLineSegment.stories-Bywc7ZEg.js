import{e}from"./iframe-D0NgTmOF.js";import{g as i}from"./arrayEqualityCheck-CwgUv_ht.js";import{C as p}from"./ComposedChart-DJ5Lkyrz.js";import{p as a}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid-78fv6_De.js";import{X as s}from"./XAxis-CncyYZDx.js";import{Y as c}from"./YAxis-CwDQurre.js";import{L as d}from"./Line-CEqMZuta.js";import{R as g}from"./ReferenceLine-CAu88h56.js";import{R as f}from"./RechartsHookInspector-5yLt0C9L.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C2iJSQuR.js";import"./immer-DnKwXwYM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B5gUoFOn.js";import"./index-DvYw8x0Z.js";import"./hooks-BjdflWes.js";import"./axisSelectors-D-soVtjN.js";import"./d3-scale-CuJiQ300.js";import"./zIndexSlice-B6knb3no.js";import"./renderedTicksSlice-B6w59eqG.js";import"./CartesianChart-vOQQa6wo.js";import"./chartDataContext-B3eSYf3f.js";import"./CategoricalChart-Cw-_htEg.js";import"./CartesianAxis-Ci5CupD_.js";import"./Layer-CdU29MCm.js";import"./Text-CYJBI_N5.js";import"./DOMUtils-B93EOx77.js";import"./Label-CwJJPXCN.js";import"./ZIndexLayer-CgbYN4dr.js";import"./types-BAabENvn.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CP67hvAP.js";import"./ActivePoints-Bqu6MNFU.js";import"./Dot-DXucPl9o.js";import"./RegisterGraphicalItemId-CIKun5N4.js";import"./ErrorBarContext-DWShVRAe.js";import"./GraphicalItemClipPath-DIWpokpF.js";import"./SetGraphicalItem-7Ry64uPY.js";import"./useAnimationId-BMh-hzSk.js";import"./getRadiusAndStrokeWidthFromDot-BgAjRsmY.js";import"./ActiveShapeUtils-Ck9x9SAt.js";import"./isPlainObject-Cp-FcUrF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B7KfHMDv.js";import"./Trapezoid-Bw4_2Ajp.js";import"./Sector-D7Ir7kN1.js";import"./Symbols-BQ_Pkm6Y.js";import"./symbol-DTnIuW2s.js";import"./step-Dotb7kAI.js";import"./Curve-CmeNNcZa.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CUywKB4R.js";import"./ChartSizeDimensions-KQoM2E8Q.js";import"./OffsetShower-18-bLdR4.js";import"./PlotAreaShower-C4z2y4fi.js";const ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const Ee=["Segment"];export{t as Segment,Ee as __namedExportsOrder,ye as default};
