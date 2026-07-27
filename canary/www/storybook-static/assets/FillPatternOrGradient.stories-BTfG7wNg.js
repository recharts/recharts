import{R as t}from"./iframe-aNoK1EMe.js";import{R as s}from"./zIndexSlice-DOhDXvjb.js";import{C as l}from"./ComposedChart-ciK3m7lP.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-a0LmDLx9.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-dDtgRmGr.js";import"./index-DU0cxzai.js";import"./index-Bu0CjtZ3.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DbC1kYAP.js";import"./isWellBehavedNumber-DwwkvD-i.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-k_DNRHdW.js";import"./index-D5XON-Gh.js";import"./index-BdDC1fi3.js";import"./renderedTicksSlice-D-IRHrV3.js";import"./axisSelectors-Bs_-tFvB.js";import"./d3-scale-_Xy_yJsZ.js";import"./CartesianChart-9qcKzyck.js";import"./chartDataContext-DZNoVeTg.js";import"./CategoricalChart-xLJxNslX.js";import"./Layer-BCtIHmhS.js";import"./tooltipContext-BxLcGZlQ.js";import"./AnimatedItems-b0afIUOt.js";import"./Label-DiB3OAIB.js";import"./Text-Dek-bfvO.js";import"./DOMUtils-B40T5FB1.js";import"./ZIndexLayer-DGcx9JLL.js";import"./useAnimationId-B-ZOGiBc.js";import"./types-Be_2sCPa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DLQWIh8f.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CWDfkNMB.js";import"./RegisterGraphicalItemId-DSvg4gFN.js";import"./ErrorBarContext-Dauct7TC.js";import"./GraphicalItemClipPath-De0s7P9u.js";import"./SetGraphicalItem-CpE1XAUN.js";import"./getZIndexFromUnknown-CygBPzgc.js";import"./graphicalItemSelectors-DmUYu0MJ.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
