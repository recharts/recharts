import{R as t}from"./iframe-B1Ov3CkI.js";import{R as p}from"./zIndexSlice-BZ09-fF4.js";import{C as m}from"./ComposedChart-Dd5cIYd9.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-B7IekWKP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DWDtOW2Y.js";import"./throttle-CU4m2LyG.js";import"./index-BZUg4nA9.js";import"./index-CKnkfWPE.js";import"./RechartsWrapper-CArKZuEM.js";import"./axisSelectors-CwNUFUW3.js";import"./polarAxisSelectors-BnryocK3.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BRiCZA2b.js";import"./index-DD4HlTuM.js";import"./index-DoKEjPdp.js";import"./renderedTicksSlice-7kuLifM3.js";import"./index-BMXSO3re.js";import"./fillDefinitions-C3NO0Lw1.js";import"./CartesianChart-ClQxKu1o.js";import"./chartDataContext-fgeg9aho.js";import"./CategoricalChart-C2LUjjE6.js";import"./getRadiusAndStrokeWidthFromDot-BJHYFlOo.js";import"./Layer-DAwsvvog.js";import"./dataEntryStyles-lld3ulFL.js";import"./Label-DD8YxEOL.js";import"./Text-B3OKn0GK.js";import"./ZIndexLayer-DQABw9Zs.js";import"./ActivePoints-egHLZy2G.js";import"./Dot-CLqz5fjj.js";import"./types-ynn-_gFH.js";import"./activeStyles-D0wpO0Mw.js";import"./useAnimationId-DhG5SB-S.js";import"./Symbols-D3aq_3ym.js";import"./symbol-fFs6B4hu.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-BOBKYCI5.js";import"./ActiveShapeUtils-BnGsUnBG.js";import"./Curve-D-bNq0v5.js";import"./step-B516R2zU.js";import"./useEffectiveDataKey-DPX-1gIx.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
