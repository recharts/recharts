import{R as t}from"./iframe-BLfLpZux.js";import{R as p}from"./zIndexSlice-BdrEPl1y.js";import{C as m}from"./ComposedChart-ZvZa43Nr.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-6dYSgMSq.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-fbWpHloR.js";import"./index-iIj_N3fe.js";import"./index-CK4MQXPT.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BZWZ2sNL.js";import"./isWellBehavedNumber-D4oOe6S5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CTW173I9.js";import"./index-rWKftsTY.js";import"./index-B91Ea_y6.js";import"./renderedTicksSlice-Bmm8hDp0.js";import"./axisSelectors-y8UfcIHb.js";import"./d3-scale-DPpDzINu.js";import"./CartesianChart-DkG-1GT9.js";import"./chartDataContext-DtPI9Rf-.js";import"./CategoricalChart-DDKWOc6b.js";import"./Layer-Bul18HQO.js";import"./AnimatedItems-DJFtUIBr.js";import"./Label-BjZvH2GY.js";import"./Text-BhOJQRua.js";import"./DOMUtils-CsfQH6x5.js";import"./ZIndexLayer-BVA4IMdO.js";import"./useAnimationId-CIoZmDPD.js";import"./ActivePoints-Cj4P9vg0.js";import"./Dot-B6bHrZQI.js";import"./types-CXyRetpj.js";import"./RegisterGraphicalItemId-CYVd3_VS.js";import"./GraphicalItemClipPath-DsE8A5bl.js";import"./SetGraphicalItem-DGLUBmAF.js";import"./getRadiusAndStrokeWidthFromDot-gKBfjIX2.js";import"./ActiveShapeUtils-BK3uHCCg.js";import"./Curve-ChFgtFv9.js";import"./step-CGzEtFcj.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-nW53RAvp.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
