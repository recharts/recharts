import{R as t}from"./iframe-BZ8dVzH9.js";import{R as p}from"./zIndexSlice-alAuneH8.js";import{C as m}from"./ComposedChart-Bsbx0YHv.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BIpwbTl2.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Gvesfo2A.js";import"./index-BG6e4aCS.js";import"./index-05PttkMT.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DGRkN7my.js";import"./isWellBehavedNumber-DuT8v1eR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BUL_ZWsP.js";import"./axisSelectors-Bf9eJXot.js";import"./d3-scale-BqJh_GJr.js";import"./index-Bh_WxC72.js";import"./index-TQNe-Pfx.js";import"./renderedTicksSlice-CdbAedzg.js";import"./index-1GZEZdCR.js";import"./CartesianChart-CPDbtls9.js";import"./chartDataContext-Dooqfk1y.js";import"./CategoricalChart-wlCT99n2.js";import"./Layer-DFGb6VX8.js";import"./AnimatedItems-DFtjNgrp.js";import"./Label-D8Xv73in.js";import"./Text-Sov8IyzM.js";import"./DOMUtils-B5j94FrC.js";import"./useId-Cmc9xIYY.js";import"./useBackwardsCompatibleTheme-mp8lDntE.js";import"./ZIndexLayer-By4t7zGO.js";import"./useAnimationId-CAROHwad.js";import"./ActivePoints-BRuknYci.js";import"./Dot-d3AKepe-.js";import"./types-JZ66y424.js";import"./RegisterGraphicalItemId-DjZaW0U6.js";import"./GraphicalItemClipPath-Bqlh9UVi.js";import"./SetGraphicalItem-C_OKi3Rd.js";import"./getRadiusAndStrokeWidthFromDot-BRivEq7U.js";import"./ActiveShapeUtils-DjhXDsDC.js";import"./Curve-GkKc5FU6.js";import"./step-BzQ2FL9y.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DrldTHyX.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,rt as __namedExportsOrder,et as default};
