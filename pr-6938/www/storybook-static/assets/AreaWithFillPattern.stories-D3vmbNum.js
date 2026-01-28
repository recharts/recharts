import{e as t}from"./iframe-DsOUfprP.js";import{R as p}from"./arrayEqualityCheck-DjO11PbP.js";import{C as m}from"./ComposedChart-bIhTAvLw.js";import{A as r}from"./Area-CFM28B5R.js";import{R as s}from"./RechartsHookInspector-mhd3rbsm.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-ZmhcaTjs.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-DwZNGVuW.js";import"./hooks-wPJ0hpZq.js";import"./axisSelectors-CJQMQFai.js";import"./zIndexSlice-Dgi_woyo.js";import"./CartesianChart-BHRGlbKq.js";import"./chartDataContext-Dq9n1Njf.js";import"./CategoricalChart-BNNYxF9g.js";import"./Curve-DNHLMjMe.js";import"./types-PuShQX9K.js";import"./Layer-LWw9M75d.js";import"./ReactUtils-CwDP136p.js";import"./Label-CbeoYjYN.js";import"./Text-D4hbrhbx.js";import"./DOMUtils-C9zx0qvq.js";import"./ZIndexLayer-kg9R7P8d.js";import"./ActivePoints-D2olhcFn.js";import"./Dot-DDC52ur4.js";import"./RegisterGraphicalItemId-BjXMbvNS.js";import"./GraphicalItemClipPath-DG39ifF4.js";import"./SetGraphicalItem-CQYRXGzG.js";import"./useAnimationId-zJAyy6w7.js";import"./getRadiusAndStrokeWidthFromDot-4V8YrcAz.js";import"./graphicalItemSelectors-CM6J4AR4.js";import"./index-G8W79pF2.js";import"./ChartSizeDimensions-CtzLecLz.js";import"./OffsetShower-CmgUZqHD.js";import"./PlotAreaShower-Da3_E1UK.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const Q=["FillPattern"];export{e as FillPattern,Q as __namedExportsOrder,N as default};
