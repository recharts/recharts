import{R as e}from"./iframe-DiVXU681.js";import{R as c}from"./zIndexSlice-DzaA_87S.js";import{C as d}from"./ComposedChart-Ce0ZmhAi.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-FpUVBUik.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-TSFzffo4.js";import"./index-DgrTrvqA.js";import"./index-8IQM-0LL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CdAiRIhG.js";import"./isWellBehavedNumber-BX88-Alk.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-wAcW42w2.js";import"./index-Crp3sUc9.js";import"./index-DVcmQSez.js";import"./axisSelectors-D56P7LNb.js";import"./d3-scale-BGRr8R4r.js";import"./renderedTicksSlice-CCTXP0cy.js";import"./CartesianChart-CTSm63aG.js";import"./chartDataContext-DPZzm9Zw.js";import"./CategoricalChart-DJdh8SdX.js";import"./Layer-BIRlOb6y.js";import"./AnimatedItems-CmBbc9Cv.js";import"./Label-0bv0xRMH.js";import"./Text-CCIULR2F.js";import"./DOMUtils-CLkaSbmi.js";import"./ZIndexLayer-BbNui_5z.js";import"./useAnimationId-CxWNxwEQ.js";import"./ActivePoints-DG4FSK5q.js";import"./Dot-BqazTdoT.js";import"./types-VNyUreZc.js";import"./RegisterGraphicalItemId-CjWwTgFZ.js";import"./graphicalItemIdentity-D0Jl2Dn2.js";import"./SetGraphicalItem-CGIfPK7m.js";import"./getRadiusAndStrokeWidthFromDot-BO77BdP0.js";import"./ActiveShapeUtils-DRcrzfDF.js";import"./Curve-BjRrTa61.js";import"./step-CQ2-KwOC.js";import"./path-DyVhHtw_.js";import"./RechartsThemeContext-BiKwVLZ_.js";import"./graphicalItemSelectors-BrOmBPmn.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const at=["CustomizedLabel"];export{t as CustomizedLabel,at as __namedExportsOrder,it as default};
