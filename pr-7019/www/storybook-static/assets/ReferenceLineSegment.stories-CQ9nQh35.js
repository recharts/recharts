import{e}from"./iframe-DSWYlzWY.js";import{R as i}from"./arrayEqualityCheck-Fy9pCvBq.js";import{C as a}from"./ComposedChart-CsltzT4x.js";import{C as p}from"./CartesianGrid-1IEROZor.js";import{X as n}from"./XAxis-iMOgY7Au.js";import{Y as s}from"./YAxis-Bm_Vu3am.js";import{L as c}from"./Line-BC8L4eV2.js";import{R as d}from"./ReferenceLine-CwsEq-87.js";import{R as g}from"./RechartsHookInspector-f6frTyp5.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BiAk_CPB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DVh3xt6X.js";import"./hooks-B7BbWUVY.js";import"./axisSelectors-C1uR2G3h.js";import"./zIndexSlice-CwHVazMP.js";import"./renderedTicksSlice-soMCmbpR.js";import"./CartesianChart-BFtDWNyw.js";import"./chartDataContext-DGfmnKNf.js";import"./CategoricalChart-DpkOEink.js";import"./CartesianAxis-BDz1zwgU.js";import"./Layer-BJ-1LjgN.js";import"./Text-CcJbWbw0.js";import"./DOMUtils-9Gl4sMzI.js";import"./Label-DAbjiZ3-.js";import"./ZIndexLayer-DdgNL7UI.js";import"./types-C3ofbdQr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-cJI4Ub_j.js";import"./ActivePoints-Boyrjsl3.js";import"./Dot-iLU5pbFu.js";import"./RegisterGraphicalItemId-BBtGsgZd.js";import"./ErrorBarContext-W32xCQ7P.js";import"./GraphicalItemClipPath-SnzIRqgJ.js";import"./SetGraphicalItem-BwFpDELA.js";import"./useAnimationId-C_vJY8DS.js";import"./getRadiusAndStrokeWidthFromDot-BMXa57aN.js";import"./ActiveShapeUtils-CIyCCcXD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BMuMjxhY.js";import"./Trapezoid-COd96k2O.js";import"./Sector-BpUrusHe.js";import"./Symbols-DBQdL11F.js";import"./Curve-kGDkBF5o.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CFzpIqAG.js";import"./ChartSizeDimensions-B4hBN_oD.js";import"./OffsetShower-Dq8TEAZv.js";import"./PlotAreaShower-CsbtiMRd.js";const ce={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
