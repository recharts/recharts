import{e as t}from"./iframe-C27-mxY1.js";import{R as p}from"./arrayEqualityCheck-D-5eU_dz.js";import{C as m}from"./ComposedChart-KJkIi4eH.js";import{A as r}from"./Area-B90aD0O4.js";import{R as s}from"./RechartsHookInspector-C_T85NFo.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B1dYXzyb.js";import"./immer-CWybgQyF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BXh7or_8.js";import"./index-Cipx1Q0g.js";import"./hooks-DsYJGE2Z.js";import"./axisSelectors-DwTIaSff.js";import"./d3-scale-OsBLx27H.js";import"./zIndexSlice-BLW0sC1L.js";import"./renderedTicksSlice-CUE3MGhg.js";import"./CartesianChart-D9sILVKg.js";import"./chartDataContext-YAUKbSg3.js";import"./CategoricalChart-CJAeAbHf.js";import"./Curve-C3fWZnPx.js";import"./types-DbJv915h.js";import"./step-DPeTeJhQ.js";import"./Layer-DIVtJdsU.js";import"./ReactUtils-DuG0Tdq5.js";import"./Label-B6Z4EDvc.js";import"./Text-CElC0_ua.js";import"./DOMUtils-D5gfPOoi.js";import"./ZIndexLayer-B-pky4ZU.js";import"./ActivePoints-h9H1Ebnw.js";import"./Dot-DiMYf5U7.js";import"./RegisterGraphicalItemId-CuWJpCyW.js";import"./GraphicalItemClipPath-CJlc_ulB.js";import"./SetGraphicalItem-1mG4wi13.js";import"./useAnimationId-TcKlRMa1.js";import"./getRadiusAndStrokeWidthFromDot-BW0gjx4V.js";import"./graphicalItemSelectors-BQJe7JS2.js";import"./index-B878aojC.js";import"./ChartSizeDimensions-DFVuZGv4.js";import"./OffsetShower-r-mNA0Bt.js";import"./PlotAreaShower-ulVkY6PA.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const et=["FillPattern"];export{e as FillPattern,et as __namedExportsOrder,tt as default};
