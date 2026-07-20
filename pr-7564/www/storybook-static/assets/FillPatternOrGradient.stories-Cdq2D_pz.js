import{R as t}from"./iframe-MCQmK-TG.js";import{R as s}from"./zIndexSlice-BMHpWHLe.js";import{C as l}from"./ComposedChart-CupTaTlB.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-D1D6Sazc.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-exFJ19dN.js";import"./index-iUk-FcRS.js";import"./index-CGFRGdbT.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DF8ch7IU.js";import"./isWellBehavedNumber-DF6QZ0lN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CSMirUgA.js";import"./index-DCwDEUXM.js";import"./index-4hl_PvHL.js";import"./renderedTicksSlice-5teDD8C_.js";import"./axisSelectors-t6G1HMN1.js";import"./d3-scale-1trsZxCl.js";import"./CartesianChart-CbiEQRIX.js";import"./chartDataContext-oq73vT2r.js";import"./CategoricalChart-DG8zA7C6.js";import"./Layer-BUisE7Gh.js";import"./tooltipContext-DWjYKNyH.js";import"./AnimatedItems-Z_ZNAYUP.js";import"./Label-DaldQZFv.js";import"./Text-LGFyNulV.js";import"./DOMUtils-DeN2A_86.js";import"./ZIndexLayer-BnKxJfbB.js";import"./useAnimationId-Ptyt1Cmf.js";import"./types-Cz27ONEA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dp_gpqgG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BJxvN-bC.js";import"./RegisterGraphicalItemId-CwAmMMrt.js";import"./ErrorBarContext-7PhmiQse.js";import"./GraphicalItemClipPath-BDardp6y.js";import"./SetGraphicalItem-RVuvzcbz.js";import"./getZIndexFromUnknown-DuwgLHw0.js";import"./graphicalItemSelectors-DTYEBY2T.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
