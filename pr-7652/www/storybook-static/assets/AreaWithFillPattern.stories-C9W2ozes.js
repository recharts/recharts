import{R as t}from"./iframe-B8V7BJ0L.js";import{R as p}from"./zIndexSlice-D-1XQb3V.js";import{C as m}from"./ComposedChart-ixqus0AO.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CVXQcWaX.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CesEnXHC.js";import"./index-CEyD9286.js";import"./index-BrHErK0F.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BVc4-u0s.js";import"./isWellBehavedNumber-DJ8Z02p0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BnC-Jwam.js";import"./index-CpRh0f3d.js";import"./index-I3Tcx3uB.js";import"./axisSelectors-CtDpom86.js";import"./d3-scale-C_Pwa9HE.js";import"./renderedTicksSlice-BEoD_C5H.js";import"./CartesianChart-DbV6u1bg.js";import"./chartDataContext-DkhpcBdG.js";import"./CategoricalChart-CRJAPCFd.js";import"./Layer-DSZQNu8u.js";import"./AnimatedItems-D2zk6WJL.js";import"./Label-eqtAA7cE.js";import"./Text-DNMx3NKa.js";import"./DOMUtils-BPFNazbq.js";import"./useBackwardsCompatibleTheme-DRsZnCOS.js";import"./ZIndexLayer-D9SG3bxa.js";import"./useAnimationId-D0vrdmF4.js";import"./ActivePoints-Bcxj_Z9o.js";import"./Dot-CtEJdvTp.js";import"./types-Bynmgm1l.js";import"./RegisterGraphicalItemId-BrpEQBfx.js";import"./GraphicalItemClipPath-C5JNAsGG.js";import"./SetGraphicalItem-Cww5wWY0.js";import"./getRadiusAndStrokeWidthFromDot-CrG0xVOS.js";import"./ActiveShapeUtils-EzXi-ssF.js";import"./Curve-_vFkPdEp.js";import"./step-Dn4gXRUd.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Docn_iQt.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
