import{R as t}from"./iframe-Cmv2uZik.js";import{R as p}from"./zIndexSlice-kpWLrDSf.js";import{C as m}from"./ComposedChart-vEbKd6d1.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DJa3F2NV.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BpVJ12_R.js";import"./index-1nWXUQRt.js";import"./index-BODQ_clV.js";import"./get-26q7mLtB.js";import"./resolveDefaultProps-CVMWQw0A.js";import"./isWellBehavedNumber-DPLnuG7C.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B1y6zL6A.js";import"./index-F92hSDpv.js";import"./index-Blrf4sdp.js";import"./renderedTicksSlice-De354RnA.js";import"./axisSelectors-DN7Qk49e.js";import"./d3-scale-C0Ts3d9o.js";import"./CartesianChart-Culr-Wpg.js";import"./chartDataContext-DDdGqXS2.js";import"./CategoricalChart-BzXggkHJ.js";import"./Layer-BSNuGngv.js";import"./AnimatedItems-lktoz8YW.js";import"./Label-COZByZz9.js";import"./Text-579iQBnG.js";import"./DOMUtils-BF0MLXBa.js";import"./ZIndexLayer-D1dh8rie.js";import"./useAnimationId-9e7OJi4C.js";import"./ActivePoints-DII5AyZv.js";import"./Dot-Drefe2Tr.js";import"./types-DtyijqTI.js";import"./RegisterGraphicalItemId-snzh5Pbt.js";import"./GraphicalItemClipPath-BiRXHsBx.js";import"./SetGraphicalItem-HiTeWvOV.js";import"./getRadiusAndStrokeWidthFromDot-Bl4mU7H4.js";import"./ActiveShapeUtils-Dvr59oga.js";import"./Curve-DX9DZst-.js";import"./step-DGX6e4k6.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-C1u59eed.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
