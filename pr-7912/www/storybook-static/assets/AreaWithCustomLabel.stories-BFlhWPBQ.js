import{R as r}from"./iframe-zVk88q-r.js";import{R as c}from"./zIndexSlice-DfutBn7L.js";import{C as d}from"./ComposedChart-CLoKJB1N.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-ByicrBP8.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BmkgAj5t.js";import"./index-DsALRTV8.js";import"./index-Bk0bK2TA.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B_GPAkFH.js";import"./isWellBehavedNumber-C-ZPk_Xp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C0-bRbC3.js";import"./axisSelectors-CmXBEtTu.js";import"./d3-scale-CFGG9Jl0.js";import"./index-fUo0OINa.js";import"./index-DlbGxR67.js";import"./renderedTicksSlice-BX5u_Wlp.js";import"./index-C7LumEWu.js";import"./CartesianChart-CaeWlYzw.js";import"./chartDataContext-2A6w0qLe.js";import"./CategoricalChart-DJLnAv9C.js";import"./Layer-lcnk2Jvi.js";import"./AnimatedItems-CE9fFFYl.js";import"./Label-CrnAbRyD.js";import"./Text-Nx4ACQwF.js";import"./DOMUtils-Dnj4_Ujh.js";import"./useId-BC8SsZ2L.js";import"./useBackwardsCompatibleTheme-BjS2fGJi.js";import"./ZIndexLayer-r6epNlFr.js";import"./useAnimationId-DztKFKRO.js";import"./ActivePoints-D0FJzWSP.js";import"./Dot-DByu-vHs.js";import"./types-gJ-qKTie.js";import"./RegisterGraphicalItemId-DbfLY7XL.js";import"./GraphicalItemClipPath-BL0H_9p-.js";import"./SetGraphicalItem-1sdGamMS.js";import"./getRadiusAndStrokeWidthFromDot-BohBFAZA.js";import"./ActiveShapeUtils-a-OI7kZz.js";import"./Curve-CDtDqQyg.js";import"./step-CBXY0TZz.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-D7Hr4JLm.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
