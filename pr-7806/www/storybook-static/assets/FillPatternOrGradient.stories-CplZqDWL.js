import{R as t}from"./iframe-DMwBeJR9.js";import{R as s}from"./zIndexSlice-BP1SI4lk.js";import{C as m}from"./ComposedChart-C1dXdi20.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-DjMhhasp.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-JhdtWwel.js";import"./index-W8It9SHe.js";import"./index-CW9TVSnL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-FbHkIvMQ.js";import"./isWellBehavedNumber-BWBsnwkO.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DQf4ekbV.js";import"./axisSelectors-BzRm_10h.js";import"./d3-scale-CTZXeK9y.js";import"./index-C4TxoYVJ.js";import"./index-KvfSCZEN.js";import"./renderedTicksSlice-Dl_Tlvvx.js";import"./index-CR-86fOk.js";import"./CartesianChart-C4QG-pAm.js";import"./chartDataContext-ClQA_jr_.js";import"./CategoricalChart-BZsjmvUf.js";import"./Layer-DMhp_Srr.js";import"./AnimatedItems-H6knMzOg.js";import"./Label-B67df_fL.js";import"./Text-BAFoSTNm.js";import"./DOMUtils-DtiMQzYq.js";import"./useId-BlKh4dfu.js";import"./useBackwardsCompatibleTheme-ujSziCXW.js";import"./ZIndexLayer-CFNoJ68M.js";import"./useAnimationId-1Z-BMfjp.js";import"./types-CMazcurm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-eD4VGTbA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D9qWvVvy.js";import"./tooltipContext-BL0IMRcx.js";import"./RegisterGraphicalItemId-D2Rdl-pC.js";import"./ErrorBarContext-DyCS0eIu.js";import"./GraphicalItemClipPath-DH2vwsgS.js";import"./SetGraphicalItem-BmbkJBqp.js";import"./getZIndexFromUnknown-U3IR9nod.js";import"./useGraphicalItemIdentity-1ETpT5kl.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
