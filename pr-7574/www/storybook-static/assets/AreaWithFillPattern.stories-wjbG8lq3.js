import{R as t}from"./iframe-CSEjTzPi.js";import{R as p}from"./zIndexSlice-D_RH8zNR.js";import{C as m}from"./ComposedChart-D_Dji_bW.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Df2fStiw.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DaFWWJDR.js";import"./index-CUrD2lSO.js";import"./index-CnUd66Ue.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BozJKtND.js";import"./isWellBehavedNumber-CzqG-O5b.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-AtEN8KAH.js";import"./index-Ba7n3l96.js";import"./index-CBv6hKJf.js";import"./renderedTicksSlice-E8p_yuf8.js";import"./axisSelectors-D_moIkNX.js";import"./d3-scale-CTeKr7fc.js";import"./CartesianChart-Dl0PI1ZO.js";import"./chartDataContext-D54q9WWr.js";import"./CategoricalChart-DzTcvl21.js";import"./Layer-CcgNOeDR.js";import"./AnimatedItems-qJPCEdb3.js";import"./Label-COqEjZup.js";import"./Text-Pr_fu-xU.js";import"./DOMUtils-Dvp2PgSJ.js";import"./ZIndexLayer-CCVrkImG.js";import"./useAnimationId-De2Quo8T.js";import"./ActivePoints-Qu5zqsGn.js";import"./Dot-D11hMmXw.js";import"./types-CLne6YGI.js";import"./RegisterGraphicalItemId-CXTNpeBs.js";import"./GraphicalItemClipPath-B0i2JGnn.js";import"./SetGraphicalItem-e3HjqTgi.js";import"./getRadiusAndStrokeWidthFromDot-BWfyZwwA.js";import"./ActiveShapeUtils-DL3c-sPD.js";import"./Curve-Cbq_6U_Q.js";import"./step-DAbADZ8X.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-ClvgOOLR.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const $=["FillPattern"];export{e as FillPattern,$ as __namedExportsOrder,Z as default};
