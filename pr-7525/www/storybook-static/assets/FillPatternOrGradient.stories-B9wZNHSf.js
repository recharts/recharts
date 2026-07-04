import{R as t}from"./iframe-Cdy9NYu9.js";import{R as s}from"./zIndexSlice-C2_e4Jbl.js";import{C as l}from"./ComposedChart-CGyVRna3.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-4sPaRaDT.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-t9dcJkBi.js";import"./index-BZ9Fe99a.js";import"./index-DsFTIXEw.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CG6sO-97.js";import"./isWellBehavedNumber-CJulqOvD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D4IxCG7a.js";import"./index-Bcb8rKnp.js";import"./index-CaPeX6FT.js";import"./renderedTicksSlice-DWXzhFAM.js";import"./axisSelectors-ByTu7Vcx.js";import"./d3-scale-DTNVMcZf.js";import"./CartesianChart-C4yHSY79.js";import"./chartDataContext-C2Y_0_Vz.js";import"./CategoricalChart-BucM35ky.js";import"./Layer-Hq_4dnpr.js";import"./tooltipContext-BhyLCXhZ.js";import"./AnimatedItems-BSQ2aAGr.js";import"./Label-BIfqnFjj.js";import"./Text-DMhYSqT7.js";import"./DOMUtils-DBN2rZ60.js";import"./ZIndexLayer-BxN8McgO.js";import"./useAnimationId-DO_gOZxo.js";import"./types-C9NSKw4l.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-zLcbgT_c.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CMZtEUn5.js";import"./RegisterGraphicalItemId-WMzFziJE.js";import"./ErrorBarContext-B4XuHyPg.js";import"./GraphicalItemClipPath-GIg3EkdR.js";import"./SetGraphicalItem-CgtgTGFl.js";import"./getZIndexFromUnknown-Lae48a4N.js";import"./graphicalItemSelectors-ClwBgY3L.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
