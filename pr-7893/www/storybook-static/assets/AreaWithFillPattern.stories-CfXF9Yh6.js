import{R as t}from"./iframe-Bs3p_tzt.js";import{R as p}from"./zIndexSlice-DcX3AzLa.js";import{C as m}from"./ComposedChart-KuKgrM96.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-tBPtH2MV.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BEGWT0nE.js";import"./index-B1i9GgdA.js";import"./index-B2enMVi0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CZZ-mEKB.js";import"./isWellBehavedNumber-BsuO-HCD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C611g8G8.js";import"./axisSelectors-C4-S1rEu.js";import"./d3-scale-D3QRU-MC.js";import"./index-DMMqTPnq.js";import"./index-UxLT5P2P.js";import"./renderedTicksSlice-CtTEEx-4.js";import"./index-BfdycSnH.js";import"./CartesianChart-DvvRDnZV.js";import"./chartDataContext-Da2Hh662.js";import"./CategoricalChart-BaI0fWCj.js";import"./Layer-BnnxApB2.js";import"./AnimatedItems-BKsmNJL9.js";import"./Label-D1fZ0tZ3.js";import"./Text-fd4E17kL.js";import"./DOMUtils-BuNDld79.js";import"./useId-Bu7K8pR2.js";import"./useBackwardsCompatibleTheme-DDcrSO0e.js";import"./ZIndexLayer-bsBUBclv.js";import"./useAnimationId-BGb6X0s3.js";import"./ActivePoints-6kUizrYZ.js";import"./Dot-CT0CWpgM.js";import"./types-DwWjBcLa.js";import"./RegisterGraphicalItemId-DLHqq9CD.js";import"./GraphicalItemClipPath-CW7J0A_O.js";import"./SetGraphicalItem-B-q3EqQB.js";import"./getRadiusAndStrokeWidthFromDot-ChgnJYUB.js";import"./ActiveShapeUtils-C1lnxfx5.js";import"./Curve-OpKkiqhX.js";import"./step-B0GBXtEj.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-Bn1qTGOS.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
