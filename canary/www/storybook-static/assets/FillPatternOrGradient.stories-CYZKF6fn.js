import{R as t}from"./iframe-CEaKFLOD.js";import{R as s}from"./zIndexSlice-BW_-kNl2.js";import{C as m}from"./ComposedChart-BWdu-w5M.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-BhzblDJe.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BTwCYOHA.js";import"./index-BP77GY6y.js";import"./index-Pesxz8sF.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-y1moel4K.js";import"./isWellBehavedNumber-DMSwtAM2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CWplp24t.js";import"./axisSelectors-CCBeMCMj.js";import"./d3-scale-xgyjEPPy.js";import"./index-_btimE9G.js";import"./index-CqNUlXBo.js";import"./renderedTicksSlice-pAYw7YNa.js";import"./index-CA_j_GK2.js";import"./CartesianChart-BqEoKcYr.js";import"./chartDataContext-ehQpVm1w.js";import"./CategoricalChart-BHppyMGY.js";import"./Layer-CAr7LORZ.js";import"./AnimatedItems-BousSNqt.js";import"./Label-BzoSUysL.js";import"./Text-Bjai807M.js";import"./DOMUtils-DMHzK5Q0.js";import"./useId-DBCCsHcD.js";import"./useBackwardsCompatibleTheme-VjyVXj2U.js";import"./ZIndexLayer--MuvhbKE.js";import"./useAnimationId-D_rlhFDI.js";import"./types-Da2TODPT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BqqSxccJ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-5t5AMzdk.js";import"./tooltipContext-DdgASxLO.js";import"./RegisterGraphicalItemId-BZrlXr-M.js";import"./ErrorBarContext-CtrcR3pN.js";import"./GraphicalItemClipPath-CA8fPvSm.js";import"./SetGraphicalItem-BktkMU9R.js";import"./getZIndexFromUnknown-v-QUgELF.js";import"./useGraphicalItemIdentity-BnhZXg65.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
