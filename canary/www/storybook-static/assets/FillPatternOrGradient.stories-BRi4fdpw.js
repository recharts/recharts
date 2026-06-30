import{R as t}from"./iframe-DNYOsiJO.js";import{R as s}from"./zIndexSlice-BYsyPOtl.js";import{C as l}from"./ComposedChart-DhpLFFry.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-CnUx9NGb.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DhLz3mrQ.js";import"./index-CpvOcg5A.js";import"./index-B-scg1za.js";import"./get-DvCBXc2H.js";import"./resolveDefaultProps-BPA_kNXr.js";import"./isWellBehavedNumber-BdiH4iwW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D4XAWs0V.js";import"./index-BghJ0rJu.js";import"./index-DN5tCymc.js";import"./renderedTicksSlice-B3G44Ect.js";import"./axisSelectors-BU0FKw5j.js";import"./d3-scale-Cm3hMOK_.js";import"./CartesianChart-CJ0aqbjB.js";import"./chartDataContext-ALZLxkDM.js";import"./CategoricalChart-Dgn8q3Cx.js";import"./Layer-BZEyjxjb.js";import"./tooltipContext-86Ce_pFB.js";import"./AnimatedItems-CfNYG8xc.js";import"./Label-DBVLreiQ.js";import"./Text-COQ57Hvt.js";import"./DOMUtils-DMxex0QR.js";import"./ZIndexLayer-B6YZY0_d.js";import"./useAnimationId-DniHu15m.js";import"./types-CfyGDdUv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D0fmCEGG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dv5sca8G.js";import"./RegisterGraphicalItemId-PRQMqBjc.js";import"./ErrorBarContext-8ntzOtYf.js";import"./GraphicalItemClipPath-C8T0qCgO.js";import"./SetGraphicalItem-DQ-8Rtbz.js";import"./getZIndexFromUnknown-CRsb39eG.js";import"./graphicalItemSelectors-BWLE6_sA.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const $=["Fill"];export{e as Fill,$ as __namedExportsOrder,Z as default};
