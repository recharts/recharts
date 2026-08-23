import{R as t}from"./iframe-mnAzB4o-.js";import{R as p}from"./zIndexSlice-D6JZj8nu.js";import{C as m}from"./ComposedChart-CBdoahrj.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DIvXU_KZ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DkA8wIil.js";import"./index-BVGAPrUY.js";import"./index-CtygltyQ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DC3M7TEl.js";import"./isWellBehavedNumber-Csz_97LF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C7l6xfyV.js";import"./index-DwcIeoVT.js";import"./index-UdOV9nJO.js";import"./axisSelectors-C1jFNzqn.js";import"./d3-scale-CRNCXhx2.js";import"./renderedTicksSlice-Bqv1L3Am.js";import"./CartesianChart-D3iAW6ju.js";import"./chartDataContext-d1JBVIv3.js";import"./CategoricalChart-Dvtv2sve.js";import"./Layer-Cr54uUjf.js";import"./AnimatedItems-DKc9cClm.js";import"./Label-CHzafVhK.js";import"./Text-BI5zaK2n.js";import"./DOMUtils-CS3XthwK.js";import"./useId-DlzE9UHI.js";import"./useBackwardsCompatibleTheme-D4uIz6B3.js";import"./ZIndexLayer-B_AeVWGh.js";import"./useAnimationId-C2CD38MP.js";import"./ActivePoints-0ixA6i7h.js";import"./Dot-CbnujumB.js";import"./types-CREZv15c.js";import"./RegisterGraphicalItemId-CVIGTwbR.js";import"./GraphicalItemClipPath-2kfGKsY1.js";import"./SetGraphicalItem-C3b_Fk26.js";import"./getRadiusAndStrokeWidthFromDot-CGiQ8j25.js";import"./ActiveShapeUtils-CPpaX7pN.js";import"./Curve-o9IX9QPv.js";import"./step-BYsm7KBD.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CAzK6o2T.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const rt=["FillPattern"];export{e as FillPattern,rt as __namedExportsOrder,et as default};
