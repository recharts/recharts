import{R as e}from"./iframe-DiVXU681.js";import{R as i}from"./zIndexSlice-DzaA_87S.js";import{C as a}from"./ComposedChart-Ce0ZmhAi.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-qIMJK8nU.js";import{X as s}from"./XAxis-C3k2I40a.js";import{Y as c}from"./YAxis-DRIG0Uth.js";import{L as d}from"./Line-BlL2BOn4.js";import{R as g}from"./ReferenceLine-Cn4SH0SM.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-TSFzffo4.js";import"./index-DgrTrvqA.js";import"./index-8IQM-0LL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CdAiRIhG.js";import"./isWellBehavedNumber-BX88-Alk.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-wAcW42w2.js";import"./index-Crp3sUc9.js";import"./index-DVcmQSez.js";import"./axisSelectors-D56P7LNb.js";import"./d3-scale-BGRr8R4r.js";import"./renderedTicksSlice-CCTXP0cy.js";import"./CartesianChart-CTSm63aG.js";import"./chartDataContext-DPZzm9Zw.js";import"./CategoricalChart-DJdh8SdX.js";import"./CartesianAxis-pQr6RLfR.js";import"./Layer-BIRlOb6y.js";import"./Text-CCIULR2F.js";import"./DOMUtils-CLkaSbmi.js";import"./Label-0bv0xRMH.js";import"./ZIndexLayer-BbNui_5z.js";import"./types-VNyUreZc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BiKwVLZ_.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BjRrTa61.js";import"./step-CQ2-KwOC.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CmBbc9Cv.js";import"./useAnimationId-CxWNxwEQ.js";import"./ActivePoints-DG4FSK5q.js";import"./Dot-BqazTdoT.js";import"./RegisterGraphicalItemId-CjWwTgFZ.js";import"./ErrorBarContext-DQhhoIiU.js";import"./graphicalItemIdentity-D0Jl2Dn2.js";import"./SetGraphicalItem-CGIfPK7m.js";import"./getRadiusAndStrokeWidthFromDot-BO77BdP0.js";import"./ActiveShapeUtils-DRcrzfDF.js";import"./CartesianScaleHelper-C9Oze4oB.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ce=["Segment"];export{t as Segment,ce as __namedExportsOrder,se as default};
