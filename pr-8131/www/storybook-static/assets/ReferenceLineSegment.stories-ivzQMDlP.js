import{R as e}from"./iframe-BfuPA7Y7.js";import{R as i}from"./zIndexSlice-B6sU7Rt1.js";import{C as n}from"./ComposedChart-CsUG1xb5.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BTWdSSDs.js";import{X as s}from"./XAxis-18ahIu4N.js";import{Y as c}from"./YAxis-BrNvBbuM.js";import{L as d}from"./Line-Cx7UbFJj.js";import{R as g}from"./ReferenceLine-0vDc3qjU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-SE0EJZ_b.js";import"./throttle-Dc8hP4d4.js";import"./index-PwnnJGIT.js";import"./index-pibBQJc_.js";import"./RechartsWrapper-95Yf8UFb.js";import"./axisSelectors-Br11nK0T.js";import"./polarAxisSelectors-CWu_M8g7.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CjK5ImOh.js";import"./index-DdvOS-Rc.js";import"./index-WmIsGj85.js";import"./renderedTicksSlice-Bz-0OqRl.js";import"./index-Bw4IjVJv.js";import"./fillDefinitions-BUo8WQ2M.js";import"./CartesianChart-Dt3os4bo.js";import"./ZIndexPortal-Bjqq_-_3.js";import"./CategoricalChart-BbC6nel8.js";import"./CartesianAxis-BUa2DE6b.js";import"./Layer-BWWgf-oi.js";import"./Text-WUFue0UU.js";import"./DOMUtils-C1ieIiQg.js";import"./ZIndexLayer-CSVoTSBk.js";import"./Label-B5k-U_Yi.js";import"./types-Di4mZIQP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CE_2fXkD.js";import"./step-Cd-JWo6G.js";import"./path-DyVhHtw_.js";import"./LabelList-DuFHEtzk.js";import"./ActivePoints-35kBP04l.js";import"./Dot-Clx--Joj.js";import"./activeStyles-fOeMVdxf.js";import"./useAnimationId-4ywEr4SP.js";import"./dataEntryStyles-DawwN3gr.js";import"./Symbols-pnM7tnEZ.js";import"./symbol-DyOhgHTf.js";import"./ErrorBarContext-DQS0aRku.js";import"./SetGraphicalItem-B3dBsQBy.js";import"./getRadiusAndStrokeWidthFromDot-DI9dnlZ8.js";import"./ActiveShapeUtils-CJYZSdch.js";import"./useEffectiveDataKey-Chd7xyV4.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,he as __namedExportsOrder,fe as default};
