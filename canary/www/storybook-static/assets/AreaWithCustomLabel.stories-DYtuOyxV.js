import{c as e}from"./iframe-CJZgj0uU.js";import{g as c}from"./zIndexSlice-BZ2O-OQH.js";import{C as d}from"./ComposedChart-CmvcVU8X.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-B-NaJF6I.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BIrrzgtK.js";import"./index-BaU2Z89k.js";import"./index-BRhVkoAq.js";import"./get-BEAZ2r52.js";import"./resolveDefaultProps-FKfcMfmF.js";import"./isWellBehavedNumber-Nplq3bnb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DQ7nKJcr.js";import"./index-CU49z8K0.js";import"./index-KU4xeJqQ.js";import"./renderedTicksSlice-Bd5uuDyd.js";import"./axisSelectors-Q9vNN-fQ.js";import"./d3-scale-DdptYiWa.js";import"./CartesianChart-BaL0sKso.js";import"./chartDataContext-BuQzXvR1.js";import"./CategoricalChart-Q8RRHSJw.js";import"./Curve-Cyl-l43N.js";import"./types-CiRy8kfJ.js";import"./step-DNKj4THz.js";import"./path-DyVhHtw_.js";import"./Layer-ydyUpJJb.js";import"./ReactUtils-GZ1OoiCv.js";import"./Label-CJIrHnSQ.js";import"./Text-D112bEeq.js";import"./DOMUtils-BgafkoVk.js";import"./ZIndexLayer-DPHRw4Ib.js";import"./ActivePoints-IwLpaKOt.js";import"./Dot-BRBzm1sk.js";import"./RegisterGraphicalItemId-Y2xEXS3n.js";import"./GraphicalItemClipPath-DHmOdu8W.js";import"./SetGraphicalItem-xXSm9JS4.js";import"./useAnimationId-Bs6-Zm7y.js";import"./getRadiusAndStrokeWidthFromDot-D1SY7hYV.js";import"./graphicalItemSelectors-CK02F2-J.js";const rt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ot=["CustomizedLabel"];export{t as CustomizedLabel,ot as __namedExportsOrder,rt as default};
