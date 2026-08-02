import{R as e}from"./iframe-B87Mdf3W.js";import{R as c}from"./zIndexSlice-BIRpUMd-.js";import{C as d}from"./ComposedChart-CbdJJgaC.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-QLXzk-Un.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B7C94OgR.js";import"./index-CFlriD1l.js";import"./index-DOs9r3IB.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DKsQyDke.js";import"./isWellBehavedNumber-B3D8b1zU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CTH97mkX.js";import"./index-DzAi6-mi.js";import"./index-Kzzk0SfL.js";import"./renderedTicksSlice--g9rzjaW.js";import"./axisSelectors-CjpQ8_nF.js";import"./d3-scale-BOgOxbfH.js";import"./CartesianChart-B1vhIJLv.js";import"./chartDataContext-qB4fiklo.js";import"./CategoricalChart-DkKx3P5s.js";import"./Layer-rvbR5IlK.js";import"./AnimatedItems-DhwNGwGQ.js";import"./Label-D69_s3j-.js";import"./Text-CiS0vhWP.js";import"./DOMUtils-Dj6lanE1.js";import"./ZIndexLayer-CBz7KXzh.js";import"./useAnimationId-B04VzGQY.js";import"./ActivePoints-BuWd44OK.js";import"./Dot-CctAgg2L.js";import"./types-CS4XJdLR.js";import"./RegisterGraphicalItemId-B3POwG2t.js";import"./GraphicalItemClipPath-DnF4EuGO.js";import"./SetGraphicalItem-BP9VRM5v.js";import"./getRadiusAndStrokeWidthFromDot-Bhl0ZWck.js";import"./ActiveShapeUtils-Dgoc85eT.js";import"./Curve-DIAAN1K7.js";import"./step-e5qRx30Q.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-C2C4094n.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
