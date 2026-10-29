import{R as t}from"./iframe-C2PRwgnl.js";import{R as p}from"./zIndexSlice-weNxwEm8.js";import{C as m}from"./ComposedChart-BLjSf-Hf.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CV-krc7V.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-aJLviuy-.js";import"./throttle-CVlDdGyC.js";import"./index-BtXSjXZr.js";import"./index-BqBIYX05.js";import"./RechartsWrapper-BOct7ur6.js";import"./axisSelectors-nSy-fV9M.js";import"./polarAxisSelectors-DmG4l4yE.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BIUnlP6Z.js";import"./index-BxVmRSNz.js";import"./index-CkiHrneS.js";import"./renderedTicksSlice-FbCZKIWz.js";import"./index-BeFazHyq.js";import"./CartesianChart-CtjN8ua0.js";import"./ZIndexPortal-CKd--WGA.js";import"./CategoricalChart-gCAaZAhY.js";import"./Layer-botuDyHz.js";import"./LabelList-Deq7UXnp.js";import"./Label-DdFUcTtW.js";import"./Text-D4lV4Imp.js";import"./pageBackground-B4m54nd8.js";import"./ZIndexLayer-BWmWIjtz.js";import"./ActivePoints-BH2xo60h.js";import"./Dot-2eC8WQef.js";import"./types-CHq7dG9p.js";import"./activeStyles-a6dnVtfT.js";import"./useAnimationId-Dx5Gkjhg.js";import"./dataEntryStyles-BHwXjzhI.js";import"./Symbols-CiyVK5wN.js";import"./symbol-VU_gnnhL.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-DeBA8bqw.js";import"./getRadiusAndStrokeWidthFromDot-Dzgyitlt.js";import"./ActiveShapeUtils-BV6ZL_JX.js";import"./Curve-CQnefVPR.js";import"./step-Dw_YruiA.js";import"./useEffectiveDataKey-lRQnp3q-.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
