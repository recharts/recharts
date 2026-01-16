import{e as t}from"./iframe-BESbJ0y8.js";import{R as p}from"./arrayEqualityCheck-BJiY8zR4.js";import{C as m}from"./ComposedChart-CzRf54mG.js";import{A as r}from"./Area-CGapK63O.js";import{R as s}from"./RechartsHookInspector-BIrUgBA6.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BrHDmjV-.js";import"./PolarUtils-BLb-h-71.js";import"./RechartsWrapper-DRe6KgwL.js";import"./hooks-DB8ea1bc.js";import"./axisSelectors-C-Xtojaz.js";import"./zIndexSlice-Ce7G6X37.js";import"./CartesianChart-GUhdqmTM.js";import"./chartDataContext-CNhS_Wxw.js";import"./CategoricalChart-DLR87Qgk.js";import"./Curve-9nr7VYb2.js";import"./types-CGrtFV1P.js";import"./Layer-C8CJBWmq.js";import"./ReactUtils-CdwmpjBo.js";import"./Label-qXVAmmrb.js";import"./Text-CP99-Bit.js";import"./DOMUtils-DhuQhbbK.js";import"./ZIndexLayer-Dn-3v6xq.js";import"./ActivePoints-CJDB75_w.js";import"./Dot-CXdKB8PK.js";import"./RegisterGraphicalItemId-BqzerM7D.js";import"./GraphicalItemClipPath-wHWKymHc.js";import"./SetGraphicalItem-DKXgGvLt.js";import"./useAnimationId-XfKJYBN0.js";import"./getRadiusAndStrokeWidthFromDot-B2Gik0kj.js";import"./graphicalItemSelectors-wDI_ZJYU.js";import"./index-CUJCh7cc.js";import"./ChartSizeDimensions-DCOrE4X1.js";import"./OffsetShower-BYHO7i_w.js";import"./PlotAreaShower-CfCRjkmu.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
