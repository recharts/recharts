import{R as t}from"./iframe-CLpUHFUx.js";import{R as p}from"./zIndexSlice-ih_i1g5t.js";import{C as m}from"./ComposedChart-7luAuAhp.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-D0oF1waj.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CLd1kjXB.js";import"./index-CvxUcRs5.js";import"./index-DaW4Sl48.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DTakvVP9.js";import"./isWellBehavedNumber-CHss1wLf.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-VhXLtIU3.js";import"./index-BQRTjV6n.js";import"./index-BWENVgmR.js";import"./renderedTicksSlice-CuCo3UJj.js";import"./axisSelectors-DcdgEKfW.js";import"./d3-scale-BxXYUMYM.js";import"./CartesianChart-BoKvv8NW.js";import"./chartDataContext-BXtd66MC.js";import"./CategoricalChart-D4oV83W1.js";import"./Layer-3AQvPOBc.js";import"./AnimatedItems-BvAtBQX7.js";import"./Label-Cri2SigJ.js";import"./Text-CSq4IeED.js";import"./DOMUtils-D-nz1rzx.js";import"./ZIndexLayer-DoU1T_G7.js";import"./useAnimationId-NKiMzI6a.js";import"./ActivePoints-B2iIRtsT.js";import"./Dot-rjCZu1cP.js";import"./types-BtWOZotP.js";import"./RegisterGraphicalItemId-D5SJC0o6.js";import"./GraphicalItemClipPath-BJ5GEIwI.js";import"./SetGraphicalItem-DL6fPXwP.js";import"./getRadiusAndStrokeWidthFromDot-b1AZaPVX.js";import"./ActiveShapeUtils-BoZWmQGY.js";import"./Curve-DZJekjpR.js";import"./step-_f2gFda3.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DkqTdS0-.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
