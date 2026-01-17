import{e as t}from"./iframe-CLIMsGOZ.js";import{R as p}from"./arrayEqualityCheck-CbYFkYA0.js";import{C as m}from"./ComposedChart-CdyWcK0I.js";import{A as r}from"./Area-DiOnZY8j.js";import{R as s}from"./RechartsHookInspector-B158dvGO.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-E8mWkwf6.js";import"./PolarUtils-BIAYT_Jm.js";import"./RechartsWrapper-lPK7Cxev.js";import"./hooks-DenE5nGN.js";import"./axisSelectors-GOM-QLi6.js";import"./zIndexSlice-DazYr2Iy.js";import"./CartesianChart-q3xsLMrE.js";import"./chartDataContext-B4asjYes.js";import"./CategoricalChart-DAMhxPe3.js";import"./Curve-DXQteT8k.js";import"./types-HWBumAOZ.js";import"./Layer-l9L2Sb8o.js";import"./ReactUtils-Bk0OFjED.js";import"./Label-QzDxpC8q.js";import"./Text-BeJ5iM47.js";import"./DOMUtils-BnxK2rS8.js";import"./ZIndexLayer-5xiPbIim.js";import"./ActivePoints-CDJdQAvR.js";import"./Dot-TT6qKL70.js";import"./RegisterGraphicalItemId-46GsKK8-.js";import"./GraphicalItemClipPath-D_8sBR8P.js";import"./SetGraphicalItem-C8e1XdZ2.js";import"./useAnimationId-wMl1lWMr.js";import"./getRadiusAndStrokeWidthFromDot-B1AObu-M.js";import"./graphicalItemSelectors-C2k1hf8k.js";import"./index-8YxDhDRV.js";import"./ChartSizeDimensions-4XerZwXh.js";import"./OffsetShower-CTodD9i0.js";import"./PlotAreaShower-BoV_Aqat.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
