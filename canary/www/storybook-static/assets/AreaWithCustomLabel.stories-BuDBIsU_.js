import{e as t}from"./iframe-PyjOQzGK.js";import{R as c}from"./arrayEqualityCheck-_dHyT-RZ.js";import{C as d}from"./ComposedChart-BVUASlqQ.js";import{A as l}from"./Area-COHLZMkn.js";import{R as h}from"./RechartsHookInspector-D26E9kzM.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-uwFRJaRu.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-C_qiBOfF.js";import"./hooks-Lbs_q-DW.js";import"./axisSelectors-BsdiAjZp.js";import"./zIndexSlice-B8KtXzX9.js";import"./CartesianChart-DdiktEiW.js";import"./chartDataContext--xq0wDov.js";import"./CategoricalChart-CggXLcLb.js";import"./Curve-BookXfP4.js";import"./types-UMLEboQ_.js";import"./Layer-CHnOmiRY.js";import"./ReactUtils-ChAGskY_.js";import"./Label-CvwrqBXQ.js";import"./Text-BMHdefpA.js";import"./DOMUtils-InBL681b.js";import"./ZIndexLayer-DUzVAEAH.js";import"./ActivePoints-D6OmLLQF.js";import"./Dot-tggScJ5V.js";import"./RegisterGraphicalItemId-BTJ5pHFA.js";import"./GraphicalItemClipPath-Dnx8SYU_.js";import"./SetGraphicalItem-CfBIbOKf.js";import"./useAnimationId-DVpAz_Js.js";import"./getRadiusAndStrokeWidthFromDot-BrIH8QFd.js";import"./graphicalItemSelectors-BvzVMp8r.js";import"./index-uJDoNHNu.js";import"./ChartSizeDimensions-BahwbRey.js";import"./OffsetShower-C2jS-DP9.js";import"./PlotAreaShower-CwTougAK.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
