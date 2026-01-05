import{e as t}from"./iframe-Dh_IuGPW.js";import{R as p}from"./arrayEqualityCheck-7YZsQ9Yt.js";import{C as m}from"./ComposedChart-BT1Cqczr.js";import{A as r}from"./Area-UkM-Gu6x.js";import{R as s}from"./RechartsHookInspector--VVdTSeU.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-tTgU6cCH.js";import"./PolarUtils-ByAhdJKw.js";import"./RechartsWrapper-Bf-DnYOw.js";import"./hooks-D1sh8Xam.js";import"./axisSelectors-D1G3YuQl.js";import"./zIndexSlice-Bln6WQdm.js";import"./CartesianChart-DmznhiBw.js";import"./chartDataContext-B9etQFAj.js";import"./CategoricalChart-DXWZuSB1.js";import"./Curve-et2ZIOkM.js";import"./types-C1SnlukV.js";import"./Layer-0hKCd9Go.js";import"./ReactUtils-CN6AvFkh.js";import"./Label-CwPC6lqR.js";import"./Text-5FWhTZND.js";import"./DOMUtils-1CpgM-hP.js";import"./ZIndexLayer-DgCIyG2A.js";import"./ActivePoints-BukcLVSu.js";import"./Dot-C1cga5mV.js";import"./RegisterGraphicalItemId-C5qI6NMo.js";import"./GraphicalItemClipPath-DVZrGS-c.js";import"./SetGraphicalItem-l88fIsgf.js";import"./useAnimationId-DFnSrzQe.js";import"./getRadiusAndStrokeWidthFromDot-CHYbPHm1.js";import"./graphicalItemSelectors-DeRV2J7H.js";import"./index-DsFYMPMW.js";import"./ChartSizeDimensions-qNhWq2Xl.js";import"./OffsetShower-DaKIwyBr.js";import"./PlotAreaShower-xnDTqs4e.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
