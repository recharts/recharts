import{R as t}from"./iframe-BzxAUdBV.js";import{R as p}from"./zIndexSlice-CpYrgVZX.js";import{C as m}from"./ComposedChart-hvP_dJoC.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BMm807JR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DheJQ_-R.js";import"./throttle-C2l7QP8r.js";import"./index-DxuOyH9Y.js";import"./index-5gwlPTJD.js";import"./RechartsWrapper-BCictS_F.js";import"./axisSelectors-D1428BGH.js";import"./polarAxisSelectors-CqQp2e17.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BnAxRH73.js";import"./index-DwsBZD05.js";import"./index-D3M5mM9_.js";import"./renderedTicksSlice-DYvam8ud.js";import"./index-CIBNfLVZ.js";import"./fillDefinitions-fx1J2dmJ.js";import"./CartesianChart-Cryci4Uo.js";import"./chartDataContext-CextJDGM.js";import"./CategoricalChart-DzNtI-Go.js";import"./getRadiusAndStrokeWidthFromDot-ZLRSIrH1.js";import"./Layer-Df_NEF0m.js";import"./dataEntryStyles-C-ZfbqEc.js";import"./Label-9brnKF6Z.js";import"./Text-DPkQNMpB.js";import"./ZIndexLayer-BUHaqwT6.js";import"./ActivePoints-B380tDrW.js";import"./Dot-BeK6ZL_a.js";import"./types-djSleOln.js";import"./activeStyles-DjlDJ1Rs.js";import"./useAnimationId-CdQeQcKS.js";import"./Symbols-BU2g01-G.js";import"./symbol-DGFVgd7C.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-in8OQb6t.js";import"./ActiveShapeUtils-BTD3-pm6.js";import"./Curve-DIyQM0l3.js";import"./step-CAG0Ynz6.js";import"./useEffectiveDataKey-BLws13Ws.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
