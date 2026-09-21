import{R as r}from"./iframe-C_u1NPXq.js";import{R as c}from"./zIndexSlice-D4vNODax.js";import{C as d}from"./ComposedChart-C2EFUFrY.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-D-NKb47m.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B6uw1bdh.js";import"./index-C5_PYkqz.js";import"./index-BAmjystd.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Du-QS2vu.js";import"./isWellBehavedNumber-BXJecvkc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BFhYeyxK.js";import"./axisSelectors-ClVjVkSn.js";import"./d3-scale-CA32_7ZH.js";import"./index-DFS_VDHO.js";import"./index-BGZsApoZ.js";import"./renderedTicksSlice-7TbUk5kV.js";import"./index-ChjG3lJf.js";import"./CartesianChart-CHKIuE1P.js";import"./chartDataContext-CkGBCjv4.js";import"./CategoricalChart-B7Ubj1Y5.js";import"./Layer-B3fcXYMK.js";import"./AnimatedItems-BBge8Oki.js";import"./Label-4YL6LIZD.js";import"./Text-V-XbkyPz.js";import"./DOMUtils-COAF9wVa.js";import"./useId-DJNZORW6.js";import"./useBackwardsCompatibleTheme-nG_PFK3f.js";import"./ZIndexLayer-D3gVBGpt.js";import"./useAnimationId-GgyVLnbG.js";import"./ActivePoints-CI6FJtyy.js";import"./Dot-CycumfnH.js";import"./types-CMh3udVy.js";import"./RegisterGraphicalItemId-eQxwtpTA.js";import"./GraphicalItemClipPath-j2cLfrt9.js";import"./SetGraphicalItem-DbKh9IZb.js";import"./getRadiusAndStrokeWidthFromDot-tymVsWd9.js";import"./ActiveShapeUtils-BCBUr_LW.js";import"./Curve-CaQ3Xb8z.js";import"./step-Dh3cXytf.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DhPf_S2E.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
