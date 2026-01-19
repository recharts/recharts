import{e as t}from"./iframe-D10KqzUD.js";import{R as p}from"./arrayEqualityCheck-BiFmrFlI.js";import{C as m}from"./ComposedChart-IceyRJ92.js";import{A as r}from"./Area-BCePK51w.js";import{R as s}from"./RechartsHookInspector-D11PdPOv.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-9OrE3puy.js";import"./PolarUtils--rK1_r3m.js";import"./RechartsWrapper-DmZaXDX9.js";import"./hooks-CD0TfSak.js";import"./axisSelectors-C2rRwI0J.js";import"./zIndexSlice-C09Fe5zh.js";import"./CartesianChart-BphZ3X7F.js";import"./chartDataContext-Dv1VUms-.js";import"./CategoricalChart-Cot6VJVX.js";import"./Curve-BHXU1eAM.js";import"./types-DH2QYYrT.js";import"./Layer-ht9SJGho.js";import"./ReactUtils-Bjqgxmj3.js";import"./Label-NWVYeZEG.js";import"./Text-CCvRlOZV.js";import"./DOMUtils-6pjMFL45.js";import"./ZIndexLayer-CJv48mZa.js";import"./ActivePoints-Cl0N8-Qa.js";import"./Dot-WZLVysVK.js";import"./RegisterGraphicalItemId-Da0N4p7t.js";import"./GraphicalItemClipPath-BK-RhyE8.js";import"./SetGraphicalItem-BG3i3hAQ.js";import"./useAnimationId-CbuLj6s5.js";import"./getRadiusAndStrokeWidthFromDot-B2lKpKPj.js";import"./graphicalItemSelectors-Bu-Fe5ip.js";import"./index-CvJ6Av4F.js";import"./ChartSizeDimensions-CrUVJUaS.js";import"./OffsetShower-CpYxr2Ft.js";import"./PlotAreaShower-B_BAjCHP.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
