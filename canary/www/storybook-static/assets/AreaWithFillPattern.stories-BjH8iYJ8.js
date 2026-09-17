import{R as t}from"./iframe-u4ce63CG.js";import{R as p}from"./zIndexSlice-BYJycarP.js";import{C as m}from"./ComposedChart-C2sXY6fb.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BW87PAw6.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B6MgLZYN.js";import"./index-BVP_svq1.js";import"./index-BKlhDgWa.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CgaWkI-c.js";import"./isWellBehavedNumber-DjD-6vVv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Zz5ful62.js";import"./axisSelectors-CGHflyYT.js";import"./d3-scale-B8KmfmKn.js";import"./index-pI1Zm9lH.js";import"./index-PkCf_CwH.js";import"./renderedTicksSlice-Cs4cysVU.js";import"./index-CMticpJd.js";import"./CartesianChart-Ddb32mjN.js";import"./chartDataContext-0PEmuSXk.js";import"./CategoricalChart-BiBJy5y7.js";import"./Layer-DNxK11xQ.js";import"./AnimatedItems-B0QYHb0Z.js";import"./Label-D-DGLST-.js";import"./Text-B-fKZlN3.js";import"./DOMUtils-DPz05X-i.js";import"./useId-CDzZCSG6.js";import"./useBackwardsCompatibleTheme-BMXS8hwA.js";import"./ZIndexLayer-BDv8sIeq.js";import"./useAnimationId-CFY7vA8F.js";import"./ActivePoints-CmJoQcI8.js";import"./Dot-CyCokxWF.js";import"./types-BSKo_D-h.js";import"./RegisterGraphicalItemId-CERn6dbU.js";import"./GraphicalItemClipPath-BkjNj3rm.js";import"./SetGraphicalItem-R2AcNzTI.js";import"./getRadiusAndStrokeWidthFromDot-BNYPB0Rc.js";import"./ActiveShapeUtils-D76eZVf4.js";import"./Curve-Cpv10agS.js";import"./step-B8l-YbAv.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DQSDp_oq.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
