import{R as r}from"./iframe-C6yJYV4z.js";import{R as c}from"./zIndexSlice-mBP7ycwT.js";import{C as d}from"./ComposedChart-6mo15iiQ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DCM5zchE.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BxZZQXD3.js";import"./index-yxNm8k9x.js";import"./index-DRfGxCUi.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DmIaNxK6.js";import"./isWellBehavedNumber-ovfPMeKD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-_g--7_B0.js";import"./axisSelectors-D_pqJ7Ai.js";import"./d3-scale-U4E3X2xZ.js";import"./index-DqnMLpa_.js";import"./index-nciU1bgU.js";import"./renderedTicksSlice-Ju5mjaas.js";import"./index-DhjcBG7u.js";import"./CartesianChart-CP9Fvg-3.js";import"./chartDataContext-E_YlGMud.js";import"./CategoricalChart-e6KCKA8N.js";import"./Layer-C3EX9flk.js";import"./AnimatedItems-5jNEDjqz.js";import"./Label-xmY0FOhv.js";import"./Text-DjSFzWjg.js";import"./DOMUtils-DIjRf9zs.js";import"./useId-BXkBt9SK.js";import"./useBackwardsCompatibleTheme-BmZuK7R_.js";import"./ZIndexLayer-bw7pXUay.js";import"./useAnimationId-C3itl5g8.js";import"./ActivePoints-Dm2yavg5.js";import"./Dot-kJhNeSCF.js";import"./types--kLCfUVs.js";import"./RegisterGraphicalItemId-CCRb1xbW.js";import"./GraphicalItemClipPath-S_9K0RuN.js";import"./SetGraphicalItem-Be6goNI2.js";import"./getRadiusAndStrokeWidthFromDot-C5C4oMko.js";import"./ActiveShapeUtils-B6ISajHR.js";import"./Curve-BUAb8EfH.js";import"./step-C-IligCD.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CR7heWJW.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
