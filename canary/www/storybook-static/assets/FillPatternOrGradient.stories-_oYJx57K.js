import{R as t}from"./iframe-CUlWXK_q.js";import{R as s}from"./zIndexSlice-DM6pr2-S.js";import{C as m}from"./ComposedChart-BTSMlYc4.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-CBMZttDC.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C_r5ITnz.js";import"./index-DeLCoNGq.js";import"./index-DkyNoZPG.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D0jJQ7td.js";import"./isWellBehavedNumber-dgjlUMt0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C5F4JVOA.js";import"./axisSelectors-BD41NxQw.js";import"./d3-scale-hq__MZkp.js";import"./index-B7A70wTi.js";import"./index-BLklzkKd.js";import"./renderedTicksSlice-BdBFpUvH.js";import"./index-BBeD-IIB.js";import"./CartesianChart-CRlJjBxC.js";import"./chartDataContext-NP5kWzmf.js";import"./CategoricalChart-BnjqCNZT.js";import"./Layer-DTo8-sn1.js";import"./AnimatedItems-DODKpEkU.js";import"./Label-CHddXrDn.js";import"./Text-Dwcbogye.js";import"./DOMUtils-C2wyshXr.js";import"./useId-xdSBMbRU.js";import"./useBackwardsCompatibleTheme-DPUtEB0l.js";import"./ZIndexLayer-CBqpLv67.js";import"./useAnimationId-JJOW80s5.js";import"./types-C9dSmSxn.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CCmoInZ0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BTWGbocf.js";import"./tooltipContext-Dv4BvnFb.js";import"./RegisterGraphicalItemId-CjUENZzL.js";import"./ErrorBarContext-Ff5dUprW.js";import"./GraphicalItemClipPath-gLO2Kyz_.js";import"./SetGraphicalItem-CLwyvQ_z.js";import"./getZIndexFromUnknown-t73Hq9dl.js";import"./useGraphicalItemIdentity-B9Lyw3Fg.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
