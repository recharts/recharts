import{R as t}from"./iframe-bh8Hdh0s.js";import{R as s}from"./zIndexSlice-D-BYbnQO.js";import{C as l}from"./ComposedChart-D0rCA8sN.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-BLHn28PB.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Di2Y-BX2.js";import"./index-BvOZTDpw.js";import"./index-BKp5y7FT.js";import"./get-D3Bb09EQ.js";import"./resolveDefaultProps-DrqDcb4q.js";import"./isWellBehavedNumber-BEwe5En6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-bPWrhjV6.js";import"./index-yP_7__bV.js";import"./index-DMGyx--D.js";import"./renderedTicksSlice-CAguNiQd.js";import"./axisSelectors-CJnElyGk.js";import"./d3-scale-nMJeyC7B.js";import"./string-B6fdYHAA.js";import"./CartesianChart-EUP1j0p6.js";import"./chartDataContext-nAZQwMJZ.js";import"./CategoricalChart-D4vACcZf.js";import"./Layer-CFpuUaFs.js";import"./tooltipContext-DwGfEh7N.js";import"./AnimatedItems-2yvO_B45.js";import"./Label-4dzVOcp4.js";import"./Text-DNFdD7FY.js";import"./DOMUtils-CqbIbq5Q.js";import"./ZIndexLayer-DkZ-MLZl.js";import"./useAnimationId-CfFImJZH.js";import"./types-CGzL9fNM.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BSJj6R6N.js";import"./ActiveShapeUtils-BdiO1tHu.js";import"./RegisterGraphicalItemId-D7G5Ydkp.js";import"./ErrorBarContext-Co10Kn-s.js";import"./GraphicalItemClipPath-JLz8ewYQ.js";import"./SetGraphicalItem-Dnctc4Vz.js";import"./getZIndexFromUnknown-f_4lOsrp.js";import"./graphicalItemSelectors-DZZZgMPF.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
