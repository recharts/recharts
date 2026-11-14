import{R as t}from"./iframe-ULtY-NVK.js";import{R as p}from"./zIndexSlice-jBtZtiCi.js";import{C as m}from"./ComposedChart-BLU8rp3_.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-JDCaFsEe.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CnMrFr-n.js";import"./throttle-CHVCCuLD.js";import"./index-Bra2wTck.js";import"./index-CnlGEyBG.js";import"./RechartsWrapper-JXy35Des.js";import"./axisSelectors-DyOG1uRh.js";import"./polarAxisSelectors-DJMQca_o.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-ZBKsHMes.js";import"./index-Do3BZ6Ro.js";import"./index-Btm1B8SY.js";import"./renderedTicksSlice-CHJPPtWm.js";import"./index-BJmOGKKZ.js";import"./fillDefinitions-BGQhPk93.js";import"./CartesianChart-CrgxKX8P.js";import"./chartDataContext-BeD9TymV.js";import"./CategoricalChart-DwptyBKz.js";import"./Layer-DhwnXi08.js";import"./dataEntryStyles-DVOUqZ2G.js";import"./Label-RNo0-Kup.js";import"./Text-DIgVe04Z.js";import"./ZIndexLayer-3L32Zbp4.js";import"./ActivePoints-DVHPdhuz.js";import"./Dot-D81fGPmQ.js";import"./types-YE6r9ekT.js";import"./activeStyles-nNAh6kPS.js";import"./useAnimationId-BnN3bcdg.js";import"./Symbols-D8MIyMXa.js";import"./symbol-C9fiuppk.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-C0LXV43X.js";import"./getRadiusAndStrokeWidthFromDot-DoYvpvg5.js";import"./ActiveShapeUtils-S-fma9uX.js";import"./Curve-CN39irzx.js";import"./step-qhW1rf6_.js";import"./useEffectiveDataKey-DbYUjo2f.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,et as __namedExportsOrder,tt as default};
