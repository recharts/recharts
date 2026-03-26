import{e}from"./iframe-BnJtTsiG.js";import{R as i}from"./arrayEqualityCheck-JqF9arvj.js";import{C as p}from"./ComposedChart-Wvhceelx.js";import{C as a}from"./CartesianGrid-C0Nk_Jye.js";import{X as n}from"./XAxis-DNI9rGLu.js";import{Y as s}from"./YAxis-2aBmaGwM.js";import{L as c}from"./Line-Cxdeapqx.js";import{R as d}from"./ReferenceLine-BssSiUKL.js";import{R as g}from"./RechartsHookInspector-BUkbtt6T.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CNKXDHIv.js";import"./immer-BilgQS7Z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DnFeqk-S.js";import"./index-BR9ucj69.js";import"./hooks-DgbcPaC5.js";import"./axisSelectors-_uj0cu9d.js";import"./d3-scale-RH1gCsj4.js";import"./zIndexSlice-u5N52emx.js";import"./renderedTicksSlice-C2Lx4sh9.js";import"./CartesianChart-yY9oGGmK.js";import"./chartDataContext-Br9_d6ie.js";import"./CategoricalChart-CVrJtZ9b.js";import"./CartesianAxis-BY9ve2Nt.js";import"./Layer-CZajLfJ2.js";import"./Text-8iVX3WBp.js";import"./DOMUtils-u57yL_f_.js";import"./Label-C079WU8o.js";import"./ZIndexLayer-MihbceXQ.js";import"./types-Dgf_4DYj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CGCbFUwc.js";import"./ActivePoints-AmnsL1mA.js";import"./Dot-BFdVk3ol.js";import"./RegisterGraphicalItemId-Cp9jZ34F.js";import"./ErrorBarContext-DLm5F4wp.js";import"./GraphicalItemClipPath-BqLiE-Qj.js";import"./SetGraphicalItem-DTmYNChn.js";import"./useAnimationId-BlSLZQPR.js";import"./getRadiusAndStrokeWidthFromDot-C7HKOHBW.js";import"./ActiveShapeUtils-CiETt0z1.js";import"./isPlainObject-DWBUHdsc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-38-vQMAB.js";import"./Trapezoid-CcsFZinE.js";import"./Sector-DPWQhCCR.js";import"./Symbols-kj3svvPH.js";import"./symbol-Y2fv4Hlp.js";import"./step-Dk-_s7iR.js";import"./Curve-Dms99yFp.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BsJ1xsh-.js";import"./ChartSizeDimensions-DdW7v9MQ.js";import"./OffsetShower-YcN9xEjX.js";import"./PlotAreaShower-B5YeOyEN.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
