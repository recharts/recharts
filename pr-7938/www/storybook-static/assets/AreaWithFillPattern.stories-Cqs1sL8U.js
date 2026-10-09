import{R as t}from"./iframe-DyRGY0m8.js";import{R as p}from"./zIndexSlice-C8Goqaoo.js";import{C as m}from"./ComposedChart-DeUFnq4z.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Bi7oqDfI.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D2TCso2q.js";import"./index-Cv8tkEHt.js";import"./index-DxURkMdl.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CwBj0Vjn.js";import"./isWellBehavedNumber-JGpa1dK4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-eOw39y0P.js";import"./axisSelectors-DJKcPqvS.js";import"./d3-scale-sk2wIxSM.js";import"./index-CzwSuytx.js";import"./index-DSQh__sX.js";import"./renderedTicksSlice-DM2Uh_-7.js";import"./index-BZwbzPta.js";import"./CartesianChart-B9Ziwbgu.js";import"./chartDataContext-DdROdGCg.js";import"./CategoricalChart-CS-kA2nE.js";import"./Layer-Cn0quWvc.js";import"./AnimatedItems-B4s4aHQH.js";import"./Label-DmSSoRs6.js";import"./Text-BK2IfBRh.js";import"./pageBackground-BnJW5YJX.js";import"./useId-DkHD0fqt.js";import"./useBackwardsCompatibleTheme-B8R5ZMSD.js";import"./ZIndexLayer-CELDjLLn.js";import"./useAnimationId-DVRsp9Ga.js";import"./ActivePoints-DdFDoJtX.js";import"./Dot-DOIcUge1.js";import"./types-vbUeFItv.js";import"./dataEntryStyles-BSCSOZbL.js";import"./GraphicalItemClipPath-CzHoeJLu.js";import"./SetGraphicalItem-C2wvR06e.js";import"./getRadiusAndStrokeWidthFromDot-BB4xIvng.js";import"./ActiveShapeUtils-DW6rbsEP.js";import"./Curve-BnhnBI5K.js";import"./step-Dnl3MITN.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CI8fdYZe.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
