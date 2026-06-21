import{R as t}from"./iframe-BIq879V5.js";import{R as p}from"./zIndexSlice-D4TMV-f8.js";import{C as m}from"./ComposedChart-Y-P0CO1c.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-2f_aK2LQ.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Bhe1IepA.js";import"./index-Bxqp1uTz.js";import"./index-1ZXeTe4f.js";import"./get-Dlp4HEDU.js";import"./resolveDefaultProps-D0mYDCdG.js";import"./isWellBehavedNumber-2nx214wI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-5ZbCTkSQ.js";import"./index-CoQnCr93.js";import"./index-qY5ecPCO.js";import"./renderedTicksSlice-wj6PxGI_.js";import"./axisSelectors-BEDQXBlF.js";import"./d3-scale-D2-Kj7HA.js";import"./CartesianChart-D5C06Dh0.js";import"./chartDataContext-DENfjobA.js";import"./CategoricalChart-B9HsjgZj.js";import"./Layer-BQ46hdaR.js";import"./AnimatedItems-Cplqb3ZM.js";import"./Label-CdyMu7UM.js";import"./Text-D9ArQUyF.js";import"./DOMUtils-U4n6Sms4.js";import"./ZIndexLayer-kG0uRxU5.js";import"./useAnimationId-7GzLXqBz.js";import"./ActivePoints-CAIFOa-o.js";import"./Dot-CeNBRJNR.js";import"./types-sdPoIcnS.js";import"./RegisterGraphicalItemId-CM4cjQUT.js";import"./GraphicalItemClipPath-DLFobv0X.js";import"./SetGraphicalItem-DenlJqlF.js";import"./getRadiusAndStrokeWidthFromDot-Ezu5xS7M.js";import"./ActiveShapeUtils-DMlqT6AD.js";import"./Curve-D0B4vo0F.js";import"./step-CMJu7Zx7.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BIYOuh4B.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
