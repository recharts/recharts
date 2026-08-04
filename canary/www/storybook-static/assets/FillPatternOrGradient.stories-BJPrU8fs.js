import{R as t}from"./iframe-DwLZZwhK.js";import{R as s}from"./zIndexSlice-lVUWNgM0.js";import{C as l}from"./ComposedChart-p1KVu18j.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-DBq_vWy7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-m49sR4Np.js";import"./index-CyNYrL4w.js";import"./index-D2i4UmdT.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D_yJAfqa.js";import"./isWellBehavedNumber-DdXnDQ5z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B6xOBDhR.js";import"./index-BRPN53-o.js";import"./index-VnXRJ0a1.js";import"./renderedTicksSlice-BnOQ8D5D.js";import"./axisSelectors-Deou-VxK.js";import"./d3-scale-CjSqz0E9.js";import"./CartesianChart--QBa1qTn.js";import"./chartDataContext-BGrP4bw5.js";import"./CategoricalChart-Bx727tBC.js";import"./Layer-BVmot7FB.js";import"./tooltipContext-C3AtKIbJ.js";import"./AnimatedItems-DKnm6tp0.js";import"./Label-tECJL-37.js";import"./Text-Bh0YxhQF.js";import"./DOMUtils-BGpns11t.js";import"./ZIndexLayer-BAEsl3nH.js";import"./useAnimationId-C3Y_zOxU.js";import"./types-B7g8Th-s.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DhnvvCg-.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BFi0EA_4.js";import"./RegisterGraphicalItemId-CzEEk6Dd.js";import"./ErrorBarContext-wXozNj3Y.js";import"./GraphicalItemClipPath-C29F_2hP.js";import"./SetGraphicalItem-DX7YElzO.js";import"./getZIndexFromUnknown-BRCSk4uY.js";import"./graphicalItemSelectors-CsGPPAWZ.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
