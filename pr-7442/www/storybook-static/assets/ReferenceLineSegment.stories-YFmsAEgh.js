import{R as e}from"./iframe-_0vvsXwQ.js";import{R as i}from"./zIndexSlice-UDOegWIl.js";import{C as a}from"./ComposedChart-C9VfnRnH.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-C4KP2IfC.js";import{X as s}from"./XAxis-BVL11hxO.js";import{Y as c}from"./YAxis-DH6-Go25.js";import{L as d}from"./Line-Cj7LWAqT.js";import{R as g}from"./ReferenceLine-B5PqqzQm.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Crw1A_KU.js";import"./index-B2rwiSR7.js";import"./index-B-MK1gV-.js";import"./get-dROHwlCD.js";import"./resolveDefaultProps-Dur14Ufb.js";import"./isWellBehavedNumber-Cb6oai8T.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D_godwDH.js";import"./index-DjufVxMp.js";import"./index-CQeeIj4f.js";import"./renderedTicksSlice-Dyv93tW0.js";import"./axisSelectors-DOgNvw74.js";import"./d3-scale-9nut4HIz.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DuAlGfbC.js";import"./chartDataContext-ooxC0Mwi.js";import"./CategoricalChart-yQk_e9Td.js";import"./CartesianAxis-ZzlyT-7-.js";import"./Layer-CbOAMwV5.js";import"./Text-DjMF9a9a.js";import"./DOMUtils-BVwvsn59.js";import"./Label-CiJ4G9HU.js";import"./ZIndexLayer-F6Q8sfzp.js";import"./types-DDFFAOTe.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-Be-qJ1Us.js";import"./step-CiU6-CNX.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-NUeY2MHF.js";import"./useAnimationId-Bs-cdpiV.js";import"./ActivePoints-Bq9SVATs.js";import"./Dot-COzuztjB.js";import"./RegisterGraphicalItemId-Do80jqI9.js";import"./ErrorBarContext-CJqzxiYr.js";import"./GraphicalItemClipPath-DQak-ToR.js";import"./SetGraphicalItem-c1mokMqb.js";import"./getRadiusAndStrokeWidthFromDot-CWPNX420.js";import"./ActiveShapeUtils-CSlhsDPX.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
