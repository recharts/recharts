import{e as t}from"./iframe-DKKmvtM4.js";import{R as p}from"./arrayEqualityCheck-BH7M1_Mo.js";import{C as m}from"./ComposedChart-DEbE_DRg.js";import{A as r}from"./Area-ura6fYp6.js";import{R as s}from"./RechartsHookInspector-_f5C5MnG.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BKSvQ-CI.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-DSOfgqQ4.js";import"./hooks-CAZEb-K2.js";import"./axisSelectors-BwBIfn7P.js";import"./zIndexSlice-AjUFaEiP.js";import"./CartesianChart-DhY9l1Jf.js";import"./chartDataContext-C3SlyDgH.js";import"./CategoricalChart-BpOJCian.js";import"./Curve-Cf01ES6k.js";import"./types-Bj4-1oYY.js";import"./Layer-CRV4337m.js";import"./ReactUtils-CYxP7B05.js";import"./Label-Da19cvil.js";import"./Text-sKIHJABx.js";import"./DOMUtils-CGnu9ifx.js";import"./ZIndexLayer-ub3Xu4w-.js";import"./ActivePoints-C4GM9BP6.js";import"./Dot-Mxkn0j7-.js";import"./RegisterGraphicalItemId-D_mkL-K8.js";import"./GraphicalItemClipPath-BPF3OyQO.js";import"./SetGraphicalItem-DxgYEhry.js";import"./useAnimationId-Hx06RWvS.js";import"./getRadiusAndStrokeWidthFromDot-D2gJ4jd4.js";import"./graphicalItemSelectors-rhw8Er39.js";import"./index-COzuImjz.js";import"./ChartSizeDimensions-C-W9gvmn.js";import"./OffsetShower-BXtHvm8O.js";import"./PlotAreaShower-CYWF0naR.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <defs>
            <pattern id="left" width="12" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#8884d8" />
            </pattern>
            <pattern id="right" width="8" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="4" height="4" fill="#82ca9d" />
            </pattern>
          </defs>
          <Area type="monotone" dataKey="x" stroke="#8884d8" fillOpacity={1} fill="url(#left)" />
          <Area type="monotone" dataKey="y" stroke="#82ca9d" fillOpacity={1} fill="url(#right)" />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const Q=["FillPattern"];export{e as FillPattern,Q as __namedExportsOrder,N as default};
