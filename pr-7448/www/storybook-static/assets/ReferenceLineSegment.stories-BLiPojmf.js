import{R as e}from"./iframe-CRd1fYKG.js";import{R as i}from"./zIndexSlice-BEDqBT5s.js";import{C as a}from"./ComposedChart-CMYYvZ46.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-Ddze4Uvk.js";import{X as s}from"./XAxis-CFDNTKtN.js";import{Y as c}from"./YAxis-CcTJnWbU.js";import{L as d}from"./Line-C_2j51dl.js";import{R as g}from"./ReferenceLine-CNJsBfVe.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DuXdSz_W.js";import"./index-Cu0dCOlk.js";import"./index-COR3Qgsn.js";import"./get-CAg3-hN5.js";import"./resolveDefaultProps-C_1LRrwf.js";import"./isWellBehavedNumber-IulUlDH2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CTRhzR3z.js";import"./index-Co5B8-DW.js";import"./index-Dyy4uRrG.js";import"./renderedTicksSlice-BwoXfhkK.js";import"./axisSelectors-CW_HZ1K1.js";import"./d3-scale-Bw_PCS9h.js";import"./string-B6fdYHAA.js";import"./CartesianChart-_Ts9MuUK.js";import"./chartDataContext-24IFZ5R3.js";import"./CategoricalChart-7SQT56eo.js";import"./CartesianAxis-BngYAupc.js";import"./Layer-uzXkuSL7.js";import"./Text-BzOWhyUQ.js";import"./DOMUtils-meWqI4ST.js";import"./Label-GPMVhHkr.js";import"./ZIndexLayer-CMZSY73E.js";import"./types-fr95e_gP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-CFiA9ic7.js";import"./step-COdk81Z_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CGUpOpVe.js";import"./useAnimationId-B3UhTZxg.js";import"./ActivePoints-BZ8_19th.js";import"./Dot-BUHGfLi1.js";import"./RegisterGraphicalItemId-CFlZHpEu.js";import"./ErrorBarContext-DHhZn8TN.js";import"./GraphicalItemClipPath-BHaSLCrX.js";import"./SetGraphicalItem-DVL07t4G.js";import"./getRadiusAndStrokeWidthFromDot-BjbsTAVF.js";import"./ActiveShapeUtils-DdflEQCA.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
