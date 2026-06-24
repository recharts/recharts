import{R as e}from"./iframe-Cmv2uZik.js";import{R as c}from"./zIndexSlice-kpWLrDSf.js";import{C as d}from"./ComposedChart-vEbKd6d1.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DJa3F2NV.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BpVJ12_R.js";import"./index-1nWXUQRt.js";import"./index-BODQ_clV.js";import"./get-26q7mLtB.js";import"./resolveDefaultProps-CVMWQw0A.js";import"./isWellBehavedNumber-DPLnuG7C.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B1y6zL6A.js";import"./index-F92hSDpv.js";import"./index-Blrf4sdp.js";import"./renderedTicksSlice-De354RnA.js";import"./axisSelectors-DN7Qk49e.js";import"./d3-scale-C0Ts3d9o.js";import"./CartesianChart-Culr-Wpg.js";import"./chartDataContext-DDdGqXS2.js";import"./CategoricalChart-BzXggkHJ.js";import"./Layer-BSNuGngv.js";import"./AnimatedItems-lktoz8YW.js";import"./Label-COZByZz9.js";import"./Text-579iQBnG.js";import"./DOMUtils-BF0MLXBa.js";import"./ZIndexLayer-D1dh8rie.js";import"./useAnimationId-9e7OJi4C.js";import"./ActivePoints-DII5AyZv.js";import"./Dot-Drefe2Tr.js";import"./types-DtyijqTI.js";import"./RegisterGraphicalItemId-snzh5Pbt.js";import"./GraphicalItemClipPath-BiRXHsBx.js";import"./SetGraphicalItem-HiTeWvOV.js";import"./getRadiusAndStrokeWidthFromDot-Bl4mU7H4.js";import"./ActiveShapeUtils-Dvr59oga.js";import"./Curve-DX9DZst-.js";import"./step-DGX6e4k6.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-C1u59eed.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const it=["CustomizedLabel"];export{t as CustomizedLabel,it as __namedExportsOrder,ot as default};
