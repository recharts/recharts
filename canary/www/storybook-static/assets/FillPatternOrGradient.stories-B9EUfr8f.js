import{R as t}from"./iframe-kr7fVjhm.js";import{R as s}from"./zIndexSlice-BZPaZoVE.js";import{C as l}from"./ComposedChart-C2Jq_jCe.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-CC7FIpFT.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D_awpPCx.js";import"./index-D2MHq5Hk.js";import"./index-B4gF14t1.js";import"./get-Clowvj21.js";import"./resolveDefaultProps-B2SvaHgo.js";import"./isWellBehavedNumber-Dgwr4Y0K.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BXLkHwYV.js";import"./index-Bi4GHbSg.js";import"./index-C_7j0jGJ.js";import"./renderedTicksSlice-DSu7HAeh.js";import"./axisSelectors-C6aKDGBg.js";import"./d3-scale-D8KPLyuv.js";import"./CartesianChart-xwjZDYjt.js";import"./chartDataContext-CX_0Naaw.js";import"./CategoricalChart-Bef2xtAx.js";import"./Layer-BpeNKyUn.js";import"./tooltipContext-Q_MtGo3C.js";import"./AnimatedItems-DqhNqm_F.js";import"./Label-BzX4e21C.js";import"./Text-DjM5ugTe.js";import"./DOMUtils-C68MxIVY.js";import"./ZIndexLayer-DgDl0x_M.js";import"./useAnimationId-D5l55oDh.js";import"./types-BF09pdOO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DH_b4CsR.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DcRBgo4o.js";import"./RegisterGraphicalItemId-fKNs0JEp.js";import"./ErrorBarContext-CdB9Q1sE.js";import"./GraphicalItemClipPath-BFOwa2gv.js";import"./SetGraphicalItem-CV-IUFmw.js";import"./getZIndexFromUnknown-owanYJoE.js";import"./graphicalItemSelectors-Dqj-Zp-w.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
