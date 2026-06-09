import{R as t}from"./iframe-_0vvsXwQ.js";import{R as p}from"./zIndexSlice-UDOegWIl.js";import{C as m}from"./ComposedChart-C9VfnRnH.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DlUUwPS1.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Crw1A_KU.js";import"./index-B2rwiSR7.js";import"./index-B-MK1gV-.js";import"./get-dROHwlCD.js";import"./resolveDefaultProps-Dur14Ufb.js";import"./isWellBehavedNumber-Cb6oai8T.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D_godwDH.js";import"./index-DjufVxMp.js";import"./index-CQeeIj4f.js";import"./renderedTicksSlice-Dyv93tW0.js";import"./axisSelectors-DOgNvw74.js";import"./d3-scale-9nut4HIz.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DuAlGfbC.js";import"./chartDataContext-ooxC0Mwi.js";import"./CategoricalChart-yQk_e9Td.js";import"./Layer-CbOAMwV5.js";import"./AnimatedItems-NUeY2MHF.js";import"./Label-CiJ4G9HU.js";import"./Text-DjMF9a9a.js";import"./DOMUtils-BVwvsn59.js";import"./ZIndexLayer-F6Q8sfzp.js";import"./useAnimationId-Bs-cdpiV.js";import"./ActivePoints-Bq9SVATs.js";import"./Dot-COzuztjB.js";import"./types-DDFFAOTe.js";import"./RegisterGraphicalItemId-Do80jqI9.js";import"./GraphicalItemClipPath-DQak-ToR.js";import"./SetGraphicalItem-c1mokMqb.js";import"./getRadiusAndStrokeWidthFromDot-CWPNX420.js";import"./ActiveShapeUtils-CSlhsDPX.js";import"./Curve-Be-qJ1Us.js";import"./step-CiU6-CNX.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DFIY6q2K.js";const $={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
