import{R as t}from"./iframe-C749ZEo3.js";import{R as s}from"./zIndexSlice-DkHm22lp.js";import{C as l}from"./ComposedChart-BDBDopuV.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-BrMNFoSQ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CELIeDih.js";import"./index-BvdVRi_-.js";import"./index-BBhpwV9s.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-6zK50N0i.js";import"./isWellBehavedNumber-tfpL7kaQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Mb5ys-Ox.js";import"./index-D27ZEbdc.js";import"./index-Cclh13Kt.js";import"./renderedTicksSlice-B967Fzve.js";import"./axisSelectors-DqDg1DKC.js";import"./d3-scale-DpaPidEg.js";import"./CartesianChart-B3fNYna3.js";import"./chartDataContext-D1rfIYla.js";import"./CategoricalChart-CQbOZOy_.js";import"./Layer-FHePmoXC.js";import"./tooltipContext-DPlYRDQn.js";import"./AnimatedItems-D44ZJFQN.js";import"./Label-SA_6xz2S.js";import"./Text-C7YPKDRG.js";import"./DOMUtils-D28hoCtk.js";import"./ZIndexLayer-BPz0-wLY.js";import"./useAnimationId-BXnZ6W5r.js";import"./types-CCzU3Dbp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-1n2gPHd-.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-6Wqxn4P9.js";import"./RegisterGraphicalItemId-HD16Gn5o.js";import"./ErrorBarContext-CXrvXgEG.js";import"./GraphicalItemClipPath-DnnLxorK.js";import"./SetGraphicalItem-JwiICpaG.js";import"./getZIndexFromUnknown-Cm9nyx4T.js";import"./graphicalItemSelectors-DA-YAlWN.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
