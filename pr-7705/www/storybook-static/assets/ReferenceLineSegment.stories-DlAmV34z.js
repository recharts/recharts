import{R as e}from"./iframe-CmDfCYy4.js";import{R as i}from"./zIndexSlice-Djwis5u_.js";import{C as a}from"./ComposedChart-CuqccTr3.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-Cr_AfIuT.js";import{X as s}from"./XAxis-CeJE8CyL.js";import{Y as c}from"./YAxis-Clc76Y2_.js";import{L as d}from"./Line-B9SROX57.js";import{R as g}from"./ReferenceLine-C7xq6Z0u.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BvVliBGf.js";import"./index-vlpbybCm.js";import"./index-DuLzr3ug.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D0zMnbP3.js";import"./isWellBehavedNumber-ytXpT6fS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-PRNOsza0.js";import"./axisSelectors-BLlvkyot.js";import"./d3-scale-h8Nvvkc2.js";import"./index-BiD8Ib67.js";import"./index-BDVGxzhR.js";import"./renderedTicksSlice-BvQmfKO8.js";import"./index-C3AEkUmj.js";import"./CartesianChart-DQcpQ0vQ.js";import"./chartDataContext-Csr98tLV.js";import"./CategoricalChart-BVrKXV60.js";import"./CartesianAxis-DVS9Bx8F.js";import"./Layer-2NB1aHcN.js";import"./Text-FnYPD4kR.js";import"./DOMUtils-CeEb1Ieo.js";import"./useId-DdN0jYjl.js";import"./useBackwardsCompatibleTheme-D23nCtop.js";import"./Label-C_EyvZ8C.js";import"./ZIndexLayer-DE-382dp.js";import"./types-BdmWqFz5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DLCwqskO.js";import"./step-DtcV51zC.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D70_FMkE.js";import"./useAnimationId-CFWhy9Ri.js";import"./ActivePoints-CpKsZRdO.js";import"./Dot-Br2gUZT5.js";import"./RegisterGraphicalItemId-B3K6VYV9.js";import"./ErrorBarContext-CmqdPlQJ.js";import"./GraphicalItemClipPath-BSPzDNhY.js";import"./SetGraphicalItem-BYV2m0jb.js";import"./getRadiusAndStrokeWidthFromDot-BWI8_9l7.js";import"./ActiveShapeUtils-BDpJLacA.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const fe=["Segment"];export{t as Segment,fe as __namedExportsOrder,ge as default};
