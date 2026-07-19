import{R as t}from"./iframe-B-yW787s.js";import{R as s}from"./zIndexSlice-CKRpx7FD.js";import{C as l}from"./ComposedChart-D5w8STA3.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-BDdLYF6G.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B8_9WF3N.js";import"./index-B8s4lwM0.js";import"./index-BLtMs8ww.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-D6vuKH4c.js";import"./isWellBehavedNumber-C_1nd4jU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DSpl9lP_.js";import"./index-TzX_ldyC.js";import"./index-Dh8eUehn.js";import"./renderedTicksSlice-EV44ZZNX.js";import"./axisSelectors-d9CW9W7w.js";import"./d3-scale-8a4kRHFN.js";import"./CartesianChart-B08PHStc.js";import"./chartDataContext-DOok0Cd4.js";import"./CategoricalChart-XTSjkgZQ.js";import"./Layer-DVSBdCcq.js";import"./tooltipContext-CumBelWf.js";import"./AnimatedItems-CYFqV_Nm.js";import"./Label-BkxmYsWW.js";import"./Text-DK2M6QxL.js";import"./DOMUtils-B0UrcgO-.js";import"./ZIndexLayer-CdG-cca2.js";import"./useAnimationId-o-X37ase.js";import"./types-DcTCoXGC.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DKB06qOF.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dzsbq5DH.js";import"./RegisterGraphicalItemId-DeFh6f0i.js";import"./ErrorBarContext-D17CdNj4.js";import"./GraphicalItemClipPath-_Ex-IG4N.js";import"./SetGraphicalItem-NvPtwEe2.js";import"./getZIndexFromUnknown-jJhefbAF.js";import"./graphicalItemSelectors-D2riitBr.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
