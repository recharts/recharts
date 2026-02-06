import{e as t}from"./iframe-C-p_RB-q.js";import{R as p}from"./arrayEqualityCheck-B-MvrmN7.js";import{C as m}from"./ComposedChart-Bt7ixjRo.js";import{A as r}from"./Area-DrIA-ZhD.js";import{R as s}from"./RechartsHookInspector-A7vZopTv.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BfiJbh6P.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DIdR0t3A.js";import"./hooks-DG7RHIxl.js";import"./axisSelectors-P0AOwwEl.js";import"./zIndexSlice-5lbCpu3W.js";import"./CartesianChart-DeBYB_B4.js";import"./chartDataContext-CVzSSW0I.js";import"./CategoricalChart-yUclNHQf.js";import"./Curve-p-GL7vDw.js";import"./types-GK0667Eh.js";import"./Layer-C7f6suDu.js";import"./ReactUtils-Dp-34n25.js";import"./Label-C5MK-SLm.js";import"./Text-DfkyYgyy.js";import"./DOMUtils-BepXqo9m.js";import"./ZIndexLayer-DCWgaX-H.js";import"./ActivePoints-CNFNRQXL.js";import"./Dot-D0Fu4E1o.js";import"./RegisterGraphicalItemId-x_swwYN6.js";import"./GraphicalItemClipPath-DWus76r9.js";import"./SetGraphicalItem-B3lQSLw7.js";import"./useAnimationId-DU1HvgwT.js";import"./getRadiusAndStrokeWidthFromDot-6LmPg7Vv.js";import"./graphicalItemSelectors-DyirJX-o.js";import"./index-wD3bNdwk.js";import"./ChartSizeDimensions-CiN-UjJt.js";import"./OffsetShower-zEoXuM_S.js";import"./PlotAreaShower-Di2aU-hi.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
