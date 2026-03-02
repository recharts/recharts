import{e as t}from"./iframe-DhkZ2o0m.js";import{R as p}from"./arrayEqualityCheck-DiorVL0F.js";import{C as m}from"./ComposedChart-BeMXkwbT.js";import{A as r}from"./Area-jezJ_I_u.js";import{R as s}from"./RechartsHookInspector-BuoZ4ObR.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CSGl7VrG.js";import"./immer-Bkx33mOQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CmxS5fzr.js";import"./index-SD_aaOBA.js";import"./hooks-OILl07sr.js";import"./axisSelectors-Cvg0ebzb.js";import"./d3-scale-q2jyLF3t.js";import"./zIndexSlice-DaOHrDE6.js";import"./renderedTicksSlice-D1lm_SFB.js";import"./CartesianChart-aiKFXcKI.js";import"./chartDataContext-B8muVvAS.js";import"./CategoricalChart-BQJMywxR.js";import"./Curve-B6e_2wmJ.js";import"./types-BTJpC2jO.js";import"./step-BPbIkI3w.js";import"./Layer-d6_qX3Uw.js";import"./ReactUtils-BqOB82pn.js";import"./Label-5AtDVNzN.js";import"./Text-DrfD7ZzH.js";import"./DOMUtils-qE1uPIkW.js";import"./ZIndexLayer-CshXapoA.js";import"./ActivePoints-DHfGIbeU.js";import"./Dot-IQBfyTf2.js";import"./RegisterGraphicalItemId--Yyxg6pn.js";import"./GraphicalItemClipPath-yVVA2tQv.js";import"./SetGraphicalItem-_G_kPX0B.js";import"./useAnimationId-C7zWi5EW.js";import"./getRadiusAndStrokeWidthFromDot-CKsNqEkn.js";import"./graphicalItemSelectors-CKbyLoaV.js";import"./index-CflVzEfn.js";import"./ChartSizeDimensions-lGHONQf_.js";import"./OffsetShower-DEQj44LB.js";import"./PlotAreaShower-DvHNujuQ.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
