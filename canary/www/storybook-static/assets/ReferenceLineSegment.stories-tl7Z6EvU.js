import{R as e}from"./iframe-TzfrCimv.js";import{R as i}from"./zIndexSlice-Dp5v9G1Y.js";import{C as a}from"./ComposedChart-0zP4qBoW.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-SmfttCxo.js";import{X as s}from"./XAxis-5FjHsuX0.js";import{Y as c}from"./YAxis-B2Z4R-y-.js";import{L as d}from"./Line-zx4GEwVd.js";import{R as g}from"./ReferenceLine-w8Q-aWhB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BM90P8P9.js";import"./index-31yWppKy.js";import"./index-I3E5SGvw.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CsgnMNsn.js";import"./isWellBehavedNumber-z9eNMbuG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-d5Ajpv94.js";import"./index-ououzFTQ.js";import"./index-DNVn7Vry.js";import"./axisSelectors-Cg7dZLHA.js";import"./d3-scale-DDwg_EuX.js";import"./renderedTicksSlice-DA0LErEZ.js";import"./CartesianChart-CBcHGY17.js";import"./chartDataContext-C9PL5caj.js";import"./CategoricalChart-NmYFScnM.js";import"./CartesianAxis-BGRgt604.js";import"./Layer-D26e-s_C.js";import"./Text-Cq_y2tEB.js";import"./DOMUtils-BXdig0h8.js";import"./useBackwardsCompatibleTheme-6HIvPrWs.js";import"./Label-ORziBLCU.js";import"./ZIndexLayer-LDMTKG6P.js";import"./types-GCQJUCAo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DI4o0w5Q.js";import"./step-D4kT1-OM.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-q6ooW_4r.js";import"./useAnimationId-4hu6-jhP.js";import"./ActivePoints-Dbb31mNE.js";import"./Dot-Dvt3Xsey.js";import"./RegisterGraphicalItemId-ByzXvOvt.js";import"./ErrorBarContext-C3TPTEby.js";import"./GraphicalItemClipPath-DpRNkFFw.js";import"./SetGraphicalItem-B-6zq9YL.js";import"./getRadiusAndStrokeWidthFromDot-Cf3g7qVi.js";import"./ActiveShapeUtils-Dw86rWrG.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ce={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const de=["Segment"];export{t as Segment,de as __namedExportsOrder,ce as default};
