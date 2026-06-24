import{R as e}from"./iframe-DI4HGhHh.js";import{R as i}from"./zIndexSlice-DLsQIX9Y.js";import{C as a}from"./ComposedChart-BT-NJBPH.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DFT4IhYc.js";import{X as s}from"./XAxis-Dj4RjVoP.js";import{Y as c}from"./YAxis-C1Oi2VZJ.js";import{L as d}from"./Line-BIfkn347.js";import{R as g}from"./ReferenceLine-BHS9LCDX.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CAVNBYxE.js";import"./index-BwosMlqm.js";import"./index-B5NU_a6D.js";import"./get-Bfcmt9LS.js";import"./resolveDefaultProps-DLUQOXxb.js";import"./isWellBehavedNumber-BCX7uX26.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DoHqoPfC.js";import"./index-DvTVJIfn.js";import"./index-C0kJRHqc.js";import"./renderedTicksSlice-CGUH_--9.js";import"./axisSelectors-YTXRCpiD.js";import"./d3-scale-CmlQQQpT.js";import"./CartesianChart-Dp7N-Hpx.js";import"./chartDataContext-GaamtoMW.js";import"./CategoricalChart-D5RDPchP.js";import"./CartesianAxis-XgaOnUyy.js";import"./Layer-2I2RJkTJ.js";import"./Text-BxcnHscC.js";import"./DOMUtils-CCgzbXX3.js";import"./Label-BOdAN_xF.js";import"./ZIndexLayer-CAI-vp6k.js";import"./types-BM9AiZnq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-D1vPRm9h.js";import"./step-D4TxsChD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B_Y2HCHw.js";import"./useAnimationId-B5j5oAoh.js";import"./ActivePoints-Br89aa_G.js";import"./Dot--Dziv_M5.js";import"./RegisterGraphicalItemId-C8ygtyRo.js";import"./ErrorBarContext-BHKF_nuF.js";import"./GraphicalItemClipPath-CxUl7p1C.js";import"./SetGraphicalItem-BlwG21oe.js";import"./getRadiusAndStrokeWidthFromDot-DU4jn54H.js";import"./ActiveShapeUtils-1xWFxJ9c.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
