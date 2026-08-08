import{R as t}from"./iframe-CmqkAU55.js";import{R as p}from"./zIndexSlice-DttPm2yG.js";import{C as m}from"./ComposedChart-B_dZznJ_.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BFm6M7Go.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-45H0AIAq.js";import"./index-CrNK6q9O.js";import"./index-Ccra80NE.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BMY6nxFh.js";import"./isWellBehavedNumber-eRUuJPZy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CdZHTDnE.js";import"./index-ImOuOX5i.js";import"./index-BIMQ5lZl.js";import"./axisSelectors-v6b69rA0.js";import"./d3-scale-CM34ZdGn.js";import"./renderedTicksSlice-CSz7jA9g.js";import"./CartesianChart-DHPjYa1I.js";import"./chartDataContext-CiMrnFkp.js";import"./CategoricalChart-CAeMU4C2.js";import"./Layer-JlYR6W_Z.js";import"./AnimatedItems-CEenLt2d.js";import"./Label-CI9Aa94q.js";import"./Text-DFCCUK93.js";import"./DOMUtils-DDl9EDuG.js";import"./ZIndexLayer-B8NE7f7O.js";import"./useAnimationId-DOKlurUN.js";import"./ActivePoints-DX-T5XFy.js";import"./Dot-BQXlip-b.js";import"./types-DD7WKq2Q.js";import"./RegisterGraphicalItemId-DkK-FjDI.js";import"./GraphicalItemClipPath-bjx9wsKp.js";import"./SetGraphicalItem-Bg0mOoGz.js";import"./getRadiusAndStrokeWidthFromDot-h0JWGKQ2.js";import"./ActiveShapeUtils-BJK8znX0.js";import"./Curve-CGQeDOz5.js";import"./step-CxyVRtQl.js";import"./path-DyVhHtw_.js";import"./RechartsThemeContext-C9_zddkn.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DQSzFvnt.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const et=["FillPattern"];export{e as FillPattern,et as __namedExportsOrder,tt as default};
