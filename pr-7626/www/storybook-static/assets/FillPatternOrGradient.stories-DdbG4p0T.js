import{R as t}from"./iframe-Bh1U-oMl.js";import{R as s}from"./zIndexSlice-CbwDGfhV.js";import{C as m}from"./ComposedChart-_0dXWU4B.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-CImJU4XG.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DMII0ZAy.js";import"./index-CIfG7xc6.js";import"./index-B7DuV58o.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cs5bXre5.js";import"./isWellBehavedNumber-Dyeu8bHm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BJiANDik.js";import"./index-BJEvKA6W.js";import"./index-Pl0BuMhm.js";import"./axisSelectors-KgYrPzsA.js";import"./d3-scale-DvNPjBaU.js";import"./renderedTicksSlice-6pXaWoy-.js";import"./CartesianChart-YxKbksJG.js";import"./chartDataContext-B8xHbf95.js";import"./CategoricalChart-DcSXPqkv.js";import"./Layer-C3H-dOT5.js";import"./tooltipContext-B5aE_LSZ.js";import"./AnimatedItems-BvF3WRYv.js";import"./Label-CoZlS51A.js";import"./Text-bdpnJJaC.js";import"./DOMUtils-TtYkNMfa.js";import"./ZIndexLayer-C51_GrjW.js";import"./useAnimationId-0BmLZ6mF.js";import"./types-w_TylJof.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B31sdsfS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-0P_4fb1E.js";import"./RegisterGraphicalItemId-UrCBGtwU.js";import"./ErrorBarContext-CYylskZD.js";import"./GraphicalItemClipPath-CR-53Dh0.js";import"./SetGraphicalItem-oPzo6Gr-.js";import"./getZIndexFromUnknown-CPcuAC_m.js";import"./RechartsThemeContext-Bbvr3NVw.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CC_S-o56.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const et=["Fill"];export{e as Fill,et as __namedExportsOrder,tt as default};
