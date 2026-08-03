import{R as t}from"./iframe-Dg9AlkU9.js";import{R as s}from"./zIndexSlice-BMqB4Gyy.js";import{C as l}from"./ComposedChart-DdKLVGqR.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-CV8PAvCg.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DhT8i8lB.js";import"./index-DkFl9iqn.js";import"./index-CroN4XyC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cbi8IAhV.js";import"./isWellBehavedNumber-Dlf7mknf.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-7nbSuF2A.js";import"./index-BE4Y3W85.js";import"./index-Bo0WYItg.js";import"./renderedTicksSlice-BJY2ZaZb.js";import"./axisSelectors-Bnxxm030.js";import"./d3-scale-BxAYr4dK.js";import"./CartesianChart-DsbYlNNZ.js";import"./chartDataContext-CTYD4WLT.js";import"./CategoricalChart-Cfe3Pj_n.js";import"./Layer-BfnZZDJ0.js";import"./tooltipContext-B3xwhiGR.js";import"./AnimatedItems-Bh9SS3B5.js";import"./Label-c2urfMyQ.js";import"./Text-B-psx-iS.js";import"./DOMUtils-Bk_tuO3J.js";import"./ZIndexLayer-A0r-fd7s.js";import"./useAnimationId-DpUIMGhl.js";import"./types-BOBXQHFv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D8eTHIfd.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-App4amhZ.js";import"./RegisterGraphicalItemId-D2VyX5Qp.js";import"./ErrorBarContext-U9oTNNG2.js";import"./GraphicalItemClipPath-DQk35kuh.js";import"./SetGraphicalItem-CLD5IGSv.js";import"./getZIndexFromUnknown-DhucRbWw.js";import"./graphicalItemSelectors-CkAB3ALJ.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
