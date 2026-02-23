import{e}from"./iframe-EDkYpgFH.js";import{R as i}from"./arrayEqualityCheck-3I37HEG_.js";import{C as p}from"./ComposedChart-BiuyaRDP.js";import{C as a}from"./CartesianGrid-Z31fTq1Q.js";import{X as n}from"./XAxis-DF72n0MP.js";import{Y as s}from"./YAxis-vzHqkzuu.js";import{L as c}from"./Line-DRhsJ9p_.js";import{R as d}from"./ReferenceLine-XvGnZOnZ.js";import{R as g}from"./RechartsHookInspector-CH0J_Gc_.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CektsYXT.js";import"./immer-OU7Y0bVq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D3m4uKer.js";import"./index-g2grDsWN.js";import"./hooks-9dyjFB2O.js";import"./axisSelectors-DuoLroUy.js";import"./d3-scale-Da0yFaRI.js";import"./zIndexSlice-CEaJbv0z.js";import"./renderedTicksSlice-tL_S_nSy.js";import"./CartesianChart-Dj1xYMR5.js";import"./chartDataContext-D4KzV5Tt.js";import"./CategoricalChart-AyWzdtKe.js";import"./CartesianAxis-DB9dh0sL.js";import"./Layer-B_dQgSH5.js";import"./Text-_RLDIMGf.js";import"./DOMUtils-BmamCvsY.js";import"./Label-tpHL658P.js";import"./ZIndexLayer-CFOztK9t.js";import"./types-BIaRI4-l.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-pbZTnHEY.js";import"./ActivePoints-qcJtAAIs.js";import"./Dot-Ci-MCQ4Y.js";import"./RegisterGraphicalItemId-BmJCRqzh.js";import"./ErrorBarContext-BSOP-KRw.js";import"./GraphicalItemClipPath-LiQwpHfd.js";import"./SetGraphicalItem-DkwojxeX.js";import"./useAnimationId-BbddIEaK.js";import"./getRadiusAndStrokeWidthFromDot-DMXaZtjW.js";import"./ActiveShapeUtils-DdBu78Ro.js";import"./isPlainObject-MAh5iL27.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CUAMyMnQ.js";import"./Trapezoid-Ce9uM3y7.js";import"./Sector-DxWTUroZ.js";import"./Symbols-Ba1mC9Fj.js";import"./symbol-DtUDp9_D.js";import"./step-CNqQtAg0.js";import"./Curve-CaKiPo4V.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-VaoQyGQZ.js";import"./ChartSizeDimensions-zH_0qASi.js";import"./OffsetShower-C_V4W_fW.js";import"./PlotAreaShower-DtLh3AKd.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
