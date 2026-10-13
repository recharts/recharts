import{R as t}from"./iframe-DUnkgIOQ.js";import{R as s}from"./zIndexSlice-r-fMsMuk.js";import{C as m}from"./ComposedChart-DmUk4KiU.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-CG9kSf3Q.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BvBsSQNH.js";import"./index-Bi2SJwnS.js";import"./index-DrITryDs.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DLNxblaS.js";import"./isWellBehavedNumber-dou1peGm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cnrgjbh6.js";import"./axisSelectors-zqyiWpFa.js";import"./d3-scale-D5X6Q4ub.js";import"./index-BneZVI-r.js";import"./index-B4osSD3q.js";import"./renderedTicksSlice-B8EBEqyh.js";import"./index-CsDFOcOo.js";import"./CartesianChart-5Wn1_YAG.js";import"./chartDataContext-jAnWnb0r.js";import"./CategoricalChart-CgAmM9Jo.js";import"./Layer-B-Hy8zN7.js";import"./activeStyles-BaanO1pI.js";import"./Label-C4zX0cwX.js";import"./Text-2AgJvCRv.js";import"./pageBackground-DK5qsHYc.js";import"./useId-NTbtm6dC.js";import"./useBackwardsCompatibleTheme-BSnNSNn_.js";import"./ZIndexLayer-BhOOp4BW.js";import"./useAnimationId-Dm7GmgCn.js";import"./dataEntryStyles-YmAEtIi5.js";import"./types-BzNQj-ku.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DHAGZRq2.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-jD8IoLvy.js";import"./tooltipContext-DEVxnfsx.js";import"./ErrorBarContext-CpGIL_Og.js";import"./GraphicalItemClipPath-YZJU-iu_.js";import"./SetGraphicalItem-C8kjqmoZ.js";import"./getZIndexFromUnknown-noQiCkYq.js";import"./useEffectiveDataKey-BUAhKumu.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
