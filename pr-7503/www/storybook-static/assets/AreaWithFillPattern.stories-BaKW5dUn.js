import{R as t}from"./iframe-yOPx9Gik.js";import{R as p}from"./zIndexSlice-D67vVDIo.js";import{C as m}from"./ComposedChart-CNKZcRKd.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-C177bV4E.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-MwiuxAbo.js";import"./index-DJygjR8e.js";import"./index-gBURTRbi.js";import"./get-BfHGT2kl.js";import"./resolveDefaultProps-DB1B-raE.js";import"./isWellBehavedNumber-X6n-T2Sz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BCqwcFHc.js";import"./index-C-1T0p6G.js";import"./index-CyWWVFG2.js";import"./renderedTicksSlice-ClbKT4Vz.js";import"./axisSelectors-BcCjx1Bb.js";import"./d3-scale-BQYCkYi4.js";import"./CartesianChart-tj_Q7LqM.js";import"./chartDataContext-CIZm0aW3.js";import"./CategoricalChart-C2Hn6eQd.js";import"./Layer-Bwtnd2Qr.js";import"./AnimatedItems-CE38GYBB.js";import"./Label-BqUT8U7H.js";import"./Text-BYswpnhx.js";import"./DOMUtils-Cu0iYWZD.js";import"./ZIndexLayer-B4R3RCf9.js";import"./useAnimationId-D3arzwOC.js";import"./ActivePoints-BnyIHKN-.js";import"./Dot-BOZFOnSK.js";import"./types-BJAf4K7V.js";import"./RegisterGraphicalItemId-DtIIsDtI.js";import"./GraphicalItemClipPath-ByZKWDCp.js";import"./SetGraphicalItem-Bb0dcZso.js";import"./getRadiusAndStrokeWidthFromDot-pUt3tlnV.js";import"./ActiveShapeUtils-BD3mqbS1.js";import"./Curve-CyG3DmyO.js";import"./step-Bnv-0_8B.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-D7_dqTyQ.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
