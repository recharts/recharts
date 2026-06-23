import{R as e}from"./iframe-Bc8uafj_.js";import{R as c}from"./zIndexSlice-DgIKKnku.js";import{C as d}from"./ComposedChart-BaFcNv6t.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-cHy7tUdH.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DhRCiF9y.js";import"./index-9l0gGEIz.js";import"./index-DbEmmVI0.js";import"./get-CoQ1aHe8.js";import"./resolveDefaultProps-D94aQw_7.js";import"./isWellBehavedNumber-CGMb3shs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ENbvc07n.js";import"./index-C3D0VAho.js";import"./index-Dhuj-LWB.js";import"./renderedTicksSlice-CDLhDidm.js";import"./axisSelectors-BV-5bajo.js";import"./d3-scale-CuCR1Aws.js";import"./CartesianChart-D-LYbang.js";import"./chartDataContext-w3WNE9w3.js";import"./CategoricalChart-DEq5So-g.js";import"./Layer-BOwFFWNG.js";import"./AnimatedItems-CDgcpQiE.js";import"./Label-3HS03WWg.js";import"./Text-BXzZhQXx.js";import"./DOMUtils-Dp92goZ8.js";import"./ZIndexLayer-BEkWbSjN.js";import"./useAnimationId-CUqgRxQq.js";import"./ActivePoints-Byxcert_.js";import"./Dot-Ch1zQlh_.js";import"./types-unK8WfaH.js";import"./RegisterGraphicalItemId-CKxQU2m7.js";import"./GraphicalItemClipPath-DUHE7Dv_.js";import"./SetGraphicalItem-DFzenvxr.js";import"./getRadiusAndStrokeWidthFromDot-DFKmST2Y.js";import"./ActiveShapeUtils-H6mpGyBM.js";import"./Curve-DiuauwRl.js";import"./step-B3z5Hoe6.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-D1B9Vbyd.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
