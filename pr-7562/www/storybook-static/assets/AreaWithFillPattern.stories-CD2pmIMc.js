import{R as t}from"./iframe-54ZcEpUv.js";import{R as p}from"./zIndexSlice-D4EcTS4q.js";import{C as m}from"./ComposedChart-CXJcoZU4.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CJSaHgRn.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DtmCwuH2.js";import"./index-Rdbq1tFP.js";import"./index-MCJglrpU.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DaxnpdSq.js";import"./isWellBehavedNumber-xZge7Uxu.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-r5U10tn2.js";import"./index-B1wDf6J5.js";import"./index-Bge3lKql.js";import"./renderedTicksSlice-B5SG4yYX.js";import"./axisSelectors-BFZg6wbM.js";import"./d3-scale-Bz_vEXwn.js";import"./CartesianChart-wsfik70h.js";import"./chartDataContext-C8dhr_lt.js";import"./CategoricalChart-FIiVxhF6.js";import"./Layer-C5bNrRV9.js";import"./AnimatedItems-Bo-aqLFl.js";import"./Label--73vW_dK.js";import"./Text-DL_vIJFI.js";import"./DOMUtils-B0BwWkl9.js";import"./ZIndexLayer-CQupnOhG.js";import"./useAnimationId-D-RZ_xXC.js";import"./ActivePoints-DSvyBCZS.js";import"./Dot-C2NjTS0n.js";import"./types-kdBRSK-c.js";import"./RegisterGraphicalItemId-BIJ3N5jx.js";import"./GraphicalItemClipPath-_HL_VRQE.js";import"./SetGraphicalItem-BBUtbuL-.js";import"./getRadiusAndStrokeWidthFromDot-eGcgYRyQ.js";import"./ActiveShapeUtils-DKX9K39u.js";import"./Curve-FTpO0g2t.js";import"./step-BsOSpGLs.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-C-mFdHvd.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
