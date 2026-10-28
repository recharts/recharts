import{R as t}from"./iframe-PkW0ejx3.js";import{R as s}from"./zIndexSlice-CtEWDdkW.js";import{C as m}from"./ComposedChart-coptphr3.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-gCXSeosi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CnX9VcG6.js";import"./throttle-DhIpRp7y.js";import"./index-2kQDiEg9.js";import"./index-CthbcSOz.js";import"./RechartsWrapper-DJcwwy7_.js";import"./axisSelectors-CBaUhvBl.js";import"./polarAxisSelectors-DErot-vK.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C_GfRdoG.js";import"./index-bhfK5Tel.js";import"./index-DCKddudy.js";import"./renderedTicksSlice-BiYv8y7m.js";import"./index-DIk-TLTX.js";import"./CartesianChart-CtUUiyil.js";import"./ZIndexPortal-DB_x6J9o.js";import"./CategoricalChart-CFsdFZkP.js";import"./Layer-D2wEMTDW.js";import"./LabelList-BcjFKpxG.js";import"./Label-V19_IbKL.js";import"./Text-DQ7hgPmk.js";import"./pageBackground-BxU5BZDR.js";import"./ZIndexLayer-wqGg5hkh.js";import"./types-iBZQammS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DF26d-VT.js";import"./useAnimationId-JttpOibe.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-hU5Uvesj.js";import"./tooltipContext-Do4-zYB2.js";import"./dataEntryStyles-BkC7RZGO.js";import"./ErrorBarContext-RvIB7RYt.js";import"./activeStyles-RIXOH0Ky.js";import"./SetGraphicalItem-rvzc4GbA.js";import"./getZIndexFromUnknown-CRFh8gux.js";import"./useEffectiveDataKey-UMh99VlP.js";import"./omit-BIyCmy59.js";import"./isArguments-yB-y1yaH.js";import"./isBuffer-AZzsDYE7.js";const rt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},it=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
