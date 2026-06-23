import{R as t}from"./iframe-Dgfa45pO.js";import{R as p}from"./zIndexSlice-C1KjhRe9.js";import{C as m}from"./ComposedChart-DlT_NDd5.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CIeE2eMp.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DVLCs_h8.js";import"./index-BgENuBix.js";import"./index-Bo_UbBqc.js";import"./get-BZICNy-w.js";import"./resolveDefaultProps-ChQrXTkd.js";import"./isWellBehavedNumber-BrMIbSaZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-XphNsNZ5.js";import"./index-ksaWIuWX.js";import"./index-CBjnf8TP.js";import"./renderedTicksSlice-fSTgGnjG.js";import"./axisSelectors-4s-45b5o.js";import"./d3-scale-D3oEXvep.js";import"./CartesianChart-BC1ybKqz.js";import"./chartDataContext-xlhPPH5F.js";import"./CategoricalChart-BUu6OQ7Y.js";import"./Layer-BwLAkNRA.js";import"./AnimatedItems-CIa4005N.js";import"./Label-Dzw51f8E.js";import"./Text-tvsjfW3h.js";import"./DOMUtils-C6RrxFOP.js";import"./ZIndexLayer-Dy6LsEV1.js";import"./useAnimationId-CjXgi841.js";import"./ActivePoints-jW6GNHGv.js";import"./Dot-DbOxHeVE.js";import"./types-C1ZkWqT0.js";import"./RegisterGraphicalItemId-DMVQPcLn.js";import"./GraphicalItemClipPath-CGgVvw3m.js";import"./SetGraphicalItem-eSn4zQ3n.js";import"./getRadiusAndStrokeWidthFromDot-KiudXz49.js";import"./ActiveShapeUtils-B8QNpF57.js";import"./Curve-DtYKQ2VH.js";import"./step-BZZfKQz_.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-Bgpj2GzB.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const $=["FillPattern"];export{e as FillPattern,$ as __namedExportsOrder,Z as default};
