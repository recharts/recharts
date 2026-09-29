import{R as t}from"./iframe-CkExmVLh.js";import{R as p}from"./zIndexSlice-a3gNrCTg.js";import{C as m}from"./ComposedChart-BhMk3qvU.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-3yEkLw7H.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BNvjyLg8.js";import"./index-tbID_CTU.js";import"./index-oO8SHF6a.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-RkN2bWVj.js";import"./isWellBehavedNumber-B9ULLFc9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CmpmZooC.js";import"./axisSelectors-DjYqkdMk.js";import"./d3-scale-BQavAiMn.js";import"./index-3Scx8lTS.js";import"./index-Dlo0KE1-.js";import"./renderedTicksSlice-D-2PA2Wz.js";import"./index-Cl_0IqIO.js";import"./CartesianChart-DTXpoHpD.js";import"./chartDataContext-DYa5wr5P.js";import"./CategoricalChart-BF6nCoHF.js";import"./Layer-CGaMavgo.js";import"./AnimatedItems-V2dSiKDR.js";import"./Label-C8EtCHaI.js";import"./Text-mbh8kfNk.js";import"./DOMUtils-B9viDuiF.js";import"./useId-B6th-B23.js";import"./useBackwardsCompatibleTheme-DZHep05A.js";import"./ZIndexLayer-DuxWNsKn.js";import"./useAnimationId-B25s9B77.js";import"./ActivePoints-DT4UcXq7.js";import"./Dot-CNUfafHI.js";import"./types-D0Lh6MHk.js";import"./RegisterGraphicalItemId-Bmf5uTtn.js";import"./GraphicalItemClipPath-CSuIt2Pb.js";import"./SetGraphicalItem-CjeIiMwy.js";import"./getRadiusAndStrokeWidthFromDot-ByuYICUa.js";import"./ActiveShapeUtils-CeXBNDiM.js";import"./Curve-BfUX2fxA.js";import"./step-TH_7jXAx.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BSB2zAct.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
