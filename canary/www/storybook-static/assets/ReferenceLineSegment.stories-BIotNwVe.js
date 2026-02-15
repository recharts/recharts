import{e}from"./iframe-CcI14rjx.js";import{R as i}from"./arrayEqualityCheck-B8tVyMzV.js";import{C as a}from"./ComposedChart-FcFBNN0D.js";import{C as p}from"./CartesianGrid-Ck8TjHQ7.js";import{X as n}from"./XAxis-CzdMAN4d.js";import{Y as s}from"./YAxis-CbFx-Oik.js";import{L as c}from"./Line-BGLDYswm.js";import{R as d}from"./ReferenceLine-CAfU_cpr.js";import{R as g}from"./RechartsHookInspector-BirTV-4S.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-po8mUv-4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ds5PaNoP.js";import"./hooks-CRZN5urL.js";import"./axisSelectors-RKSisFMT.js";import"./zIndexSlice-BZyTHnj4.js";import"./CartesianChart-DnBMHEHS.js";import"./chartDataContext-BY-Xyvma.js";import"./CategoricalChart-DcuTq1rr.js";import"./CartesianAxis-Vu_uTkrX.js";import"./Layer-8dVuGqJD.js";import"./Text-D_czYdq0.js";import"./DOMUtils-BjGcEiQ0.js";import"./Label-Dpi6i3BM.js";import"./ZIndexLayer-DuQEL0lP.js";import"./types-Ce3J44ym.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-C84uddRP.js";import"./ActivePoints-Ca2XV1yH.js";import"./Dot-B9LqMTkT.js";import"./RegisterGraphicalItemId-hDx3Uu0O.js";import"./ErrorBarContext-CRPnKTk6.js";import"./GraphicalItemClipPath-CPgfiSVt.js";import"./SetGraphicalItem-GKBrKzuX.js";import"./useAnimationId-B5oI4zFf.js";import"./getRadiusAndStrokeWidthFromDot-TOKn8Uzz.js";import"./ActiveShapeUtils-DL6WZdbr.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DSZATy_S.js";import"./Trapezoid-D4oUuF48.js";import"./Sector-DCwH9VE3.js";import"./Symbols-CXif55_q.js";import"./Curve-CHXnr1rt.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DRUD6mwN.js";import"./ChartSizeDimensions-DOkJnWBq.js";import"./OffsetShower-CLsXqqyI.js";import"./PlotAreaShower-BWzOW3_u.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
