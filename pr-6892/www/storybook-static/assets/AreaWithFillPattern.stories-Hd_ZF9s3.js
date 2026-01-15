import{e as t}from"./iframe-BfbK0YnM.js";import{R as p}from"./arrayEqualityCheck-DNFpTLKx.js";import{C as m}from"./ComposedChart-CxQMJJ37.js";import{A as r}from"./Area-UEk1ALZJ.js";import{R as s}from"./RechartsHookInspector-hJ2wORVM.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-1x2577Vl.js";import"./PolarUtils-D7VIOQ5-.js";import"./RechartsWrapper-CneYaVm0.js";import"./hooks-C3PasfZ_.js";import"./axisSelectors-B0fcML92.js";import"./zIndexSlice-C2nD2lty.js";import"./CartesianChart-DvEdRfkB.js";import"./chartDataContext-BgZQ9X9l.js";import"./CategoricalChart-bjsre3s0.js";import"./Curve-DDb4cbsk.js";import"./types-Bmf6Pun4.js";import"./Layer-CgE-ub3Y.js";import"./ReactUtils-CcajNckk.js";import"./Label-DahQkxIF.js";import"./Text-CnAgZ5uJ.js";import"./DOMUtils-ed8aeX9h.js";import"./ZIndexLayer-aH4ZpYgD.js";import"./ActivePoints-DV5Nx3pw.js";import"./Dot-Dpbc4XUr.js";import"./RegisterGraphicalItemId-CqePIzFp.js";import"./GraphicalItemClipPath-MsgVJj5Y.js";import"./SetGraphicalItem-C-oQkIvQ.js";import"./useAnimationId-D-pFcM5J.js";import"./getRadiusAndStrokeWidthFromDot-BH3TeMiB.js";import"./graphicalItemSelectors-XplRRcHl.js";import"./index-DXUjyqxC.js";import"./ChartSizeDimensions-Cp6ZFz8t.js";import"./OffsetShower-C9W4p0Nm.js";import"./PlotAreaShower-Bs9OF-cp.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
