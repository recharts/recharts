import{R as r}from"./iframe-BoZGnJw3.js";import{R as c}from"./zIndexSlice-a6rFVYjz.js";import{C as d}from"./ComposedChart-BoAZL9SR.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-bVddUr4D.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D8QzFlGf.js";import"./throttle-DtDTnxHB.js";import"./index-WbIhOddD.js";import"./index-XXsuRe2m.js";import"./RechartsWrapper-WWWx-rVQ.js";import"./axisSelectors-D380Rkbk.js";import"./polarAxisSelectors-DFgK4OY0.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CiyCJ5ON.js";import"./index-CTKnxowE.js";import"./index-D9DvxSgb.js";import"./renderedTicksSlice-BtiSzaGq.js";import"./index-Bzl_gDx-.js";import"./fillDefinitions-OcelR7By.js";import"./CartesianChart-6fSva3n5.js";import"./ZIndexPortal-KFQo0SKW.js";import"./CategoricalChart-C5KKs8ZF.js";import"./Layer-DWrdDLVq.js";import"./LabelList-DN0FQ104.js";import"./Label-hjfvRRRs.js";import"./Text-Cs6Ml33D.js";import"./DOMUtils-BLzuTGwo.js";import"./ZIndexLayer-D6tdIhXp.js";import"./ActivePoints-DFbmabNT.js";import"./Dot-DvyXLuZB.js";import"./types-VJa2wa64.js";import"./activeStyles-B-PjepTA.js";import"./useAnimationId-DhSaM75t.js";import"./dataEntryStyles-BZaOAKnN.js";import"./Symbols-DeYNYvA0.js";import"./symbol-P9MXa4Nc.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-8abau_IG.js";import"./getRadiusAndStrokeWidthFromDot-CXVA2gr-.js";import"./ActiveShapeUtils-9rzgq6Y4.js";import"./Curve-Cwz00roS.js";import"./step-DM17TeVN.js";import"./useEffectiveDataKey-D7W7vL8E.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,st as __namedExportsOrder,pt as default};
