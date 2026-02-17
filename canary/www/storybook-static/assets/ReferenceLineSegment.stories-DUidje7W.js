import{e}from"./iframe-DCHwmqK8.js";import{R as i}from"./arrayEqualityCheck-PCrDa-mZ.js";import{C as a}from"./ComposedChart-cpUGiPkE.js";import{C as p}from"./CartesianGrid-X_8lntYf.js";import{X as n}from"./XAxis-Dy9Xo9z7.js";import{Y as s}from"./YAxis-CKNZXN9_.js";import{L as c}from"./Line-CanyURAj.js";import{R as d}from"./ReferenceLine-Pqv5yu_F.js";import{R as g}from"./RechartsHookInspector-DqPpRwC6.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-9mPboPW3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dam48Pnw.js";import"./hooks-C5KjLV4a.js";import"./axisSelectors-tq781mpa.js";import"./zIndexSlice-xa-TURHG.js";import"./renderedTicksSlice-DwhsECxN.js";import"./CartesianChart-BDUX0Tg9.js";import"./chartDataContext-F7_MHoey.js";import"./CategoricalChart-CR27zK7v.js";import"./CartesianAxis-BkIGBz3a.js";import"./Layer-7f0xQXhX.js";import"./Text-riFZx0Ep.js";import"./DOMUtils-BGimDYvY.js";import"./Label-BPyHNFQk.js";import"./ZIndexLayer-B-u8VTE_.js";import"./types-B1B-Xneg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CDXy_Xlj.js";import"./ActivePoints-Dr3FcZs2.js";import"./Dot-bVWJn8Dw.js";import"./RegisterGraphicalItemId-BsQ61kmL.js";import"./ErrorBarContext-Cu1B03x6.js";import"./GraphicalItemClipPath-DITSj-MA.js";import"./SetGraphicalItem-ChCpVhsL.js";import"./useAnimationId-C8JLALld.js";import"./getRadiusAndStrokeWidthFromDot-DjsEkiNr.js";import"./ActiveShapeUtils-BILPqCjw.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CB4U0IVW.js";import"./Trapezoid-Avw1E6Og.js";import"./Sector-Ch_o0ANK.js";import"./Symbols-Bq3Wi3iy.js";import"./Curve-B04YTzst.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DsiXN0IX.js";import"./ChartSizeDimensions-GkZwO762.js";import"./OffsetShower-C96P7rJy.js";import"./PlotAreaShower-9zl_p26K.js";const ce={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
