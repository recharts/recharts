import{R as e}from"./iframe-sORstnao.js";import{R as c}from"./zIndexSlice-D4nSzQXG.js";import{C as d}from"./ComposedChart-BlA17Ulf.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DpM3EoPG.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-6f0a2Itz.js";import"./index-BHPpgMD3.js";import"./index-D72u634P.js";import"./get-41kC8iMv.js";import"./resolveDefaultProps-CiA9punn.js";import"./isWellBehavedNumber-BMV6Q8kx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D1LnNbdI.js";import"./index-TsoCApfs.js";import"./index-C6ss-rRK.js";import"./renderedTicksSlice-DnIB2gDY.js";import"./axisSelectors-Cn-VKMDy.js";import"./d3-scale-D2bjBGPq.js";import"./string-B6fdYHAA.js";import"./CartesianChart-D2sGcfAi.js";import"./chartDataContext-3qQmZcQj.js";import"./CategoricalChart-CxG8s20W.js";import"./Layer--egwL1wz.js";import"./AnimatedItems-CV70jau4.js";import"./Label-SYMy3G3-.js";import"./Text-CnvPdDEF.js";import"./DOMUtils-fq1NzIyR.js";import"./ZIndexLayer-BEh4PufB.js";import"./useAnimationId-Dc5RekzQ.js";import"./ActivePoints-DgX9BosL.js";import"./Dot-EjXLgxI9.js";import"./types-iWkEMmGL.js";import"./RegisterGraphicalItemId-CV0Blp2K.js";import"./GraphicalItemClipPath-B7hrgjyT.js";import"./SetGraphicalItem-BWtqlZ1x.js";import"./getRadiusAndStrokeWidthFromDot-Ce5hKttK.js";import"./ActiveShapeUtils-C6v-Gqt7.js";import"./Curve-DN6qrrBJ.js";import"./step-BwuKoovG.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-p9K9EyDa.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
