import{e as t}from"./iframe-B-Dp18cD.js";import{R as p}from"./arrayEqualityCheck-n6VvjF1v.js";import{C as m}from"./ComposedChart-D9f0fHzi.js";import{A as r}from"./Area-C_IhxOaT.js";import{R as s}from"./RechartsHookInspector-CHTp98JP.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-ClUavgcZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-uJ7UoaAC.js";import"./hooks-BBxeeore.js";import"./axisSelectors-OuIDnENT.js";import"./zIndexSlice-BzpbxKTs.js";import"./CartesianChart-CJ47btSF.js";import"./chartDataContext-zsQASXZN.js";import"./CategoricalChart-BJqjUyur.js";import"./Curve-B9DUpoMg.js";import"./types-D_31He_k.js";import"./Layer-sRK8yL2I.js";import"./ReactUtils-CS1JgmNI.js";import"./Label-GlXCPztW.js";import"./Text-B2w_0Ecu.js";import"./DOMUtils-3l5WS7n1.js";import"./ZIndexLayer-DZaorHCJ.js";import"./ActivePoints-Q3QYZ8_j.js";import"./Dot-C4ZtMf9A.js";import"./RegisterGraphicalItemId-CxTaZDZc.js";import"./GraphicalItemClipPath-C0nz93m4.js";import"./SetGraphicalItem-Dgsvv4_3.js";import"./useAnimationId-BP7QGUYe.js";import"./getRadiusAndStrokeWidthFromDot-BWykTpyk.js";import"./graphicalItemSelectors-kKLZsU_A.js";import"./index-GlpghtR4.js";import"./ChartSizeDimensions-DKPKgNfh.js";import"./OffsetShower-vf47GvB5.js";import"./PlotAreaShower-oIrFVBlc.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const Q=["FillPattern"];export{e as FillPattern,Q as __namedExportsOrder,N as default};
