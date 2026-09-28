import{R as t}from"./iframe-_TSN2GeP.js";import{R as p}from"./zIndexSlice-D96uBoAp.js";import{C as m}from"./ComposedChart-z5izNflA.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-WhnSkljG.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cil6wORT.js";import"./index-CCkkuyTr.js";import"./index-CSNAsU0S.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D9QDYjax.js";import"./isWellBehavedNumber-BNbTdqm3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BXs5OB5c.js";import"./axisSelectors-Dd3nK3xc.js";import"./d3-scale-BkrsrexO.js";import"./index-DMuyjDG0.js";import"./index-lnFbewhe.js";import"./renderedTicksSlice-9FoMOBwW.js";import"./index-BghYN9OX.js";import"./CartesianChart-CBmykTvx.js";import"./chartDataContext-Beyv08KU.js";import"./CategoricalChart-DrCkbeNv.js";import"./Layer-9vgq1u7o.js";import"./AnimatedItems-DzytQgaE.js";import"./Label-mOwsaJBj.js";import"./Text-E_mkl092.js";import"./DOMUtils-FVlzESpl.js";import"./useId-BhIopQFv.js";import"./useBackwardsCompatibleTheme-B-7Qbbn2.js";import"./ZIndexLayer-CuHtjJTp.js";import"./useAnimationId-JMLdgXcg.js";import"./ActivePoints-CoOgGNlR.js";import"./Dot-DYuabF4m.js";import"./types-DD8CfvEw.js";import"./RegisterGraphicalItemId-DtZ0Q-pq.js";import"./GraphicalItemClipPath-CV0_mPKt.js";import"./SetGraphicalItem-BDNu96CY.js";import"./getRadiusAndStrokeWidthFromDot-CAf45XRU.js";import"./ActiveShapeUtils-B-Is-yHc.js";import"./Curve-BfZHkOXV.js";import"./step-B86fSev8.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-D0CKpQKL.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
