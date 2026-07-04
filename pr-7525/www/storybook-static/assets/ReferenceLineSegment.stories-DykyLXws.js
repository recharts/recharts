import{R as e}from"./iframe-D1iFT1mY.js";import{R as i}from"./zIndexSlice-B6TgBQrN.js";import{C as a}from"./ComposedChart-oca7_NcQ.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CIMtiBLV.js";import{X as s}from"./XAxis-zY-Ami2t.js";import{Y as c}from"./YAxis-CW-ZNT8W.js";import{L as d}from"./Line-CqxTaPcW.js";import{R as g}from"./ReferenceLine-CzmoqZPR.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CzPbu-Ix.js";import"./index-DpDzEI56.js";import"./index-rDbSE8GI.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BMIUma5c.js";import"./isWellBehavedNumber-Du8M38U_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BlluAAtZ.js";import"./index-DvHXLyo3.js";import"./index-BBsSvonK.js";import"./renderedTicksSlice-Bf_HC71D.js";import"./axisSelectors-CxzN54IZ.js";import"./d3-scale-DpibCxtP.js";import"./CartesianChart-D2tBODZW.js";import"./chartDataContext-CYm6jQFo.js";import"./CategoricalChart-D5N5XyOw.js";import"./CartesianAxis-HsnRG105.js";import"./Layer-FA9hcod8.js";import"./Text-J63_ff7W.js";import"./DOMUtils-BANERqy9.js";import"./Label-DT6YPp8b.js";import"./ZIndexLayer-8c0NuDUK.js";import"./types-DXiAmoHC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-DI4m1DQG.js";import"./step-Bh5OwxZ-.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-LcNNhy-w.js";import"./useAnimationId-CoQh4DtZ.js";import"./ActivePoints-ukxKvv9l.js";import"./Dot-CXZOPICM.js";import"./RegisterGraphicalItemId-DRA4KH43.js";import"./ErrorBarContext-mOiZNw9f.js";import"./GraphicalItemClipPath-DfjPk2Kq.js";import"./SetGraphicalItem-B34_j8RK.js";import"./getRadiusAndStrokeWidthFromDot-BnvNbbpg.js";import"./ActiveShapeUtils-BKYrsUZj.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
