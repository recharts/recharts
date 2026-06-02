import{c as t}from"./iframe-NcbJjIA-.js";import{g as p}from"./zIndexSlice-aCnp2Btu.js";import{C as m}from"./ComposedChart-DfrMZJ_4.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as r}from"./Area-DGO91N9p.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BrPcfpKJ.js";import"./index-YT6PLmfy.js";import"./index-B2hMZxT9.js";import"./get-DHJyV6O8.js";import"./resolveDefaultProps-9rxZz0BJ.js";import"./isWellBehavedNumber-CRF88Te0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C1F7SUdh.js";import"./index-CASzwsd1.js";import"./index-CFcgoPKL.js";import"./renderedTicksSlice-CazECbsF.js";import"./axisSelectors--8zPyqGt.js";import"./d3-scale-B1TlVjVH.js";import"./CartesianChart-nvfGUb02.js";import"./chartDataContext-D7rZipVq.js";import"./CategoricalChart-DRPlCLZK.js";import"./Curve-Cp63qh_R.js";import"./types-B9riDZKf.js";import"./step-C2x-UOx0.js";import"./path-DyVhHtw_.js";import"./Layer-DCqaOLDO.js";import"./ReactUtils-DWeLU6sY.js";import"./Label-CCVmR4pI.js";import"./Text-DqOWrbn9.js";import"./DOMUtils-VR3x78qW.js";import"./ZIndexLayer-HA7Kz5Ib.js";import"./ActivePoints-B2_IpYKn.js";import"./Dot-mM6yrIUr.js";import"./RegisterGraphicalItemId-BKDuHm0F.js";import"./GraphicalItemClipPath-Ck3Yxo8v.js";import"./SetGraphicalItem-BB4v-B7H.js";import"./useAnimationId-DLPXxqZ8.js";import"./getRadiusAndStrokeWidthFromDot-D1I_pbtw.js";import"./graphicalItemSelectors-_gD5Ywq2.js";const Y={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var a,o,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const Z=["FillPattern"];export{e as FillPattern,Z as __namedExportsOrder,Y as default};
