import{R as r}from"./iframe-BhiOFyfH.js";import{R as c}from"./zIndexSlice-WFdO_Wlf.js";import{C as d}from"./ComposedChart-BRF7api-.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BMKti1Bl.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BBaDx3dP.js";import"./index-BRJFlVc0.js";import"./index-DeYpMxlR.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BHk6Yj6z.js";import"./isWellBehavedNumber-BwlogVL6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B2d-0bYl.js";import"./index-BT9oMJbA.js";import"./index-DJy0Duu-.js";import"./axisSelectors-Bl2dPHcW.js";import"./d3-scale-C-h-rPXJ.js";import"./renderedTicksSlice-zx9Xm1Pt.js";import"./CartesianChart-B6R4HcNL.js";import"./chartDataContext-BhguihgP.js";import"./CategoricalChart-DcSIPsvk.js";import"./Layer-Ba5yNHO4.js";import"./AnimatedItems-Dz4w2Slg.js";import"./Label-CAt1bZso.js";import"./Text-BMsFzFUq.js";import"./DOMUtils-BcE_Ruj2.js";import"./useId-BRnf_4WU.js";import"./useBackwardsCompatibleTheme-DVBvH0yy.js";import"./ZIndexLayer-CI2RHWLO.js";import"./useAnimationId-DyRYr1Ls.js";import"./ActivePoints-CGIfG4Xx.js";import"./Dot-CQ3jSuei.js";import"./types-BWOiEP2_.js";import"./RegisterGraphicalItemId-fX9aZfoT.js";import"./GraphicalItemClipPath-CDXt4g8R.js";import"./SetGraphicalItem-DxySj5XD.js";import"./getRadiusAndStrokeWidthFromDot-_1HcDU-Q.js";import"./ActiveShapeUtils-DWii8vVl.js";import"./Curve-CpWAvzLi.js";import"./step-DMp5D_NX.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CaeWAIXx.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const pt=["CustomizedLabel"];export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
