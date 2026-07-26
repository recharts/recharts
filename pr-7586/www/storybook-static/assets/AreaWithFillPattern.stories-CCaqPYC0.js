import{R as t}from"./iframe-Bj-yQnc2.js";import{R as p}from"./zIndexSlice-DO4y32gA.js";import{C as m}from"./ComposedChart-BMfVAHVi.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BndLTKmv.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CZQMCJbJ.js";import"./index-CXIrlcaX.js";import"./index-C2KJTwEF.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-7WXWf9aL.js";import"./isWellBehavedNumber-A843S5PG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BjwBN1rR.js";import"./index-npMcpUBc.js";import"./index-CUdhCrp9.js";import"./renderedTicksSlice-CagdShEY.js";import"./axisSelectors-DPyctkFQ.js";import"./d3-scale-rY2RSZRS.js";import"./CartesianChart-lhfYoKGZ.js";import"./chartDataContext-CFjDBvvT.js";import"./CategoricalChart-CavyJHAU.js";import"./Layer-BLp5IiBu.js";import"./AnimatedItems-DUyUCCX0.js";import"./Label-Cm9vMlt2.js";import"./Text-RzD6k6DF.js";import"./DOMUtils-DVhKp59x.js";import"./ZIndexLayer-CZNNIEzh.js";import"./useAnimationId-Yo_b-bos.js";import"./ActivePoints-BIrCi9Or.js";import"./Dot-B130eiz7.js";import"./types-YXwkeCBT.js";import"./RegisterGraphicalItemId-DueteZ3j.js";import"./GraphicalItemClipPath-B-sHbKa-.js";import"./SetGraphicalItem-DWNEhJuv.js";import"./getRadiusAndStrokeWidthFromDot-BwxuSyAu.js";import"./ActiveShapeUtils-BoActjfk.js";import"./Curve-CeWd9qmA.js";import"./step-C2Z_nim4.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DrBqiWoN.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
