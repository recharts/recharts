import{R as t}from"./iframe-Da76_689.js";import{R as p}from"./zIndexSlice-a0xNinnk.js";import{C as m}from"./ComposedChart--w51xXk6.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CxeL95H_.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-COYVVxZg.js";import"./index-C8Z1S5Pt.js";import"./index-DUt0bfqM.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BpFPYIFo.js";import"./isWellBehavedNumber-CH2-kpaa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BJISCefM.js";import"./index-DhFXp8vM.js";import"./index-JDhekbA3.js";import"./renderedTicksSlice-ObOqR6xe.js";import"./axisSelectors-Bw6517Pm.js";import"./d3-scale-DyCdYIOY.js";import"./CartesianChart-Cprw1vi1.js";import"./chartDataContext-BxrKQ5f-.js";import"./CategoricalChart-D82DfAs8.js";import"./Layer-BItCE877.js";import"./AnimatedItems-TTrqb8VQ.js";import"./Label-BNqYKN1e.js";import"./Text-C0rNKqCf.js";import"./DOMUtils-B2_jGy5F.js";import"./ZIndexLayer-DP22msHm.js";import"./useAnimationId-hnsh8Uwf.js";import"./ActivePoints-XUjLYmrr.js";import"./Dot-Clx9ykW3.js";import"./types-Dy7AAOTV.js";import"./RegisterGraphicalItemId-DiJJvqsF.js";import"./GraphicalItemClipPath-BO9b33Ly.js";import"./SetGraphicalItem-Bzc-F73M.js";import"./graphicalItemIdentity-HzAIj0MZ.js";import"./ActiveShapeUtils-Da9-43zR.js";import"./Curve-BZ7uJ3AN.js";import"./step-fSL6Yfr6.js";import"./path-DyVhHtw_.js";import"./RechartsThemeContext-BbZg4AjH.js";import"./graphicalItemSelectors-bVhLjSEG.js";const $={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const tt=["FillPattern"];export{e as FillPattern,tt as __namedExportsOrder,$ as default};
