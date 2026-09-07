import{R as r}from"./iframe-BkeN00Xj.js";import{R as c}from"./zIndexSlice-B-x7pTGs.js";import{C as d}from"./ComposedChart-o64gktPG.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Bip2-cjA.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DVvQgSvv.js";import"./index-Ssjmhn91.js";import"./index-Doqq19He.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DZDkJdvH.js";import"./isWellBehavedNumber-DpaF5Qbq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C3Vxgl3Z.js";import"./axisSelectors-CdQeSFob.js";import"./d3-scale-59I2Ahhc.js";import"./index-Bp16jrAu.js";import"./index-CzDQGSqQ.js";import"./renderedTicksSlice-EekJT0xr.js";import"./index-BW_MIuEw.js";import"./CartesianChart-HYPnZu6o.js";import"./chartDataContext-BeegK0cj.js";import"./CategoricalChart-acAC1yFW.js";import"./Layer-CQvSRJEy.js";import"./AnimatedItems-D-Ov5Ds2.js";import"./Label-C5oKPJnD.js";import"./Text-B4YmNBvy.js";import"./DOMUtils-BtNtGSBk.js";import"./useId-CoUZj2D9.js";import"./useBackwardsCompatibleTheme-CO7BXTf3.js";import"./ZIndexLayer-BM7jKjXD.js";import"./useAnimationId-DIIcOQR8.js";import"./ActivePoints-BZpnaHk5.js";import"./Dot-BSZNpi6H.js";import"./types-CHY5UDxi.js";import"./RegisterGraphicalItemId-SBK7zBb4.js";import"./GraphicalItemClipPath-BVRs7DWi.js";import"./SetGraphicalItem-BLpQqeaN.js";import"./getRadiusAndStrokeWidthFromDot-C0jg-2Bd.js";import"./ActiveShapeUtils-KH5PmLPO.js";import"./Curve-CqZmQlC4.js";import"./step-6rSS0kJE.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CDfU_78w.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
