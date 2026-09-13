import{R as r}from"./iframe-jjE6mnhE.js";import{R as c}from"./zIndexSlice-BF8b2iUS.js";import{C as d}from"./ComposedChart-CT0KVNUw.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DhTwcNDs.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DkPV1tJ5.js";import"./index-4Q1Js_Gc.js";import"./index-CHxyqgyq.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DrW6c44U.js";import"./isWellBehavedNumber-D962mg0S.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-G0-O6wcd.js";import"./axisSelectors-Da2-5Qyb.js";import"./d3-scale-BsTwUgiH.js";import"./index-wKhQr2dB.js";import"./index-CQ_ODmEo.js";import"./renderedTicksSlice-B5bTJB_6.js";import"./index-SutJufb7.js";import"./CartesianChart-Bv2YRKvd.js";import"./chartDataContext-BtBmRnZH.js";import"./CategoricalChart-CHDbAtKm.js";import"./Layer-DvjfGsuf.js";import"./AnimatedItems-CKtAdJL6.js";import"./Label-CLl4R84L.js";import"./Text-yk6NtqvR.js";import"./DOMUtils-ClCL_aT_.js";import"./useId-qpgQMwe5.js";import"./useBackwardsCompatibleTheme-UPDRFRx4.js";import"./ZIndexLayer-OM7L_4ys.js";import"./useAnimationId-B8D6e613.js";import"./ActivePoints-DAEG3IaC.js";import"./Dot-D5qpHCDc.js";import"./types-D-bzS3aM.js";import"./RegisterGraphicalItemId-DLqbcJJV.js";import"./GraphicalItemClipPath-Cb68eAOX.js";import"./SetGraphicalItem-BUG0SFHa.js";import"./getRadiusAndStrokeWidthFromDot-B-GOq11T.js";import"./ActiveShapeUtils-Bi6thO6h.js";import"./Curve-CIYNdT84.js";import"./step-Bkxoj6hz.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-D5HmZ81h.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
