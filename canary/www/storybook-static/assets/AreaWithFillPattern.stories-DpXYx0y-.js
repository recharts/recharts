import{R as t}from"./iframe-Ca9zq6-c.js";import{R as p}from"./zIndexSlice-CR-xpxM6.js";import{C as m}from"./ComposedChart-DleCrOAK.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Bb2U3BgG.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BRLk8fdE.js";import"./index-BtFF0BK3.js";import"./index-D-6jHIBZ.js";import"./get-CVL7Gg7t.js";import"./resolveDefaultProps-aQu_YsJN.js";import"./isWellBehavedNumber-CqGPlgER.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CaG48vMC.js";import"./index-oZCeDex2.js";import"./index-FbuB2ssV.js";import"./renderedTicksSlice-g-m8sL3N.js";import"./axisSelectors-CKheeyoe.js";import"./d3-scale-BmqB7fOq.js";import"./CartesianChart-CCrg56CU.js";import"./chartDataContext-Bliq4f83.js";import"./CategoricalChart-DP-UXbjk.js";import"./Curve-G2tp0Yan.js";import"./types-DL0DYnfp.js";import"./step-D387uCSJ.js";import"./path-DyVhHtw_.js";import"./Layer-D2dY01rr.js";import"./ReactUtils-CQ3qeCfU.js";import"./Label-Dc6nn1YN.js";import"./Text-BceZOupb.js";import"./DOMUtils-CWZfW9Q5.js";import"./ZIndexLayer-N_1TQ7Pc.js";import"./ActivePoints-BmtaSDFt.js";import"./Dot-DVfqq-WH.js";import"./RegisterGraphicalItemId-BlhUjcl6.js";import"./GraphicalItemClipPath-CL4eJ5Gf.js";import"./SetGraphicalItem-DuOLtcMc.js";import"./useAnimationId-DX_MO7p4.js";import"./getRadiusAndStrokeWidthFromDot-D0JPsbB9.js";import"./graphicalItemSelectors-CQ9fLIUB.js";const Y={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const Z=["FillPattern"];export{e as FillPattern,Z as __namedExportsOrder,Y as default};
