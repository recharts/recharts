import{R as t}from"./iframe-BkeN00Xj.js";import{R as p}from"./zIndexSlice-B-x7pTGs.js";import{C as m}from"./ComposedChart-o64gktPG.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Bip2-cjA.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DVvQgSvv.js";import"./index-Ssjmhn91.js";import"./index-Doqq19He.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DZDkJdvH.js";import"./isWellBehavedNumber-DpaF5Qbq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C3Vxgl3Z.js";import"./axisSelectors-CdQeSFob.js";import"./d3-scale-59I2Ahhc.js";import"./index-Bp16jrAu.js";import"./index-CzDQGSqQ.js";import"./renderedTicksSlice-EekJT0xr.js";import"./index-BW_MIuEw.js";import"./CartesianChart-HYPnZu6o.js";import"./chartDataContext-BeegK0cj.js";import"./CategoricalChart-acAC1yFW.js";import"./Layer-CQvSRJEy.js";import"./AnimatedItems-D-Ov5Ds2.js";import"./Label-C5oKPJnD.js";import"./Text-B4YmNBvy.js";import"./DOMUtils-BtNtGSBk.js";import"./useId-CoUZj2D9.js";import"./useBackwardsCompatibleTheme-CO7BXTf3.js";import"./ZIndexLayer-BM7jKjXD.js";import"./useAnimationId-DIIcOQR8.js";import"./ActivePoints-BZpnaHk5.js";import"./Dot-BSZNpi6H.js";import"./types-CHY5UDxi.js";import"./RegisterGraphicalItemId-SBK7zBb4.js";import"./GraphicalItemClipPath-BVRs7DWi.js";import"./SetGraphicalItem-BLpQqeaN.js";import"./getRadiusAndStrokeWidthFromDot-C0jg-2Bd.js";import"./ActiveShapeUtils-KH5PmLPO.js";import"./Curve-CqZmQlC4.js";import"./step-6rSS0kJE.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CDfU_78w.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
