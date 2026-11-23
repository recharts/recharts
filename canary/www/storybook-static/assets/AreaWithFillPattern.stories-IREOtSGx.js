import{R as t}from"./iframe-DmqRNFpA.js";import{R as p}from"./zIndexSlice-B1K-Cx6E.js";import{C as m}from"./ComposedChart-C16lvRll.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-mZI1aImN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BjqyIxlF.js";import"./throttle-DniwHdPI.js";import"./index-DLLiFttT.js";import"./index-DKIkITg9.js";import"./RechartsWrapper-CTNqlU94.js";import"./axisSelectors-CgQoXC7y.js";import"./polarAxisSelectors-DfZjHeTi.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-a0YrBx9c.js";import"./index-DugFJa8I.js";import"./index-D2BlTs7T.js";import"./renderedTicksSlice-rJsNFgC5.js";import"./index-7-eYjlBn.js";import"./fillDefinitions-D0KLDOLI.js";import"./CartesianChart-DvjgB_s_.js";import"./chartDataContext-7iFWy2pv.js";import"./CategoricalChart-BK3tVtDO.js";import"./getRadiusAndStrokeWidthFromDot-GdhkPv0Q.js";import"./Layer-BMG2yPM5.js";import"./dataEntryStyles-ClWs31k0.js";import"./Label-CGOHFUUI.js";import"./Text-CUDSRJfa.js";import"./ZIndexLayer-Rp2F5wBf.js";import"./ActivePoints-G7jUCSXZ.js";import"./Dot-BXNT0rJn.js";import"./types-ClR1fgnQ.js";import"./activeStyles-2GMTQ11y.js";import"./useAnimationId-BfPOVraS.js";import"./Symbols-DJo18KTa.js";import"./symbol-BhHhN8K0.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-B1qkE8Ui.js";import"./ActiveShapeUtils-wD2P373B.js";import"./Curve-DXM7d3l8.js";import"./step-KG3W8n3J.js";import"./useEffectiveDataKey-1IVWV8C0.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
