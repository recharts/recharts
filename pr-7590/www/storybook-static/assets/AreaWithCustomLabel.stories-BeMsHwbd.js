import{R as e}from"./iframe-DX3DoU0V.js";import{R as c}from"./zIndexSlice-JZscBD-4.js";import{C as d}from"./ComposedChart-DhxdekQU.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-LoarfhMa.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Df9paSU5.js";import"./index-C9zXapq5.js";import"./index-BLWyFYv6.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Dht9eep2.js";import"./isWellBehavedNumber-DXPAUxYw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cor7Wz0Q.js";import"./index-fiTNjDfz.js";import"./index-dfS5pTPx.js";import"./renderedTicksSlice-C2lqyVGO.js";import"./axisSelectors-CPexRmiS.js";import"./d3-scale-cmuGZbi0.js";import"./CartesianChart-DAdEh2n_.js";import"./chartDataContext-KL4_rbFV.js";import"./CategoricalChart-COC9nxGS.js";import"./Layer-CfDkJPJv.js";import"./AnimatedItems-azUMJ4jR.js";import"./Label-CcOENmHR.js";import"./Text-CGNeItsO.js";import"./DOMUtils-jkxXqBeu.js";import"./ZIndexLayer-Dcm0gV7H.js";import"./useAnimationId-2LcPTVkH.js";import"./ActivePoints-D6qpACIy.js";import"./Dot-DycfcH3j.js";import"./types-CkeZP30w.js";import"./RegisterGraphicalItemId-Dlzi8iuz.js";import"./GraphicalItemClipPath-BLXFrLs-.js";import"./SetGraphicalItem-C1_wN2SK.js";import"./getRadiusAndStrokeWidthFromDot-BSSlkcIg.js";import"./ActiveShapeUtils-C5RQzc-i.js";import"./Curve-lZ1smd7v.js";import"./step-m02rWKGn.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BlsH2ULy.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
