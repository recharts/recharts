import{R as t}from"./iframe-zw95Jg5I.js";import{R as p}from"./zIndexSlice-BhhR1tic.js";import{C as m}from"./ComposedChart-CTgj0L1M.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BB05D8vL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-oavmg9-5.js";import"./throttle-Cgnp6_V2.js";import"./index-CWbrX-i7.js";import"./index-CWy5ARPc.js";import"./RechartsWrapper-DNF4noKd.js";import"./axisSelectors-DAhbEMcv.js";import"./polarAxisSelectors-DUH0PWke.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BXUDNojI.js";import"./index-BPsqxPXN.js";import"./index-BEzQf4L4.js";import"./renderedTicksSlice-BhGNFZVD.js";import"./index-bXT-B2Zu.js";import"./CartesianChart-CAbKVIox.js";import"./chartDataContext-DsEiNuFy.js";import"./CategoricalChart-DSpSOmf_.js";import"./Layer-KXbvniH8.js";import"./activeStyles-Dzq6_wuP.js";import"./Label-B1gN_1pg.js";import"./Text-d1Lwh7G9.js";import"./pageBackground-04zbeTMB.js";import"./useId-CtBeXuXP.js";import"./ZIndexLayer-DT4lNh0N.js";import"./dataEntryStyles-B6Pg3he4.js";import"./useAnimationId-DHyavBGa.js";import"./ActivePoints-DhDmo-r8.js";import"./Dot-gB6O6AIc.js";import"./types-BkYRfFSe.js";import"./Symbols-g6eOoLF6.js";import"./symbol-D4N1oQUq.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-Ci1zbwmF.js";import"./SetGraphicalItem-D5SILBm3.js";import"./getRadiusAndStrokeWidthFromDot-BjYb5x8U.js";import"./ActiveShapeUtils-KL7GHwh1.js";import"./Curve-D_d6vzaM.js";import"./step-Q9jA4NJI.js";import"./useEffectiveDataKey-ak6DNGcC.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,it as __namedExportsOrder,rt as default};
