import{R as t}from"./iframe-ZwmkHOWK.js";import{R as p}from"./zIndexSlice-B8sjij8M.js";import{C as m}from"./ComposedChart-CFgERvuY.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BpUVygrB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C39dOrQS.js";import"./index-B4E9I_5C.js";import"./index-BAGpmxlA.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CbN-GnY2.js";import"./isWellBehavedNumber-DzkihPO6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CLkBAicL.js";import"./axisSelectors-DaNNrydT.js";import"./d3-scale-DKWhOpVH.js";import"./index-BAV2Qa9k.js";import"./index-Cf44-e7y.js";import"./renderedTicksSlice-CKHEQg46.js";import"./index-DyLWGJaj.js";import"./CartesianChart-B4XfQoQU.js";import"./chartDataContext-Dk9qGRs-.js";import"./CategoricalChart-CMRgznGD.js";import"./Layer-i_0u2Crx.js";import"./AnimatedItems-CFufr1UH.js";import"./Label-BVR5F0n2.js";import"./Text-BI3-3dXY.js";import"./DOMUtils-CP0ZeXZR.js";import"./useId-CFRlQjhC.js";import"./useBackwardsCompatibleTheme-CHv0D4hM.js";import"./ZIndexLayer-Bm6SGbYz.js";import"./useAnimationId-BCL-lQv_.js";import"./ActivePoints-CJLUsm-B.js";import"./Dot-DBtVqS4S.js";import"./types-v1ATzDHk.js";import"./RegisterGraphicalItemId-DwO6JeUN.js";import"./GraphicalItemClipPath-DA7NUISl.js";import"./SetGraphicalItem-D-pUVL2E.js";import"./getRadiusAndStrokeWidthFromDot-ScUuE-rr.js";import"./ActiveShapeUtils-CuQ7F7ce.js";import"./Curve-BC_5nDae.js";import"./step-DANxpaDn.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CYn-McYw.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,it as __namedExportsOrder,rt as default};
