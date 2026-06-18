import{R as t}from"./iframe-BBGBS6DV.js";import{R as s}from"./zIndexSlice-C7go6sDc.js";import{C as l}from"./ComposedChart-KBOCL7OW.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-B_2UvRNg.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-u2-xWsf6.js";import"./index-sfHPztcf.js";import"./index-BfdY1IDa.js";import"./get-BV7Nc0IZ.js";import"./resolveDefaultProps-CdaEo1sJ.js";import"./isWellBehavedNumber-DqttSiMx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CZVIAxqy.js";import"./index-CLfBpOwp.js";import"./index-Bl5evuWS.js";import"./renderedTicksSlice-DeFm9vmM.js";import"./axisSelectors-DUU6Ovr8.js";import"./d3-scale-Ceq_dgL5.js";import"./string-B6fdYHAA.js";import"./CartesianChart-8bJyHLLZ.js";import"./chartDataContext-6hP0GYiP.js";import"./CategoricalChart-BNe26d_a.js";import"./Layer-C7b9GhMV.js";import"./tooltipContext-DwcJ1qdw.js";import"./AnimatedItems-alz79Juh.js";import"./Label-Iqg4BS5e.js";import"./Text-CCZTp9OW.js";import"./DOMUtils-Da1klpxA.js";import"./ZIndexLayer-WmfwTIzB.js";import"./useAnimationId-CCG8jh7R.js";import"./types-Bj7fEVXg.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-EzzDeVF8.js";import"./ActiveShapeUtils-NLKbpFnA.js";import"./RegisterGraphicalItemId-B9dZ270Y.js";import"./ErrorBarContext-BeUQIIOs.js";import"./GraphicalItemClipPath-CkBiEPpf.js";import"./SetGraphicalItem-QS7NgdyV.js";import"./getZIndexFromUnknown-CFKBgZxf.js";import"./graphicalItemSelectors-7U3n1hMO.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
