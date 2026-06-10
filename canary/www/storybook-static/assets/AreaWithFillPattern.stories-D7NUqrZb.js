import{R as t}from"./iframe-Sgab1gUe.js";import{R as p}from"./zIndexSlice-BrzbkbEI.js";import{C as m}from"./ComposedChart-DQqePUzc.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-D9kQJNkt.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-jmjMSL8D.js";import"./index-BLkVzwy_.js";import"./index-90Rz6XAP.js";import"./get-BJyukGiE.js";import"./resolveDefaultProps-CNXENHcX.js";import"./isWellBehavedNumber-CJXdc3tU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DTduNXvU.js";import"./index-BkOZFEZb.js";import"./index-BsnSQtU-.js";import"./renderedTicksSlice-CVwVFFGF.js";import"./axisSelectors-8GhzU9TS.js";import"./d3-scale-Bg12AftI.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CY44eXB-.js";import"./chartDataContext-NIXL8iaZ.js";import"./CategoricalChart-DwEPGx0k.js";import"./Layer-Dy3UQ8V8.js";import"./AnimatedItems-CFJVJstG.js";import"./Label-pFFfknml.js";import"./Text-Bwmob33r.js";import"./DOMUtils-CmwtFJfy.js";import"./ZIndexLayer-DBRcOItw.js";import"./useAnimationId-D0bn0X4e.js";import"./ActivePoints-_LL_I5Qc.js";import"./Dot-BvExYRbB.js";import"./types-CA2ETL4c.js";import"./RegisterGraphicalItemId-BSYxTo0u.js";import"./GraphicalItemClipPath-BB2uZM8Q.js";import"./SetGraphicalItem-Cu_IpSGW.js";import"./getRadiusAndStrokeWidthFromDot-bqVMqQYj.js";import"./ActiveShapeUtils-CypivSKC.js";import"./Curve-DfhFB3Po.js";import"./step-CWFXO9ga.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-B2HDnJwF.js";const $={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
