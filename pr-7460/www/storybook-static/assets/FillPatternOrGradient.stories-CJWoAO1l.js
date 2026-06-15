import{R as t}from"./iframe-BaPbaLaJ.js";import{R as s}from"./zIndexSlice-Ct9oD4yM.js";import{C as l}from"./ComposedChart-Cue8tnaZ.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-BX6LyV64.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DiDZ85-K.js";import"./index-8NR0Yac6.js";import"./index-uHodW5ti.js";import"./get-D2ZTbC0U.js";import"./resolveDefaultProps-B9a4hmwF.js";import"./isWellBehavedNumber-Cw93K2XK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-j68O-sFh.js";import"./index-DbNPAuc7.js";import"./index-C-SXM_61.js";import"./renderedTicksSlice-C6EU1Gxc.js";import"./axisSelectors-Csn4G978.js";import"./d3-scale-njnUDxXP.js";import"./string-B6fdYHAA.js";import"./CartesianChart-FGH_s-P1.js";import"./chartDataContext-BKJVmU0E.js";import"./CategoricalChart-D9BrBGmX.js";import"./Layer-DnTHWC2s.js";import"./tooltipContext-Dxao8-sY.js";import"./AnimatedItems-BRL6-mrZ.js";import"./Label-nvXx3zPl.js";import"./Text-gi3hDHLU.js";import"./DOMUtils-N0jxLcJa.js";import"./ZIndexLayer-Cmf1UnqU.js";import"./useAnimationId-BlKkbeMI.js";import"./types-Bxe0zMe1.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ClzNIlMR.js";import"./ActiveShapeUtils-BKxrj1Kx.js";import"./RegisterGraphicalItemId-C1UHdJ8R.js";import"./ErrorBarContext-D5Gab5oy.js";import"./GraphicalItemClipPath-DrUrL8JH.js";import"./SetGraphicalItem-D7ChpxF2.js";import"./getZIndexFromUnknown-DjS664wq.js";import"./graphicalItemSelectors-CIniFY1e.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
