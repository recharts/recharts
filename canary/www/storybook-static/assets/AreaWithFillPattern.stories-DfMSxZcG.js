import{R as t}from"./iframe-D_MXUc9j.js";import{R as p}from"./zIndexSlice-BFHspQ3h.js";import{C as m}from"./ComposedChart-9bn5ROzF.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BoQPgrVc.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-et5ks_cI.js";import"./index-CKJUXvOM.js";import"./index-7XNg-5qX.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-2frX1lOh.js";import"./isWellBehavedNumber-CsgFecko.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-w9ky9w-N.js";import"./axisSelectors-Cm02wLJ7.js";import"./d3-scale-qgwr3MMy.js";import"./index-CKZvu-mT.js";import"./index-Bxr9K7DU.js";import"./renderedTicksSlice-TfnwoJLt.js";import"./index-DtuXK4VP.js";import"./CartesianChart-tuemJXRr.js";import"./chartDataContext-_Ju6-fzp.js";import"./CategoricalChart-DJ7BKDkl.js";import"./Layer-BZB8UiQK.js";import"./AnimatedItems-C_wvnbpu.js";import"./Label-BzW6Kco1.js";import"./Text-BRrhokiO.js";import"./DOMUtils-DhRIYphT.js";import"./useId-BnOkh28B.js";import"./useBackwardsCompatibleTheme-BwLA5NQz.js";import"./ZIndexLayer-2Sh7_Zup.js";import"./useAnimationId-Bnx7NtOE.js";import"./ActivePoints-BiO6enUY.js";import"./Dot-LN8MpyP_.js";import"./types-C3dbXUSG.js";import"./RegisterGraphicalItemId-BQytnqfH.js";import"./GraphicalItemClipPath-BnUM0bi_.js";import"./SetGraphicalItem-B4WgsP5a.js";import"./getRadiusAndStrokeWidthFromDot-4YSuZBjL.js";import"./ActiveShapeUtils-VpxDx_Hn.js";import"./Curve-CuSFZQj8.js";import"./step-BhNzxzT7.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C_g2xIry.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
