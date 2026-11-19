import{R as t}from"./iframe-DzGmKl0f.js";import{R as p}from"./zIndexSlice-C_hCocyn.js";import{C as m}from"./ComposedChart-BMgh39RK.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BvJkuX0d.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DQfzh6Jd.js";import"./throttle-CTpO1d0G.js";import"./index-CLtTm24E.js";import"./index-BW8cRvO1.js";import"./RechartsWrapper-DyktFVWv.js";import"./axisSelectors-CXmW2Cx2.js";import"./polarAxisSelectors-BjROy2nM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BqUwTZLN.js";import"./index-Dfq7BfPO.js";import"./index-CbanqfDi.js";import"./renderedTicksSlice-Cj7UXIdm.js";import"./index-By0aYyvM.js";import"./fillDefinitions-D8TUKuUW.js";import"./CartesianChart-BHEtFY6v.js";import"./chartDataContext-CBkj6nC7.js";import"./CategoricalChart-8iPxehsc.js";import"./getRadiusAndStrokeWidthFromDot-x4kMFRNy.js";import"./Layer-FlA1vg8A.js";import"./dataEntryStyles-Dj48sKZ8.js";import"./Label-D7SDC5pA.js";import"./Text-4Yqe8NiQ.js";import"./ZIndexLayer-DCgoY3ny.js";import"./ActivePoints-Dk-ASqYF.js";import"./Dot-C7ry2cU8.js";import"./types-DhQXJZ5L.js";import"./activeStyles-wSVq9YzU.js";import"./useAnimationId-CGyZ0qQs.js";import"./Symbols-f4V1uJfI.js";import"./symbol-C_p4EZd-.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BOgZ-5S7.js";import"./ActiveShapeUtils-DvbjLMLM.js";import"./Curve-CY0LgJEY.js";import"./step-DtdKv3o3.js";import"./useEffectiveDataKey-DtLTSAvq.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
