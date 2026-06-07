import{R as t}from"./iframe-D2mK0_SY.js";import{R as s}from"./zIndexSlice-CurYRJ-V.js";import{C as l}from"./ComposedChart-FHYKcVPV.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-DvcXNhIG.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Cds45GwY.js";import"./index-EKI16Vl3.js";import"./index-c7pUvxdZ.js";import"./get-gd89bvM7.js";import"./resolveDefaultProps-BDJLCGQq.js";import"./isWellBehavedNumber-PwrDSI0r.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Da4b3ttl.js";import"./index-CTpZBZDJ.js";import"./index-DFlAh1f1.js";import"./renderedTicksSlice-Cv_tPpdR.js";import"./axisSelectors-BOYHxsHM.js";import"./d3-scale-D7S-A9mQ.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Dl9STlZO.js";import"./chartDataContext-DcfIEZUC.js";import"./CategoricalChart-DE8yrV95.js";import"./Layer-CVGFJ3pT.js";import"./tooltipContext-Cy6nUCQt.js";import"./AnimatedItems-9-Gv8yfc.js";import"./Label-BWAfqYWX.js";import"./Text-Bc_u3T2m.js";import"./DOMUtils-DX7CaFR_.js";import"./ZIndexLayer-Cbwietl0.js";import"./useAnimationId-Bv48rb4m.js";import"./types-CH3UhPbC.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CuIMbGOo.js";import"./ActiveShapeUtils-C7mnGY80.js";import"./RegisterGraphicalItemId-DKtf33UE.js";import"./ErrorBarContext-ClEcDtft.js";import"./GraphicalItemClipPath-C_n5kW10.js";import"./SetGraphicalItem-2IunVx_0.js";import"./getZIndexFromUnknown-FUmlMGEh.js";import"./graphicalItemSelectors-aGu2s7Mg.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
