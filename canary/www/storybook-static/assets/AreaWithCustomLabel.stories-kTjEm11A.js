import{R as e}from"./iframe-BEI88iUa.js";import{R as c}from"./zIndexSlice-CNhIK6pZ.js";import{C as d}from"./ComposedChart-BRe4dKiO.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CChX4Jay.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BbtfERHN.js";import"./index-CNenOY3c.js";import"./index-DGXEJOU7.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CNtzbuaW.js";import"./isWellBehavedNumber-DwXWb7IU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BwAaxlIx.js";import"./index-DdylQdZr.js";import"./index-UjVR-wEt.js";import"./renderedTicksSlice-CfGYAsFa.js";import"./axisSelectors-BwSjoLT0.js";import"./d3-scale-Mw6WOBPY.js";import"./CartesianChart-BBEthDu3.js";import"./chartDataContext-DSUhfh_h.js";import"./CategoricalChart-D3IYhdol.js";import"./Layer-BHa_r1ys.js";import"./AnimatedItems-99nv9Q5e.js";import"./Label-CQfR7C4I.js";import"./Text-b9BvWKjK.js";import"./DOMUtils-CavEusJ9.js";import"./ZIndexLayer-6tY-vHyf.js";import"./useAnimationId-oD_5QjXY.js";import"./ActivePoints-DT7QCbeH.js";import"./Dot-6nm8mAMu.js";import"./types-CzsmCJZd.js";import"./RegisterGraphicalItemId-DE2xjbZV.js";import"./GraphicalItemClipPath-35MUlgJV.js";import"./SetGraphicalItem-DEteyePq.js";import"./getRadiusAndStrokeWidthFromDot-qx3yFJHx.js";import"./ActiveShapeUtils-CCFEfVD0.js";import"./Curve-CjgnvPj0.js";import"./step-B-WAV25h.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DMzswwb3.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
