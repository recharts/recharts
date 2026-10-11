import{R as t}from"./iframe-Bsj5zL9n.js";import{R as s}from"./zIndexSlice-Cq8HAqW-.js";import{C as m}from"./ComposedChart-CUT9nv0s.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-BWOGza3d.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CrEblMxD.js";import"./index-BnI-_qMA.js";import"./index-DrTVWANE.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Uluvm9qq.js";import"./isWellBehavedNumber-DfaPS7hR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CfIRZAky.js";import"./axisSelectors-mMRcbn7f.js";import"./d3-scale-CbB2Llqp.js";import"./index-DOYtr8yv.js";import"./index-g6-HhHC-.js";import"./renderedTicksSlice-BMu61fLT.js";import"./index-Kh3nyu4O.js";import"./CartesianChart-CeBBXviU.js";import"./chartDataContext-TTvcivZZ.js";import"./CategoricalChart-CEEokRev.js";import"./Layer-yetTMzBX.js";import"./activeStyles-C6E3VGh0.js";import"./Label-Dh346ivy.js";import"./Text-EdZq5d5T.js";import"./pageBackground-B9aaE2P3.js";import"./useId-oX3CQwQj.js";import"./useBackwardsCompatibleTheme-CCerMO7Q.js";import"./ZIndexLayer-BdEpN6P8.js";import"./useAnimationId-HXoQj9d3.js";import"./dataEntryStyles-5zRGCxG2.js";import"./types-Bb-qVITL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DCJ2slUs.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ca0VK3Nb.js";import"./tooltipContext-Bu8eY-DR.js";import"./ErrorBarContext-HZLs1nsG.js";import"./GraphicalItemClipPath-BHCzBPU9.js";import"./SetGraphicalItem-CgedTelm.js";import"./getZIndexFromUnknown-7dfsvPS3.js";import"./useGraphicalItemIdentity-BJYihGV1.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
