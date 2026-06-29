import{R as t}from"./iframe-BAIqIWNA.js";import{R as p}from"./zIndexSlice-CH0jeNcq.js";import{C as m}from"./ComposedChart-Hcr-ILe-.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-YfuKDYkC.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-RdvYAJ7W.js";import"./index-DEPXziQr.js";import"./index-8mm5rYzH.js";import"./get-BRwdZQjD.js";import"./resolveDefaultProps-i7ykL5qD.js";import"./isWellBehavedNumber-CNdP1Ytp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C_-Hq-nw.js";import"./index-toxz65-Z.js";import"./index-CyrXrpRf.js";import"./renderedTicksSlice-BzbX13g0.js";import"./axisSelectors-DSdgiRZF.js";import"./d3-scale-XjdmCel8.js";import"./CartesianChart-rcoBq7rb.js";import"./chartDataContext-B9E6qJUl.js";import"./CategoricalChart-2sY7x5Tz.js";import"./Layer-B1lMYI05.js";import"./AnimatedItems-C-tOmxqX.js";import"./Label-Bax8HmP7.js";import"./Text-zDVT9NAV.js";import"./DOMUtils-DVLfSCIT.js";import"./ZIndexLayer-_81h3bN-.js";import"./useAnimationId-BLdV4NOG.js";import"./ActivePoints-CRPdmnzs.js";import"./Dot-BHbC6SWf.js";import"./types-CesEI09P.js";import"./RegisterGraphicalItemId-D75UFrcW.js";import"./GraphicalItemClipPath-hNmJpUVR.js";import"./SetGraphicalItem-CgGxkUt7.js";import"./getRadiusAndStrokeWidthFromDot-B3GO9P3F.js";import"./ActiveShapeUtils-Cmphxx7v.js";import"./Curve-DkPKhJGD.js";import"./step-BUpdG0kT.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-C-Ixjzq9.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
