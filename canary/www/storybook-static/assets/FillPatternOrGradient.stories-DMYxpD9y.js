import{e as t}from"./iframe-B0S7Bw5r.js";import{R as s}from"./arrayEqualityCheck-B6UHuCSW.js";import{C as m}from"./ComposedChart-DcRLOIWA.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-CwAxX5_w.js";import{R as c}from"./RechartsHookInspector-CMq6C7Gt.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-q1JLKZ97.js";import"./immer-evaWtkoc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DcP5S-Eh.js";import"./index-DUOReC0q.js";import"./hooks-CcX3T7-M.js";import"./axisSelectors-6PiCImLD.js";import"./d3-scale-jq0pJJv9.js";import"./zIndexSlice-9UjK9UdZ.js";import"./renderedTicksSlice-BUt6rxsY.js";import"./CartesianChart-BMVLa6xS.js";import"./chartDataContext-DJdmDZoh.js";import"./CategoricalChart-C3QYPPHI.js";import"./Layer-Dc2WQE0F.js";import"./tooltipContext-ChfpWUaV.js";import"./ReactUtils-X5Zc33o_.js";import"./Label-Sf__cS6l.js";import"./Text-BDzyoHwy.js";import"./DOMUtils-CppXT_dB.js";import"./ZIndexLayer-D8Z-QIey.js";import"./types-DOzdXJDs.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BunL0KP8.js";import"./isPlainObject-Dg3LRGot.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-R6r6MP54.js";import"./useAnimationId-NZHn6B37.js";import"./Trapezoid-CwbraNO9.js";import"./Sector-CoxeQB-O.js";import"./Symbols-CYKSAWm0.js";import"./symbol-B-6h4y7x.js";import"./step-BpWwZl0O.js";import"./Curve-DEKI4hEN.js";import"./RegisterGraphicalItemId-wXMOnM03.js";import"./ErrorBarContext-CJSJ027V.js";import"./GraphicalItemClipPath-CFnrI3NK.js";import"./SetGraphicalItem-BWO2MSFy.js";import"./getZIndexFromUnknown-CJAZLNag.js";import"./graphicalItemSelectors-DiYrGPFG.js";import"./index-j_275XjD.js";import"./ChartSizeDimensions-C7fjLK0m.js";import"./OffsetShower-xAOZ3hBm.js";import"./PlotAreaShower-VWh9CzYD.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const lt=["Fill"];export{r as Fill,lt as __namedExportsOrder,mt as default};
