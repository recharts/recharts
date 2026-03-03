import{e as t}from"./iframe-DT_QfCX6.js";import{R as s}from"./arrayEqualityCheck-DgclqCQe.js";import{C as m}from"./ComposedChart-Yu-wXtxo.js";import{B as e}from"./Bar-CxgD5Vgd.js";import{R as l}from"./RechartsHookInspector-BZlaUGyM.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CM621BjQ.js";import"./immer-Dm_eTc-x.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BjKAVIgx.js";import"./index-B5fX5g4a.js";import"./hooks-hb3YajwI.js";import"./axisSelectors-DEJjMxLA.js";import"./d3-scale-DdauB95s.js";import"./zIndexSlice-St67sYO3.js";import"./renderedTicksSlice-C-8YagrD.js";import"./CartesianChart-DSP5L81p.js";import"./chartDataContext-CtAEKjsT.js";import"./CategoricalChart-Dym2TIuH.js";import"./Layer-V2SZsz4R.js";import"./tooltipContext-BN5nQaTj.js";import"./ReactUtils-DiJ6wwjh.js";import"./Label-HvHa-kvb.js";import"./Text-Btk8OOuM.js";import"./DOMUtils-CXMayvsd.js";import"./ZIndexLayer-LaPkRlL4.js";import"./types-BFIPf9k1.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-5Z9knZsD.js";import"./isPlainObject-CkHzR63e.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BR7QntkE.js";import"./useAnimationId-Kk_Sm5qp.js";import"./Trapezoid-DBAlB0P9.js";import"./Sector-c2ULWy9q.js";import"./Symbols-LHeYuxni.js";import"./symbol-D2MJ3HO9.js";import"./step-BvjBdR90.js";import"./Curve-DVqXjtuH.js";import"./RegisterGraphicalItemId-C3WllrLT.js";import"./ErrorBarContext-DjRWnVpQ.js";import"./GraphicalItemClipPath-CjwarN2Z.js";import"./SetGraphicalItem-DaPsLcNS.js";import"./getZIndexFromUnknown-CDA1UKXp.js";import"./graphicalItemSelectors-YXDpMJDg.js";import"./index-Cn6U4qah.js";import"./ChartSizeDimensions-Dwz-fLgS.js";import"./OffsetShower-BpQcdb8I.js";import"./PlotAreaShower-Bt6tAbug.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const lt=["Fill"];export{r as Fill,lt as __namedExportsOrder,mt as default};
