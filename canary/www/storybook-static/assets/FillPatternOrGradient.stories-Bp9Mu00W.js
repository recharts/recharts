import{e as t}from"./iframe-BnXWjslm.js";import{R as s}from"./arrayEqualityCheck-DUiNH6C9.js";import{C as l}from"./ComposedChart-DYkYyYwm.js";import{B as r}from"./Bar-DiEVSXx_.js";import{R as m}from"./RechartsHookInspector-CJTq0Gdr.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-UG4fDJsJ.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-BfUKOtD7.js";import"./hooks-06paRXDN.js";import"./axisSelectors-R9DAlT6p.js";import"./zIndexSlice-p0C6ErDf.js";import"./CartesianChart-CyZ2OCbR.js";import"./chartDataContext-BqTaz2vx.js";import"./CategoricalChart-C3XXqFmy.js";import"./Layer-A6Fuc82i.js";import"./tooltipContext-ehiEzAat.js";import"./ReactUtils-R08Tgf5F.js";import"./Label-Znit4TkG.js";import"./Text-CJLcOIOl.js";import"./DOMUtils-DE1nvb87.js";import"./ZIndexLayer-BvBrZyR1.js";import"./types-TTX5RUO9.js";import"./ActiveShapeUtils-B_6IBG-m.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DiN3KyDm.js";import"./useAnimationId-cDAtDGt9.js";import"./Trapezoid-DoyDZqd_.js";import"./Sector-CE4yIiKS.js";import"./Symbols-yqo_ZORc.js";import"./Curve-Bkc50DRF.js";import"./RegisterGraphicalItemId-CW94G04M.js";import"./ErrorBarContext-CDqLcMo6.js";import"./GraphicalItemClipPath--41PL7k1.js";import"./SetGraphicalItem-jWEfPCy0.js";import"./getZIndexFromUnknown-CFzOkZR1.js";import"./graphicalItemSelectors-wK78NkM2.js";import"./index-BDMR2Hui.js";import"./ChartSizeDimensions-DTPwYyQJ.js";import"./OffsetShower-CSNclTFq.js";import"./PlotAreaShower-Conl4mfo.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(m,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
