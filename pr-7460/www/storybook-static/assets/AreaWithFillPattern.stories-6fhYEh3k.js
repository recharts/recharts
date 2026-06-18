import{R as t}from"./iframe-bh8Hdh0s.js";import{R as p}from"./zIndexSlice-D-BYbnQO.js";import{C as m}from"./ComposedChart-D0rCA8sN.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-C8QqvRIs.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Di2Y-BX2.js";import"./index-BvOZTDpw.js";import"./index-BKp5y7FT.js";import"./get-D3Bb09EQ.js";import"./resolveDefaultProps-DrqDcb4q.js";import"./isWellBehavedNumber-BEwe5En6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-bPWrhjV6.js";import"./index-yP_7__bV.js";import"./index-DMGyx--D.js";import"./renderedTicksSlice-CAguNiQd.js";import"./axisSelectors-CJnElyGk.js";import"./d3-scale-nMJeyC7B.js";import"./string-B6fdYHAA.js";import"./CartesianChart-EUP1j0p6.js";import"./chartDataContext-nAZQwMJZ.js";import"./CategoricalChart-D4vACcZf.js";import"./Layer-CFpuUaFs.js";import"./AnimatedItems-2yvO_B45.js";import"./Label-4dzVOcp4.js";import"./Text-DNFdD7FY.js";import"./DOMUtils-CqbIbq5Q.js";import"./ZIndexLayer-DkZ-MLZl.js";import"./useAnimationId-CfFImJZH.js";import"./ActivePoints-BJkC-K95.js";import"./Dot-DpzQ1Tcm.js";import"./types-CGzL9fNM.js";import"./RegisterGraphicalItemId-D7G5Ydkp.js";import"./GraphicalItemClipPath-JLz8ewYQ.js";import"./SetGraphicalItem-Dnctc4Vz.js";import"./getRadiusAndStrokeWidthFromDot-CAc0078J.js";import"./ActiveShapeUtils-BdiO1tHu.js";import"./Curve-C1GsF6pk.js";import"./step-BRqV4bUq.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DZZZgMPF.js";const $={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
