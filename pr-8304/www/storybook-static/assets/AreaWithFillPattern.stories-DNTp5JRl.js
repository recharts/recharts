import{R as t}from"./iframe-Cg_iar9N.js";import{R as p}from"./zIndexSlice-BjUOfyjh.js";import{C as m}from"./ComposedChart-BFCZD_8N.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-C08A7xBL.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DTSDaMdx.js";import"./get-CjriyByo.js";import"./throttle-BblIHJT1.js";import"./index-7C4ywAbx.js";import"./index-CwdEjpHW.js";import"./RechartsWrapper-C7ImdcI0.js";import"./axisSelectors-CZOBtonL.js";import"./polarAxisSelectors-B1d4qlCW.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DPBNOBhz.js";import"./index-VP3OIQj6.js";import"./index-jWuQwiwF.js";import"./renderedTicksSlice-CLd9gyLd.js";import"./index-V_wxvl63.js";import"./fillDefinitions-DSB60PQ6.js";import"./CartesianChart-B4msnQ_2.js";import"./chartDataContext-BigsU9AL.js";import"./CategoricalChart-CPdnXejQ.js";import"./getRadiusAndStrokeWidthFromDot-DxfCADw-.js";import"./Layer-Bzrsb6mZ.js";import"./dataEntryStyles-CxwfrkTv.js";import"./Label-BJnLd782.js";import"./Text-B2P7H0Ri.js";import"./ZIndexLayer-CSE-z-0P.js";import"./ActivePoints-b69yWwyo.js";import"./Dot-BA3Hs1sQ.js";import"./types-ltSKN6AB.js";import"./activeStyles-BGKrSIuv.js";import"./useAnimationId-9EHB1qr6.js";import"./Symbols-HGWe4NLb.js";import"./symbol-BYuJahfe.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-B4YPaENS.js";import"./ActiveShapeUtils-CsQyYPRe.js";import"./Curve-CPf1VG57.js";import"./step-DiiLfVQZ.js";import"./useEffectiveDataKey-Cs5zYK5x.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
