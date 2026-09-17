import{R as t}from"./iframe-DKiAUKfj.js";import{R as p}from"./zIndexSlice-DRDYTCs-.js";import{C as m}from"./ComposedChart-7seVkJ1o.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DhgccsRl.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C4io43Xn.js";import"./index-B0JUl7NQ.js";import"./index-CGte46WL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-wQyeqB4t.js";import"./isWellBehavedNumber-BQkgEIAs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-V6OGhvVE.js";import"./axisSelectors-CgDB5I1Y.js";import"./d3-scale-DhJR9ZRz.js";import"./index-D64JEJSP.js";import"./index-BZWqRos3.js";import"./renderedTicksSlice-BJG2XwKW.js";import"./index-CTMR6STe.js";import"./CartesianChart-BTQ_MHvG.js";import"./chartDataContext-CVDaw3GU.js";import"./CategoricalChart-DJIGb7_j.js";import"./Layer-TOA8EzlX.js";import"./AnimatedItems-CPnSyqXV.js";import"./Label-BqJsTdph.js";import"./Text-DzjLOXSn.js";import"./DOMUtils-kE23eB48.js";import"./useId-DXDEV1Zs.js";import"./useBackwardsCompatibleTheme-Bntz2N2r.js";import"./ZIndexLayer-Cu2kJPTs.js";import"./useAnimationId-D05enbBD.js";import"./ActivePoints-loRSqDJl.js";import"./Dot-B085JP8i.js";import"./types-CesjT3HQ.js";import"./RegisterGraphicalItemId-DL0AdrUW.js";import"./GraphicalItemClipPath-DJ7nq7QD.js";import"./SetGraphicalItem-B2eXT-xm.js";import"./getRadiusAndStrokeWidthFromDot-Bn_cXEBB.js";import"./ActiveShapeUtils-CameuY1c.js";import"./Curve-NEEyYudm.js";import"./step-DrkPABVT.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BklSfqcr.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
