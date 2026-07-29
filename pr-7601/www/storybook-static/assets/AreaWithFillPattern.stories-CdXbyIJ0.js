import{R as t}from"./iframe-B1mwOZ4B.js";import{R as p}from"./zIndexSlice-DpKDqXzy.js";import{C as m}from"./ComposedChart-BJ29ova_.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-4Rudm8lP.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B9hrHP2z.js";import"./index-CGmAV-n6.js";import"./index-DfE0c-YN.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C5OuETHs.js";import"./isWellBehavedNumber-CJikzJGt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CO3J1RuZ.js";import"./index-h2iP9BkR.js";import"./index-CErrAQ9r.js";import"./renderedTicksSlice-CU0BXE-7.js";import"./axisSelectors-CHibCpWI.js";import"./d3-scale-C-ENdXUt.js";import"./CartesianChart-0J6AxZg0.js";import"./chartDataContext-4XOxxqNR.js";import"./CategoricalChart-aKqfV8G8.js";import"./Layer-BPIZMWg2.js";import"./AnimatedItems-CP4Ed5tB.js";import"./Label-B_N5n860.js";import"./Text-BvU8EdL8.js";import"./DOMUtils-j3EH7wUz.js";import"./ZIndexLayer-Dgr6-NYc.js";import"./useAnimationId-DOfhPbEn.js";import"./ActivePoints-HVYpWw6k.js";import"./Dot-DiSbgsbS.js";import"./types-D3n9ld0M.js";import"./RegisterGraphicalItemId-CNYa3zPu.js";import"./GraphicalItemClipPath-B5MjopOD.js";import"./SetGraphicalItem-D7FiLvSi.js";import"./getRadiusAndStrokeWidthFromDot-CB_M050h.js";import"./ActiveShapeUtils-CKuXh55Z.js";import"./Curve-BdmH34os.js";import"./step-CnGXO0Ja.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CZB8nDwD.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
