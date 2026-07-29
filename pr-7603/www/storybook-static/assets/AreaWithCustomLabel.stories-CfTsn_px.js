import{R as e}from"./iframe-BfLA0-xE.js";import{R as c}from"./zIndexSlice-CxHl2f9g.js";import{C as d}from"./ComposedChart-Bx2fTno4.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-D96pBP1H.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B4u_I-fq.js";import"./index-B543iUM5.js";import"./index-BW364ill.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DtsxpH35.js";import"./isWellBehavedNumber-D8uyT4tB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BAR0yTLB.js";import"./index-BjcF9KIO.js";import"./index-Ua2Ph-JY.js";import"./renderedTicksSlice-CGglt0-o.js";import"./axisSelectors-k3PcgN9v.js";import"./d3-scale-d2-bssiM.js";import"./CartesianChart-BkXNVBYX.js";import"./chartDataContext-CGwkpgmd.js";import"./CategoricalChart-Y3X7k6Lu.js";import"./Layer-D2dAv-AD.js";import"./AnimatedItems-27DP4DZS.js";import"./Label-KTqJ5zS0.js";import"./Text-ClB8EwPj.js";import"./DOMUtils-AQyyON10.js";import"./ZIndexLayer-t--MbcyW.js";import"./useAnimationId-Uu44n6G0.js";import"./ActivePoints-paS1xZt9.js";import"./Dot-BEY7sYgl.js";import"./types-CMVKXdeT.js";import"./RegisterGraphicalItemId-E0HC7VAQ.js";import"./GraphicalItemClipPath-Cw3vhXUK.js";import"./SetGraphicalItem-DquyLFCZ.js";import"./getRadiusAndStrokeWidthFromDot-je8BEofk.js";import"./ActiveShapeUtils-DGNTXBhg.js";import"./Curve-BA6tKfOd.js";import"./step-V7C6Dr8u.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BLLskjKC.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
