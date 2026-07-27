import{R as e}from"./iframe-aNoK1EMe.js";import{R as c}from"./zIndexSlice-DOhDXvjb.js";import{C as d}from"./ComposedChart-ciK3m7lP.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-B1X5xwOq.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-dDtgRmGr.js";import"./index-DU0cxzai.js";import"./index-Bu0CjtZ3.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DbC1kYAP.js";import"./isWellBehavedNumber-DwwkvD-i.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-k_DNRHdW.js";import"./index-D5XON-Gh.js";import"./index-BdDC1fi3.js";import"./renderedTicksSlice-D-IRHrV3.js";import"./axisSelectors-Bs_-tFvB.js";import"./d3-scale-_Xy_yJsZ.js";import"./CartesianChart-9qcKzyck.js";import"./chartDataContext-DZNoVeTg.js";import"./CategoricalChart-xLJxNslX.js";import"./Layer-BCtIHmhS.js";import"./AnimatedItems-b0afIUOt.js";import"./Label-DiB3OAIB.js";import"./Text-Dek-bfvO.js";import"./DOMUtils-B40T5FB1.js";import"./ZIndexLayer-DGcx9JLL.js";import"./useAnimationId-B-ZOGiBc.js";import"./ActivePoints-CZoVwwe_.js";import"./Dot-BDrL_0u-.js";import"./types-Be_2sCPa.js";import"./RegisterGraphicalItemId-DSvg4gFN.js";import"./GraphicalItemClipPath-De0s7P9u.js";import"./SetGraphicalItem-CpE1XAUN.js";import"./getRadiusAndStrokeWidthFromDot-EFIJD7AT.js";import"./ActiveShapeUtils-CWDfkNMB.js";import"./Curve-CJs4LUT2.js";import"./step-vVmdNkhc.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DmUYu0MJ.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
