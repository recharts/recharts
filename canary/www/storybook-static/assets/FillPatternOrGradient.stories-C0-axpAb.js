import{R as t}from"./iframe-DpDTD0JG.js";import{R as s}from"./zIndexSlice-DGwVx7BW.js";import{C as l}from"./ComposedChart-B51SS0m3.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-1SOvljcW.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DoBh-DCx.js";import"./index-DWuIzRsj.js";import"./index-Knde-ajF.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CxXNP2HM.js";import"./isWellBehavedNumber-DmMeAzDB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BCxYcmRP.js";import"./index-B2s4Biye.js";import"./index-Cd_oQMUU.js";import"./renderedTicksSlice-BRwKivWp.js";import"./axisSelectors-Ck_lqLE7.js";import"./d3-scale-BfEaqYEJ.js";import"./CartesianChart-BR7vTuCF.js";import"./chartDataContext-DFDKJiUi.js";import"./CategoricalChart-C6CLVh4_.js";import"./Layer-lPi_1jCz.js";import"./tooltipContext-CQ-6bB4h.js";import"./AnimatedItems-DlouAWba.js";import"./Label-BwbI5cJ6.js";import"./Text-Bc5Ou4J8.js";import"./DOMUtils-3wivgqkH.js";import"./ZIndexLayer-DqWsyuzf.js";import"./useAnimationId-NxcyCMrj.js";import"./types-C1vx5dmr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B6hULads.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DCmpyR0n.js";import"./RegisterGraphicalItemId-4knkFaEt.js";import"./ErrorBarContext-pGcuO8rw.js";import"./GraphicalItemClipPath-Bu8PaL2p.js";import"./SetGraphicalItem-BR_9ARmo.js";import"./getZIndexFromUnknown-D4PbTgLv.js";import"./graphicalItemSelectors-Dnug8eAK.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
