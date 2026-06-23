import{R as t}from"./iframe-Csitbru2.js";import{R as p}from"./zIndexSlice-BG9qkId4.js";import{C as m}from"./ComposedChart-BUYN4Cux.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DVeDBOWU.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DZIxrqNF.js";import"./index-DY2vKHdm.js";import"./index-82VYn5V_.js";import"./get-DUq6txa7.js";import"./resolveDefaultProps-zVEOPP5d.js";import"./isWellBehavedNumber-_7tyBBfO.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CJrqmvjr.js";import"./index-BUYeukup.js";import"./index-3rUoeV7Y.js";import"./renderedTicksSlice-DArjmdb9.js";import"./axisSelectors-BKzg4uht.js";import"./d3-scale-ruaAtfZ3.js";import"./CartesianChart-CQCv9B95.js";import"./chartDataContext-5AtwXdKv.js";import"./CategoricalChart-CH47Oqt0.js";import"./Layer-CzMJ0aPe.js";import"./AnimatedItems-nKsPTqFW.js";import"./Label-ipIcHgJV.js";import"./Text-CCtHFY4v.js";import"./DOMUtils-QGCjuYeS.js";import"./ZIndexLayer-BXMbhl4p.js";import"./useAnimationId-co5Blost.js";import"./ActivePoints-CJkfV15x.js";import"./Dot-Wnlr8zt6.js";import"./types-CUGjGCsQ.js";import"./RegisterGraphicalItemId-4_42U9Tt.js";import"./GraphicalItemClipPath-DmSSVMHB.js";import"./SetGraphicalItem-H4qAywSp.js";import"./getRadiusAndStrokeWidthFromDot-BVPCo9J9.js";import"./ActiveShapeUtils-BJwvh2Jx.js";import"./Curve-B3wzhPX7.js";import"./step-Cvs1IljU.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-Cb7i0Zq_.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
