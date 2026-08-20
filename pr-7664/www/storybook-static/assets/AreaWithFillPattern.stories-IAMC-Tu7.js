import{R as t}from"./iframe-BB2cSF8T.js";import{R as p}from"./zIndexSlice-Ck0CRfK_.js";import{C as m}from"./ComposedChart-D7ONXqhe.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-N_DUzB9P.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-nMA59eYs.js";import"./index-EzV7mwgL.js";import"./index-DofPxVLY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DjeWZstQ.js";import"./isWellBehavedNumber-BQXiM-z-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DkB_KEzo.js";import"./index-MTvadirX.js";import"./index-DyAmptVd.js";import"./axisSelectors-BurdOGu6.js";import"./d3-scale-C3zxZmRj.js";import"./renderedTicksSlice-lUF_NPm1.js";import"./CartesianChart-ChdkOd-C.js";import"./chartDataContext-CB4jnkAv.js";import"./CategoricalChart-DAFEAISl.js";import"./Layer-LVpAC3_2.js";import"./AnimatedItems-0WotYsMt.js";import"./Label-BZkQksct.js";import"./Text-Bwx_fWQU.js";import"./DOMUtils-yFTvziLR.js";import"./useId-D4zb9cEW.js";import"./useBackwardsCompatibleTheme-g8RWGYmo.js";import"./ZIndexLayer-DbM1bO0L.js";import"./useAnimationId-C8wX-p7z.js";import"./ActivePoints-CuAhK7lR.js";import"./Dot-byNEGz8Q.js";import"./types-ChWRaT57.js";import"./RegisterGraphicalItemId-Bts6fFM2.js";import"./GraphicalItemClipPath-CT1W7nLy.js";import"./SetGraphicalItem-Ct2uSDpP.js";import"./getRadiusAndStrokeWidthFromDot-eavX8tOz.js";import"./ActiveShapeUtils-Uvcq9QCX.js";import"./Curve-C11_GYZZ.js";import"./step-BWHrm9dE.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-mqpyqc4p.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const rt=["FillPattern"];export{e as FillPattern,rt as __namedExportsOrder,et as default};
