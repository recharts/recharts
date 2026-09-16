import{R as r}from"./iframe-130qk4m_.js";import{R as c}from"./zIndexSlice-DRUK-Dg-.js";import{C as d}from"./ComposedChart-CjFOZhuN.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-B7PFFdB7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-kCNuVuJ-.js";import"./index-CsWcnfda.js";import"./index-BcLoK3PR.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CYRr0Ie5.js";import"./isWellBehavedNumber-DjBeGij7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bo40Do7U.js";import"./axisSelectors-X5KptGXH.js";import"./d3-scale-Dk5HPyUF.js";import"./index-CrvbTTow.js";import"./index-Bjllb2VH.js";import"./renderedTicksSlice-Cmod0XxC.js";import"./index-DEOEohuH.js";import"./CartesianChart-BIfw6B_y.js";import"./chartDataContext-DcIZimMl.js";import"./CategoricalChart-BUcyv7Rs.js";import"./Layer-Cyv1dWj2.js";import"./AnimatedItems-CnmA861Y.js";import"./Label-BTScYLJC.js";import"./Text-BSQyPF-I.js";import"./DOMUtils-nn98Njua.js";import"./useId-DN63oQqC.js";import"./useBackwardsCompatibleTheme-BFLDUGtw.js";import"./ZIndexLayer-BCmai4o5.js";import"./useAnimationId-NcjSJtDX.js";import"./ActivePoints-B9QqV80c.js";import"./Dot-DMc1VAH7.js";import"./types-Da5i9wCB.js";import"./RegisterGraphicalItemId-Cj8G_tD9.js";import"./GraphicalItemClipPath-CEUDXBSP.js";import"./SetGraphicalItem-fFkzzaD8.js";import"./getRadiusAndStrokeWidthFromDot-CJ_8wi76.js";import"./ActiveShapeUtils-CM6xxOZA.js";import"./Curve-zMO2mb05.js";import"./step-CzM1y9Rf.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-UHVfOAjT.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
