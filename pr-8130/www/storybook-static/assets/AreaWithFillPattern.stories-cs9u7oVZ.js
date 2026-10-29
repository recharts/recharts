import{R as t}from"./iframe-C0OVyiWZ.js";import{R as p}from"./zIndexSlice-8GqqcFEr.js";import{C as m}from"./ComposedChart-CDKrU3QJ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DMSJgeVp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CzOTGDv8.js";import"./throttle-D68qy_th.js";import"./index-Docwyysm.js";import"./index-ZerhtVY0.js";import"./RechartsWrapper-CTQttuVZ.js";import"./axisSelectors-D80ZAqVH.js";import"./polarAxisSelectors-DTm6eoEL.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-P-FUFzKf.js";import"./index-B1LAm-dY.js";import"./index-BpCkqUEo.js";import"./renderedTicksSlice-CUInauOX.js";import"./index-C5porGIG.js";import"./fillDefinitions-Bbw8sRrt.js";import"./CartesianChart-DeRNlyJ8.js";import"./ZIndexPortal-wZgZSnoL.js";import"./CategoricalChart-BEVcLfMu.js";import"./Layer-OalOUm3Y.js";import"./LabelList-D0ai-hpm.js";import"./Label-YEc5vJ1L.js";import"./Text-CW0hOv-I.js";import"./DOMUtils-C9FX__jF.js";import"./ZIndexLayer-lUVq37sV.js";import"./ActivePoints-BUz8lbCF.js";import"./Dot-b3sd19D9.js";import"./types-C-qeruIO.js";import"./activeStyles-D_QsSvZV.js";import"./useAnimationId-CezZ2glr.js";import"./dataEntryStyles-Cd6CZepp.js";import"./Symbols-BDZG6tZB.js";import"./symbol-BmFAGqI-.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CFBhhEbP.js";import"./getRadiusAndStrokeWidthFromDot-DztWYVRU.js";import"./ActiveShapeUtils-DL-meZDZ.js";import"./Curve-C3dcNtoz.js";import"./step-CZORxbW4.js";import"./useEffectiveDataKey-AC38WMBQ.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,it as __namedExportsOrder,rt as default};
