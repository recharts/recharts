import{R as t}from"./iframe-D-sDuIqM.js";import{R as s}from"./zIndexSlice-DkRDAG1K.js";import{C as m}from"./ComposedChart-BqFvX779.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-B4l2brso.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BwwGSoU-.js";import"./index-DOwSNtIW.js";import"./index-D-ZcLjnp.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DRUr7G4m.js";import"./isWellBehavedNumber-n1fKw3Ik.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BR0dPwJa.js";import"./axisSelectors-CcFzWzBk.js";import"./d3-scale-D2yJqL8j.js";import"./index-sXSxEpdM.js";import"./index-DlgBIkPT.js";import"./renderedTicksSlice-DoL3t7Bc.js";import"./index-Dfhf8xit.js";import"./CartesianChart-ZdAO4m3f.js";import"./chartDataContext-DR95QKXv.js";import"./CategoricalChart-Bvu_kn7d.js";import"./Layer-C3zxw81n.js";import"./AnimatedItems-CAyQvTlC.js";import"./Label-mzqnfF5y.js";import"./Text-cGP75sAD.js";import"./DOMUtils-BlK1UfYz.js";import"./useId-DJy_IGRL.js";import"./useBackwardsCompatibleTheme-Bt2NRZPB.js";import"./ZIndexLayer-Dl5V_Hf6.js";import"./useAnimationId-BdWTgj5e.js";import"./types-D7y8jC37.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-cVKynJUN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B7KMSlGv.js";import"./tooltipContext-FI4aLtaR.js";import"./RegisterGraphicalItemId-BpgvVZBx.js";import"./ErrorBarContext-COUU5Hme.js";import"./GraphicalItemClipPath-BqyJWtfu.js";import"./SetGraphicalItem-CoBxoWuP.js";import"./getZIndexFromUnknown-BRHZLqbc.js";import"./useGraphicalItemIdentity-CglCalgl.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{e as Fill,rt as __namedExportsOrder,et as default};
