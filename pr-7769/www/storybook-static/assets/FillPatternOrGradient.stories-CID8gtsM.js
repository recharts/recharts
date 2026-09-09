import{R as t}from"./iframe-5Ln2iLqA.js";import{R as s}from"./zIndexSlice-DFex-upv.js";import{C as m}from"./ComposedChart-D13UaSHz.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-Ccw-DzNj.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BvN7rUxU.js";import"./index-CzncCR4k.js";import"./index-D7j-yBVr.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-IjnCGfXZ.js";import"./isWellBehavedNumber-CdZO7OXS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BHuvBmBF.js";import"./axisSelectors-BMU5_zje.js";import"./d3-scale-DUTFXTFy.js";import"./index-SDNpyV8r.js";import"./index-1g9ahHpc.js";import"./renderedTicksSlice-B6ULVZ0v.js";import"./index-LP2TzsJ5.js";import"./CartesianChart-1RwtF1h6.js";import"./chartDataContext-BWMyO-qW.js";import"./CategoricalChart-no-3Z0-_.js";import"./Layer-DAiXs0AA.js";import"./AnimatedItems-axJun3VY.js";import"./Label-9F2YL2wp.js";import"./Text-oIzTAhmK.js";import"./DOMUtils-Cf_dBvDb.js";import"./useId-DeG95-BA.js";import"./useBackwardsCompatibleTheme-C1dsWZXc.js";import"./ZIndexLayer-ZmLJud1E.js";import"./useAnimationId-CJTvG1Qi.js";import"./types-DPL8-78e.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BMEZChfE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DterXnUU.js";import"./tooltipContext-BGn83IkZ.js";import"./RegisterGraphicalItemId-08XYAnQ7.js";import"./ErrorBarContext-Mgqq5-U9.js";import"./GraphicalItemClipPath-CFv0pGXv.js";import"./SetGraphicalItem-woQRWKGe.js";import"./getZIndexFromUnknown-Bsj3cw8i.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CG8kUMtb.js";const rt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},it=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
