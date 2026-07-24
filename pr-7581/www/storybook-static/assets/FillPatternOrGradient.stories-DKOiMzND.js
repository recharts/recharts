import{R as t}from"./iframe-Cug8bpW1.js";import{R as s}from"./zIndexSlice-9cZpiRga.js";import{C as l}from"./ComposedChart-Bv2dV5dB.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-BzFkog2f.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B6lLkzEm.js";import"./index-BU-oTyxR.js";import"./index-A9iLt5fb.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CWL5wq5C.js";import"./isWellBehavedNumber-1QeuJ8xh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DxwXXeuL.js";import"./index-GrHgVuHl.js";import"./index-C2En2hdi.js";import"./renderedTicksSlice-DuZDB9Ry.js";import"./axisSelectors-BKPMDK9R.js";import"./d3-scale-Dh_zFLyg.js";import"./CartesianChart-DEYZwCE3.js";import"./chartDataContext-BQl3S7aI.js";import"./CategoricalChart-1sHQms95.js";import"./Layer-DAaIMucZ.js";import"./tooltipContext-BM8CW2sL.js";import"./AnimatedItems-C6_8UlhB.js";import"./Label-C_AgOq8t.js";import"./Text-Y2ry5wK9.js";import"./DOMUtils-DIK0_8l8.js";import"./ZIndexLayer-B_am4wav.js";import"./useAnimationId-iyUsFQUM.js";import"./types-BJnTryYo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BkYWDjed.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CL8eHJZj.js";import"./RegisterGraphicalItemId-D2I1FNOP.js";import"./ErrorBarContext-DaF_EPCk.js";import"./GraphicalItemClipPath-48VFK23w.js";import"./SetGraphicalItem-CCK_hlSi.js";import"./getZIndexFromUnknown-nfq-3w0w.js";import"./graphicalItemSelectors-CIrMj4zc.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
