import{R as t}from"./iframe-D0WJBe8B.js";import{R as s}from"./zIndexSlice-BC6IeYNi.js";import{C as m}from"./ComposedChart-BlH1ARqS.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-B9eOoC47.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Ct4EK5_T.js";import"./throttle-TSOlYDju.js";import"./index-Dp8m-Do0.js";import"./index-BtpfRbVN.js";import"./RechartsWrapper-Y1sNfJdv.js";import"./axisSelectors-D5taf4lI.js";import"./polarAxisSelectors-2QOn0rl8.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-50ivSU0v.js";import"./index-DWGmacRx.js";import"./index-B5HS6UVy.js";import"./renderedTicksSlice-DMh9haUn.js";import"./index-CMOK-p3U.js";import"./CartesianChart-Be7keNxh.js";import"./ZIndexPortal-BSZE-89G.js";import"./CategoricalChart-HCg9oVJT.js";import"./Layer-aO3gvgqI.js";import"./LabelList-fY2HN2fJ.js";import"./Label-B4KodQcW.js";import"./Text-CgQ4MHqj.js";import"./pageBackground-Dio0HZ8z.js";import"./ZIndexLayer-DSGy4-C8.js";import"./types-CgDj6Pcv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-7LooK13L.js";import"./useAnimationId-C0s3vBtu.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bceipj14.js";import"./tooltipContext-B-_BmjfO.js";import"./dataEntryStyles-BPWJkcwq.js";import"./ErrorBarContext-CAdmSJ6x.js";import"./activeStyles-DLjK0T5T.js";import"./SetGraphicalItem-B8qCLUCf.js";import"./getZIndexFromUnknown-C9hLLlRx.js";import"./useEffectiveDataKey-D37O0kkX.js";import"./omit-DuIyEhDA.js";import"./isArguments-yB-y1yaH.js";import"./isBuffer-AZzsDYE7.js";const rt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},it=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
