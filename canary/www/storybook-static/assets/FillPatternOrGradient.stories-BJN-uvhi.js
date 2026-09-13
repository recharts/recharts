import{R as t}from"./iframe-jjE6mnhE.js";import{R as s}from"./zIndexSlice-BF8b2iUS.js";import{C as m}from"./ComposedChart-CT0KVNUw.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-CEhwSuW_.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DkPV1tJ5.js";import"./index-4Q1Js_Gc.js";import"./index-CHxyqgyq.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DrW6c44U.js";import"./isWellBehavedNumber-D962mg0S.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-G0-O6wcd.js";import"./axisSelectors-Da2-5Qyb.js";import"./d3-scale-BsTwUgiH.js";import"./index-wKhQr2dB.js";import"./index-CQ_ODmEo.js";import"./renderedTicksSlice-B5bTJB_6.js";import"./index-SutJufb7.js";import"./CartesianChart-Bv2YRKvd.js";import"./chartDataContext-BtBmRnZH.js";import"./CategoricalChart-CHDbAtKm.js";import"./Layer-DvjfGsuf.js";import"./AnimatedItems-CKtAdJL6.js";import"./Label-CLl4R84L.js";import"./Text-yk6NtqvR.js";import"./DOMUtils-ClCL_aT_.js";import"./useId-qpgQMwe5.js";import"./useBackwardsCompatibleTheme-UPDRFRx4.js";import"./ZIndexLayer-OM7L_4ys.js";import"./useAnimationId-B8D6e613.js";import"./types-D-bzS3aM.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BtzXAEUx.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bi6thO6h.js";import"./tooltipContext-Bk4sh4kD.js";import"./RegisterGraphicalItemId-DLqbcJJV.js";import"./ErrorBarContext-CT6ZQdcj.js";import"./GraphicalItemClipPath-Cb68eAOX.js";import"./SetGraphicalItem-BUG0SFHa.js";import"./getZIndexFromUnknown-B1lKYXZR.js";import"./useGraphicalItemIdentity-D5HmZ81h.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
