import{R as t}from"./iframe-BFM8x9PA.js";import{R as s}from"./zIndexSlice-Dx9mYmyj.js";import{C as m}from"./ComposedChart-kK9tUW2C.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-CwVYgJ1R.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DqtHcGYb.js";import"./index-BWGXcjC4.js";import"./index-DVzpkoDY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bd_5xcSs.js";import"./isWellBehavedNumber-D4sYzu_F.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DYXkzF69.js";import"./axisSelectors-DiNaBi7F.js";import"./d3-scale-BV6eo-EO.js";import"./index-CngxH_6L.js";import"./index-BWjxNJoO.js";import"./renderedTicksSlice-CjeZk4XK.js";import"./index-CMQv9dM_.js";import"./CartesianChart-CkSZZlig.js";import"./chartDataContext-BTZBL-Eg.js";import"./CategoricalChart-Bte4O3H1.js";import"./Layer-Be0Rd-Q7.js";import"./AnimatedItems-B1_R-VqI.js";import"./Label-Br3cCz6i.js";import"./Text-D2FZ9-P8.js";import"./DOMUtils-eLbycdkH.js";import"./useId-BKuqsutR.js";import"./useBackwardsCompatibleTheme-BTrqDtcc.js";import"./ZIndexLayer-DP5puj9b.js";import"./useAnimationId-B4FOQMwj.js";import"./types-CNyTn7M4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cn3rNWTe.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ct3yDoqv.js";import"./tooltipContext-DUWCCZNf.js";import"./RegisterGraphicalItemId-Cv5_OQqk.js";import"./ErrorBarContext-BazLNBpB.js";import"./GraphicalItemClipPath-jUcNwVzc.js";import"./SetGraphicalItem-CfBe4xfA.js";import"./getZIndexFromUnknown-CBMOvbuQ.js";import"./useGraphicalItemIdentity-CRa1F1Pi.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
