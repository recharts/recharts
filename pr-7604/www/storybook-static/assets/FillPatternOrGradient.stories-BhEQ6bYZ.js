import{R as t}from"./iframe-Bcp8O5w9.js";import{R as s}from"./zIndexSlice-D89hrw0J.js";import{C as l}from"./ComposedChart-BTnoYdrr.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-Dll10prG.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DAyQB-br.js";import"./index-8PiiTqGz.js";import"./index-D5K7XRz9.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DZIqX7HS.js";import"./isWellBehavedNumber-Cv5vkYjV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B5FCNVgo.js";import"./index-BdFtKw5i.js";import"./index-CR585iKh.js";import"./renderedTicksSlice-DrTN80Ah.js";import"./axisSelectors-CoK9S3rY.js";import"./d3-scale-CsP8i0FA.js";import"./CartesianChart-CD4QeXTd.js";import"./chartDataContext-DNuqophf.js";import"./CategoricalChart-YaAk4iek.js";import"./Layer-be5X0p7R.js";import"./tooltipContext-Ds4RAbur.js";import"./AnimatedItems-Dei1yN9c.js";import"./Label-hDShUpMs.js";import"./Text-wdIqEHol.js";import"./DOMUtils-CK1FWe6a.js";import"./ZIndexLayer-DGoKIl_r.js";import"./useAnimationId-BscNfyQw.js";import"./types-BoqxM4LK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D0LEdSIL.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BmZAHZJ_.js";import"./RegisterGraphicalItemId-BpEAlExL.js";import"./ErrorBarContext-9-QyAyWc.js";import"./GraphicalItemClipPath-KqXDj0-X.js";import"./SetGraphicalItem-3vj6veQk.js";import"./getZIndexFromUnknown-DVbnyY4H.js";import"./graphicalItemSelectors-BL--sKd9.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
