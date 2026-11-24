import{R as t}from"./iframe-CGMPGT_Z.js";import{R as p}from"./zIndexSlice-BwRFWyAI.js";import{C as m}from"./ComposedChart-DdDYeqHZ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-sOchKcBs.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-05Xj8Dk4.js";import"./throttle-eL-EEQ3_.js";import"./index-DVV9xQIw.js";import"./index-BFunbtNY.js";import"./RechartsWrapper-DQJBpYXH.js";import"./axisSelectors-nBPX2Xba.js";import"./polarAxisSelectors-BIscasf0.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DhJmdG6x.js";import"./index-Cc9Sc31K.js";import"./index-JIsP8NnX.js";import"./renderedTicksSlice-h35w6byl.js";import"./index-ClDVUaDb.js";import"./fillDefinitions-J_g-z9QL.js";import"./CartesianChart-BQtC3GTu.js";import"./chartDataContext-Be9WERVf.js";import"./CategoricalChart-CNkpe0ib.js";import"./getRadiusAndStrokeWidthFromDot-2C3aWHdg.js";import"./Layer-BT_Vpx95.js";import"./dataEntryStyles-mfmNhCBT.js";import"./Label-BCblnQ7e.js";import"./Text-DLnj5LmN.js";import"./ZIndexLayer-9BCkhjyY.js";import"./ActivePoints-BPzkwPAB.js";import"./Dot-BgWcOT9t.js";import"./types-BG6mJK46.js";import"./activeStyles-Dr2Cpwdi.js";import"./useAnimationId-BO_xR5GW.js";import"./Symbols-CySejNnI.js";import"./symbol-X4EmnsFS.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-x_4gBiT9.js";import"./ActiveShapeUtils-C3kE7Ldm.js";import"./Curve-B6JD92Z8.js";import"./step-C3GvXaRE.js";import"./useEffectiveDataKey-BosH_tQ0.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
