import{R as r}from"./iframe-C2PRwgnl.js";import{R as c}from"./zIndexSlice-weNxwEm8.js";import{C as d}from"./ComposedChart-BLjSf-Hf.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CV-krc7V.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-aJLviuy-.js";import"./throttle-CVlDdGyC.js";import"./index-BtXSjXZr.js";import"./index-BqBIYX05.js";import"./RechartsWrapper-BOct7ur6.js";import"./axisSelectors-nSy-fV9M.js";import"./polarAxisSelectors-DmG4l4yE.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BIUnlP6Z.js";import"./index-BxVmRSNz.js";import"./index-CkiHrneS.js";import"./renderedTicksSlice-FbCZKIWz.js";import"./index-BeFazHyq.js";import"./CartesianChart-CtjN8ua0.js";import"./ZIndexPortal-CKd--WGA.js";import"./CategoricalChart-gCAaZAhY.js";import"./Layer-botuDyHz.js";import"./LabelList-Deq7UXnp.js";import"./Label-DdFUcTtW.js";import"./Text-D4lV4Imp.js";import"./pageBackground-B4m54nd8.js";import"./ZIndexLayer-BWmWIjtz.js";import"./ActivePoints-BH2xo60h.js";import"./Dot-2eC8WQef.js";import"./types-CHq7dG9p.js";import"./activeStyles-a6dnVtfT.js";import"./useAnimationId-Dx5Gkjhg.js";import"./dataEntryStyles-BHwXjzhI.js";import"./Symbols-CiyVK5wN.js";import"./symbol-VU_gnnhL.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-DeBA8bqw.js";import"./getRadiusAndStrokeWidthFromDot-Dzgyitlt.js";import"./ActiveShapeUtils-BV6ZL_JX.js";import"./Curve-CQnefVPR.js";import"./step-Dw_YruiA.js";import"./useEffectiveDataKey-lRQnp3q-.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
