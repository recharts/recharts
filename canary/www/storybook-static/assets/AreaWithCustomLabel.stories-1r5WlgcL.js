import{R as r}from"./iframe-Dk9ZDdT1.js";import{R as c}from"./zIndexSlice-DeceblpS.js";import{C as d}from"./ComposedChart-BKh5yr5N.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CuEIbyhZ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DIOOZof0.js";import"./index-CmUfEz5q.js";import"./index-B2rutIU6.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-zYTWecoa.js";import"./isWellBehavedNumber-CxvtDvRb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DP2ymT_2.js";import"./axisSelectors-DxLef304.js";import"./d3-scale-MpKXBNtT.js";import"./index-BxlkNIur.js";import"./index-bvujDpj7.js";import"./renderedTicksSlice-Ckrd08To.js";import"./index-DbhjdF6k.js";import"./CartesianChart-DIP7sg4A.js";import"./chartDataContext-QSp1AmWQ.js";import"./CategoricalChart-Bx3cIM0F.js";import"./Layer-DmyqVj_Z.js";import"./AnimatedItems-BJxfKwUv.js";import"./Label-B5fu-9Ux.js";import"./Text-DxLESXkZ.js";import"./DOMUtils-BpNuC4xp.js";import"./useId-DehfeINH.js";import"./useBackwardsCompatibleTheme-C4vQm8Qy.js";import"./ZIndexLayer-DeueZom8.js";import"./useAnimationId-Br2uK6cb.js";import"./ActivePoints-FU3V29Uc.js";import"./Dot-Dxbx8gos.js";import"./types-B5p8Vh7N.js";import"./RegisterGraphicalItemId-z6QxmQfF.js";import"./GraphicalItemClipPath-CdL4vBCz.js";import"./SetGraphicalItem-BbnWj2u0.js";import"./getRadiusAndStrokeWidthFromDot-CO6bt368.js";import"./ActiveShapeUtils-EOWKKtqz.js";import"./Curve-1m4xWofF.js";import"./step-CLhWgX2G.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BJFtW09z.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
