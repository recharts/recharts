import{c as t}from"./iframe-C5MHh42j.js";import{g as s}from"./zIndexSlice-BAxAD9Hd.js";import{C as l}from"./ComposedChart-WRhT-Z7E.js";import{p as m}from"./Page-DPte-9pC.js";import{B as r}from"./Bar-OdA0Uymu.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BEKu5nAB.js";import"./index-BtGgX82p.js";import"./index-CtWdDAnJ.js";import"./get-w_pNkTrF.js";import"./resolveDefaultProps-50eaHBP1.js";import"./isWellBehavedNumber-Fry2DCdR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BXiQbHg3.js";import"./index-DTHX5ifG.js";import"./index-Ddmpcm8d.js";import"./renderedTicksSlice-DJahilIk.js";import"./axisSelectors-l2EEhLAN.js";import"./d3-scale-DROX3YQd.js";import"./CartesianChart-DdDBbaWH.js";import"./chartDataContext-B3IBL15G.js";import"./CategoricalChart-iSFUJ3mM.js";import"./Layer-BTdnKXgq.js";import"./tooltipContext-CC-43_y7.js";import"./ReactUtils-BVj-7vfo.js";import"./Label-DPuGsfIc.js";import"./Text-Dd3m04ll.js";import"./DOMUtils-DPyYMl93.js";import"./ZIndexLayer-BqFMND8v.js";import"./types-DIsFNNUR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Hfg__8px.js";import"./useAnimationId-D3rbPHOS.js";import"./ActiveShapeUtils-B0TwIl-q.js";import"./RegisterGraphicalItemId-D7dR1c0l.js";import"./ErrorBarContext-BqD49I1j.js";import"./GraphicalItemClipPath-D6R49ofK.js";import"./SetGraphicalItem-3zA0iFCt.js";import"./getZIndexFromUnknown-BPhdYG3N.js";import"./graphicalItemSelectors-CXCIX9f6.js";const Y={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const Z=["Fill"];export{e as Fill,Z as __namedExportsOrder,Y as default};
