import{R as t}from"./iframe-R4QFQ0mF.js";import{R as s}from"./zIndexSlice-BTkVJube.js";import{C as l}from"./ComposedChart-CPp9Pcna.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-HlUZVBCp.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-C5zbr-FM.js";import"./index-BBlWDw9H.js";import"./index-DqGKL0Lc.js";import"./get-CX1Ejt3V.js";import"./resolveDefaultProps-UuXIKvS7.js";import"./isWellBehavedNumber-SGwhJUiP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D9XL2NUc.js";import"./index-C7Ze2qQC.js";import"./index-KYrClEjC.js";import"./renderedTicksSlice-C_2YTMnY.js";import"./axisSelectors-CP1mQpG7.js";import"./d3-scale-CmSi9of_.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BPaTY41c.js";import"./chartDataContext-rpS38Kv6.js";import"./CategoricalChart-19q5KTev.js";import"./Layer-C8zF3tZM.js";import"./tooltipContext-JmuPlMMI.js";import"./AnimatedItems-yF_BXiw0.js";import"./Label-gFQEPWtd.js";import"./Text-GL96gXYN.js";import"./DOMUtils-_wFbcz4z.js";import"./ZIndexLayer-D26CDD8U.js";import"./useAnimationId-QtK1xgnL.js";import"./types-CyqiaD7e.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bd4RpfP5.js";import"./ActiveShapeUtils-BkpD7S65.js";import"./RegisterGraphicalItemId-3Swfrcok.js";import"./ErrorBarContext-lGs_n3Xc.js";import"./GraphicalItemClipPath-DORaDiAV.js";import"./SetGraphicalItem-C97kVeur.js";import"./getZIndexFromUnknown-BV47QAln.js";import"./graphicalItemSelectors-CBUps-IM.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
