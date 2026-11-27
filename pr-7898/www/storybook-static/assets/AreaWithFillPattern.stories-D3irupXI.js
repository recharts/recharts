import{R as t}from"./iframe-KlB-4IG1.js";import{R as p}from"./zIndexSlice-BVLPARW-.js";import{C as m}from"./ComposedChart-UXSSMqzW.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DtM6bBJ5.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-RcNfk3jW.js";import"./get-CjriyByo.js";import"./throttle-DXJsY_uT.js";import"./index-CwL9CPkI.js";import"./index-DAOJlBpl.js";import"./RechartsWrapper-CD7r0FUc.js";import"./axisSelectors-ThjGeQP_.js";import"./polarAxisSelectors-DkMb5oL8.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-BgndSVNB.js";import"./index-CX7x-S-w.js";import"./index-DNDuIT5t.js";import"./renderedTicksSlice-BREhx7Gk.js";import"./index-CUyiC2Ny.js";import"./fillDefinitions-Cx2SilO3.js";import"./CartesianChart-DYMMc77U.js";import"./chartDataContext-Dajtit_0.js";import"./CategoricalChart-DQDRiNPc.js";import"./getRadiusAndStrokeWidthFromDot-DjAs6uXs.js";import"./Layer-Cl7yX3if.js";import"./dataEntryStyles-D-8l4rOK.js";import"./Label-DqUMyvUu.js";import"./Text-Bpt3PNfo.js";import"./ZIndexLayer-DgEHrsgR.js";import"./ActivePoints-iLZwRPS_.js";import"./Dot-CS5HZsDP.js";import"./types-rdPmYL5R.js";import"./activeStyles-BijthCg6.js";import"./useAnimationId-C1lHvxQb.js";import"./Symbols-DP3kQoeZ.js";import"./symbol-Nq8AM552.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-BaH0crAE.js";import"./ActiveShapeUtils-DFwShdCc.js";import"./Curve-P8knzJBH.js";import"./step-CgkxMamK.js";import"./useEffectiveDataKey-BXp8Go_I.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
