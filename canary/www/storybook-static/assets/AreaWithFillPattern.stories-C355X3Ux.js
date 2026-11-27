import{R as t}from"./iframe-2TbE3qYT.js";import{R as p}from"./zIndexSlice-CDl_l-89.js";import{C as m}from"./ComposedChart-Dv9sDNdE.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-qnKMkXoD.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CmNgnsrp.js";import"./get-CjriyByo.js";import"./throttle-AC4zKKET.js";import"./index-zPMeTUky.js";import"./index-CF9MDp9v.js";import"./RechartsWrapper-DSdhDIUK.js";import"./axisSelectors-BRsQeeHB.js";import"./polarAxisSelectors-BVGWIciz.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-gVDFTlHt.js";import"./index-vCQ15aHt.js";import"./index-DZAwbT7O.js";import"./renderedTicksSlice-hzdTS8Zy.js";import"./index-Cp7R3dKQ.js";import"./fillDefinitions-DTcu8a6k.js";import"./CartesianChart-Doi0i7F0.js";import"./chartDataContext-zU1PANlW.js";import"./CategoricalChart-BlCkd7eS.js";import"./getRadiusAndStrokeWidthFromDot-DrA60Arr.js";import"./Layer-7DEP56Bj.js";import"./dataEntryStyles-T1g5qPBF.js";import"./Label-BqpWbzgg.js";import"./Text-BBu6qFds.js";import"./ZIndexLayer-CZh1ghPv.js";import"./ActivePoints-D8FfETBR.js";import"./Dot-_rUk0L2M.js";import"./types-Dx30sS-2.js";import"./activeStyles-Rm_R6i1P.js";import"./useAnimationId-D_GZEFYT.js";import"./Symbols-BqG7sYmQ.js";import"./symbol-CUR1FaxD.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-Dl3lwAU1.js";import"./ActiveShapeUtils-Bsp6lbzE.js";import"./Curve-Z7vcnGYC.js";import"./step-DFCmv64b.js";import"./useEffectiveDataKey-CWpkrBwa.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,et as __namedExportsOrder,tt as default};
