import{e as t}from"./iframe-BTtdS09W.js";import{R as p}from"./arrayEqualityCheck-Cr7uheU5.js";import{C as m}from"./ComposedChart-llfZcW-b.js";import{A as r}from"./Area-CVfKFi31.js";import{R as s}from"./RechartsHookInspector-CAlJBqiK.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BNjLFhbQ.js";import"./immer-h2tBWHbd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CVSfFbBC.js";import"./index-qoIXPrbj.js";import"./hooks-D1OOIbEZ.js";import"./axisSelectors-C-C-XPOd.js";import"./d3-scale-cMqm19h5.js";import"./zIndexSlice-upTe-uMW.js";import"./renderedTicksSlice-DJkpJNhd.js";import"./CartesianChart-ClmLpAb4.js";import"./chartDataContext-ByF2cza-.js";import"./CategoricalChart-DC4azccj.js";import"./Curve-DdtOV6ZM.js";import"./types-DbbwF8j4.js";import"./step-8k9vNXVF.js";import"./Layer-CG03jz1V.js";import"./ReactUtils-DVOsTE35.js";import"./Label-DQKpHpKK.js";import"./Text-bWAVTtUg.js";import"./DOMUtils-WKcDWUte.js";import"./ZIndexLayer-CbMDIpL4.js";import"./ActivePoints-B3QE05Z9.js";import"./Dot-PYiq21Zo.js";import"./RegisterGraphicalItemId-3lWinSBd.js";import"./GraphicalItemClipPath-5TXw2OKP.js";import"./SetGraphicalItem-BR57Hu8e.js";import"./useAnimationId-D12e2U_3.js";import"./getRadiusAndStrokeWidthFromDot-B3UN4p5A.js";import"./graphicalItemSelectors-BFealQV5.js";import"./index-DrM9enLn.js";import"./ChartSizeDimensions-DNML0thn.js";import"./OffsetShower-CC2yWEZE.js";import"./PlotAreaShower-4F-cactL.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
