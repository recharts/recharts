import{e as t}from"./iframe-BtK7K3Kv.js";import{R as p}from"./arrayEqualityCheck-CFfqZo_0.js";import{C as m}from"./ComposedChart-B_mHOkev.js";import{A as r}from"./Area-DVj1TPZG.js";import{R as s}from"./RechartsHookInspector-D4JLTX2d.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DWyLZAa9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DGVCpdWj.js";import"./hooks-60Pk7U7P.js";import"./axisSelectors-DMzn6YDV.js";import"./zIndexSlice-m57chh8X.js";import"./CartesianChart-CuRdEYaC.js";import"./chartDataContext-BRTsTQpm.js";import"./CategoricalChart-peX_-ePN.js";import"./Curve-yPyY_uXZ.js";import"./types-CVJb2MOT.js";import"./Layer-DV1icpzr.js";import"./ReactUtils-BJV4SHfz.js";import"./Label-DynPPCJ6.js";import"./Text-BW-lGQnj.js";import"./DOMUtils-z6sJWHwI.js";import"./ZIndexLayer-DaJzxTrT.js";import"./ActivePoints-BKOnFX-a.js";import"./Dot-4a706hev.js";import"./RegisterGraphicalItemId-BuTwWOrx.js";import"./GraphicalItemClipPath-3JZrHeBE.js";import"./SetGraphicalItem-CC-hIiO2.js";import"./useAnimationId-FO0Tg1s_.js";import"./getRadiusAndStrokeWidthFromDot--FuVWYJV.js";import"./graphicalItemSelectors-B2Vfl7ve.js";import"./index-CPKyuAeN.js";import"./ChartSizeDimensions-C_sOGjRQ.js";import"./OffsetShower-dtmi7EOu.js";import"./PlotAreaShower-Di55GjjN.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
