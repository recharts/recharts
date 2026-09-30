import{R as e}from"./iframe-DrNDVdUV.js";import{R as i}from"./zIndexSlice-CtU9gDeX.js";import{C as n}from"./ComposedChart-CI3FiMk_.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BI91T1wX.js";import{X as s}from"./XAxis-CYMSKzPe.js";import{Y as c}from"./YAxis-xS1LCjGi.js";import{L as d}from"./Line-BEblYiYN.js";import{R as g}from"./ReferenceLine-BAmi53IZ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-yi_4PIaU.js";import"./index-CcUsqpS-.js";import"./index-uubsNt5S.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CGCnXzV6.js";import"./isWellBehavedNumber-6ms7Qni5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CftVGGIb.js";import"./axisSelectors-83UqlNkf.js";import"./d3-scale-Dtw5RV1H.js";import"./index-C02YBhOv.js";import"./index-DG6hdvW2.js";import"./renderedTicksSlice-D-gEAZZ9.js";import"./index-f04P2rVP.js";import"./CartesianChart-AI3x8M6-.js";import"./chartDataContext-B5-7BCeK.js";import"./CategoricalChart-CAcrwHX_.js";import"./CartesianAxis-D9QKlyxu.js";import"./Layer-MqQXVAAH.js";import"./Text-B6IFXijX.js";import"./DOMUtils-CJOGT8qc.js";import"./useId-DvlibiBq.js";import"./useBackwardsCompatibleTheme-D28mWunQ.js";import"./Label-S1smMv2d.js";import"./ZIndexLayer-DVXiBMpv.js";import"./types-xpc3POF2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-zuUGMSY-.js";import"./step-H8KTZm7H.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BSenOuGe.js";import"./useAnimationId-CQqGpr63.js";import"./ActivePoints-BXxdB6el.js";import"./Dot-Djo_ehgJ.js";import"./RegisterGraphicalItemId-yZiy6jFu.js";import"./ErrorBarContext-DCn9mgoR.js";import"./GraphicalItemClipPath-BWcxuFET.js";import"./SetGraphicalItem-Cpl9rbNJ.js";import"./getRadiusAndStrokeWidthFromDot-pk4w0c3i.js";import"./ActiveShapeUtils-DMJhm59f.js";import"./useGraphicalItemIdentity-CyeNl3AJ.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,fe as __namedExportsOrder,ge as default};
