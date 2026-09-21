import{R as t}from"./iframe-BGOT0UMq.js";import{R as s}from"./zIndexSlice-BPU0EfFx.js";import{C as m}from"./ComposedChart-Cn5XstS9.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-BbETrKRf.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-gIJqAgIK.js";import"./index-hikMEuKp.js";import"./index-NAo39Q3o.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BSwwqvcB.js";import"./isWellBehavedNumber-BnpxWTLo.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CjrWTlpw.js";import"./axisSelectors-Wq_jv7lJ.js";import"./d3-scale-BPTXd-TV.js";import"./index-DfHr9lQU.js";import"./index-DlwvoXAU.js";import"./renderedTicksSlice-CgKWkcXA.js";import"./index-_Ok-JjZj.js";import"./CartesianChart-TgiGuVC0.js";import"./chartDataContext-Bp5THtgE.js";import"./CategoricalChart-CqDZ11FZ.js";import"./Layer-C_IgQKNN.js";import"./AnimatedItems-DLd27jVc.js";import"./Label-BU1lFQ2f.js";import"./Text-D50SBSje.js";import"./DOMUtils-DS3nE711.js";import"./useId-DPA6djN8.js";import"./useBackwardsCompatibleTheme-BNqsR3kp.js";import"./ZIndexLayer-Bo4GMA0B.js";import"./useAnimationId-B8wYOiNY.js";import"./types-B69giCR1.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BYLcafiV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DjoIgzDR.js";import"./tooltipContext-aXHRg65I.js";import"./RegisterGraphicalItemId-CDcrkiRG.js";import"./ErrorBarContext-C9R0WBsq.js";import"./GraphicalItemClipPath-CPiocMLU.js";import"./SetGraphicalItem-C3s6q2T3.js";import"./getZIndexFromUnknown-BGe9KuJ9.js";import"./useGraphicalItemIdentity-NEokAZII.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
