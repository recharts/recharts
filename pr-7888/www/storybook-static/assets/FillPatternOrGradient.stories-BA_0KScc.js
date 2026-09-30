import{R as t}from"./iframe-CQ0Lljz5.js";import{R as s}from"./zIndexSlice-DEHrA3Rr.js";import{C as m}from"./ComposedChart-CDVvV506.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-CFMKxxFj.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D0Qp2wbd.js";import"./index-CgKUH7Pt.js";import"./index-DJBjlh9k.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BJD_NHtt.js";import"./isWellBehavedNumber-B5oWMPg-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dx4TkxXI.js";import"./axisSelectors-CIePYxzF.js";import"./d3-scale-bZdbqgmB.js";import"./index--XZnrZ3Q.js";import"./index-_-Q-FGj6.js";import"./renderedTicksSlice-BkkJdu7D.js";import"./index-BGyIiFfh.js";import"./CartesianChart-MQW7TOME.js";import"./chartDataContext-DkzXheoo.js";import"./CategoricalChart-DFae7qCs.js";import"./Layer-DFHm6cg2.js";import"./AnimatedItems-Bf5nKgQj.js";import"./Label-D63u7ve3.js";import"./Text-CnTJRORA.js";import"./DOMUtils-DMu9BuDW.js";import"./useId-aq3DvHIK.js";import"./useBackwardsCompatibleTheme-CNmncO23.js";import"./ZIndexLayer-Bj3SLdvY.js";import"./useAnimationId-CcXfV18V.js";import"./types-BxcasGOq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-scsETNBO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C1gkAgLd.js";import"./tooltipContext-CUQkejC1.js";import"./RegisterGraphicalItemId-q_Z5CO-E.js";import"./ErrorBarContext-BLRPtsGK.js";import"./GraphicalItemClipPath-CgRak6Te.js";import"./SetGraphicalItem-u3emxpjK.js";import"./getZIndexFromUnknown-d-HcXGGT.js";import"./useGraphicalItemIdentity-DI-yqd9-.js";import"./dataEntryStyles-D4S7TvsQ.js";const rt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},it=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{e as Fill,it as __namedExportsOrder,rt as default};
