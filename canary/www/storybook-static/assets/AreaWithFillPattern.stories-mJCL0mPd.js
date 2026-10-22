import{R as t}from"./iframe-BqFv--n0.js";import{R as p}from"./zIndexSlice-CQSP_367.js";import{C as m}from"./ComposedChart-BGPVJCGM.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DVOxPupb.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-u_PA2Aue.js";import"./index-BLvw7yWi.js";import"./index-Bv6EKtOE.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D0e0pmfJ.js";import"./isWellBehavedNumber-xy8z0j2l.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CRaC0TZF.js";import"./axisSelectors-ZWEeDNRz.js";import"./d3-scale-CFuq5uTk.js";import"./index-CDAyT67T.js";import"./index-BxavCyTA.js";import"./renderedTicksSlice-CjmFqNX-.js";import"./index-3DQVsuvq.js";import"./CartesianChart-CWGitRSv.js";import"./chartDataContext-uAg4LOvf.js";import"./CategoricalChart-LtTngwAd.js";import"./Layer-VP2k7KQb.js";import"./activeStyles-C0pD60nL.js";import"./Label-DI-ST-i-.js";import"./Text-BW5R7YWF.js";import"./pageBackground-B1lJR1Eh.js";import"./useId-Ddcb8ROb.js";import"./useBackwardsCompatibleTheme-NnVOi814.js";import"./ZIndexLayer-m5JcFv6F.js";import"./useAnimationId-CZ2QT6KZ.js";import"./dataEntryStyles-Ijd8738K.js";import"./ActivePoints-BuaaOhKZ.js";import"./Dot-Ck25bOyu.js";import"./types-A41OMRS1.js";import"./GraphicalItemClipPath-DlDw9PG0.js";import"./SetGraphicalItem-DarYZt9y.js";import"./getRadiusAndStrokeWidthFromDot-pw39BaVD.js";import"./ActiveShapeUtils-4w4oDN2L.js";import"./Curve-B2qT8EGI.js";import"./step-DAllZbzr.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-B-x1_7m_.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
