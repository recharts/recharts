import{R as t}from"./iframe-CExY2eWA.js";import{R as p}from"./zIndexSlice-C37XV2sv.js";import{C as m}from"./ComposedChart-jeltTTaE.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-D374EN8-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CjbXNHQ5.js";import"./throttle-BBNIp7bK.js";import"./index-8pYktU8Y.js";import"./index-FNceUiie.js";import"./RechartsWrapper-DLH4YKyL.js";import"./axisSelectors-DD16TRVI.js";import"./polarAxisSelectors-YwnVtORU.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-0yyW8T9p.js";import"./index-AsSutFXR.js";import"./index-CUE47Bel.js";import"./renderedTicksSlice-DrzyKYB4.js";import"./index-Da9Adtew.js";import"./CartesianChart-BC6n1rn7.js";import"./ZIndexPortal-noF9F7eD.js";import"./CategoricalChart-CTKTm7QW.js";import"./Layer-Bau4eIyO.js";import"./LabelList-jPGn2qdg.js";import"./Label-DKiyvKzI.js";import"./Text-B8G25q0u.js";import"./pageBackground-DZSWUMfw.js";import"./ZIndexLayer-DlXNWMXh.js";import"./ActivePoints-hvZNmfX7.js";import"./Dot-DFSECcE9.js";import"./types-Dc-N9olf.js";import"./activeStyles-DJMtR5DX.js";import"./useAnimationId-DqJ2hXPF.js";import"./dataEntryStyles-iq_Y384c.js";import"./Symbols-BL7s7DpT.js";import"./symbol-DETtOMtn.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BdGwDqMG.js";import"./getRadiusAndStrokeWidthFromDot-D9OCaedM.js";import"./ActiveShapeUtils-C53NOjZd.js";import"./Curve-DQpSgZo6.js";import"./step-BYC0RXYs.js";import"./useEffectiveDataKey-CZSLIZ23.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
