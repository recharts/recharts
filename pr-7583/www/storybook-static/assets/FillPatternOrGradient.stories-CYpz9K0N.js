import{R as t}from"./iframe-5yXyXnaZ.js";import{R as s}from"./zIndexSlice-BDAt33KO.js";import{C as l}from"./ComposedChart-Dwgw5DNZ.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-vfktTcFK.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cv9w3d5_.js";import"./index-Bglp-BB_.js";import"./index-B8ryNKY3.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DO3cHs1F.js";import"./isWellBehavedNumber-CjXf4Ny0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DA6sibZ3.js";import"./index-BHMzx10I.js";import"./index-sztAkQPC.js";import"./renderedTicksSlice-C1OGHM2B.js";import"./axisSelectors-BXq32W01.js";import"./d3-scale-qreNZqM_.js";import"./CartesianChart-9hlK9pZx.js";import"./chartDataContext-CuGicOh1.js";import"./CategoricalChart-DQJ8zgbM.js";import"./Layer-DvsJVPiG.js";import"./tooltipContext-CvAnpwYG.js";import"./AnimatedItems-B7Ugi4uF.js";import"./Label-BYYKCmSa.js";import"./Text-CgBcsLfs.js";import"./DOMUtils-BV08T-c-.js";import"./ZIndexLayer-DtzoUjMA.js";import"./useAnimationId-C0yd1tvr.js";import"./types-D9gPTTpR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D75afbJD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C8Wl3VBj.js";import"./RegisterGraphicalItemId-BWyrz_yh.js";import"./ErrorBarContext-3caAFu0Q.js";import"./GraphicalItemClipPath-C3T_bjgu.js";import"./SetGraphicalItem-ChFugbQc.js";import"./getZIndexFromUnknown-CWbr-zOK.js";import"./graphicalItemSelectors-BCn9O9wd.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
