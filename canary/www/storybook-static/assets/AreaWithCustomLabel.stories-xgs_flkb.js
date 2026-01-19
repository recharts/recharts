import{e as t}from"./iframe-DDDJQB5W.js";import{R as c}from"./arrayEqualityCheck-D0Xb1fN2.js";import{C as d}from"./ComposedChart-_IoWoZlX.js";import{A as l}from"./Area-DTVbPFUw.js";import{R as h}from"./RechartsHookInspector-UcMzq5oF.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BsKQv1PU.js";import"./PolarUtils-t5VCEmBY.js";import"./RechartsWrapper-DdXQ715_.js";import"./hooks-BP25Spjv.js";import"./axisSelectors-CQBK46ul.js";import"./zIndexSlice-rPTjsX-n.js";import"./CartesianChart-ZUHoE3GB.js";import"./chartDataContext-j99xrIrV.js";import"./CategoricalChart-grKPARSf.js";import"./Curve-zMorL5Ul.js";import"./types-CGHtFgCy.js";import"./Layer-VwKMwUPk.js";import"./ReactUtils-DAfUDxZJ.js";import"./Label-vsQtY8U6.js";import"./Text-Djbe6uvl.js";import"./DOMUtils-Dkn2KrJ_.js";import"./ZIndexLayer-DbViNaNl.js";import"./ActivePoints-CxpylZkY.js";import"./Dot-JevgNCxq.js";import"./RegisterGraphicalItemId-Du0teFv1.js";import"./GraphicalItemClipPath-DhKhb3Nw.js";import"./SetGraphicalItem-C60hp0F5.js";import"./useAnimationId-C8z7_GYR.js";import"./getRadiusAndStrokeWidthFromDot-_c6DE0sw.js";import"./graphicalItemSelectors-BIwgnApG.js";import"./index-BliyNw2M.js";import"./ChartSizeDimensions-BYcSqOel.js";import"./OffsetShower-BlJsaDut.js";import"./PlotAreaShower-rDHCl9WN.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const tt=["CustomizedLabel"];export{e as CustomizedLabel,tt as __namedExportsOrder,Z as default};
