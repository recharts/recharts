import{R as t}from"./iframe-VZ2aM8fP.js";import{R as p}from"./zIndexSlice-CQOPOcrz.js";import{C as m}from"./ComposedChart-BflrR0gu.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-C4E6QKY3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CpHch1iP.js";import"./index-RAnsrEyk.js";import"./index-5JKLnMLz.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-_p4e6Off.js";import"./isWellBehavedNumber-B1YHMHRX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BgtBwIWT.js";import"./index-B8NmJaJc.js";import"./index-BdOpZNUA.js";import"./renderedTicksSlice-BWvg2Uuk.js";import"./axisSelectors-BuT92BdO.js";import"./d3-scale-2P7n4BrN.js";import"./CartesianChart-Bc8fypAa.js";import"./chartDataContext-Ci6amljO.js";import"./CategoricalChart-CxsxsIbU.js";import"./Layer-D5KpKuLh.js";import"./AnimatedItems-B1Uj1Gzk.js";import"./Label-Bcx9yaip.js";import"./Text-BxYT9j-0.js";import"./DOMUtils-D8EYtam3.js";import"./ZIndexLayer-BQK00jlT.js";import"./useAnimationId-BWSvDpI-.js";import"./ActivePoints-oAKWC-6n.js";import"./Dot-CNR-wtas.js";import"./types-BixaCUGO.js";import"./RegisterGraphicalItemId-C7us6vqj.js";import"./GraphicalItemClipPath-BhbKOYCd.js";import"./SetGraphicalItem-BqP4f3rQ.js";import"./getRadiusAndStrokeWidthFromDot-D2NN5p-Y.js";import"./ActiveShapeUtils-C3jZ13_H.js";import"./Curve-B5MshFyr.js";import"./step-DBa2Myk3.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BD0xBJsD.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const $=["FillPattern"];export{e as FillPattern,$ as __namedExportsOrder,Z as default};
