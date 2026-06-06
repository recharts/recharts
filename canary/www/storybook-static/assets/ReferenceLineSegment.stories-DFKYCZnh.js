import{R as e}from"./iframe-CfFwYGba.js";import{R as i}from"./zIndexSlice-DfErsUYp.js";import{C as a}from"./ComposedChart-9_Y3XLOf.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DWyJ9S1X.js";import{X as s}from"./XAxis-C1PjqHUu.js";import{Y as c}from"./YAxis-D4OA0xxQ.js";import{L as d}from"./Line-1W0aDq6r.js";import{R as g}from"./ReferenceLine-Cl90SxXW.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-ChF14mwi.js";import"./index-B1M76gQx.js";import"./index-DKyALkfw.js";import"./get-VqHCUeFt.js";import"./resolveDefaultProps-CNXn3RtZ.js";import"./isWellBehavedNumber-DNsnRpQn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BG04mOMU.js";import"./index-jr7opHAK.js";import"./index-DNhYiVbG.js";import"./renderedTicksSlice-CeRHVXP-.js";import"./axisSelectors-DhigzgEo.js";import"./d3-scale-CO_OUUyv.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BKL_0SO1.js";import"./chartDataContext-CvyqEHRa.js";import"./CategoricalChart-D8Sfn5Og.js";import"./CartesianAxis-DYBfrE-6.js";import"./Layer-CIeZ6xN1.js";import"./Text-6g8FEB5n.js";import"./DOMUtils-CelkDAhh.js";import"./Label-BfJ1m9lw.js";import"./ZIndexLayer-CO0_v3Z6.js";import"./types-B8Ju2LTD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-CvFToXA1.js";import"./step-Cz7LQHZ8.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DufJJ5tM.js";import"./useAnimationId-q4Azt8JP.js";import"./ActivePoints-BvFcDKGx.js";import"./Dot-CQusYe0D.js";import"./RegisterGraphicalItemId-DuA2mhLl.js";import"./ErrorBarContext-yluf_OAo.js";import"./GraphicalItemClipPath-CycB6t93.js";import"./SetGraphicalItem-BVwnEQ5r.js";import"./getRadiusAndStrokeWidthFromDot-ClnovYdE.js";import"./ActiveShapeUtils-BoiiDjBc.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
