import{R as r}from"./iframe-Bc_TQ7zr.js";import{R as c}from"./zIndexSlice-CO4_damr.js";import{C as d}from"./ComposedChart-GKyMiMHY.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Bt9qHIET.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-urKJAClX.js";import"./throttle-DHt3nTHd.js";import"./index-C0X57jv4.js";import"./index-C1ncECzi.js";import"./RechartsWrapper-BdgbY9rQ.js";import"./axisSelectors-BQX-Wl7f.js";import"./polarAxisSelectors-BOZNv2EZ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-2JXHcyFQ.js";import"./index-BBJy3bvy.js";import"./index-D9rdDAJG.js";import"./renderedTicksSlice-brwFdIbT.js";import"./index-C6LVWlPV.js";import"./CartesianChart-B3fAd5eR.js";import"./ZIndexPortal-CXRthFuL.js";import"./CategoricalChart-DqoMFkbh.js";import"./Layer-Pn8de_pX.js";import"./LabelList-aO6gLBJB.js";import"./Label-B9G7W81w.js";import"./Text-DL7i-IN9.js";import"./pageBackground-dyagd-GS.js";import"./ZIndexLayer-m-BbwUdg.js";import"./ActivePoints-lBMg9AK3.js";import"./Dot-BVzb9xNA.js";import"./types-CI1g0QBx.js";import"./activeStyles-CqnjEaUo.js";import"./useAnimationId-BaQxjUGX.js";import"./dataEntryStyles-CcDBy8RW.js";import"./Symbols-DYo4y2AH.js";import"./symbol-O36Fs6O5.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-m2XDPigg.js";import"./getRadiusAndStrokeWidthFromDot-CL0rbQkZ.js";import"./ActiveShapeUtils-fVT3bzEu.js";import"./Curve-BkI7sWgu.js";import"./step-Bz4sQ0ke.js";import"./useEffectiveDataKey-BSvuchOk.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
