import{R as e}from"./iframe-D38iL5U2.js";import{R as i}from"./zIndexSlice-Cm67KrxL.js";import{C as a}from"./ComposedChart-C9TDGW0Q.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-Bx94-WYC.js";import{X as s}from"./XAxis-DxvBJIAO.js";import{Y as c}from"./YAxis-DusBbeDI.js";import{L as d}from"./Line-CtYC6NCl.js";import{R as g}from"./ReferenceLine-CZA9Vkm0.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-D6830BYN.js";import"./index-CiQf90fk.js";import"./index-CtVCdopk.js";import"./get-khzbl4AQ.js";import"./resolveDefaultProps-CZPTys3h.js";import"./isWellBehavedNumber-DYmqkCh1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-cRl9bCbj.js";import"./index-CrafHmD2.js";import"./index-BjsidNXN.js";import"./renderedTicksSlice-BJAgGPRy.js";import"./axisSelectors-31vNEB3v.js";import"./d3-scale-B4F2Cask.js";import"./CartesianChart-BM1M8_5y.js";import"./chartDataContext-kB1Q6Xdj.js";import"./CategoricalChart-CpYTfgB7.js";import"./CartesianAxis-C6E7eU9j.js";import"./Layer-BW7UV7J4.js";import"./Text-DbYnM2_N.js";import"./DOMUtils-o62mw7wr.js";import"./Label-CTZsXBnJ.js";import"./ZIndexLayer-B3mrn3nC.js";import"./types-CVlGri0W.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-BojgfvlB.js";import"./step-0VurBbtl.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-6eA2Tj-j.js";import"./useAnimationId-CrM4tScF.js";import"./ActivePoints-CKKFmVGR.js";import"./Dot-CGulo8wH.js";import"./RegisterGraphicalItemId-D4Xqb6PN.js";import"./ErrorBarContext-BaHC-CpM.js";import"./GraphicalItemClipPath-CgNMFQt0.js";import"./SetGraphicalItem-D8AKKKBR.js";import"./getRadiusAndStrokeWidthFromDot-C_jGICtX.js";import"./ActiveShapeUtils-DKkm8SfY.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
