import{R as r}from"./iframe-CgTT5dPO.js";import{R as c}from"./zIndexSlice-CPGUCnGo.js";import{C as d}from"./ComposedChart-CYlzW49h.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BLzxg3NF.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BMr0TIll.js";import"./index-yjPGP_Pi.js";import"./index-DsTCyvOd.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CKA35xz0.js";import"./isWellBehavedNumber-BWfrrYUp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B51pwKIk.js";import"./axisSelectors-Gtv_llo9.js";import"./d3-scale-oJuzrlfE.js";import"./index-9dlMxjgk.js";import"./index-BDFV0rCg.js";import"./renderedTicksSlice-B7hU_9zD.js";import"./index-Db1ep0ty.js";import"./CartesianChart-P3XUrVp3.js";import"./chartDataContext-Cp4ZgLCD.js";import"./CategoricalChart-Ce5ExZbX.js";import"./Layer-CviKKqfs.js";import"./AnimatedItems-mZXv8WCL.js";import"./Label-DgIJd16K.js";import"./Text-BTX7KMwr.js";import"./DOMUtils-DNAAiWqJ.js";import"./useId-C9Sf9QRu.js";import"./useBackwardsCompatibleTheme-BnQi9_9k.js";import"./ZIndexLayer-CL4lnoUk.js";import"./useAnimationId-D6-p5R60.js";import"./ActivePoints-Bnc15lgq.js";import"./Dot-DH9TpVyz.js";import"./types-DZAseBJP.js";import"./RegisterGraphicalItemId-DeFFmfLc.js";import"./GraphicalItemClipPath-qWvJymnR.js";import"./SetGraphicalItem-BFHpZd6Q.js";import"./getRadiusAndStrokeWidthFromDot-DgPOWv_U.js";import"./ActiveShapeUtils-CCEW4taa.js";import"./Curve-cyeBNEBX.js";import"./step-D1irN9pp.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CKmqq4Ws.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
