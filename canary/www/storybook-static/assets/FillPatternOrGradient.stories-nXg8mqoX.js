import{R as t}from"./iframe-BNzhvzzJ.js";import{R as s}from"./zIndexSlice-7B2pJ9R1.js";import{C as l}from"./ComposedChart-C_iTu113.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-DSQFKMBr.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-_Il6apPt.js";import"./index-D7steQeu.js";import"./index-B9gOfTvg.js";import"./get-Bo6NWZXP.js";import"./resolveDefaultProps-D9iASVgR.js";import"./isWellBehavedNumber-Bpef6lI6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DHcZLkJ-.js";import"./index-DJTE4prX.js";import"./index-7GSDLfD9.js";import"./renderedTicksSlice-EPo0eGyT.js";import"./axisSelectors-ceyKOVCq.js";import"./d3-scale-DfXMlVb2.js";import"./CartesianChart-CaZD9ouo.js";import"./chartDataContext-BcocN-0J.js";import"./CategoricalChart-C_ukC1b2.js";import"./Layer-xsjkSAFG.js";import"./tooltipContext-CyD7XMEk.js";import"./AnimatedItems-DiPaozpi.js";import"./Label-Cch4VET0.js";import"./Text-B7J48mXb.js";import"./DOMUtils-C0rqppVh.js";import"./ZIndexLayer-DKk9ZSzt.js";import"./useAnimationId-DMdK3Lv6.js";import"./types-DwFKy1TI.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DLdg-C7_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CfEExsMK.js";import"./RegisterGraphicalItemId-Xkz1LIrr.js";import"./ErrorBarContext-_lt3AQQA.js";import"./GraphicalItemClipPath-BB5MRsg5.js";import"./SetGraphicalItem-Di0ECEKf.js";import"./getZIndexFromUnknown-Cl0ZGAoN.js";import"./graphicalItemSelectors-BsfNmkQw.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
