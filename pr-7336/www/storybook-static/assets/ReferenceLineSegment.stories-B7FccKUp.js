import{e}from"./iframe-pel8cYCN.js";import{g as i}from"./arrayEqualityCheck-C_lOmCrI.js";import{C as p}from"./ComposedChart-BXIuO7D7.js";import{p as a}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid-D4yy0Jh0.js";import{X as s}from"./XAxis-B599S9Vu.js";import{Y as c}from"./YAxis-BDsVqKg4.js";import{L as d}from"./Line-BwrWq8g2.js";import{R as g}from"./ReferenceLine-Cs7aHVB6.js";import{R as f}from"./RechartsHookInspector-Dg66sE1s.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-YrDhwYNk.js";import"./immer-BJQdivTr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CSDFgvQ-.js";import"./index-BtBEICN3.js";import"./hooks-D-fRP47Y.js";import"./axisSelectors-Bb4Kms9I.js";import"./d3-scale-CX31JByl.js";import"./zIndexSlice-ymPJrgdD.js";import"./renderedTicksSlice-DOQ_XGYo.js";import"./CartesianChart-BlzYSjsM.js";import"./chartDataContext-Edg6lPwK.js";import"./CategoricalChart-B61I782z.js";import"./CartesianAxis-CHS0WdpC.js";import"./Layer-CNeytfD9.js";import"./Text-CYIA95SW.js";import"./DOMUtils-ctqdh0oB.js";import"./Label-LVsFLhHv.js";import"./ZIndexLayer-BvzXDAda.js";import"./types-Xh1xXsKt.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-MkRs3AIp.js";import"./ActivePoints-DvhKq6eb.js";import"./Dot-CC60-gqd.js";import"./RegisterGraphicalItemId-DwjBwfbK.js";import"./ErrorBarContext-DJfRhZLU.js";import"./GraphicalItemClipPath-BGEnX0Xy.js";import"./SetGraphicalItem-fB0iJna-.js";import"./useAnimationId-v_N6QXXH.js";import"./getRadiusAndStrokeWidthFromDot-Co4GzyJq.js";import"./ActiveShapeUtils-DNJLSjTo.js";import"./isPlainObject-CZCkl5XT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CwHhsTLl.js";import"./Trapezoid-B96cM-TC.js";import"./Sector-CNApQaS1.js";import"./Symbols-DxzOQiX8.js";import"./symbol-D7iNy2hw.js";import"./step-DDfuaYno.js";import"./Curve-DUNlDEm2.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Db97PsMK.js";import"./ChartSizeDimensions-KFbSwMPV.js";import"./OffsetShower-D-gSoeld.js";import"./PlotAreaShower-BJPLXysn.js";const ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
