import{R as t}from"./iframe-ge4_mRTY.js";import{R as p}from"./zIndexSlice-uDWjDJHd.js";import{C as m}from"./ComposedChart-BCRhkK5V.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-JDBhDUQG.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-5caQeXVN.js";import"./index-DZPpWsc8.js";import"./index-BWkGghDn.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-zgTsAR7U.js";import"./isWellBehavedNumber-D2jfZHGG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DrRaVIDn.js";import"./index-DroDtVMI.js";import"./index-C2Y_Hicx.js";import"./renderedTicksSlice-BAzheGmb.js";import"./axisSelectors-Cxx4umpa.js";import"./d3-scale-DAQlT4KL.js";import"./CartesianChart-BuotdUK2.js";import"./chartDataContext-pSMyX_Ym.js";import"./CategoricalChart-Brm-3Wpy.js";import"./Layer-CMf1Vf_h.js";import"./AnimatedItems-DTVko9-M.js";import"./Label-DHHP6jol.js";import"./Text-D0QrHV93.js";import"./DOMUtils-B5z_Rz2Y.js";import"./ZIndexLayer-nB6oQ6-0.js";import"./useAnimationId-BwVBlHti.js";import"./ActivePoints-D4PeEGz4.js";import"./Dot-CSi-hwhf.js";import"./types-BGJIvFfK.js";import"./RegisterGraphicalItemId-uw1PY0zP.js";import"./GraphicalItemClipPath-B2dCpKux.js";import"./SetGraphicalItem-CNlJ3f0Q.js";import"./graphicalItemIdentity-UY1iR6Cu.js";import"./ActiveShapeUtils-SugLVfR8.js";import"./Curve-DgHNdRhX.js";import"./step-DgphAjx2.js";import"./path-DyVhHtw_.js";import"./RechartsThemeContext-Z1jjPkTn.js";import"./graphicalItemSelectors-WhTa9SlS.js";const $={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
