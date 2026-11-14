import{R as t}from"./iframe-DtzldFfh.js";import{R as p}from"./zIndexSlice-PhkkSvay.js";import{C as m}from"./ComposedChart-C0Pw1zvu.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-LAAh3L-8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-u2nTClVy.js";import"./throttle-Drk_UoQx.js";import"./index-CCZfAL_G.js";import"./index-CuN-tN9X.js";import"./RechartsWrapper-RpB-MHrg.js";import"./axisSelectors-C2izPxUf.js";import"./polarAxisSelectors-IPVOZM3m.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BmMEJmfI.js";import"./index-xLc8fata.js";import"./index-6_OYP7D7.js";import"./renderedTicksSlice-DbXdst8y.js";import"./index-OfVoCx4o.js";import"./fillDefinitions-4fWzE3Hc.js";import"./CartesianChart-D8rXmJzw.js";import"./chartDataContext-BNrACUYr.js";import"./CategoricalChart-Bkw2UtyY.js";import"./Layer-BcJtH6wk.js";import"./dataEntryStyles-kT4_La43.js";import"./Label-DAuHelmL.js";import"./Text-BCSLlBnR.js";import"./ZIndexLayer-BWdFNyrE.js";import"./ActivePoints-klnIqfJn.js";import"./Dot-DiyqsLJ3.js";import"./types-aakKZZv0.js";import"./activeStyles-BesdgLFE.js";import"./useAnimationId-Dzlg4g7S.js";import"./Symbols-CvrtYxxZ.js";import"./symbol-D-v3LMsn.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-31k7kJYq.js";import"./getRadiusAndStrokeWidthFromDot-CtzQdQd8.js";import"./ActiveShapeUtils-lUUDRG4C.js";import"./Curve-xzGpqU4W.js";import"./step-Dbgt0c4J.js";import"./useEffectiveDataKey-BP-D5MQu.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
