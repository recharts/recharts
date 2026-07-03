import{R as t}from"./iframe-DIEAN2hv.js";import{R as p}from"./zIndexSlice-h_BQOYV2.js";import{C as m}from"./ComposedChart-CYZi5jHO.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CvFhD4Fz.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DcPgljw6.js";import"./index-Ck53zJJh.js";import"./index-DM6nPyH7.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DUc1ArnZ.js";import"./isWellBehavedNumber-9xmYcKjE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-a7tD0_PW.js";import"./index-DbRgicKF.js";import"./index-BvKFxAi3.js";import"./renderedTicksSlice-CR60noDO.js";import"./axisSelectors-CGWz1F9h.js";import"./d3-scale-iAsu0ejP.js";import"./CartesianChart-GGBraKX7.js";import"./chartDataContext-DLLGaQBY.js";import"./CategoricalChart-Ceegmo7R.js";import"./Layer-B-cLPPNh.js";import"./AnimatedItems-CVRAeMdn.js";import"./Label-LaTn0MyB.js";import"./Text-BNRKLEiU.js";import"./DOMUtils-C1Qec3X5.js";import"./ZIndexLayer-chy9WqcQ.js";import"./useAnimationId-D28s5KK7.js";import"./ActivePoints-BoeM8OQc.js";import"./Dot-DvzB0nD2.js";import"./types-avIm2VNf.js";import"./RegisterGraphicalItemId-ZGmSkN-p.js";import"./GraphicalItemClipPath-B9S_-7Qm.js";import"./SetGraphicalItem-Dyls43Kb.js";import"./getRadiusAndStrokeWidthFromDot-Cvj7EGO9.js";import"./ActiveShapeUtils-DzejIYqw.js";import"./Curve-DWZWWV6c.js";import"./step-B5sxv5_w.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CrF_yJlc.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
