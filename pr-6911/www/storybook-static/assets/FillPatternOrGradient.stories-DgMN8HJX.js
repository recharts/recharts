import{e as t}from"./iframe-Bp7wnAMR.js";import{R as s}from"./arrayEqualityCheck-DxE10Oy_.js";import{C as l}from"./ComposedChart-DcPTD6P5.js";import{B as r}from"./Bar-DOKL-_EU.js";import{R as m}from"./RechartsHookInspector-DHfob8nJ.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-73ODOPj1.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-C4djzgpQ.js";import"./hooks-CNofKjzo.js";import"./axisSelectors-hHhjBbva.js";import"./zIndexSlice-CRBGxDjV.js";import"./CartesianChart-Dno3SfYe.js";import"./chartDataContext-nk0Pjs0Z.js";import"./CategoricalChart-CZ-Ak8iT.js";import"./Layer-7joqFoN-.js";import"./tooltipContext-Cksie6Kp.js";import"./ReactUtils-DrfTY3Od.js";import"./Label-Tu9yek-h.js";import"./Text-DwUQNXUe.js";import"./DOMUtils-dKVtaV9j.js";import"./ZIndexLayer-CSCYRG22.js";import"./types-7BwnP8OD.js";import"./ActiveShapeUtils-B5LL2uEb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ck3EAtYG.js";import"./useAnimationId-goMb22IV.js";import"./Trapezoid-eO_srE68.js";import"./Sector-BGL47Yd8.js";import"./Symbols-B3gxOXiD.js";import"./Curve-C9HH72jI.js";import"./RegisterGraphicalItemId-DL9uxaj9.js";import"./ErrorBarContext-D_srHYiC.js";import"./GraphicalItemClipPath-8AiwXJLZ.js";import"./SetGraphicalItem-Bo7sM5w_.js";import"./getZIndexFromUnknown-CwQGWVHF.js";import"./graphicalItemSelectors-y2G6qR0K.js";import"./index-D6AxLi4e.js";import"./ChartSizeDimensions-DwflQZom.js";import"./OffsetShower-B6O-ZqIp.js";import"./PlotAreaShower-B0Yqyt4M.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(m,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
