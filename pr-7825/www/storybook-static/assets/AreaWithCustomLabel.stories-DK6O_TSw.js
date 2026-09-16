import{R as r}from"./iframe-DlBA_NHD.js";import{R as c}from"./zIndexSlice-BOYVZGeR.js";import{C as d}from"./ComposedChart-C_8xlH-x.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-LD6PtKXD.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-EeT9c_n_.js";import"./index-2M50Q2uq.js";import"./index-CsNZB3UM.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C8Ozokz2.js";import"./isWellBehavedNumber-BHQR8F7C.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-hVJCe5PM.js";import"./axisSelectors-CON7ryxt.js";import"./d3-scale-nBoiSLy0.js";import"./index-Bc4bnspn.js";import"./index-BgT2sRhI.js";import"./renderedTicksSlice-BAGWAjRI.js";import"./index-B9Sew5zo.js";import"./CartesianChart-DNfpc-WW.js";import"./chartDataContext-Dz5AUJl-.js";import"./CategoricalChart-YMws6pgL.js";import"./Layer-DLKMiHzQ.js";import"./AnimatedItems-KG4Q9B6N.js";import"./Label-Bdz7xSee.js";import"./Text-CICH4fLL.js";import"./DOMUtils-B-Y8jIku.js";import"./useId-DfZYzD58.js";import"./useBackwardsCompatibleTheme-DZYIoyAk.js";import"./ZIndexLayer-R1mFVhfI.js";import"./useAnimationId-ZOIa2F-P.js";import"./ActivePoints-B_ryvrm8.js";import"./Dot-coVzMkTm.js";import"./types-CqsOLULy.js";import"./RegisterGraphicalItemId-DYXz-Xt3.js";import"./GraphicalItemClipPath-CLhUFps9.js";import"./SetGraphicalItem-0kKuUivG.js";import"./getRadiusAndStrokeWidthFromDot-CuoUyQpF.js";import"./ActiveShapeUtils-BF0jq83h.js";import"./Curve-DRH1VSH_.js";import"./step-BzPuQicN.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DwrMS_39.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
