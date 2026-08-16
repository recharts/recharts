import{R as e}from"./iframe-CdVkyLHS.js";import{R as i}from"./zIndexSlice-GOyP9Zss.js";import{C as a}from"./ComposedChart-CG8DoDIZ.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DrJHjPfQ.js";import{X as s}from"./XAxis-CRNnSUZ9.js";import{Y as c}from"./YAxis-BxGuypq0.js";import{L as d}from"./Line-Piz3hUqR.js";import{R as g}from"./ReferenceLine-DD3E2eEH.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CdLGvlu3.js";import"./index-QyElv-Xn.js";import"./index-DvCc_EAq.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CH_tZ1CV.js";import"./isWellBehavedNumber-CukO4dTL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DJIttxHk.js";import"./index-OMOk9pzv.js";import"./index-DysuFDaN.js";import"./axisSelectors-BJboZDv2.js";import"./d3-scale-C_ybSH9a.js";import"./renderedTicksSlice-nlBTJT3n.js";import"./CartesianChart-DH_QKR3e.js";import"./chartDataContext-vMtbxlvm.js";import"./CategoricalChart-Bmub6W6K.js";import"./CartesianAxis-Cg3yJD5r.js";import"./Layer-DsEuCMxp.js";import"./Text-Bg49R2O8.js";import"./DOMUtils-yV6fdCO6.js";import"./useBackwardsCompatibleTheme-BUV415Lc.js";import"./Label-Cwb8kt4E.js";import"./ZIndexLayer-CnILDHp4.js";import"./types-D7MUQAXd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BU_gswLL.js";import"./step-CTvr7swL.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B_5qg-lC.js";import"./useAnimationId-CnyNJ0d7.js";import"./ActivePoints-D2jscU_r.js";import"./Dot-J0nM858J.js";import"./RegisterGraphicalItemId-D7VKY1D2.js";import"./ErrorBarContext-BWl2zb09.js";import"./GraphicalItemClipPath-kU06yTtA.js";import"./SetGraphicalItem-CKTCd1Uv.js";import"./getRadiusAndStrokeWidthFromDot-Clc9jd4p.js";import"./ActiveShapeUtils-C96E8Hlz.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ce={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const de=["Segment"];export{t as Segment,de as __namedExportsOrder,ce as default};
