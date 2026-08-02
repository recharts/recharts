import{R as t}from"./iframe-Da76_689.js";import{R as s}from"./zIndexSlice-a0xNinnk.js";import{C as l}from"./ComposedChart--w51xXk6.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-Cqez5vG3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-COYVVxZg.js";import"./index-C8Z1S5Pt.js";import"./index-DUt0bfqM.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BpFPYIFo.js";import"./isWellBehavedNumber-CH2-kpaa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BJISCefM.js";import"./index-DhFXp8vM.js";import"./index-JDhekbA3.js";import"./renderedTicksSlice-ObOqR6xe.js";import"./axisSelectors-Bw6517Pm.js";import"./d3-scale-DyCdYIOY.js";import"./CartesianChart-Cprw1vi1.js";import"./chartDataContext-BxrKQ5f-.js";import"./CategoricalChart-D82DfAs8.js";import"./Layer-BItCE877.js";import"./tooltipContext-eXD9bPdx.js";import"./AnimatedItems-TTrqb8VQ.js";import"./Label-BNqYKN1e.js";import"./Text-C0rNKqCf.js";import"./DOMUtils-B2_jGy5F.js";import"./ZIndexLayer-DP22msHm.js";import"./useAnimationId-hnsh8Uwf.js";import"./types-Dy7AAOTV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B4LUgefq.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Da9-43zR.js";import"./RegisterGraphicalItemId-DiJJvqsF.js";import"./ErrorBarContext-rSCCD8H3.js";import"./GraphicalItemClipPath-BO9b33Ly.js";import"./SetGraphicalItem-Bzc-F73M.js";import"./getZIndexFromUnknown-DaFLHOmZ.js";import"./graphicalItemSelectors-bVhLjSEG.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
