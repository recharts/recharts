import{R as e}from"./iframe-BBGBS6DV.js";import{R as i}from"./zIndexSlice-C7go6sDc.js";import{C as a}from"./ComposedChart-KBOCL7OW.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CMWgKooE.js";import{X as s}from"./XAxis-CMxF0Wjl.js";import{Y as c}from"./YAxis-DsrpZZjl.js";import{L as d}from"./Line-xVNNGowX.js";import{R as g}from"./ReferenceLine-DSJHCkEP.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-u2-xWsf6.js";import"./index-sfHPztcf.js";import"./index-BfdY1IDa.js";import"./get-BV7Nc0IZ.js";import"./resolveDefaultProps-CdaEo1sJ.js";import"./isWellBehavedNumber-DqttSiMx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CZVIAxqy.js";import"./index-CLfBpOwp.js";import"./index-Bl5evuWS.js";import"./renderedTicksSlice-DeFm9vmM.js";import"./axisSelectors-DUU6Ovr8.js";import"./d3-scale-Ceq_dgL5.js";import"./string-B6fdYHAA.js";import"./CartesianChart-8bJyHLLZ.js";import"./chartDataContext-6hP0GYiP.js";import"./CategoricalChart-BNe26d_a.js";import"./CartesianAxis-DBDeoTme.js";import"./Layer-C7b9GhMV.js";import"./Text-CCZTp9OW.js";import"./DOMUtils-Da1klpxA.js";import"./Label-Iqg4BS5e.js";import"./ZIndexLayer-WmfwTIzB.js";import"./types-Bj7fEVXg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-D7BUefvS.js";import"./step-Deq8dNp2.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-alz79Juh.js";import"./useAnimationId-CCG8jh7R.js";import"./ActivePoints-9mxUzEHn.js";import"./Dot-DdV24ZDH.js";import"./RegisterGraphicalItemId-B9dZ270Y.js";import"./ErrorBarContext-BeUQIIOs.js";import"./GraphicalItemClipPath-CkBiEPpf.js";import"./SetGraphicalItem-QS7NgdyV.js";import"./getRadiusAndStrokeWidthFromDot-DsI7ajDG.js";import"./ActiveShapeUtils-NLKbpFnA.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
