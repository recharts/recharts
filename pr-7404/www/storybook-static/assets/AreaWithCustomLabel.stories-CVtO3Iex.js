import{R as e}from"./iframe-DeM0Qb4B.js";import{R as c}from"./zIndexSlice-CiNLGVRc.js";import{C as d}from"./ComposedChart-Q8wzdF4e.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CxWCqvn6.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CXrDBfBc.js";import"./index-BsvTaB6O.js";import"./index-BeHf8kjF.js";import"./get-CMIg51n-.js";import"./resolveDefaultProps-CHkmO4Nn.js";import"./isWellBehavedNumber-Dt1ZDNIe.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bw4I8ksO.js";import"./index-D_HWn2_u.js";import"./index-B-tkzYsG.js";import"./renderedTicksSlice-l4NOSov1.js";import"./axisSelectors-DWmGSiam.js";import"./d3-scale-BzB7iPcR.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Bfusz6lr.js";import"./chartDataContext-HoVJk3bG.js";import"./CategoricalChart-nLEaw9lU.js";import"./Layer-B3W7tn4T.js";import"./AnimatedItems-q3oAcZv4.js";import"./Label-C5gMwwTi.js";import"./Text-BRAU_A6N.js";import"./DOMUtils-D2W98joL.js";import"./ZIndexLayer-DorZCPdG.js";import"./useAnimationId-PwiLcg7B.js";import"./ActivePoints-B-QpMSVH.js";import"./Dot-DnzKtKhK.js";import"./types-C10ohCRK.js";import"./RegisterGraphicalItemId-CqW9ab1A.js";import"./GraphicalItemClipPath-BHo-wJHw.js";import"./SetGraphicalItem-zGGg2ijs.js";import"./getRadiusAndStrokeWidthFromDot-DKEbDMSV.js";import"./ActiveShapeUtils-BOazUucV.js";import"./Curve-DAs23S9W.js";import"./step-B11PQnh8.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DaoaIbjQ.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
