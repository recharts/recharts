import{R as e}from"./iframe-D-W27Aye.js";import{R as c}from"./zIndexSlice-DGQfYPGt.js";import{C as d}from"./ComposedChart-DJkZQXCm.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-9sUzuR5w.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CbhGTgvn.js";import"./index-CWu2xMKi.js";import"./index-DLfEBe63.js";import"./get-BDQ-VaUY.js";import"./resolveDefaultProps-BroczFsN.js";import"./isWellBehavedNumber-Du_dam65.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D3NlvT8L.js";import"./index-DE37ce3k.js";import"./index-Cnxyq0Mm.js";import"./renderedTicksSlice-CN4MtC-5.js";import"./axisSelectors-BvFrWOiO.js";import"./d3-scale-BQjrtTI1.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BPw6EL6m.js";import"./chartDataContext-mE2SEo_G.js";import"./CategoricalChart-CsqvwlsS.js";import"./Layer-BBvq20uw.js";import"./AnimatedItems-DVypXaLh.js";import"./Label-xP0TYJi-.js";import"./Text-Ch5M4wnL.js";import"./DOMUtils-ClafKG0n.js";import"./ZIndexLayer-g9kGWnPX.js";import"./useAnimationId-Bs22yXlG.js";import"./ActivePoints-DIioQ5_v.js";import"./Dot-BRpnxUKp.js";import"./types-DQNR05Kl.js";import"./RegisterGraphicalItemId-EzN9TJ6u.js";import"./GraphicalItemClipPath-C_UztI7f.js";import"./SetGraphicalItem-50FO49Qg.js";import"./getRadiusAndStrokeWidthFromDot-DqIa6S6d.js";import"./ActiveShapeUtils-D1Ceary0.js";import"./Curve-CDWlC7vY.js";import"./step-e-ZH1_z5.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-8PqpMo0U.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
