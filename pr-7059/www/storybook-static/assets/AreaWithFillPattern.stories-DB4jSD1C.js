import{e as t}from"./iframe-CZHGkDMk.js";import{R as p}from"./arrayEqualityCheck-t7_Vj7sH.js";import{C as m}from"./ComposedChart-mSvqj3lP.js";import{A as r}from"./Area-BVdN50uE.js";import{R as s}from"./RechartsHookInspector-C2iN9faU.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CKtEFeCC.js";import"./immer-CfF_q19L.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BGk6MiSH.js";import"./index-D3qhFu-Q.js";import"./hooks-CUvOjLlM.js";import"./axisSelectors-D3XLf68-.js";import"./d3-scale-CJ4CmDjU.js";import"./zIndexSlice-GashnqAX.js";import"./renderedTicksSlice-BHMidfzd.js";import"./CartesianChart-DdydfBsf.js";import"./chartDataContext-jJyFb7d8.js";import"./CategoricalChart-DKqzOjpF.js";import"./Curve-Blj5JdwD.js";import"./types-DWMIcrlC.js";import"./step-Dqoonar_.js";import"./Layer-BtRR3UnB.js";import"./ReactUtils-BbDB6XIE.js";import"./Label-BXzi6VYN.js";import"./Text-Dz8Smy7e.js";import"./DOMUtils-Dplq7MJH.js";import"./ZIndexLayer-BsPUf8rB.js";import"./ActivePoints-DNK08ppe.js";import"./Dot-B15ey3u9.js";import"./RegisterGraphicalItemId-ZIh58Q32.js";import"./GraphicalItemClipPath-ChUVq13t.js";import"./SetGraphicalItem-CkEorLUE.js";import"./useAnimationId-Dafl-wjr.js";import"./getRadiusAndStrokeWidthFromDot-BZkgtEFS.js";import"./graphicalItemSelectors-pH4AO-w8.js";import"./index-CdrqNv6J.js";import"./ChartSizeDimensions-CNgNJ-I_.js";import"./OffsetShower-CN3I_bcm.js";import"./PlotAreaShower-AE8bmklz.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
