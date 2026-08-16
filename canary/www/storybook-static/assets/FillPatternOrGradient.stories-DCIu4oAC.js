import{R as t}from"./iframe-Dc8RWhrw.js";import{R as s}from"./zIndexSlice-Cue9wPom.js";import{C as m}from"./ComposedChart-Da7iSmDy.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-DxpQnQwd.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cgdnnn4b.js";import"./index-BX7yfnHr.js";import"./index-DHKxMT0C.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CQDlpFo_.js";import"./isWellBehavedNumber-DkJxcyfZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ba4_XV41.js";import"./index-BjTDJtXe.js";import"./index-D_nZwztl.js";import"./axisSelectors-Bp8YmQgj.js";import"./d3-scale-DDaZL63N.js";import"./renderedTicksSlice-CNJBn7mW.js";import"./CartesianChart-B63GIjUf.js";import"./chartDataContext-DlTklTQC.js";import"./CategoricalChart-CI6oyNVX.js";import"./Layer-Cp8eUZax.js";import"./tooltipContext-ChMsabnz.js";import"./AnimatedItems-HOD2wt3W.js";import"./Label-DGIRTg37.js";import"./Text-rfXwlvlz.js";import"./DOMUtils-DSrFB3FI.js";import"./useBackwardsCompatibleTheme-CTZrd8Ez.js";import"./ZIndexLayer-BPoBYBwu.js";import"./useAnimationId-ljtrSyr1.js";import"./types-D48DJ4qI.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CIo59f_q.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CqRtCd2Y.js";import"./RegisterGraphicalItemId-DxgWNIY4.js";import"./ErrorBarContext-Bc_XovT5.js";import"./GraphicalItemClipPath-vsH9TZYh.js";import"./SetGraphicalItem-Bhl9AfEO.js";import"./getZIndexFromUnknown-CtYufKb_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DQMHtU-4.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
