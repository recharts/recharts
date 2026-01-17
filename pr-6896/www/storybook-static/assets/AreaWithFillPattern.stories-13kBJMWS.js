import{e as t}from"./iframe-C7dv0yNH.js";import{R as p}from"./arrayEqualityCheck-DyqdVI3P.js";import{C as m}from"./ComposedChart-FscYfn8A.js";import{A as r}from"./Area-DdGN31Jm.js";import{R as s}from"./RechartsHookInspector-lhW0mFdD.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C_lLZ5sY.js";import"./PolarUtils-Cz9TAlOj.js";import"./RechartsWrapper-C9EYdUpz.js";import"./hooks-sLNaPpHz.js";import"./axisSelectors-C_30vZFc.js";import"./zIndexSlice-BInAuLle.js";import"./CartesianChart-DFTdRJBL.js";import"./chartDataContext-BIHEfK7s.js";import"./CategoricalChart-CHqTaTxC.js";import"./Curve-DWNdd9EU.js";import"./types-CjrwKJ5w.js";import"./Layer-BTAEH97T.js";import"./ReactUtils-Jbry0BUC.js";import"./Label-pLuTDL7t.js";import"./Text-c0T3JDCh.js";import"./DOMUtils-C38PLAG9.js";import"./ZIndexLayer-DHYRzIS_.js";import"./ActivePoints-DNYEbsDX.js";import"./Dot-CQ29Eu8v.js";import"./RegisterGraphicalItemId-DhjtTH4e.js";import"./GraphicalItemClipPath-DkWi_iXg.js";import"./SetGraphicalItem-dcgdauaK.js";import"./useAnimationId-y4GFPobY.js";import"./getRadiusAndStrokeWidthFromDot-BPy-vWAZ.js";import"./graphicalItemSelectors-Dc9X151y.js";import"./index-CtbSRCbY.js";import"./ChartSizeDimensions-DjjqF_40.js";import"./OffsetShower-CNtlgBc5.js";import"./PlotAreaShower-DP2LRcem.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
