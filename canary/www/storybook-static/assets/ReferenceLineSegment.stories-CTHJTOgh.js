import{R as e}from"./iframe-BN7wAejV.js";import{R as i}from"./zIndexSlice-BlaP7sYq.js";import{C as n}from"./ComposedChart-CDS5E2ok.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CAMLSwou.js";import{X as s}from"./XAxis-VA1Akzpv.js";import{Y as c}from"./YAxis-LOiiKFb4.js";import{L as d}from"./Line-BQoSY4oZ.js";import{R as g}from"./ReferenceLine-0c5pHS9o.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DnbeteFU.js";import"./get-CjriyByo.js";import"./throttle-OOfctLZP.js";import"./index-D3oSOluz.js";import"./index-BS508S1N.js";import"./RechartsWrapper-BzFY2Xxa.js";import"./axisSelectors-D4jZOjlQ.js";import"./polarAxisSelectors-CchWb7G-.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-BuYLSsjs.js";import"./index-CmVxXaJX.js";import"./index-BqsbVcZz.js";import"./renderedTicksSlice-B6C_f0uh.js";import"./index-DyRM39CP.js";import"./fillDefinitions-B689QTZV.js";import"./CartesianChart-D-Ahqv2A.js";import"./chartDataContext-CF2rDhwh.js";import"./CategoricalChart-CD7QHO--.js";import"./CartesianAxis-DWm3W2j1.js";import"./Layer-gDVCcB56.js";import"./Text-_3q1LLJU.js";import"./ZIndexLayer-CB5Di4JM.js";import"./Label-Bpsa1uOU.js";import"./types-B8ZxybVf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-5PNvN8b1.js";import"./Curve-BFV098yv.js";import"./step-Bv7Zqu-1.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-CrycyMb5.js";import"./ActivePoints-EAvCRna9.js";import"./Dot-BsX3Z5g1.js";import"./activeStyles-CXY1xJkQ.js";import"./useAnimationId-ClFn0gGk.js";import"./Symbols-IIZndlP1.js";import"./symbol-C_xR0iSi.js";import"./ErrorBarContext-eg_EChks.js";import"./SetGraphicalItem-Bzbpd_mD.js";import"./ActiveShapeUtils-Bz62zvpu.js";import"./useEffectiveDataKey-Bx0GloUb.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,ge as __namedExportsOrder,de as default};
