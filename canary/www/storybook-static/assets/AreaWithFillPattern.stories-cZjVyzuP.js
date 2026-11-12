import{R as t}from"./iframe-C9QnkkRp.js";import{R as p}from"./zIndexSlice-BYQlmGuM.js";import{C as m}from"./ComposedChart-Gx1n6SiU.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DSlvG-jB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BwjvRfJi.js";import"./throttle-CzhN4mlB.js";import"./index-Bd4zIGdh.js";import"./index-Dp_pNI9d.js";import"./RechartsWrapper-Cq91RCWh.js";import"./axisSelectors-CTzSQU4W.js";import"./polarAxisSelectors-C_EdGVJO.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Yr2mcnpg.js";import"./index-BwU8wHQt.js";import"./index-WorF6OpA.js";import"./renderedTicksSlice-DR11ylMF.js";import"./index-D8Lsm-a-.js";import"./fillDefinitions-cPUsTY--.js";import"./CartesianChart-DUhViccR.js";import"./chartDataContext-BJIrZYve.js";import"./CategoricalChart-BY9HlJis.js";import"./Layer-CEkcTjee.js";import"./dataEntryStyles-BFdezSvK.js";import"./Label-yo2OQSgL.js";import"./Text-BwyCofjZ.js";import"./ZIndexLayer-CPmeg_kQ.js";import"./ActivePoints-D6MvrL16.js";import"./Dot-Dmq_4Bsa.js";import"./types-DqaK-59q.js";import"./activeStyles-CN7lMIFZ.js";import"./useAnimationId-CShc60ZQ.js";import"./Symbols-D6kGSifP.js";import"./symbol-CG55pC-Z.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-C_jDfqao.js";import"./getRadiusAndStrokeWidthFromDot-CyNFak7V.js";import"./ActiveShapeUtils-Ba4XY1pS.js";import"./Curve-Dqipz6v0.js";import"./step-DY5nvAcp.js";import"./useEffectiveDataKey-DiymfXWH.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
