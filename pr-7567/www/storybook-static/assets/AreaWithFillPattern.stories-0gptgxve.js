import{R as t}from"./iframe-C99kJ-sM.js";import{R as p}from"./zIndexSlice-C3R-krej.js";import{C as m}from"./ComposedChart-DWJvatn-.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Bbs6ah0D.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-TD-ujZZS.js";import"./index-B6TMzpAA.js";import"./index-CUfn358W.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Cc9w7OOG.js";import"./isWellBehavedNumber-DU5fy8xE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-U1Sp_egH.js";import"./index-C5Vu0OFw.js";import"./index-D0yrKOFo.js";import"./renderedTicksSlice-C63jCstw.js";import"./axisSelectors-D_vl6hBR.js";import"./d3-scale-BK39mUYh.js";import"./CartesianChart-C_2fYW0K.js";import"./chartDataContext-Bt7guA5_.js";import"./CategoricalChart-Dzn25l1U.js";import"./Layer-DA9YNkXX.js";import"./AnimatedItems-D-0ILzHR.js";import"./Label-B5axae2p.js";import"./Text-DJvXqMRS.js";import"./DOMUtils-DR1Kyd_s.js";import"./ZIndexLayer-Cja0J2zA.js";import"./useAnimationId-DvmTFhVR.js";import"./ActivePoints-BMi_QsBO.js";import"./Dot-BDIAoW-L.js";import"./types-DQRiSjSa.js";import"./RegisterGraphicalItemId-BCeI4v7T.js";import"./GraphicalItemClipPath-BvRhFcbX.js";import"./SetGraphicalItem-DGSCvNHc.js";import"./getRadiusAndStrokeWidthFromDot-CycZh5GD.js";import"./ActiveShapeUtils-BBZmkA4Q.js";import"./Curve-DiBuQ3yP.js";import"./step-D8AQ14_c.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CHBC6mVJ.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
