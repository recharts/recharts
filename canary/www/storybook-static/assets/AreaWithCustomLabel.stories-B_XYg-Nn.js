import{R as r}from"./iframe-B5-NOQ5t.js";import{R as c}from"./zIndexSlice-CRh8M764.js";import{C as d}from"./ComposedChart-Cs-WfBMv.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CMnZ66Sg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CzoCHCv3.js";import"./throttle-BmJCRGcn.js";import"./index-BByFyeZE.js";import"./index-B_jQtdqD.js";import"./RechartsWrapper-DlDVaHKU.js";import"./axisSelectors-CoB8fX7y.js";import"./polarAxisSelectors-SkPOKFrV.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BV3y_nyi.js";import"./index-CwdbuGI9.js";import"./index-CyjoC35Z.js";import"./renderedTicksSlice-DXZVnJsv.js";import"./index-Dboi7S9M.js";import"./CartesianChart-CFWWZ1wD.js";import"./ZIndexPortal-BtWSCMSf.js";import"./CategoricalChart-DfZY2tZ6.js";import"./Layer-vSXC9HFp.js";import"./LabelList-D_E_aw3e.js";import"./Label-Buxp0onk.js";import"./Text-B1H13EKo.js";import"./pageBackground-CQjz6Ds_.js";import"./ZIndexLayer-CDTqLj5d.js";import"./ActivePoints-CT1sEpay.js";import"./Dot-Qrt0ET2t.js";import"./types-BMOXg_-b.js";import"./activeStyles-DCKEH4qZ.js";import"./useAnimationId-CsdMGkaP.js";import"./dataEntryStyles-DTbCoLqH.js";import"./Symbols-Ol0rnrkZ.js";import"./symbol-DXpOMYfl.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-OxeVhn_0.js";import"./getRadiusAndStrokeWidthFromDot-t_9z2IoB.js";import"./ActiveShapeUtils-khUUw2eu.js";import"./Curve-JcmdhaiD.js";import"./step-CC8FisnC.js";import"./useEffectiveDataKey-CE1na-4k.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
