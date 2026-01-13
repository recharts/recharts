import{e as t}from"./iframe-bYFtU2gB.js";import{R as s}from"./arrayEqualityCheck-BHNF6PA7.js";import{C as l}from"./ComposedChart-CUjgMZ9l.js";import{B as r}from"./Bar-DzlKoxBs.js";import{R as m}from"./RechartsHookInspector-Cgqq1XBh.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-RCRz3E4-.js";import"./PolarUtils-BwgqFbq3.js";import"./RechartsWrapper-Cr_qDhUZ.js";import"./hooks-ZDdJpBw-.js";import"./axisSelectors-Bz_L1ZR6.js";import"./zIndexSlice-UFbR30dZ.js";import"./CartesianChart-lWIloUy5.js";import"./chartDataContext-CbNClMtX.js";import"./CategoricalChart-ByKQIpLz.js";import"./Layer-BBEIeca0.js";import"./tooltipContext-BoUwqDRy.js";import"./ReactUtils-C_A_edxl.js";import"./Label-CFtnFUI6.js";import"./Text-DGNM2np6.js";import"./DOMUtils-BRFWW1JK.js";import"./ZIndexLayer-BgNsQjiU.js";import"./types-rMmo8sSI.js";import"./ActiveShapeUtils-CJjJYwGu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BhTN5tPV.js";import"./useAnimationId-DJ17eyu2.js";import"./Trapezoid-DSgAJSbG.js";import"./Sector-CLRLJGPS.js";import"./Symbols-CNah5pWh.js";import"./Curve-CtUoNekQ.js";import"./RegisterGraphicalItemId-BrxUTcxA.js";import"./ErrorBarContext-Dr9wrC8F.js";import"./GraphicalItemClipPath-BBMk50de.js";import"./SetGraphicalItem-nU2Wrmlo.js";import"./getZIndexFromUnknown-kAWfXndU.js";import"./graphicalItemSelectors-DzdAJcbD.js";import"./index-DOxosQgk.js";import"./ChartSizeDimensions-RFkmb5Zl.js";import"./OffsetShower-CjBekQlW.js";import"./PlotAreaShower-DwHvcBqq.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(m,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <pattern id="star" width="10" height="10" patternUnits="userSpaceOnUse">
              <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
            </pattern>
            <pattern id="stripe" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="2" height="4" fill="red" />
            </pattern>
          </defs>
          <Bar dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Bar dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#stripe)" />
          <Bar dataKey="amt" stroke="#8884d8" fillOpacity={1} fill="url(#star)" />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const et=["Fill"];export{e as Fill,et as __namedExportsOrder,tt as default};
