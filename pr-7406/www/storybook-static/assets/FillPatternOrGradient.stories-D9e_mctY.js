import{R as t}from"./iframe-Bzk7zQca.js";import{R as s}from"./zIndexSlice-CmFEWq1r.js";import{C as l}from"./ComposedChart-BwJ5t2t4.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-D7T9SqkV.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CcXYFoUI.js";import"./index-CeYl3XRo.js";import"./index-D8DPmuyK.js";import"./get-CihDQax7.js";import"./resolveDefaultProps-CJmyog69.js";import"./isWellBehavedNumber-CzHA7xI4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DcMBMMpz.js";import"./index-CKgE1yXu.js";import"./index-OXAI-BjX.js";import"./renderedTicksSlice-CLAMxmGy.js";import"./axisSelectors-BZF8A_qV.js";import"./d3-scale-MuAf3A9e.js";import"./string-B6fdYHAA.js";import"./CartesianChart-C4aLau3c.js";import"./chartDataContext-CKqg-aWy.js";import"./CategoricalChart-BpAfwFxI.js";import"./Layer-C58in0aX.js";import"./tooltipContext-Ccz7S-_U.js";import"./AnimatedItems-Bm1dVVre.js";import"./Label-CTPsCXr1.js";import"./Text-D9hBaYLe.js";import"./DOMUtils-DFVOZKBs.js";import"./ZIndexLayer-DxzvrsVM.js";import"./useAnimationId-3u1Yr1gs.js";import"./types-BYFlfVWD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CDk6Iz6Z.js";import"./ActiveShapeUtils-Dm9siI7l.js";import"./RegisterGraphicalItemId-C-C-Ugyg.js";import"./ErrorBarContext-C883JGGF.js";import"./GraphicalItemClipPath-Bjzuz5Yo.js";import"./SetGraphicalItem-BZrvK3UD.js";import"./getZIndexFromUnknown-CpdBFIll.js";import"./graphicalItemSelectors-B0IMupcf.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
