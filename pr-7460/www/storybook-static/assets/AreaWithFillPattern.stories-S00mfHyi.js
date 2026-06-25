import{R as t}from"./iframe-Bwb61Kb3.js";import{R as p}from"./zIndexSlice-D31yQesP.js";import{C as m}from"./ComposedChart-BS2K9hhM.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-RL8IzTe2.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-_NZCx9ap.js";import"./index-u4qnc4RM.js";import"./index-DHxQl28E.js";import"./get-Cnvgfe2T.js";import"./resolveDefaultProps-BSJiJTDh.js";import"./isWellBehavedNumber-BUfCnJUB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BmkLmt4T.js";import"./index-VoBgttoT.js";import"./index-CQ8V2YYj.js";import"./renderedTicksSlice-DltxEF0x.js";import"./axisSelectors-C6KxvASB.js";import"./d3-scale-jv5Gnb2-.js";import"./CartesianChart-BNE4fepl.js";import"./chartDataContext-D41xMC5d.js";import"./CategoricalChart-BUwoY-M8.js";import"./Layer-Ci9WruQM.js";import"./AnimatedItems-4rj5S85S.js";import"./Label-C3p-lZQP.js";import"./Text-DNg8TFYr.js";import"./DOMUtils-ChqDP5B4.js";import"./ZIndexLayer-Djnma_X0.js";import"./useAnimationId-h0tb0wwo.js";import"./ActivePoints-oLE2SAgh.js";import"./Dot-Bt6enifh.js";import"./types-Bi-bjjeC.js";import"./RegisterGraphicalItemId-BzHAnQiR.js";import"./GraphicalItemClipPath-CxkydB3y.js";import"./SetGraphicalItem-BRIRFn2y.js";import"./getRadiusAndStrokeWidthFromDot-CF1gEAgf.js";import"./ActiveShapeUtils-ZkpQ4WD_.js";import"./Curve-BGl8TuYV.js";import"./step-CnKejACU.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-hamdw4Lr.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
