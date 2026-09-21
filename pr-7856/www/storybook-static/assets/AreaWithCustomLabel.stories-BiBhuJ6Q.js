import{R as r}from"./iframe-B8S5mZni.js";import{R as c}from"./zIndexSlice-C7WPWBHj.js";import{C as d}from"./ComposedChart-BFmInjuY.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CGgLDMBn.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DJQOHpml.js";import"./index-BRy-1fgE.js";import"./index-DkKi0J9U.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B-gwRbWC.js";import"./isWellBehavedNumber-TBIenFex.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DNwO_82A.js";import"./axisSelectors-Im4hMjdM.js";import"./d3-scale-siXpSW3b.js";import"./index-wxI64tZb.js";import"./index-CiAWbHQN.js";import"./renderedTicksSlice-BoqO-m_z.js";import"./index-DmW1QCPA.js";import"./CartesianChart-CYUUiu8V.js";import"./chartDataContext-B9Fl8ZXu.js";import"./CategoricalChart-za3sj-4w.js";import"./Layer-DKzqyPeV.js";import"./AnimatedItems-BPa7Tabb.js";import"./Label-DZ6C1Cc6.js";import"./Text-DDGxlEP5.js";import"./DOMUtils-DwuCUUr8.js";import"./useId-7Q8874Q1.js";import"./useBackwardsCompatibleTheme-v1szHh_7.js";import"./ZIndexLayer-OLi9LTWb.js";import"./useAnimationId-DSiNOIGc.js";import"./ActivePoints-0LdIyAY7.js";import"./Dot-Dq-zru-b.js";import"./types-BZDZh7Dp.js";import"./RegisterGraphicalItemId-CoAB0bbS.js";import"./GraphicalItemClipPath-D8etsuAL.js";import"./SetGraphicalItem-bKrSk8yx.js";import"./getRadiusAndStrokeWidthFromDot-BV5HZWc_.js";import"./ActiveShapeUtils-BXPGLF8U.js";import"./Curve-Ba1VZ5w3.js";import"./step-D9jBRyHm.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DMPVVD7J.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
