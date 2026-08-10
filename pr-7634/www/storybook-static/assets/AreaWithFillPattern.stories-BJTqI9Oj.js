import{R as t}from"./iframe-BKvNh1h_.js";import{R as p}from"./zIndexSlice-C45OUbld.js";import{C as m}from"./ComposedChart-DVKY2yWi.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Bz3jKwG0.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CCr4r-wz.js";import"./index-LbIdVRN9.js";import"./index-C8RhipGY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DkG3FLLb.js";import"./isWellBehavedNumber-CCuIO4aK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bjdqnb5s.js";import"./index-LDeJ6IyG.js";import"./index-Bs0U2hFi.js";import"./axisSelectors-CqcxQY1m.js";import"./d3-scale-C0LZPMhi.js";import"./renderedTicksSlice-CZ4-swon.js";import"./CartesianChart-BRsslnmW.js";import"./chartDataContext-CYnF151M.js";import"./CategoricalChart-ByQYOV-Z.js";import"./Layer-B8EPTqa2.js";import"./AnimatedItems-GpiTBXk9.js";import"./Label-D2RnPYt_.js";import"./Text-Uy9kBT6v.js";import"./DOMUtils-B6CNM4ee.js";import"./ZIndexLayer-Dc9WCXop.js";import"./useAnimationId-B6MPcNoZ.js";import"./ActivePoints-Db6v46Om.js";import"./Dot-jCktDg80.js";import"./types-BwPciZr7.js";import"./RegisterGraphicalItemId-D3RFuNNX.js";import"./GraphicalItemClipPath-CWTvD5fd.js";import"./SetGraphicalItem-B2KPFtj4.js";import"./getRadiusAndStrokeWidthFromDot-DisaDplY.js";import"./ActiveShapeUtils-Dl_5YuKK.js";import"./Curve-B1iKKL18.js";import"./step-CFL-eQno.js";import"./path-DyVhHtw_.js";import"./RechartsThemeContext-a-KGKEje.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-B6G12BBP.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const et=["FillPattern"];export{e as FillPattern,et as __namedExportsOrder,tt as default};
