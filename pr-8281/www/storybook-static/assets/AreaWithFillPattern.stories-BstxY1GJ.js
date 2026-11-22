import{R as t}from"./iframe-Ctz7IHW3.js";import{R as p}from"./zIndexSlice-BOhKAINV.js";import{C as m}from"./ComposedChart-B4J-boeJ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-C4QC8frB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps--WcksQI-.js";import"./throttle-BK8aOUUW.js";import"./index-Tzm4T3gC.js";import"./index-CP4Z1Y6_.js";import"./RechartsWrapper-B5-BQ43L.js";import"./axisSelectors-CmsQwY11.js";import"./polarAxisSelectors-2S85hvBv.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B7S8RTAk.js";import"./index-D9m5BeGD.js";import"./index-DTCcovWx.js";import"./renderedTicksSlice-zg3AzzRh.js";import"./index-D8taZNOk.js";import"./fillDefinitions-BjpebX6W.js";import"./CartesianChart-Dig5bGoH.js";import"./chartDataContext-CSFdu_tp.js";import"./CategoricalChart-pUCO11xA.js";import"./getRadiusAndStrokeWidthFromDot-CcQspbXE.js";import"./Layer-DwO5QDCB.js";import"./dataEntryStyles-DhE1x9oW.js";import"./Label-Cx25Byjk.js";import"./Text-d5sUAgwt.js";import"./ZIndexLayer-GawJhFHW.js";import"./ActivePoints-BEz7jJwJ.js";import"./Dot-Djhcp3TT.js";import"./types-o_vm3YHF.js";import"./activeStyles-DYt1MbCF.js";import"./useAnimationId-CDmHN2F8.js";import"./Symbols-D3D7M8Jk.js";import"./symbol-B5JmXw1t.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-ZbovNH06.js";import"./ActiveShapeUtils-CHF2XahU.js";import"./Curve-BmO4aPRH.js";import"./step-CWzaq-TC.js";import"./useEffectiveDataKey-v8KMaUS0.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
