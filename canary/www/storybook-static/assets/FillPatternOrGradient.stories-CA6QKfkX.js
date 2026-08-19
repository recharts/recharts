import{R as t}from"./iframe-Ce2LNmzq.js";import{R as s}from"./zIndexSlice-1iBSzntV.js";import{C as m}from"./ComposedChart-D8QzjQGV.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-DENSUiUI.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BPcDKDas.js";import"./index-CwWtniec.js";import"./index-A8_rJiXz.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bt6qRPyP.js";import"./isWellBehavedNumber-LiGS8Ktg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-NruqEuMP.js";import"./index-CWtZ9yph.js";import"./index-C0AYEPvF.js";import"./axisSelectors-nf5d_TCI.js";import"./d3-scale-uRAm4Q4g.js";import"./renderedTicksSlice-DRhSVK4R.js";import"./CartesianChart-C3QGU_Gm.js";import"./chartDataContext-mV7HyGJe.js";import"./CategoricalChart-CdBHij7l.js";import"./Layer-CmHiQhsD.js";import"./AnimatedItems-EYOrwSGz.js";import"./Label-E5RSdERr.js";import"./Text-1GNKdZPR.js";import"./DOMUtils-DXjDSVEa.js";import"./useBackwardsCompatibleTheme-C9k5uHL0.js";import"./ZIndexLayer-hciQBMwm.js";import"./useAnimationId-DJBKMCXo.js";import"./types-D9eaN5qP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CPJem9HH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DVN9EFMa.js";import"./tooltipContext-BREnZRk1.js";import"./RegisterGraphicalItemId-BhPsp4dD.js";import"./ErrorBarContext-z5kDqZ_L.js";import"./GraphicalItemClipPath-DPYSwVHo.js";import"./SetGraphicalItem-CX7uV2i5.js";import"./getZIndexFromUnknown--q-20xm9.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Dq6j4bYq.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
