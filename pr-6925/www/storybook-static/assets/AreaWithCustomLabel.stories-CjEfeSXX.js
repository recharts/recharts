import{e as t}from"./iframe-CQZRorsz.js";import{R as c}from"./arrayEqualityCheck-CQz2flWD.js";import{C as d}from"./ComposedChart-CBRgk2dx.js";import{A as l}from"./Area-B6Hfdu3i.js";import{R as h}from"./RechartsHookInspector-C6yxPh9Y.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DxEfcX11.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-3JJSXLuc.js";import"./hooks-8nQ0k4Um.js";import"./axisSelectors-CGQ8Nqi9.js";import"./zIndexSlice-DivviUqw.js";import"./CartesianChart-BcPUndnw.js";import"./chartDataContext-CFVBZ9Sm.js";import"./CategoricalChart-BLq3U5DT.js";import"./Curve-DrDC8HjY.js";import"./types-Doxj5qxW.js";import"./Layer-BhxYv9l3.js";import"./ReactUtils-C6XrS2ih.js";import"./Label-BJgUEQlL.js";import"./Text-CY4lUY6F.js";import"./DOMUtils-CKyp5Bk3.js";import"./ZIndexLayer-D-FGBInf.js";import"./ActivePoints-BQmvxGKr.js";import"./Dot-CzK3gQom.js";import"./RegisterGraphicalItemId-CzLwNJmP.js";import"./GraphicalItemClipPath-DLLdlCGA.js";import"./SetGraphicalItem-BtJfHG9-.js";import"./useAnimationId-DBhXyqXg.js";import"./getRadiusAndStrokeWidthFromDot-DfdfCJIf.js";import"./graphicalItemSelectors-CzZHSMZI.js";import"./index-hMecVWzD.js";import"./ChartSizeDimensions-DRFM_waE.js";import"./OffsetShower-CrJHGQg7.js";import"./PlotAreaShower-De7PuJHn.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
