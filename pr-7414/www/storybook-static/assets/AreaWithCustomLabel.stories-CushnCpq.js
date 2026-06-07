import{R as e}from"./iframe-UrDM9Xq3.js";import{R as c}from"./zIndexSlice-ByG8njt8.js";import{C as d}from"./ComposedChart-GlsxxvdN.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-RzEZE2Wi.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CN88OGp3.js";import"./index-DNiwhT54.js";import"./index-Cn_MLy2m.js";import"./get-DL-gpN5o.js";import"./resolveDefaultProps-PeQIR1GL.js";import"./isWellBehavedNumber-CLVIVmGZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dm1mVgCK.js";import"./index-B2ZS3Yz1.js";import"./index-4YA6lX68.js";import"./renderedTicksSlice-SpzHxRDt.js";import"./axisSelectors-BJCtqUC9.js";import"./d3-scale-DVQsPwxD.js";import"./string-B6fdYHAA.js";import"./CartesianChart-H9EcaXcZ.js";import"./chartDataContext-K_upA5vN.js";import"./CategoricalChart-CUBoZ8Vx.js";import"./Layer-CegbOy6-.js";import"./AnimatedItems-BNMmNPct.js";import"./Label-KmMVZ1kh.js";import"./Text-Z9b8Q3If.js";import"./DOMUtils-B87CjqTu.js";import"./ZIndexLayer-DAEesPn0.js";import"./useAnimationId-cQnLIEvC.js";import"./ActivePoints-CH7YBRlt.js";import"./Dot-BIf_XmV-.js";import"./types-DWkwwyEz.js";import"./RegisterGraphicalItemId-cO8s0yof.js";import"./GraphicalItemClipPath-1r6w1RAv.js";import"./SetGraphicalItem-BPavUJGK.js";import"./getRadiusAndStrokeWidthFromDot-CQ6KKJq4.js";import"./ActiveShapeUtils-BKflvOdY.js";import"./Curve-CCWULKwl.js";import"./step-CNXFBr8Q.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-C80CPUyS.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
