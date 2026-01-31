import{e as t}from"./iframe-Dke1PXsj.js";import{R as p}from"./arrayEqualityCheck-DYUGm-S-.js";import{C as m}from"./ComposedChart-DKdsAYQN.js";import{A as r}from"./Area-CYwNGiux.js";import{R as s}from"./RechartsHookInspector-DESYImpk.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D9EPHdLe.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-Dr-F8YT1.js";import"./hooks-DCQ9wQGY.js";import"./axisSelectors-Ck1fvBYL.js";import"./zIndexSlice-CdkZF_KN.js";import"./CartesianChart-Db_LpN91.js";import"./chartDataContext-DpjwG2mb.js";import"./CategoricalChart-B37YLYot.js";import"./Curve-DAvXUCHx.js";import"./types-DDM_Xxay.js";import"./Layer-B0EXSY1R.js";import"./ReactUtils-BSYO7pn7.js";import"./Label-BJpGMmXt.js";import"./Text-CbLXC33T.js";import"./DOMUtils-DWpZ1fz3.js";import"./ZIndexLayer-Dd-3eNlO.js";import"./ActivePoints-DYWx7XLw.js";import"./Dot-D-awbIR4.js";import"./RegisterGraphicalItemId-BcZQiTRu.js";import"./GraphicalItemClipPath-DAk4z-8q.js";import"./SetGraphicalItem-tvSnb31d.js";import"./useAnimationId-CaTohdQl.js";import"./getRadiusAndStrokeWidthFromDot-D9qqWM8m.js";import"./graphicalItemSelectors-Cwvxf9eY.js";import"./index-CL0r-bPV.js";import"./ChartSizeDimensions-GFw4Kaqh.js";import"./OffsetShower-l-ss4yV0.js";import"./PlotAreaShower-D_tFdLxx.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
