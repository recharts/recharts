import{R as r}from"./iframe-CxHJIaxn.js";import{R as c}from"./zIndexSlice-B4J4SBJt.js";import{C as d}from"./ComposedChart-ZJvCku8z.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BH_qZkhq.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-VB2vAzvZ.js";import"./get-CjriyByo.js";import"./throttle-zrHO1Lk3.js";import"./index-CTXNW52Q.js";import"./index-CCCil_M9.js";import"./RechartsWrapper-lHGqaVDW.js";import"./axisSelectors-DToVA1z_.js";import"./polarAxisSelectors-Cypa3mep.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-AJjDHMaN.js";import"./index-DATl4CJn.js";import"./index-CNK9YebA.js";import"./renderedTicksSlice-BLYVCU7c.js";import"./index-WkAKiv7J.js";import"./fillDefinitions-DRREg7Kz.js";import"./CartesianChart-BVZvuLTX.js";import"./chartDataContext-DfmCl9OG.js";import"./CategoricalChart-DlLRA4vO.js";import"./getRadiusAndStrokeWidthFromDot-D_HaNWL6.js";import"./Layer-CkJdGJLp.js";import"./dataEntryStyles-DnDN_vpi.js";import"./Label-M_CthLgf.js";import"./Text-BkIUM7GL.js";import"./ZIndexLayer-B_7zdP5R.js";import"./ActivePoints-R1_oETV-.js";import"./Dot-Dme7I_-s.js";import"./types-BGw9U51_.js";import"./activeStyles-BwCU-iTy.js";import"./useAnimationId-D_Yg6oAr.js";import"./Symbols-IHTx3wL0.js";import"./symbol-C32Av6Of.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-Cp9BSKiw.js";import"./ActiveShapeUtils-BHoE966L.js";import"./Curve-D6sUhEtt.js";import"./step-DotuH85W.js";import"./useEffectiveDataKey-BI2pOOYW.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,mt as __namedExportsOrder,at as default};
