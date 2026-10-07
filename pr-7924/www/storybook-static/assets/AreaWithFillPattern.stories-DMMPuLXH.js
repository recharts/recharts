import{R as t}from"./iframe-ZTC5pSfT.js";import{R as p}from"./zIndexSlice-CiW62Ghg.js";import{C as m}from"./ComposedChart-COAup3ak.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BXo4vppW.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-KrxK4z_U.js";import"./index-CzSCaBER.js";import"./index-B4ZumRW0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BUix77YN.js";import"./isWellBehavedNumber-6xDPwo21.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-mhohCDVl.js";import"./axisSelectors-K6KGYDFF.js";import"./d3-scale-Cpr3RseV.js";import"./index-CIre6itI.js";import"./index-C6jgkA61.js";import"./renderedTicksSlice-2JPEuPfq.js";import"./index-BMMDR1qW.js";import"./CartesianChart-BkfStbLb.js";import"./chartDataContext-CsGZnfHI.js";import"./CategoricalChart-Cp6s7k2U.js";import"./Layer-jaIUArAZ.js";import"./AnimatedItems-sBBBQ_aJ.js";import"./Label-CMugnJA-.js";import"./Text-DaoB-dFq.js";import"./DOMUtils-DpY81Anq.js";import"./useId-PK-UNRth.js";import"./useBackwardsCompatibleTheme-DAjVS6k9.js";import"./ZIndexLayer-ilP_ZZPQ.js";import"./useAnimationId-BB_b0zsq.js";import"./ActivePoints-LVJzz7nF.js";import"./Dot-YLlzKOXh.js";import"./types-C79EZ9QB.js";import"./RegisterGraphicalItemId-9ha_OJ2S.js";import"./GraphicalItemClipPath-aJ1mq8DH.js";import"./SetGraphicalItem-C-6wJbAO.js";import"./getRadiusAndStrokeWidthFromDot-B8rGLwDc.js";import"./ActiveShapeUtils-D8W511PY.js";import"./Curve-DbdnYDgr.js";import"./step-Q9TOfcF_.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CBZHm2cX.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
