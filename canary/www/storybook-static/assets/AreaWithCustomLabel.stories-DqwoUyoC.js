import{R as e}from"./iframe-ge4_mRTY.js";import{R as c}from"./zIndexSlice-uDWjDJHd.js";import{C as d}from"./ComposedChart-BCRhkK5V.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-JDBhDUQG.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-5caQeXVN.js";import"./index-DZPpWsc8.js";import"./index-BWkGghDn.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-zgTsAR7U.js";import"./isWellBehavedNumber-D2jfZHGG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DrRaVIDn.js";import"./index-DroDtVMI.js";import"./index-C2Y_Hicx.js";import"./renderedTicksSlice-BAzheGmb.js";import"./axisSelectors-Cxx4umpa.js";import"./d3-scale-DAQlT4KL.js";import"./CartesianChart-BuotdUK2.js";import"./chartDataContext-pSMyX_Ym.js";import"./CategoricalChart-Brm-3Wpy.js";import"./Layer-CMf1Vf_h.js";import"./AnimatedItems-DTVko9-M.js";import"./Label-DHHP6jol.js";import"./Text-D0QrHV93.js";import"./DOMUtils-B5z_Rz2Y.js";import"./ZIndexLayer-nB6oQ6-0.js";import"./useAnimationId-BwVBlHti.js";import"./ActivePoints-D4PeEGz4.js";import"./Dot-CSi-hwhf.js";import"./types-BGJIvFfK.js";import"./RegisterGraphicalItemId-uw1PY0zP.js";import"./GraphicalItemClipPath-B2dCpKux.js";import"./SetGraphicalItem-CNlJ3f0Q.js";import"./graphicalItemIdentity-UY1iR6Cu.js";import"./ActiveShapeUtils-SugLVfR8.js";import"./Curve-DgHNdRhX.js";import"./step-DgphAjx2.js";import"./path-DyVhHtw_.js";import"./RechartsThemeContext-Z1jjPkTn.js";import"./graphicalItemSelectors-WhTa9SlS.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
