import{R as t}from"./iframe-JTvlYrAE.js";import{R as s}from"./zIndexSlice-D7ZMgfig.js";import{C as m}from"./ComposedChart-dEDwCA-a.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-DeLKz9gc.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CXxUHuO5.js";import"./index-oSnD0z-O.js";import"./index-DIk0NYXt.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BQ8E1HnC.js";import"./isWellBehavedNumber-DZJ-wKuN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DxDGjzAu.js";import"./axisSelectors-5nOHG62L.js";import"./d3-scale-CyiZcwJt.js";import"./index-6AYKMmGX.js";import"./index-C7e_DiH0.js";import"./renderedTicksSlice-DqB8pESJ.js";import"./index-C2cjqz89.js";import"./CartesianChart-Car3Atj3.js";import"./chartDataContext-r6ewa5Wc.js";import"./CategoricalChart-Dv8UcXMC.js";import"./Layer-OemeYySJ.js";import"./AnimatedItems-CtaNoYLp.js";import"./Label-DVdjMuKO.js";import"./Text-Dg334Fxc.js";import"./DOMUtils-9u-qTQJC.js";import"./useId-Ddv-MCTo.js";import"./useBackwardsCompatibleTheme-DrI3o7cI.js";import"./ZIndexLayer-DRiAaxZ2.js";import"./useAnimationId-B-nvf5O7.js";import"./types-BAT4N-Js.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C-NwM-8_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BXOO9Xzj.js";import"./tooltipContext-B3YdOV5b.js";import"./RegisterGraphicalItemId-5DR47K5z.js";import"./ErrorBarContext-C1DfV54u.js";import"./GraphicalItemClipPath-BqO5vOXC.js";import"./SetGraphicalItem-3AS-SEti.js";import"./getZIndexFromUnknown-DeP3-gvQ.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BaBnkWw8.js";const rt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const it=["Fill"];export{e as Fill,it as __namedExportsOrder,rt as default};
