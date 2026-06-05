import{R as t}from"./iframe-__Uni7ot.js";import{R as p}from"./zIndexSlice-D7vG4UcO.js";import{C as m}from"./ComposedChart-De5M1TqL.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BHfrFuaT.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DHOgEza7.js";import"./index-DuAus-7O.js";import"./index-D5MVAu2q.js";import"./get-M8ASrgh5.js";import"./resolveDefaultProps-id_IzIac.js";import"./isWellBehavedNumber-DShwpyY_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BbAqMlrq.js";import"./index-ClzAupHk.js";import"./index-B8BzxjEy.js";import"./renderedTicksSlice-DJf3fvCP.js";import"./axisSelectors-CWQCxUri.js";import"./d3-scale-DZYmGYua.js";import"./string-B6fdYHAA.js";import"./CartesianChart--sKXWUKy.js";import"./chartDataContext-CKCl4rEW.js";import"./CategoricalChart-BLqwxQ25.js";import"./Layer-CMTKTZZ4.js";import"./AnimatedItems-ZS1OqPe2.js";import"./Label-CrlvYGOF.js";import"./Text-C_yGKqXr.js";import"./DOMUtils-neCLUP_5.js";import"./ZIndexLayer-C4Jgnnas.js";import"./useAnimationId-BhPEQZA3.js";import"./ActivePoints-C2WwE9Wu.js";import"./Dot-BYTlXUFT.js";import"./types-DL1t91_l.js";import"./RegisterGraphicalItemId-CVmvnLvy.js";import"./GraphicalItemClipPath-B5rXG3_D.js";import"./SetGraphicalItem-DXUbiEXj.js";import"./getRadiusAndStrokeWidthFromDot-DeEAWH9e.js";import"./ActiveShapeUtils-r_dsHEWU.js";import"./Curve-DAVrDxo_.js";import"./step-BeYfnRlJ.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CGB-Dm-U.js";const $={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const tt=["FillPattern"];export{e as FillPattern,tt as __namedExportsOrder,$ as default};
