import{R as e}from"./iframe-R4QFQ0mF.js";import{R as c}from"./zIndexSlice-BTkVJube.js";import{C as d}from"./ComposedChart-CPp9Pcna.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-vvi_a_fz.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-C5zbr-FM.js";import"./index-BBlWDw9H.js";import"./index-DqGKL0Lc.js";import"./get-CX1Ejt3V.js";import"./resolveDefaultProps-UuXIKvS7.js";import"./isWellBehavedNumber-SGwhJUiP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D9XL2NUc.js";import"./index-C7Ze2qQC.js";import"./index-KYrClEjC.js";import"./renderedTicksSlice-C_2YTMnY.js";import"./axisSelectors-CP1mQpG7.js";import"./d3-scale-CmSi9of_.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BPaTY41c.js";import"./chartDataContext-rpS38Kv6.js";import"./CategoricalChart-19q5KTev.js";import"./Layer-C8zF3tZM.js";import"./AnimatedItems-yF_BXiw0.js";import"./Label-gFQEPWtd.js";import"./Text-GL96gXYN.js";import"./DOMUtils-_wFbcz4z.js";import"./ZIndexLayer-D26CDD8U.js";import"./useAnimationId-QtK1xgnL.js";import"./ActivePoints-CIJh5p82.js";import"./Dot-Yljeb2kx.js";import"./types-CyqiaD7e.js";import"./RegisterGraphicalItemId-3Swfrcok.js";import"./GraphicalItemClipPath-DORaDiAV.js";import"./SetGraphicalItem-C97kVeur.js";import"./getRadiusAndStrokeWidthFromDot-DLeAaRBg.js";import"./ActiveShapeUtils-BkpD7S65.js";import"./Curve-NcOFJc9S.js";import"./step-E1t4k1kh.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CBUps-IM.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const at=["CustomizedLabel"];export{t as CustomizedLabel,at as __namedExportsOrder,it as default};
