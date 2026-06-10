import{R as t}from"./iframe-Cd3J5nRN.js";import{R as p}from"./zIndexSlice-wIODfcHB.js";import{C as m}from"./ComposedChart-CR74LLuH.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Dni-SMys.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-D6_cV7mT.js";import"./index-DYlcgjqt.js";import"./index-BK5to_p5.js";import"./get-CrzYsNNZ.js";import"./resolveDefaultProps-BAOUvy4N.js";import"./isWellBehavedNumber-jGn4h3zq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-4JmG_mcb.js";import"./index-CLQBN1dD.js";import"./index-DkbQm4bl.js";import"./renderedTicksSlice-DUoWqaFq.js";import"./axisSelectors-BTr0cSxw.js";import"./d3-scale-DxsYWkxB.js";import"./string-B6fdYHAA.js";import"./CartesianChart-QShZ6Qyv.js";import"./chartDataContext-DQMMfvFX.js";import"./CategoricalChart-z0DLkqJ1.js";import"./Layer-C0-faibl.js";import"./AnimatedItems-Dhj62weC.js";import"./Label-x5qCkJ5y.js";import"./Text-BQiCL8pu.js";import"./DOMUtils-C0pcSgNu.js";import"./ZIndexLayer-DbYdMZ0m.js";import"./useAnimationId-Bd8ziSRa.js";import"./ActivePoints-IkVOH40p.js";import"./Dot-DwJjJto9.js";import"./types-DvVhAiRy.js";import"./RegisterGraphicalItemId-DPItxssW.js";import"./GraphicalItemClipPath-CZRSWXrI.js";import"./SetGraphicalItem-DYeKk97u.js";import"./getRadiusAndStrokeWidthFromDot-DvmlTDI9.js";import"./ActiveShapeUtils-DEonU6C1.js";import"./Curve-B0MYcAMh.js";import"./step-CxP-HNru.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-Cb0rlsta.js";const $={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
