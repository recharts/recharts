import{R as t}from"./iframe-JwbLQPb2.js";import{R as p}from"./zIndexSlice-BvSjVeUr.js";import{C as m}from"./ComposedChart-BNgb6jwq.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-B93LQpwX.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CQOjkZLn.js";import"./index-BTc1OfE8.js";import"./index-CKs_88Jr.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CSG7eI7r.js";import"./isWellBehavedNumber-CdOzsQhH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CHoC0Tmg.js";import"./axisSelectors-Bl-g05pj.js";import"./d3-scale-C8sQoAOm.js";import"./index-CV_Eti3m.js";import"./index-Ct1SgceM.js";import"./renderedTicksSlice-f-Q9YZ5S.js";import"./index-B_caUHn5.js";import"./CartesianChart-CVn5EGJv.js";import"./chartDataContext-CoYu6TUB.js";import"./CategoricalChart-Cxecmsq9.js";import"./Layer-BUVs9FF0.js";import"./AnimatedItems-Di0vnHT_.js";import"./Label-C9oG4jkb.js";import"./Text-DYIo7N8x.js";import"./DOMUtils-CGRWukjT.js";import"./useId-CU2vxgfb.js";import"./useBackwardsCompatibleTheme-2v1_sDmp.js";import"./ZIndexLayer-B1cjmDJz.js";import"./useAnimationId-DNb0w9mF.js";import"./ActivePoints-Zw5Cgcy4.js";import"./Dot-BOts6I9w.js";import"./types-BXkOLLZ5.js";import"./RegisterGraphicalItemId-JHnI7J5m.js";import"./GraphicalItemClipPath-Btey0t5q.js";import"./SetGraphicalItem-CF8QjFwu.js";import"./getRadiusAndStrokeWidthFromDot-Bmqi90U5.js";import"./ActiveShapeUtils-CZ-yTrkB.js";import"./Curve-v4EbeP27.js";import"./step-8eqj28j5.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-4nR2QSPi.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
