import{R as t}from"./iframe-29nHamCu.js";import{R as p}from"./zIndexSlice-CZafadFX.js";import{C as m}from"./ComposedChart-DXLvIz9U.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-ClZTC0gI.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BMJYFYDy.js";import"./index-B7e8weS_.js";import"./index-C0L5A02v.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BjAFj7Tx.js";import"./isWellBehavedNumber-DyxIwD8w.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BavJbx8L.js";import"./axisSelectors-DXKrHL3Y.js";import"./d3-scale-hLJByxX9.js";import"./index-pQY_ysof.js";import"./index-wUuIvtYb.js";import"./renderedTicksSlice-Dofh94RU.js";import"./index-Dx-xeLKA.js";import"./CartesianChart-1Z_jkdOD.js";import"./chartDataContext-CCKAe3q7.js";import"./CategoricalChart-Vufmz-V6.js";import"./Layer-DIXDf-ah.js";import"./AnimatedItems-Cl8F531s.js";import"./Label-BEXPduDP.js";import"./Text-CjGTSUlm.js";import"./DOMUtils-77SlA1GE.js";import"./useId-D5dycxfw.js";import"./useBackwardsCompatibleTheme-DOdaTjfK.js";import"./ZIndexLayer-DAa-R99d.js";import"./useAnimationId-BJ08w86T.js";import"./ActivePoints-f_S-wuyy.js";import"./Dot-CkgSbF-F.js";import"./types-DxO-1x0s.js";import"./RegisterGraphicalItemId-C0MFc77r.js";import"./GraphicalItemClipPath-BHF9lgk1.js";import"./SetGraphicalItem-CPEqj7GM.js";import"./getRadiusAndStrokeWidthFromDot-BqfwXveZ.js";import"./ActiveShapeUtils-DXdVOUCI.js";import"./Curve-DsdcX6-6.js";import"./step-ChOhxi7M.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BP_5vAW2.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
