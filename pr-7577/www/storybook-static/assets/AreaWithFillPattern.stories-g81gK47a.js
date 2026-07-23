import{R as t}from"./iframe-DDIh6oSg.js";import{R as p}from"./zIndexSlice-D80Tj10e.js";import{C as m}from"./ComposedChart-Bwi8FpMM.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-qqq4KSFr.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bz-N2EDI.js";import"./index-Dxp0N8dY.js";import"./index-BAP9iPcz.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BovobWDa.js";import"./isWellBehavedNumber-m0qYgEug.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DOoCLeb6.js";import"./index-BwBS1vT9.js";import"./index-CVFqeXWK.js";import"./renderedTicksSlice-CodWg03c.js";import"./axisSelectors-Cj35qO4m.js";import"./d3-scale-DyPEX_SS.js";import"./CartesianChart-B73dWYbg.js";import"./chartDataContext-CsvjkcDn.js";import"./CategoricalChart-B8WXtgJK.js";import"./Layer-BjK-uYm4.js";import"./AnimatedItems-BksUzG9w.js";import"./Label-7ECcoRBX.js";import"./Text-DiDEm6xU.js";import"./DOMUtils-DNdwN9ud.js";import"./ZIndexLayer-CDkdwb16.js";import"./useAnimationId-Cx3p02Wi.js";import"./ActivePoints-D9ieR1r7.js";import"./Dot-C-WD7XjH.js";import"./types-CnDlnigw.js";import"./RegisterGraphicalItemId-CqU17xv7.js";import"./GraphicalItemClipPath-BMP70uQv.js";import"./SetGraphicalItem-BS0-pWrT.js";import"./getRadiusAndStrokeWidthFromDot-B0O65Yh_.js";import"./ActiveShapeUtils-DSNDz2f-.js";import"./Curve-Cd-wWA8T.js";import"./step-i4RfCE80.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CiQeUF16.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
