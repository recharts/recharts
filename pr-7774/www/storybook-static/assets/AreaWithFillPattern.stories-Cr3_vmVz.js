import{R as t}from"./iframe-BPEJKbq8.js";import{R as p}from"./zIndexSlice-VIpuzkKp.js";import{C as m}from"./ComposedChart-CCL4cMEJ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Cfb7Szxi.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DF-tIWsK.js";import"./index-DNcAR_Vs.js";import"./index-ButnEeUi.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-1un5xk9O.js";import"./isWellBehavedNumber-Buf-YS9M.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DxqXjp29.js";import"./axisSelectors-DzMkLtRT.js";import"./d3-scale-DEM8vz6k.js";import"./index-B4ESYIeG.js";import"./index-C5KHL6lo.js";import"./renderedTicksSlice-D_uQ_TZY.js";import"./index-KKugj82J.js";import"./CartesianChart-ooyntLBz.js";import"./chartDataContext-B6O65UK4.js";import"./CategoricalChart-Btmr9H2l.js";import"./Layer-CtRRCC-v.js";import"./AnimatedItems-DyYNY1ib.js";import"./Label-L-zdkhzC.js";import"./Text-DJ80zvuP.js";import"./DOMUtils-CHvDeV8q.js";import"./useId-b-JOMF6y.js";import"./useBackwardsCompatibleTheme-BiL5HnOV.js";import"./ZIndexLayer-WSPcn9qV.js";import"./useAnimationId-BVUST1Us.js";import"./ActivePoints-iI1SWNnX.js";import"./Dot-BI_iFhuu.js";import"./types-_BaiC61O.js";import"./RegisterGraphicalItemId-D7i3sBo8.js";import"./GraphicalItemClipPath-DkgmJC3z.js";import"./SetGraphicalItem-DABANGfl.js";import"./getRadiusAndStrokeWidthFromDot-NFmAqb_v.js";import"./ActiveShapeUtils-CnR2FwMp.js";import"./Curve-DXLcFLNV.js";import"./step-NWmRhsUj.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-7Z7QhK-I.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
