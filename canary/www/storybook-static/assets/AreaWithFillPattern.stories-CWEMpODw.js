import{R as t}from"./iframe-BkOwE2GN.js";import{R as p}from"./zIndexSlice-Chy-hne0.js";import{C as m}from"./ComposedChart-BhRq4U8z.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DP9gS0Oa.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-NLCauKH2.js";import"./get-CjriyByo.js";import"./throttle-DAc5l_dD.js";import"./index-CH1j1Fpi.js";import"./index-ByxKcjsQ.js";import"./RechartsWrapper-CXzR8xrS.js";import"./axisSelectors-DGKEku6n.js";import"./polarAxisSelectors-BvSTSSsq.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-CTw2DMEK.js";import"./index-DLZbiRz5.js";import"./index-B_P6uzST.js";import"./renderedTicksSlice-Dl3anyA4.js";import"./index-nwTT5isQ.js";import"./fillDefinitions-l_67yLXZ.js";import"./CartesianChart-CPFxyOEU.js";import"./chartDataContext-DkGjRnrU.js";import"./CategoricalChart-6jzkaSCX.js";import"./getRadiusAndStrokeWidthFromDot-CE4sWQuP.js";import"./Layer-CnUstnfJ.js";import"./dataEntryStyles-R9P1sHzA.js";import"./Label-y4X5dBPS.js";import"./Text-DYjefSTk.js";import"./ZIndexLayer-dRwAMNuu.js";import"./ActivePoints-zmYc3mi0.js";import"./Dot-bUm5BNK-.js";import"./types-CoO4ONhi.js";import"./activeStyles-fROkMw-p.js";import"./useAnimationId-DWRfsMZ5.js";import"./Symbols-B-s6UWez.js";import"./symbol-zbMM1gn6.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-BSi-Voc1.js";import"./ActiveShapeUtils-BE3bg2lY.js";import"./Curve-DGsLLJww.js";import"./step-XUgRcOx_.js";import"./useEffectiveDataKey-BySMHkBi.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
