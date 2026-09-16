import{R as r}from"./iframe-ZXtfb4yD.js";import{R as c}from"./zIndexSlice-BYWdHlTe.js";import{C as d}from"./ComposedChart-C5IMSRfW.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BAF9dlw4.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-UQol_oMR.js";import"./index-SIPxA2ka.js";import"./index-Bo6RSdvh.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-xIIdHmm9.js";import"./isWellBehavedNumber-DxKoG7Ba.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DeOd3865.js";import"./axisSelectors-B-7UnAhK.js";import"./d3-scale-CLk4WDw9.js";import"./index-BxR6IAN7.js";import"./index-CZ8YJbDi.js";import"./renderedTicksSlice-D1lcrg0m.js";import"./index-Bj13Gnlq.js";import"./CartesianChart-yzowS7n9.js";import"./chartDataContext-Vgws8ib_.js";import"./CategoricalChart-DidrDbM3.js";import"./Layer-BNcbfxWn.js";import"./AnimatedItems-sQcK0Cnf.js";import"./Label-C_XzWtLw.js";import"./Text-DV_FynOi.js";import"./DOMUtils-C0C9d7iI.js";import"./useId-0Gl7JyMf.js";import"./useBackwardsCompatibleTheme-C4wl67U3.js";import"./ZIndexLayer-Ck2jrevN.js";import"./useAnimationId-BzcgW_0X.js";import"./ActivePoints-DR8A-WKS.js";import"./Dot-DNV1GHEu.js";import"./types-D_Nat2yf.js";import"./RegisterGraphicalItemId-BLTTAUNU.js";import"./GraphicalItemClipPath-Du8p1Oou.js";import"./SetGraphicalItem-QMczFyB9.js";import"./getRadiusAndStrokeWidthFromDot-B0p8dzOs.js";import"./ActiveShapeUtils-C4fIJN7R.js";import"./Curve-DVYTdeVn.js";import"./step-CUKBWZW0.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DEuXq7FQ.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
