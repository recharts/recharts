import{e as t}from"./iframe-BjHGzV_g.js";import{R as p}from"./arrayEqualityCheck-DSmzEAOj.js";import{C as m}from"./ComposedChart-B9pmH1Bx.js";import{A as r}from"./Area-COa9KqxS.js";import{R as s}from"./RechartsHookInspector-D9VSdGzF.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BgzxguqS.js";import"./PolarUtils-DVfIyed4.js";import"./RechartsWrapper-BpQ0Nvj-.js";import"./hooks-j3l1IZT0.js";import"./axisSelectors-Dcbbky9Q.js";import"./zIndexSlice-CeUR4dop.js";import"./CartesianChart-NrBloX0j.js";import"./chartDataContext-CvBxgAkC.js";import"./CategoricalChart-DUk9fPa6.js";import"./Curve-C15B5k0e.js";import"./types-CnIXHZZY.js";import"./Layer-C_w7y8lS.js";import"./ReactUtils-B_OhT6T8.js";import"./Label-CYo-ySuR.js";import"./Text-D_R22YNN.js";import"./DOMUtils-DJKWXfCz.js";import"./ZIndexLayer-CXQSohMh.js";import"./ActivePoints-C5an_xbq.js";import"./Dot-DgNeiD7R.js";import"./RegisterGraphicalItemId-DQPUuqCc.js";import"./GraphicalItemClipPath-BSkbIiNd.js";import"./SetGraphicalItem-CZBegNK8.js";import"./useAnimationId-aInF8bWj.js";import"./getRadiusAndStrokeWidthFromDot-BLocnVTZ.js";import"./graphicalItemSelectors-yGG1F5ID.js";import"./index-D2ltde3K.js";import"./ChartSizeDimensions-RaKYClSi.js";import"./OffsetShower-CgzrN99U.js";import"./PlotAreaShower-CopDbqvE.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
