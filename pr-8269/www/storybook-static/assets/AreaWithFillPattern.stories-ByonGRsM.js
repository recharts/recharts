import{R as t}from"./iframe-qp48uAQ7.js";import{R as p}from"./zIndexSlice-KCJej1vF.js";import{C as m}from"./ComposedChart-CiZY4n0u.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BGY4MAa6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-H_yb4yD-.js";import"./throttle-DidOwtMq.js";import"./index-neNyiLUw.js";import"./index-BV3Lw9OX.js";import"./RechartsWrapper-1rMBmo6H.js";import"./axisSelectors-EQaPQOEj.js";import"./polarAxisSelectors-B_tUAyjC.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C1UROyMV.js";import"./index-BBO10kZC.js";import"./index-DSRi-YPI.js";import"./renderedTicksSlice-BsS9ZrzM.js";import"./index-D8wT4PmW.js";import"./fillDefinitions-0M80HuO4.js";import"./CartesianChart-2yA0qqcE.js";import"./chartDataContext-BjUDfEUJ.js";import"./CategoricalChart-Dz_UBlxz.js";import"./getRadiusAndStrokeWidthFromDot-DPhFQhmH.js";import"./Layer-3O8BuD1C.js";import"./dataEntryStyles-MmJGBd3d.js";import"./Label-Sje2x2ae.js";import"./Text-9axAMSSa.js";import"./ZIndexLayer-B5vbT5ul.js";import"./ActivePoints-AeR92xz-.js";import"./Dot-CZVpULkY.js";import"./types-B-Gso0-n.js";import"./activeStyles-CvvZZ1RN.js";import"./useAnimationId-gBLR8eku.js";import"./Symbols-DxoHFJIb.js";import"./symbol-Wa3jzChJ.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-BRHHFk9x.js";import"./ActiveShapeUtils--ilFziir.js";import"./Curve-D9eNKl8H.js";import"./step-DYSBTYxM.js";import"./useEffectiveDataKey-81Od8ro-.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,et as __namedExportsOrder,tt as default};
