import{R as t}from"./iframe-DMOF2lK6.js";import{R as p}from"./zIndexSlice-DhTc22fH.js";import{C as m}from"./ComposedChart-D3i3PjRq.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-v7pCvtoy.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DdV_xgY5.js";import"./index-CPzx0qn0.js";import"./index-DMOQZokV.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-y8-G4ZMe.js";import"./isWellBehavedNumber-dZNNr5ol.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-OXven1HQ.js";import"./index-D6CqkTNp.js";import"./index-CZ5vZ9qb.js";import"./renderedTicksSlice-Ba4-qyoV.js";import"./axisSelectors-CxjdpUYQ.js";import"./d3-scale-fRi62pfH.js";import"./CartesianChart-Dri7Y6-1.js";import"./chartDataContext-CTH0eIlx.js";import"./CategoricalChart-C3YmcWt7.js";import"./Layer-7eLuysDW.js";import"./AnimatedItems-BdaIVj2C.js";import"./Label-BEoMP2Su.js";import"./Text-Diu2UmEV.js";import"./DOMUtils-BbhpPFQ_.js";import"./ZIndexLayer-DUULPtO2.js";import"./useAnimationId-Djm7sZoE.js";import"./ActivePoints-Dw1JugLI.js";import"./Dot-DSdOAVgn.js";import"./types-CpWsykXF.js";import"./RegisterGraphicalItemId-CeE9Z4_x.js";import"./GraphicalItemClipPath-BUGzJbXN.js";import"./SetGraphicalItem-B-lQGR6o.js";import"./getRadiusAndStrokeWidthFromDot-EOdI7GLa.js";import"./ActiveShapeUtils-CJ8DXgxz.js";import"./Curve-DysNMUK1.js";import"./step-DvpijsBX.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-iCteOsSQ.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
