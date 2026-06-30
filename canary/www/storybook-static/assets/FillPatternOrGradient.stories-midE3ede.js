import{R as t}from"./iframe-BAw0s5ot.js";import{R as s}from"./zIndexSlice-BeH27P2U.js";import{C as l}from"./ComposedChart-DteFOQlI.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-BlCgf9gI.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CMKSqw9i.js";import"./index-CjVdCyN5.js";import"./index-BK18-1Z2.js";import"./get-CSAr6kNF.js";import"./resolveDefaultProps-BuFdbqch.js";import"./isWellBehavedNumber-9WEl6uBx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bttwz4rr.js";import"./index-B1DwQ2Om.js";import"./index-46sIyfq_.js";import"./renderedTicksSlice-lnlzRSDk.js";import"./axisSelectors-CrQ5YVkn.js";import"./d3-scale-8J52VcxR.js";import"./CartesianChart-qH9nTYaZ.js";import"./chartDataContext-Bg-IfXwk.js";import"./CategoricalChart-BcYU7xxq.js";import"./Layer-CnD0sOVo.js";import"./tooltipContext-BRlTPB2G.js";import"./AnimatedItems-DKynRxAN.js";import"./Label-RqhE4qn6.js";import"./Text-CHY17Wwg.js";import"./DOMUtils-DRw43MBp.js";import"./ZIndexLayer-B6NdRg2s.js";import"./useAnimationId-D83gTctj.js";import"./types-3486df9G.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BKTeT_Dl.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DPtxPHYL.js";import"./RegisterGraphicalItemId-BYWDLggr.js";import"./ErrorBarContext-B9tnwNW4.js";import"./GraphicalItemClipPath-CFCGDJ4D.js";import"./SetGraphicalItem-BtUL3que.js";import"./getZIndexFromUnknown-DutFrb7v.js";import"./graphicalItemSelectors-jSDhtP4D.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
