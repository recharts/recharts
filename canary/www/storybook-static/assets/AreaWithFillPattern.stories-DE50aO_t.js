import{e as t}from"./iframe-DerYKIzi.js";import{R as p}from"./arrayEqualityCheck-BjVe0Fqi.js";import{C as m}from"./ComposedChart-DIipW_Ve.js";import{A as r}from"./Area-DN4z0zsN.js";import{R as s}from"./RechartsHookInspector-6OICS92a.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D_i-pIL4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dp6BNSyV.js";import"./hooks-Bufm5eM3.js";import"./axisSelectors-D2mivk7c.js";import"./zIndexSlice-Dl8TZiao.js";import"./CartesianChart-D0F_6B8F.js";import"./chartDataContext-BIeWUiZ4.js";import"./CategoricalChart-SAQ8s2cq.js";import"./Curve-HbHV5hCk.js";import"./types-aH4hB60Y.js";import"./Layer-D3SGVv1F.js";import"./ReactUtils-C811ViG8.js";import"./Label-Dcc5xZ5Y.js";import"./Text-D2gYoFny.js";import"./DOMUtils-6QLScgDd.js";import"./ZIndexLayer-B4AZig9C.js";import"./ActivePoints-CnKH4Xhf.js";import"./Dot-B8Z8LHGX.js";import"./RegisterGraphicalItemId-55_HnQyg.js";import"./GraphicalItemClipPath-nQyCcZZw.js";import"./SetGraphicalItem-y1gBA4Wm.js";import"./useAnimationId-Q_ju2aFP.js";import"./getRadiusAndStrokeWidthFromDot-JmC9apyq.js";import"./graphicalItemSelectors-DGqGzZkQ.js";import"./index-Baa4xFqo.js";import"./ChartSizeDimensions-CJTC7XUM.js";import"./OffsetShower-CcEDeZ1H.js";import"./PlotAreaShower-lQ69SKO-.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
