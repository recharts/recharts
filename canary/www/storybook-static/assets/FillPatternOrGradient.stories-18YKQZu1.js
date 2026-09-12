import{R as t}from"./iframe-a8fM-7Cj.js";import{R as s}from"./zIndexSlice-B7KswQd6.js";import{C as m}from"./ComposedChart-BjiltZm-.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-o_Py0yUF.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CaMuYXI0.js";import"./index-BUD2jY61.js";import"./index-PFQMrolk.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DlXKv9jT.js";import"./isWellBehavedNumber-B_g3PQrc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DeMmS_JM.js";import"./axisSelectors-DVs_A9Pl.js";import"./d3-scale-wNdoB6Dl.js";import"./index-Ke9S5-gf.js";import"./index-DRs5RvY7.js";import"./renderedTicksSlice-cjaWCzPx.js";import"./index-ZucSeVLn.js";import"./CartesianChart-DyOnhzMI.js";import"./chartDataContext-CMDG0z7K.js";import"./CategoricalChart-DQpuQH-u.js";import"./Layer-XxWBFlRD.js";import"./AnimatedItems-CVA7Axrg.js";import"./Label-KdQX6hx3.js";import"./Text-Bo9ttyFU.js";import"./DOMUtils-BvC4n3H8.js";import"./useId-B5k2uM1L.js";import"./useBackwardsCompatibleTheme-CU11_u_K.js";import"./ZIndexLayer-CUUoNHQJ.js";import"./useAnimationId-DPUxtvyW.js";import"./types-DyUzdvoN.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C2srlOyO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-0G9qNMVr.js";import"./tooltipContext-Cd6HUqrT.js";import"./RegisterGraphicalItemId-DUAbfK1e.js";import"./ErrorBarContext-DMuZxb5G.js";import"./GraphicalItemClipPath-D12XFDsM.js";import"./SetGraphicalItem-DMaklldD.js";import"./getZIndexFromUnknown-DrGPmpT6.js";import"./useGraphicalItemIdentity-BpSFuYBx.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{e as Fill,rt as __namedExportsOrder,et as default};
