import{R as r}from"./iframe-_TSN2GeP.js";import{R as c}from"./zIndexSlice-D96uBoAp.js";import{C as d}from"./ComposedChart-z5izNflA.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-WhnSkljG.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cil6wORT.js";import"./index-CCkkuyTr.js";import"./index-CSNAsU0S.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D9QDYjax.js";import"./isWellBehavedNumber-BNbTdqm3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BXs5OB5c.js";import"./axisSelectors-Dd3nK3xc.js";import"./d3-scale-BkrsrexO.js";import"./index-DMuyjDG0.js";import"./index-lnFbewhe.js";import"./renderedTicksSlice-9FoMOBwW.js";import"./index-BghYN9OX.js";import"./CartesianChart-CBmykTvx.js";import"./chartDataContext-Beyv08KU.js";import"./CategoricalChart-DrCkbeNv.js";import"./Layer-9vgq1u7o.js";import"./AnimatedItems-DzytQgaE.js";import"./Label-mOwsaJBj.js";import"./Text-E_mkl092.js";import"./DOMUtils-FVlzESpl.js";import"./useId-BhIopQFv.js";import"./useBackwardsCompatibleTheme-B-7Qbbn2.js";import"./ZIndexLayer-CuHtjJTp.js";import"./useAnimationId-JMLdgXcg.js";import"./ActivePoints-CoOgGNlR.js";import"./Dot-DYuabF4m.js";import"./types-DD8CfvEw.js";import"./RegisterGraphicalItemId-DtZ0Q-pq.js";import"./GraphicalItemClipPath-CV0_mPKt.js";import"./SetGraphicalItem-BDNu96CY.js";import"./getRadiusAndStrokeWidthFromDot-CAf45XRU.js";import"./ActiveShapeUtils-B-Is-yHc.js";import"./Curve-BfZHkOXV.js";import"./step-B86fSev8.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-D0CKpQKL.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
