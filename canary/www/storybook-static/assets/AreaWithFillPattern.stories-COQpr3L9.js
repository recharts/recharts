import{R as t}from"./iframe-DRSW8ue2.js";import{R as p}from"./zIndexSlice-Bu-rrRtT.js";import{C as m}from"./ComposedChart-kVHcj-R_.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-C8tKUV98.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CUiRuHKg.js";import"./index-90eqwCh0.js";import"./index-p0Ur2FF4.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-raTiTqbb.js";import"./isWellBehavedNumber-DAnude9s.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DT9xTVvF.js";import"./index-CyOXcHUd.js";import"./index-iUHBfWdS.js";import"./renderedTicksSlice-Dq99djjA.js";import"./axisSelectors-D9B32UgG.js";import"./d3-scale-C6_vDDuq.js";import"./CartesianChart-CHa2q2rq.js";import"./chartDataContext-BFVcvsqe.js";import"./CategoricalChart-CyaAwA7K.js";import"./Layer-BXqs-IsN.js";import"./AnimatedItems-Dm8lwSRg.js";import"./Label-DWIM-PiW.js";import"./Text-DjqRVUg-.js";import"./DOMUtils-CyGXHzmH.js";import"./ZIndexLayer-CrpBbv8w.js";import"./useAnimationId-Dnplssp6.js";import"./ActivePoints-Bj6N22Y9.js";import"./Dot-BBNcCK9J.js";import"./types-CaXHGphp.js";import"./RegisterGraphicalItemId-D6Xem68n.js";import"./GraphicalItemClipPath-D8tm2vL2.js";import"./SetGraphicalItem-CM2WyRpW.js";import"./getRadiusAndStrokeWidthFromDot-BL9YvDb6.js";import"./ActiveShapeUtils-CyqwB66-.js";import"./Curve-BBQJYMka.js";import"./step-D-9g_k4w.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-63b_Enxj.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
