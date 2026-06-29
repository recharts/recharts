import{R as t}from"./iframe-DyrNzYfG.js";import{R as p}from"./zIndexSlice-BxcBivH8.js";import{C as m}from"./ComposedChart-CU6tXOSz.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CTI_jWd3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cm4al6R2.js";import"./index-CHWPJWR6.js";import"./index-NUd0OKr5.js";import"./get-cagOI5AH.js";import"./resolveDefaultProps-xqaJSNtt.js";import"./isWellBehavedNumber-Bd2sibwy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BdG0zq9-.js";import"./index-CdQUwFqU.js";import"./index-BpeVWu4H.js";import"./renderedTicksSlice-C6uhyxBm.js";import"./axisSelectors-CD9PShsx.js";import"./d3-scale-BldhV8lg.js";import"./CartesianChart-UfO6rtst.js";import"./chartDataContext-CubF16Dj.js";import"./CategoricalChart-CWXn607r.js";import"./Layer-BL2D6iSn.js";import"./AnimatedItems-Cq3mCAt5.js";import"./Label-mQIBMRk4.js";import"./Text-CnNg3gGa.js";import"./DOMUtils-odAOb060.js";import"./ZIndexLayer-BkddZKJi.js";import"./useAnimationId-AVj-rcCC.js";import"./ActivePoints-DnBcqYjd.js";import"./Dot-DyBJR96w.js";import"./types-DDNG0zv9.js";import"./RegisterGraphicalItemId-CvfrlEi9.js";import"./GraphicalItemClipPath-ClGJav6d.js";import"./SetGraphicalItem-xVo5bUKT.js";import"./getRadiusAndStrokeWidthFromDot-DwRxyJur.js";import"./ActiveShapeUtils-9juqJKGt.js";import"./Curve-CV1SC5oG.js";import"./step-BTLusNHS.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-C0la4YRj.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
