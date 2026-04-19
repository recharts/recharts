import{e as t}from"./iframe-dL2OVy5F.js";import{R as p}from"./arrayEqualityCheck-CaMvItyo.js";import{C as m}from"./ComposedChart-Y8SckKJS.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CErn5INA.js";import{R as l}from"./RechartsHookInspector-BZsexvc_.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-7Zncxn1v.js";import"./immer-DHklT898.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-2xnsmZbF.js";import"./index-C8r_0QEC.js";import"./hooks-CtDQVu0u.js";import"./axisSelectors-Do7BkVsn.js";import"./d3-scale-3VqrHCN7.js";import"./zIndexSlice-DAYnIbZH.js";import"./renderedTicksSlice-D7ViyujS.js";import"./CartesianChart-CQEHzqI9.js";import"./chartDataContext-BXPlG8LR.js";import"./CategoricalChart-BZHJ_HjV.js";import"./Curve-DLwP9u8w.js";import"./types-LCDeNazI.js";import"./step-CSrZegzj.js";import"./Layer-BrlL2tOs.js";import"./ReactUtils-A9WQzOkM.js";import"./Label-C6izcScL.js";import"./Text-Bwe6nLXh.js";import"./DOMUtils-Ci6QTQ3e.js";import"./ZIndexLayer-BvENavnS.js";import"./ActivePoints-BcsZ0pU5.js";import"./Dot-DNIsMwyQ.js";import"./RegisterGraphicalItemId-BLl1AU5h.js";import"./GraphicalItemClipPath-B9R00R0l.js";import"./SetGraphicalItem-CczBCiBC.js";import"./useAnimationId-C4Vc8PxM.js";import"./getRadiusAndStrokeWidthFromDot-Dsgl31AO.js";import"./graphicalItemSelectors-3qVwPsXu.js";import"./index-D_cVMinZ.js";import"./ChartSizeDimensions-CL0i_3ns.js";import"./OffsetShower-CTFYQb52.js";import"./PlotAreaShower-CS9RsVg8.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
