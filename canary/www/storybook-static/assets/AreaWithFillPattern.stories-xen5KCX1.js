import{R as t}from"./iframe--N-T_hBz.js";import{R as p}from"./zIndexSlice-BrmEEgcV.js";import{C as m}from"./ComposedChart-Cmhus7DD.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CsryjhZ0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BZdVkepW.js";import"./throttle-DiHBngta.js";import"./index-CltnTfg9.js";import"./index-C2LKm9xK.js";import"./RechartsWrapper-Dga53r6u.js";import"./axisSelectors-dSJNPUYj.js";import"./polarAxisSelectors-Ch50KZor.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-syhDUnOY.js";import"./index-DQLg1InC.js";import"./index-DSO52ANi.js";import"./renderedTicksSlice-C7C4TYLP.js";import"./index-BiiWPIDX.js";import"./fillDefinitions-DLkX59y8.js";import"./CartesianChart-DXdGkfOu.js";import"./chartDataContext-CXOzC9oO.js";import"./CategoricalChart-CbkCL8Oe.js";import"./Layer-1myxLhO2.js";import"./dataEntryStyles-CggySQjW.js";import"./Label-DcuyFpKL.js";import"./Text-B6x9BsBz.js";import"./ZIndexLayer-PDpl17Qr.js";import"./ActivePoints-BSj_UmGI.js";import"./Dot-MqsnkUih.js";import"./types-CDdNjsiG.js";import"./activeStyles-CQz5jccO.js";import"./useAnimationId-B0H5IbY6.js";import"./Symbols-DyIGA9sv.js";import"./symbol-Dc0-FYjy.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BuNZMI4X.js";import"./getRadiusAndStrokeWidthFromDot-C_-ClNXz.js";import"./ActiveShapeUtils-DxAwIp1Y.js";import"./Curve-AUzua7kl.js";import"./step-BCTml7Sd.js";import"./useEffectiveDataKey-ehD4S_ma.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
