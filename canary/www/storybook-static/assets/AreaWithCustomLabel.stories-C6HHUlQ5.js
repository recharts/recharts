import{R as r}from"./iframe-BbXL7Cr7.js";import{R as c}from"./zIndexSlice-BR49NRPU.js";import{C as d}from"./ComposedChart-CCaJGEZA.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DRHuBbE-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bn8wVsPr.js";import"./index-CvmUWFik.js";import"./index-BqU8wZ1z.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DIGEkxJt.js";import"./isWellBehavedNumber-DUOtRF_5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-IiQ6LAia.js";import"./index-Dax1wg5T.js";import"./index-CN5luugM.js";import"./axisSelectors-BFPpN7bG.js";import"./d3-scale-CN-R3gXh.js";import"./renderedTicksSlice-BsPa3zOZ.js";import"./CartesianChart-DEFHsOHa.js";import"./chartDataContext-HJenhUyy.js";import"./CategoricalChart-D9M8vTvR.js";import"./Layer-D606BzuS.js";import"./AnimatedItems-BMHffIkc.js";import"./Label-BH4Z3dzl.js";import"./Text-C5yxXkZn.js";import"./DOMUtils-rWy1CvzQ.js";import"./useId-Fqq5zcUf.js";import"./useBackwardsCompatibleTheme-DJFjGyq7.js";import"./ZIndexLayer-C89K7jek.js";import"./useAnimationId-CZiH3Yfv.js";import"./ActivePoints-DJMU5OQu.js";import"./Dot-CBGeJdvC.js";import"./types-VwfPPVmd.js";import"./RegisterGraphicalItemId-Cp-8L8hF.js";import"./GraphicalItemClipPath-CSpG8Jrq.js";import"./SetGraphicalItem-BiIYG94Z.js";import"./getRadiusAndStrokeWidthFromDot-BBwYGeYW.js";import"./ActiveShapeUtils-CNVIMFtT.js";import"./Curve-NdHov05C.js";import"./step-DT7n-Jzc.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-4MlBxNSB.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const pt=["CustomizedLabel"];export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
