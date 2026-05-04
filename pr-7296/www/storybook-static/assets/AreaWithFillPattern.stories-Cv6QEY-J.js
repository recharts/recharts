import{e as t}from"./iframe-BIeRAvIs.js";import{R as p}from"./arrayEqualityCheck-Bo5lKgUH.js";import{C as m}from"./ComposedChart-Bm_hB9iQ.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Bje3GmN6.js";import{R as l}from"./RechartsHookInspector-ZnpsfR9f.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B7afBTwD.js";import"./immer-5-lHdrEI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CM54gdPj.js";import"./index-DwT1n7qR.js";import"./hooks-DF9hzSyO.js";import"./axisSelectors-DpIQAzCF.js";import"./d3-scale-B0zeFeqw.js";import"./zIndexSlice-C0VSrdrd.js";import"./renderedTicksSlice-Bjl9R1bd.js";import"./CartesianChart-2ONA7LeG.js";import"./chartDataContext-C2nJuVrb.js";import"./CategoricalChart-BhjQzYI5.js";import"./Curve-BwmaiqIM.js";import"./types-DQojIKJi.js";import"./step-CNOKEUU2.js";import"./Layer-BzoHvM-S.js";import"./ReactUtils-hS7xEmGS.js";import"./Label-B1v8zCXy.js";import"./Text-CrBefNhw.js";import"./DOMUtils-lW54g6QP.js";import"./ZIndexLayer-BTjArk6I.js";import"./ActivePoints-efPNJuTS.js";import"./Dot-pi2zX1oI.js";import"./RegisterGraphicalItemId-oCC6rABF.js";import"./GraphicalItemClipPath-C63EteST.js";import"./SetGraphicalItem-DsNhb24c.js";import"./useAnimationId-C9Uv8ueb.js";import"./getRadiusAndStrokeWidthFromDot-D7Vs4ffU.js";import"./graphicalItemSelectors-DCfdYwEE.js";import"./index-CG5u5SYH.js";import"./ChartSizeDimensions-DyfQXYwz.js";import"./OffsetShower-VB1mbOI0.js";import"./PlotAreaShower-Dt-mgpmA.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
