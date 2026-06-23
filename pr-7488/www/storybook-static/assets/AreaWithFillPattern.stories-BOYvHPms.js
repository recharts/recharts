import{R as t}from"./iframe-CMVn_SNm.js";import{R as p}from"./zIndexSlice-5bfS2JCG.js";import{C as m}from"./ComposedChart-CtvSTeFH.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-VlVCwSbH.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BrNA81ld.js";import"./index-BHUmbQo-.js";import"./index-BNNprLMB.js";import"./get-CIPBGhdg.js";import"./resolveDefaultProps-CRaaAotp.js";import"./isWellBehavedNumber-C4Dcoy8i.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DcTKM8HZ.js";import"./index-DgABY5rS.js";import"./index-o3wTHYCY.js";import"./renderedTicksSlice-B8N2zN9Q.js";import"./axisSelectors-Dk5pLmzI.js";import"./d3-scale-p_vnFVNW.js";import"./CartesianChart-Bhmmmn5c.js";import"./chartDataContext-Dg2f8fbZ.js";import"./CategoricalChart-DUjGX6JP.js";import"./Layer-NKsa_8yv.js";import"./AnimatedItems-i8neEi91.js";import"./Label-DCWSGF-w.js";import"./Text-DjHHlwuG.js";import"./DOMUtils-DEDVnuPv.js";import"./ZIndexLayer-qzvYtv-n.js";import"./useAnimationId-DARzAta0.js";import"./ActivePoints-BTW7Abvw.js";import"./Dot-BUoSKBIz.js";import"./types-DXSGjGm9.js";import"./RegisterGraphicalItemId-B5nu-pPZ.js";import"./GraphicalItemClipPath-CTln66En.js";import"./SetGraphicalItem-rX6NUfmr.js";import"./getRadiusAndStrokeWidthFromDot-CIJw8Q-v.js";import"./ActiveShapeUtils-DbnUcZo7.js";import"./Curve-Bldv1TQU.js";import"./step-BXHdJ1Cz.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CVpIZw14.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
