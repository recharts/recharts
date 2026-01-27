import{e as t}from"./iframe-D1Hwi0RI.js";import{R as p}from"./arrayEqualityCheck-DQEOD_zw.js";import{C as m}from"./ComposedChart-DgxcfSQu.js";import{A as r}from"./Area-DmRo8WaB.js";import{R as s}from"./RechartsHookInspector-DsUGDtNJ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bz6XhQRL.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CXtEZB_H.js";import"./hooks-CSIs-51X.js";import"./axisSelectors-GEJN5kco.js";import"./zIndexSlice-D8jnnygc.js";import"./CartesianChart-Dc2mELGa.js";import"./chartDataContext-GCfI3aAK.js";import"./CategoricalChart-DQ6b8iW8.js";import"./Curve-CF532csu.js";import"./types-C-uSS9Dl.js";import"./Layer-Di0VROrF.js";import"./ReactUtils-hNtx3_VI.js";import"./Label-Bb86ILB8.js";import"./Text-DLOnQ8zM.js";import"./DOMUtils-dbB3jEW_.js";import"./ZIndexLayer-By5F7TF9.js";import"./ActivePoints-DbTDI5Wq.js";import"./Dot-BxaODjLb.js";import"./RegisterGraphicalItemId-Pd4SqxWN.js";import"./GraphicalItemClipPath-Ba1a27e_.js";import"./SetGraphicalItem-DLoBPGEI.js";import"./useAnimationId-CwGlJXjy.js";import"./getRadiusAndStrokeWidthFromDot-CJ731Roi.js";import"./graphicalItemSelectors-BYUsRGK9.js";import"./index-BkDkQzlc.js";import"./ChartSizeDimensions-CUepdASc.js";import"./OffsetShower-7LYmniyx.js";import"./PlotAreaShower-BWomwUUC.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
