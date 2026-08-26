import{R as r}from"./iframe-n1jsfVDG.js";import{R as c}from"./zIndexSlice-BRlbTYqB.js";import{C as d}from"./ComposedChart-BbpGnHrE.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-brrZ-GjA.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BndXY2H8.js";import"./index-CgFE3bjK.js";import"./index-WXWaFicj.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BAQjLDG_.js";import"./isWellBehavedNumber-51Xh59nn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CtxvIequ.js";import"./axisSelectors-7NZ6PaeE.js";import"./d3-scale-DHoUxLai.js";import"./index-CBp2l__h.js";import"./index-DNYwsh8I.js";import"./renderedTicksSlice-rKTqRgg8.js";import"./index-C2dJWAfM.js";import"./CartesianChart-Dfjy31tx.js";import"./chartDataContext-XRtQdSke.js";import"./CategoricalChart-CYGfKh2e.js";import"./Layer-CoRWBRFX.js";import"./AnimatedItems-CK27PxaM.js";import"./Label-B5dy1Vd6.js";import"./Text-BwTkl3FB.js";import"./DOMUtils-B7JqCpD5.js";import"./useId-CqUHn1t3.js";import"./useBackwardsCompatibleTheme-BrtymnuF.js";import"./ZIndexLayer-B-b1Mp40.js";import"./useAnimationId-DmMej8H7.js";import"./ActivePoints-BgeuL4dW.js";import"./Dot-BWSVmybM.js";import"./types-DxCRAK1R.js";import"./RegisterGraphicalItemId-CfRcyWlO.js";import"./GraphicalItemClipPath-COfUJuyE.js";import"./SetGraphicalItem-DGwR4qus.js";import"./getRadiusAndStrokeWidthFromDot-CpUR_Izt.js";import"./ActiveShapeUtils-D8gDtxNc.js";import"./Curve-B5xOTs2B.js";import"./step-B7eMn8MW.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DJmL9j0_.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const st=["CustomizedLabel"];export{t as CustomizedLabel,st as __namedExportsOrder,pt as default};
