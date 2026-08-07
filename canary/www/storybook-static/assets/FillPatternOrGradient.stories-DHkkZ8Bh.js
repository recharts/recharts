import{R as t}from"./iframe-CWxtgXuN.js";import{R as s}from"./zIndexSlice-DuNjPOIA.js";import{C as m}from"./ComposedChart-CHLSjXfe.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-Bx-OnJSc.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DySWaKHI.js";import"./index-D3Okail2.js";import"./index-Co2hlbGQ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DB57oDCz.js";import"./isWellBehavedNumber-RhnC_be2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-cC4MiwtJ.js";import"./index-ClfrRk61.js";import"./index-Cgh7W-Sw.js";import"./axisSelectors-D3U5jtqo.js";import"./d3-scale-PJ0eA6WB.js";import"./renderedTicksSlice-DdR3Yk66.js";import"./CartesianChart-VS3m0tpN.js";import"./chartDataContext-BzVtDYqK.js";import"./CategoricalChart-CDL51AOI.js";import"./Layer-DvshJojd.js";import"./tooltipContext-AzgxhFkw.js";import"./AnimatedItems-xrLxeBUX.js";import"./Label-B4Vj6wwG.js";import"./Text-Bzp-NWLm.js";import"./DOMUtils-B_ZEHGfF.js";import"./ZIndexLayer-BlQF_3Y8.js";import"./useAnimationId-N7_T0mrz.js";import"./types-CUZin1-8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BaSYnlz4.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CHtnvTAF.js";import"./RegisterGraphicalItemId-DrgIbtZo.js";import"./ErrorBarContext-CAu46fWB.js";import"./GraphicalItemClipPath-C5JLsR_L.js";import"./SetGraphicalItem-DN47EjfQ.js";import"./getZIndexFromUnknown-ji4hQVSt.js";import"./RechartsThemeContext-DQSpDGj3.js";import"./graphicalItemSelectors-CE4_kVFF.js";const $={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const tt=["Fill"];export{e as Fill,tt as __namedExportsOrder,$ as default};
