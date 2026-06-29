import{R as e}from"./iframe-QVKxPJQm.js";import{R as c}from"./zIndexSlice-G0DC-c-K.js";import{C as d}from"./ComposedChart-D6hBWYm7.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DqShIncD.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-edRA0-Yp.js";import"./index-C30tpYub.js";import"./index-BlfChkir.js";import"./get-DLMFwiXu.js";import"./resolveDefaultProps-CEVaC25K.js";import"./isWellBehavedNumber-JryOpPT2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C-HdUf1N.js";import"./index-CIkXYV9A.js";import"./index-D4ODfY0z.js";import"./renderedTicksSlice-BovhzHMl.js";import"./axisSelectors-C3vt1wN5.js";import"./d3-scale-CGteqX7a.js";import"./CartesianChart-KcupAlfP.js";import"./chartDataContext-zcaQUTsU.js";import"./CategoricalChart-CeUMrFdM.js";import"./Layer-Bc0oacyD.js";import"./AnimatedItems--IUYJkxx.js";import"./Label-IjZcZSlh.js";import"./Text-BQy0Q-oS.js";import"./DOMUtils-D8ZqFxMD.js";import"./ZIndexLayer-CNHQW8Kz.js";import"./useAnimationId-BUf_qCat.js";import"./ActivePoints-QMqqqiKi.js";import"./Dot-1qgdhznt.js";import"./types-DQssRkrH.js";import"./RegisterGraphicalItemId-DJWNxqfN.js";import"./GraphicalItemClipPath-cpuBGhtV.js";import"./SetGraphicalItem-mX53cDIp.js";import"./getRadiusAndStrokeWidthFromDot-4L8nwbWx.js";import"./ActiveShapeUtils-Dv5zSjSn.js";import"./Curve-7I9MiX70.js";import"./step-Bask81UI.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CvQeNwQF.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
