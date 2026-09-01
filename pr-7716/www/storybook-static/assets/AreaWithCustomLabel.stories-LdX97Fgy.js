import{R as r}from"./iframe-eCr2-59Z.js";import{R as c}from"./zIndexSlice-CD7Nzmbk.js";import{C as d}from"./ComposedChart-BRMyWNIf.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-C-IcoJcn.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CHiOBW5g.js";import"./index-DlVaZeCX.js";import"./index-CDbn5IN3.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CLrpEwf5.js";import"./isWellBehavedNumber-BX5cDItw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DoeZcTzK.js";import"./axisSelectors-XgUrcrj-.js";import"./d3-scale-DSuKdHKR.js";import"./index-D2uCi-Qk.js";import"./index-CyK8wlGY.js";import"./renderedTicksSlice-BlPrZ01d.js";import"./index-BuNBM-8V.js";import"./CartesianChart-DC1yVdgS.js";import"./chartDataContext-BNVmIje_.js";import"./CategoricalChart-w4Nfi_R8.js";import"./Layer-B9Pm5ax2.js";import"./AnimatedItems-ObasoevI.js";import"./Label-Dt0yALiM.js";import"./Text-Dt8yoLTw.js";import"./DOMUtils-CvaVkNT1.js";import"./useId-wEfkqppv.js";import"./useBackwardsCompatibleTheme-chYhM6Hr.js";import"./ZIndexLayer-t0OZMtls.js";import"./useAnimationId-BzRkh0x1.js";import"./ActivePoints-Cr5YS-RN.js";import"./Dot-C_rZA8Hd.js";import"./types-CkIcctJW.js";import"./RegisterGraphicalItemId-C5jGdxAH.js";import"./GraphicalItemClipPath-C8yNHMes.js";import"./SetGraphicalItem-zq2UkTvM.js";import"./getRadiusAndStrokeWidthFromDot-BYtBcAc6.js";import"./ActiveShapeUtils-9F7-N6Ps.js";import"./Curve-_JaX0enx.js";import"./step-DPSpBZpB.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Dvk0pZo8.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
