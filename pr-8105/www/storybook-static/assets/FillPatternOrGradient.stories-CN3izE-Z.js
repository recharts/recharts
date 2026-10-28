import{R as t}from"./iframe-OqKJbU5N.js";import{R as s}from"./zIndexSlice-SR00o6sl.js";import{C as m}from"./ComposedChart-DbKCzyO4.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-Cy2MnLW-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CJu8DiNV.js";import"./throttle-Dd4NMqKN.js";import"./index-Dpjuq2Lp.js";import"./index-DZqDb_nm.js";import"./RechartsWrapper-DR91apNy.js";import"./axisSelectors-DgBSWf8B.js";import"./polarAxisSelectors-Ds9uThXq.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BY5IvaL3.js";import"./index-D0vXz4xA.js";import"./index-D-gzGN7z.js";import"./renderedTicksSlice-DNR3Nm-M.js";import"./index-DYD5HM8H.js";import"./CartesianChart-CtxmU-X6.js";import"./ZIndexPortal-SXFY_RF7.js";import"./CategoricalChart-CphpP2QN.js";import"./Layer-Cr-Iv08I.js";import"./LabelList-s2IEt-iE.js";import"./Label-Du8bKZih.js";import"./Text-BBVNpawX.js";import"./pageBackground-Cszwy4wg.js";import"./ZIndexLayer-UUbhXFJu.js";import"./types-9svgO-k7.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CMG9couI.js";import"./useAnimationId-DvBUlVSU.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DR5Jktsx.js";import"./tooltipContext-CN05kCq4.js";import"./dataEntryStyles-KId877_8.js";import"./ErrorBarContext-DPjF7BBQ.js";import"./activeStyles-DnmgD4rl.js";import"./SetGraphicalItem-CvB1j4dG.js";import"./getZIndexFromUnknown-BDhOMnFG.js";import"./useEffectiveDataKey-CV_AhX-p.js";import"./omit-B4Z2lN81.js";import"./isArguments-yB-y1yaH.js";import"./isBuffer-AZzsDYE7.js";const rt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},it=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{e as Fill,it as __namedExportsOrder,rt as default};
