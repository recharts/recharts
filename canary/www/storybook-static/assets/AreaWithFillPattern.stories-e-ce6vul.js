import{R as t}from"./iframe-c26JqrsL.js";import{R as p}from"./zIndexSlice-BkUYlJsZ.js";import{C as m}from"./ComposedChart-CWYwg474.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-awAkYvzI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-YkjEKeW8.js";import"./throttle-B2IvKwW-.js";import"./index-CUwFsdn8.js";import"./index-mm1LjFas.js";import"./RechartsWrapper-C0_ZnG3M.js";import"./axisSelectors-Dy58hWsd.js";import"./polarAxisSelectors-NvwmetH_.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DWhFNlvg.js";import"./index-vwxbY9MG.js";import"./index-DaW3zNl9.js";import"./renderedTicksSlice-DchxVsWm.js";import"./index-CUrdsACp.js";import"./fillDefinitions-OkciRhhD.js";import"./CartesianChart-CNu4n4dr.js";import"./chartDataContext-KJrM16zP.js";import"./CategoricalChart-DQ-Epfo-.js";import"./Layer-vJvTy9Ku.js";import"./dataEntryStyles-NUuyBQzn.js";import"./Label-U_zx5ZhA.js";import"./Text-DrKUoP8L.js";import"./ZIndexLayer-B-r7bl4K.js";import"./ActivePoints-CT1fm5gU.js";import"./Dot-BhI3xlfW.js";import"./types-BkHyLjnw.js";import"./activeStyles-CxWIOF49.js";import"./useAnimationId-s58nu9Pz.js";import"./Symbols-BvzuXAby.js";import"./symbol-DAgH9-Fu.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-Bf7rIr_j.js";import"./getRadiusAndStrokeWidthFromDot-DaLi06Yy.js";import"./ActiveShapeUtils-DUAkL6fN.js";import"./Curve-XxFxrIWP.js";import"./step-CELEtsjP.js";import"./useEffectiveDataKey-BT6_jhIX.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
