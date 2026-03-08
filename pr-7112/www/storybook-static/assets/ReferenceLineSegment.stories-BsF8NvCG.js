import{e}from"./iframe-CLI455N8.js";import{R as i}from"./arrayEqualityCheck-DGATYUvM.js";import{C as p}from"./ComposedChart-BPPpLWby.js";import{C as a}from"./CartesianGrid-CAPei4--.js";import{X as n}from"./XAxis-D9lstoZk.js";import{Y as s}from"./YAxis-CAsk9t5u.js";import{L as c}from"./Line-tHQrI0Gy.js";import{R as d}from"./ReferenceLine-C3_SpcGx.js";import{R as g}from"./RechartsHookInspector-B0jcEhQg.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CegQPTcY.js";import"./immer-DmWp1HVW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BiomK5HP.js";import"./index-BwppRXXR.js";import"./hooks-Doc11HYF.js";import"./axisSelectors-BdO5JamF.js";import"./d3-scale-BI_Xdw0D.js";import"./zIndexSlice-D_mnyKw0.js";import"./renderedTicksSlice-CceCuUpi.js";import"./CartesianChart-Bvwnl3Az.js";import"./chartDataContext-1HoxnSEy.js";import"./CategoricalChart-M5ONOIR4.js";import"./CartesianAxis-DTFJnQq6.js";import"./Layer-C2gLD8qT.js";import"./Text-B9IImLk3.js";import"./DOMUtils-DwfKCbJu.js";import"./Label-DZ3NTBbi.js";import"./ZIndexLayer-Bu63NknL.js";import"./types-BBHZriQH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-D6yH62ZJ.js";import"./ActivePoints-BykxdX5n.js";import"./Dot-DEiLNns9.js";import"./RegisterGraphicalItemId-DhtbT04w.js";import"./ErrorBarContext-CHpZdGkV.js";import"./GraphicalItemClipPath-5s_f3x1V.js";import"./SetGraphicalItem-MRBrVOH2.js";import"./useAnimationId-CjNefpky.js";import"./getRadiusAndStrokeWidthFromDot-CtHwe_Ur.js";import"./ActiveShapeUtils-CFqNdOfc.js";import"./isPlainObject-BZ_hFATh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C4yn2vQK.js";import"./Trapezoid-B6vgceDf.js";import"./Sector-RnRqdmAJ.js";import"./Symbols-B_3hTHr3.js";import"./symbol-BobG1HrB.js";import"./step-Bbb8NlBF.js";import"./Curve-jc1v2UsA.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DzCTiCHw.js";import"./ChartSizeDimensions-CHU61BQR.js";import"./OffsetShower-B0bvPXsU.js";import"./PlotAreaShower-wBW1mPFi.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
