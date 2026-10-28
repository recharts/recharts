import{R as t}from"./iframe-CExY2eWA.js";import{R as s}from"./zIndexSlice-C37XV2sv.js";import{C as m}from"./ComposedChart-jeltTTaE.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-BIzrW_0f.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CjbXNHQ5.js";import"./throttle-BBNIp7bK.js";import"./index-8pYktU8Y.js";import"./index-FNceUiie.js";import"./RechartsWrapper-DLH4YKyL.js";import"./axisSelectors-DD16TRVI.js";import"./polarAxisSelectors-YwnVtORU.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-0yyW8T9p.js";import"./index-AsSutFXR.js";import"./index-CUE47Bel.js";import"./renderedTicksSlice-DrzyKYB4.js";import"./index-Da9Adtew.js";import"./CartesianChart-BC6n1rn7.js";import"./ZIndexPortal-noF9F7eD.js";import"./CategoricalChart-CTKTm7QW.js";import"./Layer-Bau4eIyO.js";import"./LabelList-jPGn2qdg.js";import"./Label-DKiyvKzI.js";import"./Text-B8G25q0u.js";import"./pageBackground-DZSWUMfw.js";import"./ZIndexLayer-DlXNWMXh.js";import"./types-Dc-N9olf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BbDfzF7k.js";import"./useAnimationId-DqJ2hXPF.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C53NOjZd.js";import"./tooltipContext--EjU2Cgd.js";import"./dataEntryStyles-iq_Y384c.js";import"./ErrorBarContext-CwvWWbXd.js";import"./activeStyles-DJMtR5DX.js";import"./SetGraphicalItem-BdGwDqMG.js";import"./getZIndexFromUnknown-C-aErwO8.js";import"./useEffectiveDataKey-CZSLIZ23.js";import"./omit-Ds15kvGd.js";import"./isArguments-yB-y1yaH.js";import"./isBuffer-AZzsDYE7.js";const rt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},it=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
