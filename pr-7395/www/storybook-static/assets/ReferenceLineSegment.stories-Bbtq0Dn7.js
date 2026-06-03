import{c as e}from"./iframe-DWpXT6OO.js";import{g as i}from"./zIndexSlice-BI8aBdB2.js";import{C as a}from"./ComposedChart-CMOLlSCj.js";import{p}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid-DzsIPI5_.js";import{X as s}from"./XAxis-BjHcYZV7.js";import{Y as c}from"./YAxis-C6ZngbUi.js";import{L as d}from"./Line-CQQWht13.js";import{R as g}from"./ReferenceLine-CgPY0MfL.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CtD26uCH.js";import"./index-C9JIL6RB.js";import"./index-CJpuQcHC.js";import"./get-CAMMj0jB.js";import"./resolveDefaultProps-CU4FGCoK.js";import"./isWellBehavedNumber-CW4w7lw5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C7TEH3BS.js";import"./index-4-WnE7FO.js";import"./index-CnH4suYJ.js";import"./renderedTicksSlice-DwGC_mjp.js";import"./axisSelectors-D3pmM5ea.js";import"./d3-scale-CNTc-b9c.js";import"./CartesianChart-BL_alDPA.js";import"./chartDataContext-CQfTawPZ.js";import"./CategoricalChart-CQFeC6FI.js";import"./CartesianAxis-3iObmYRO.js";import"./Layer-DdIFnola.js";import"./Text-y6qBsXbA.js";import"./DOMUtils-x2D0RHyJ.js";import"./Label-BLTDXbDF.js";import"./ZIndexLayer-Cqbl6fly.js";import"./types-B1PNqcSi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-wqoEsp4f.js";import"./step-C03CUoTX.js";import"./path-DyVhHtw_.js";import"./ReactUtils-CGwSHaxd.js";import"./ActivePoints-D8LyVTVu.js";import"./Dot-B_vusOKB.js";import"./RegisterGraphicalItemId-CI_L8duS.js";import"./ErrorBarContext-BPuM-bX0.js";import"./GraphicalItemClipPath-Xef2qiO-.js";import"./SetGraphicalItem-Brjb-bLT.js";import"./useAnimationId-CbTt72_H.js";import"./getRadiusAndStrokeWidthFromDot-N8lTwYxy.js";import"./ActiveShapeUtils-6dq8aYlX.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ne=["Segment"];export{t as Segment,ne as __namedExportsOrder,pe as default};
