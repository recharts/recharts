import{R as t}from"./iframe-CLtR9-MI.js";import{R as p}from"./zIndexSlice-DAD-nkNa.js";import{C as m}from"./ComposedChart-B1Fivz02.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CmbBpvT0.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DKa3BIxu.js";import"./index-u5MFF0A2.js";import"./index-5pSzTMen.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D6TYxzEx.js";import"./isWellBehavedNumber-B9qntTjY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BboqGkG2.js";import"./axisSelectors-B01i0yXb.js";import"./d3-scale-B1XD5c5K.js";import"./index-BaHi7qAw.js";import"./index-CZdIlyb1.js";import"./renderedTicksSlice-BY7YJYCI.js";import"./index-CjAhAOwM.js";import"./CartesianChart-BnmKHbJT.js";import"./chartDataContext-Dhs0xlHM.js";import"./CategoricalChart-DJouQuZu.js";import"./Layer-DSwUEhDY.js";import"./AnimatedItems-NFxue0WW.js";import"./Label-BpbNna-S.js";import"./Text-CwyJl8Qf.js";import"./DOMUtils-B1EmNrIU.js";import"./useId-BN1Du40N.js";import"./useBackwardsCompatibleTheme-BJ7QBrpH.js";import"./ZIndexLayer-D5Qq2-j2.js";import"./useAnimationId-CKjPSYvA.js";import"./ActivePoints-LWQ74ttv.js";import"./Dot-Cg_oxTyJ.js";import"./types-_UL_m5mX.js";import"./RegisterGraphicalItemId-fH2hJ8mR.js";import"./GraphicalItemClipPath-1HJc_HKi.js";import"./SetGraphicalItem-Ty2V-l5e.js";import"./getRadiusAndStrokeWidthFromDot-DNgkSIfr.js";import"./ActiveShapeUtils-CKYNeMt6.js";import"./Curve-B_ohmPvH.js";import"./step-BArTcWqE.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CogcmOBq.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
