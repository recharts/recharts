import{R as e}from"./iframe-BiXVY0YN.js";import{R as i}from"./zIndexSlice-nY6JNSg8.js";import{C as a}from"./ComposedChart-Cf4jkg33.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DOHYVCTU.js";import{X as s}from"./XAxis-8aOHTtEo.js";import{Y as c}from"./YAxis-Da5Yhwpa.js";import{L as d}from"./Line-DjzxsS4q.js";import{R as g}from"./ReferenceLine-BZXiF7uq.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Bguoov5l.js";import"./index-nFhQ5GlG.js";import"./index-C9pEG8B_.js";import"./get-DSfNO7n4.js";import"./resolveDefaultProps-DD4XGInB.js";import"./isWellBehavedNumber-DE5idxcf.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C7VFUx7Q.js";import"./index-BDCsY1Bp.js";import"./index-PSniF_G7.js";import"./renderedTicksSlice-D3zVHdBs.js";import"./axisSelectors-aUKbGV01.js";import"./d3-scale-Bqjw06G0.js";import"./string-B6fdYHAA.js";import"./CartesianChart-D3egFHKO.js";import"./chartDataContext-CjUfDHdj.js";import"./CategoricalChart-BzNcO88n.js";import"./CartesianAxis-eCQKtisH.js";import"./Layer-uuEILT3S.js";import"./Text-DmK0i7Bz.js";import"./DOMUtils-C2cF8Szu.js";import"./Label-BJ6MA63M.js";import"./ZIndexLayer-6ebEplbW.js";import"./types-CLXMlpTC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-D7wuzLSQ.js";import"./step-BzaqppXW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DfhrJO_Z.js";import"./useAnimationId-CfBicigm.js";import"./ActivePoints-B-SHt4Wz.js";import"./Dot-BnLwvEMd.js";import"./RegisterGraphicalItemId-MDxIerXT.js";import"./ErrorBarContext-DrwdD_lh.js";import"./GraphicalItemClipPath-DNkkSszT.js";import"./SetGraphicalItem-AeS5weMQ.js";import"./getRadiusAndStrokeWidthFromDot-LZlKw0gF.js";import"./ActiveShapeUtils-RN-LxFg0.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
