import{c as t}from"./iframe-CR5xUcH4.js";import{g as s}from"./zIndexSlice-Coakq-0y.js";import{C as l}from"./ComposedChart-DbazSM9x.js";import{p as m}from"./Page-DPte-9pC.js";import{B as r}from"./Bar-B2iZFUKD.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-MiNeKFai.js";import"./index-vQTj3wjJ.js";import"./index-BwAW1XSH.js";import"./get-CdpBIjqV.js";import"./resolveDefaultProps-Ceeul6CI.js";import"./isWellBehavedNumber-VNzXGTrj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DqbEnq-O.js";import"./index-BL2MNBFa.js";import"./index-C1C-S7u7.js";import"./renderedTicksSlice-BX_9N5fQ.js";import"./axisSelectors-GqEe5nOB.js";import"./d3-scale-Cr_JmSke.js";import"./CartesianChart-C1PsmK-N.js";import"./chartDataContext-YedE8BO5.js";import"./CategoricalChart-DNMItnv2.js";import"./Layer-DDAYqTxx.js";import"./tooltipContext-CI8X2x7c.js";import"./ReactUtils-D5HGwZm0.js";import"./Label-gV3sJO-c.js";import"./Text-Diq_68Pn.js";import"./DOMUtils-HE2atAIH.js";import"./ZIndexLayer-Br2sJvd3.js";import"./types-vWyLmemb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-IJojDNZ6.js";import"./useAnimationId-qfC-4EnL.js";import"./ActiveShapeUtils-G1Nz0YGi.js";import"./RegisterGraphicalItemId-BwAGbVF8.js";import"./ErrorBarContext-C7CGAddG.js";import"./GraphicalItemClipPath-BXgSat3L.js";import"./SetGraphicalItem-Duk0nTzk.js";import"./getZIndexFromUnknown-CpM14gun.js";import"./graphicalItemSelectors-BfOvLmPr.js";const Y={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const Z=["Fill"];export{e as Fill,Z as __namedExportsOrder,Y as default};
