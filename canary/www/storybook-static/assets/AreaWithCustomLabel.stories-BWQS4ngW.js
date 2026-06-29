import{R as e}from"./iframe-CtCQjsM6.js";import{R as c}from"./zIndexSlice-Dyeq-kTm.js";import{C as d}from"./ComposedChart-DHyW9dZg.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-zpCDE4vr.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-UADZssR3.js";import"./index-bMzOaRnN.js";import"./index-Bc49u6WD.js";import"./get-CXMuCFS1.js";import"./resolveDefaultProps-y277M-17.js";import"./isWellBehavedNumber-DC3h_5lt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BsRB8VD4.js";import"./index-DMhTMs3j.js";import"./index-Dt6Mya9l.js";import"./renderedTicksSlice-B82fdgBY.js";import"./axisSelectors-CBHiYL8s.js";import"./d3-scale-DSObG5R7.js";import"./CartesianChart-DWPXJ9eR.js";import"./chartDataContext-BDCa3fVu.js";import"./CategoricalChart-D-CCIGyN.js";import"./Layer-ikVkc87V.js";import"./AnimatedItems-D-nX9UUI.js";import"./Label-DEKQSx_8.js";import"./Text-CVHSYFxZ.js";import"./DOMUtils-DONZhdVB.js";import"./ZIndexLayer-bXnB7Pr5.js";import"./useAnimationId-BByU_EIU.js";import"./ActivePoints-8IGesqBK.js";import"./Dot-BSPimWYR.js";import"./types-DG_xuUOr.js";import"./RegisterGraphicalItemId-CJP7sNi_.js";import"./GraphicalItemClipPath-BwbwGImN.js";import"./SetGraphicalItem-XJT0KcUL.js";import"./getRadiusAndStrokeWidthFromDot-CdTXnSwA.js";import"./ActiveShapeUtils-sx5PAodz.js";import"./Curve-DqaQE-u7.js";import"./step-DspZ-7xm.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-Dx8FkvhD.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const it=["CustomizedLabel"];export{t as CustomizedLabel,it as __namedExportsOrder,ot as default};
