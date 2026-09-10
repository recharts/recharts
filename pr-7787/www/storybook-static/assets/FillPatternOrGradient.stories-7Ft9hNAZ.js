import{R as t}from"./iframe-BkEvAth1.js";import{R as s}from"./zIndexSlice-nf1W2Gc-.js";import{C as m}from"./ComposedChart-DoYpCRnR.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-DWRK7KGu.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D101QSOu.js";import"./index-WgwKlZAp.js";import"./index-DEguUzrn.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-0lxOPE_6.js";import"./isWellBehavedNumber-CFPi8ujN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BQMoxy31.js";import"./axisSelectors-Tv8O7Qi2.js";import"./d3-scale-CLBHc1rG.js";import"./index-B8WpKNcF.js";import"./index-BRKc8NTQ.js";import"./renderedTicksSlice-DA-CVNBV.js";import"./index-BKOJ-Qmj.js";import"./CartesianChart-ByLTz-Wk.js";import"./chartDataContext-DQU-1klM.js";import"./CategoricalChart-CFWcsDQS.js";import"./Layer-B86MwzYN.js";import"./AnimatedItems-DAE7yXHk.js";import"./Label-C6aq5sgc.js";import"./Text-BZ3mS1RC.js";import"./DOMUtils-BcdnRDzA.js";import"./useId-C4p8DCEP.js";import"./useBackwardsCompatibleTheme-C9UXAGCH.js";import"./ZIndexLayer-CV-ewbAJ.js";import"./useAnimationId-BXkgTCLA.js";import"./types-CCpLRaHh.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CPSx8OX_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-l5lysgay.js";import"./tooltipContext-DSWceIOC.js";import"./RegisterGraphicalItemId-7FSphn26.js";import"./ErrorBarContext-TeZDWbxG.js";import"./GraphicalItemClipPath-B-LRUwBU.js";import"./SetGraphicalItem-CKJc8ABb.js";import"./getZIndexFromUnknown-vhCcbLMS.js";import"./useGraphicalItemIdentity-C648VAOs.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
