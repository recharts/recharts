import{e as t}from"./iframe-qr4fLFpB.js";import{R as p}from"./arrayEqualityCheck-Bgik-Trt.js";import{C as m}from"./ComposedChart-L7gwkfC6.js";import{A as r}from"./Area-DQjrFGaj.js";import{R as s}from"./RechartsHookInspector-Br68X8gZ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C5koYet4.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-Mc2-Xf8T.js";import"./hooks-BuX4DZtw.js";import"./axisSelectors-Bo6ergNf.js";import"./zIndexSlice-DUnMgb4W.js";import"./CartesianChart-ByeB8V_W.js";import"./chartDataContext-GFM1rpYw.js";import"./CategoricalChart-KanALp4p.js";import"./Curve-VUq81ujr.js";import"./types-D-QHYsBW.js";import"./Layer-CflgJyns.js";import"./ReactUtils-Bl1pLFc3.js";import"./Label-BCYS56wU.js";import"./Text-GNEjhoqj.js";import"./DOMUtils-DRnJ2sM4.js";import"./ZIndexLayer-BTmo2O_X.js";import"./ActivePoints-DzfMrV3Y.js";import"./Dot-DatHxVLb.js";import"./RegisterGraphicalItemId-Bik8WklO.js";import"./GraphicalItemClipPath-BxRwLljn.js";import"./SetGraphicalItem--WYAW04t.js";import"./useAnimationId-C_x8lvyj.js";import"./getRadiusAndStrokeWidthFromDot-V53muJ6j.js";import"./graphicalItemSelectors-B0wx3vwb.js";import"./index-BzLAea9N.js";import"./ChartSizeDimensions-CgtvjcwQ.js";import"./OffsetShower-B6BSL9ge.js";import"./PlotAreaShower-CCEHTneG.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
