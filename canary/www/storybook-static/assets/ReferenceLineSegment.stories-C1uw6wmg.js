import{R as e}from"./iframe-Bs1YcocL.js";import{R as i}from"./zIndexSlice-t-gzu3GV.js";import{C as a}from"./ComposedChart-BwzNzHHG.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BCkiCSha.js";import{X as s}from"./XAxis-CkMNNwML.js";import{Y as c}from"./YAxis-DPiwbt5y.js";import{L as d}from"./Line-DDgei-_j.js";import{R as g}from"./ReferenceLine-b7t-LNCu.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle--2-Gh3Mm.js";import"./index-UwTvLFMH.js";import"./index-BRumuJ4r.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BnOzFFcK.js";import"./isWellBehavedNumber-BSPOqlf0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DZyIyn43.js";import"./index-D9ADN89d.js";import"./index-CKxampel.js";import"./renderedTicksSlice-BTmhgiNO.js";import"./axisSelectors-DMllfokS.js";import"./d3-scale-37tvwNAS.js";import"./CartesianChart-CcQU6wxH.js";import"./chartDataContext-CPXqqfzF.js";import"./CategoricalChart-WxCIVI_m.js";import"./CartesianAxis-D8VsSsOs.js";import"./Layer-C-8BEA-e.js";import"./Text-BklYvR7D.js";import"./DOMUtils-cVtaUTCs.js";import"./Label-XTRgfpgH.js";import"./ZIndexLayer-CN0cINvr.js";import"./types-DYZE7YT1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-Bk-KwfJi.js";import"./step-Bu2gjmXw.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BJx7sqXo.js";import"./useAnimationId-BX2lcr_s.js";import"./ActivePoints-DYwvnYoP.js";import"./Dot-D62SIbzc.js";import"./RegisterGraphicalItemId-CjkTx9Ub.js";import"./ErrorBarContext-CMWCgNCI.js";import"./GraphicalItemClipPath-DVFJRr4Y.js";import"./SetGraphicalItem-Bacz05Gx.js";import"./getRadiusAndStrokeWidthFromDot-3DBOSJ59.js";import"./ActiveShapeUtils-CQH8McUN.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
