import{R as t}from"./iframe-DHvlXZZp.js";import{R as s}from"./zIndexSlice-D7_5YQCx.js";import{C as l}from"./ComposedChart-C7ZUQvNE.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-Bp-uNdjR.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bg-VcpoN.js";import"./index-rrh18h4R.js";import"./index-DGFoeBTW.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DAXfWdSl.js";import"./isWellBehavedNumber-D3uQHhq6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CaVHAbWI.js";import"./index-CDvSCu-7.js";import"./index-B_pekVWz.js";import"./renderedTicksSlice-C2TzwS0g.js";import"./axisSelectors-lbKqd9aP.js";import"./d3-scale-Cey7ctPf.js";import"./CartesianChart-DFvBiy9D.js";import"./chartDataContext-kJZSLmpd.js";import"./CategoricalChart-sk98qpS9.js";import"./Layer-BW5xomOj.js";import"./tooltipContext-DuieK5f0.js";import"./AnimatedItems-BVZCnb1h.js";import"./Label-TKCFRexK.js";import"./Text-D-2er-qS.js";import"./DOMUtils-CXaSfF0Q.js";import"./ZIndexLayer-D7_As1-8.js";import"./useAnimationId-uiW7aOrL.js";import"./types-CRJA0nge.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DPmaYH73.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CUQXZ3i4.js";import"./RegisterGraphicalItemId-DWC6_slS.js";import"./ErrorBarContext-BK2fwAvo.js";import"./GraphicalItemClipPath-b_iqRJZZ.js";import"./SetGraphicalItem-D2M9GsyT.js";import"./getZIndexFromUnknown-DWWc97aG.js";import"./graphicalItemSelectors-DXwSa3U9.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
