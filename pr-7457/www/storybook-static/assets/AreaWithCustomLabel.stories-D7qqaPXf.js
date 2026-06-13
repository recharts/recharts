import{R as e}from"./iframe-ii_SdKaT.js";import{R as c}from"./zIndexSlice-CewrGiZi.js";import{C as d}from"./ComposedChart-BqK8fMbF.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-B6xh6LEm.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BRK5VplU.js";import"./index-CipO9bHT.js";import"./index-C9rA4SBW.js";import"./get-IlujCcRJ.js";import"./resolveDefaultProps-DmtqLCBR.js";import"./isWellBehavedNumber-Bl4DTDWz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BJ7nVo9I.js";import"./index-CoHu65TP.js";import"./index-BWUxHoQX.js";import"./renderedTicksSlice-6QIQv7lN.js";import"./axisSelectors-BEJlbTgh.js";import"./d3-scale-DqldvK9e.js";import"./string-B6fdYHAA.js";import"./CartesianChart-hQrjvxNc.js";import"./chartDataContext-WEDyGrAX.js";import"./CategoricalChart-BC-K0qUt.js";import"./Layer-1o6wJcjz.js";import"./AnimatedItems-Ddier9mI.js";import"./Label-CWAFalVX.js";import"./Text-D6jUUcir.js";import"./DOMUtils-CspLYEuU.js";import"./ZIndexLayer-C_pljZlN.js";import"./useAnimationId-DETjp9PR.js";import"./ActivePoints-DUYbyaX_.js";import"./Dot-D93Ls2Za.js";import"./types-CROtPh6T.js";import"./RegisterGraphicalItemId-Bd8rL4_6.js";import"./GraphicalItemClipPath-BIR1mLdK.js";import"./SetGraphicalItem-Ke19tpjU.js";import"./getRadiusAndStrokeWidthFromDot-ouGtJSmE.js";import"./ActiveShapeUtils-_FaeFiVy.js";import"./Curve-CvjftyU5.js";import"./step-CynPry_M.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BvscI3Fb.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
