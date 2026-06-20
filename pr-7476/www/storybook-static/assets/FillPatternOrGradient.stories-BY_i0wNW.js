import{R as t}from"./iframe-DkQJn7oC.js";import{R as s}from"./zIndexSlice-CLvhVPNj.js";import{C as l}from"./ComposedChart-BSrSYERH.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-CWtEIi4L.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-ozzvrCwh.js";import"./index-DD1gmeQO.js";import"./index-DNtFXHJ-.js";import"./get-_o-XDxyc.js";import"./resolveDefaultProps-CtV3qxun.js";import"./isWellBehavedNumber-D3HHn2e5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D5ByFvr9.js";import"./index-CDE_9WY4.js";import"./index-BU3HhPoo.js";import"./renderedTicksSlice-DdtdEwsq.js";import"./axisSelectors-kKO86fyF.js";import"./d3-scale-B9HIJ_CW.js";import"./CartesianChart-BQyR2r2D.js";import"./chartDataContext-Ca9RDW-S.js";import"./CategoricalChart-Fc9nOzpN.js";import"./Layer-Br1RHuVf.js";import"./tooltipContext-DbJRjiak.js";import"./AnimatedItems-w7rZvjc1.js";import"./Label-ufurgCkW.js";import"./Text-Bdxz4_Jg.js";import"./DOMUtils-Dl1hyTMQ.js";import"./ZIndexLayer-BvwLITgH.js";import"./useAnimationId-CwryZT39.js";import"./types-BZmxyoje.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BEXU9a8A.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CNNYz_9g.js";import"./RegisterGraphicalItemId-BCNHxJaH.js";import"./ErrorBarContext-DzKhrRZV.js";import"./GraphicalItemClipPath-Dkvi73X5.js";import"./SetGraphicalItem-Cl7ozA9v.js";import"./getZIndexFromUnknown-Du9LPPe1.js";import"./graphicalItemSelectors-ayx_c6oa.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
