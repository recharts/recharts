import{e as t}from"./iframe-DvdxI6dC.js";import{R as c}from"./arrayEqualityCheck-DXUAObl0.js";import{C as d}from"./ComposedChart-YdiELtKV.js";import{A as l}from"./Area-B3WJNQF4.js";import{R as h}from"./RechartsHookInspector-B_PrFdYH.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DH7aS_Cz.js";import"./PolarUtils-BY4iZmOi.js";import"./RechartsWrapper-BLfZDcOn.js";import"./hooks-DrOmiLx6.js";import"./axisSelectors-4CKM8Xol.js";import"./zIndexSlice-JVJMXPV9.js";import"./CartesianChart-CVXjEBNC.js";import"./chartDataContext-D9T_3Pfc.js";import"./CategoricalChart-Cx_ZKXH4.js";import"./Curve-BRTvsj-M.js";import"./types-8AXfgSIv.js";import"./Layer-QQplstvs.js";import"./ReactUtils-DqWjpCBi.js";import"./Label-zPyZ6EuZ.js";import"./Text-DcBx6qw-.js";import"./DOMUtils-XQErKiOi.js";import"./ZIndexLayer-Cnm_-Zvz.js";import"./ActivePoints-BSveXf-N.js";import"./Dot-DSDPr-6Z.js";import"./RegisterGraphicalItemId-C1Pco6VZ.js";import"./GraphicalItemClipPath-DNpqs3F2.js";import"./SetGraphicalItem-B3AbHWGd.js";import"./useAnimationId-Dy3gyKDZ.js";import"./getRadiusAndStrokeWidthFromDot-BCM2WAWf.js";import"./graphicalItemSelectors-MIUeB4Ih.js";import"./index-CwHutVPN.js";import"./ChartSizeDimensions-Dk78WGJs.js";import"./OffsetShower-BP3lO1NK.js";import"./PlotAreaShower-DiTB-vHo.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
