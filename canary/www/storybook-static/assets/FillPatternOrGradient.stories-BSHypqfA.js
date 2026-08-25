import{R as t}from"./iframe-C8vQGZXk.js";import{R as s}from"./zIndexSlice-ByprO6Sm.js";import{C as m}from"./ComposedChart-CHNyRbuw.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-BYRNeN-L.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-h__ZU4m4.js";import"./index-CPGq0YmD.js";import"./index-DcRT1P9Q.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-V67edAdk.js";import"./isWellBehavedNumber-C0Xo9Op-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-8pTUTugH.js";import"./index-DGglMQ8l.js";import"./index-C62uqfyt.js";import"./axisSelectors-QRAfsrXG.js";import"./d3-scale-CtBXoG-U.js";import"./renderedTicksSlice-DsrGsPip.js";import"./CartesianChart-Tp1RpXRt.js";import"./chartDataContext-DHzBZ8lS.js";import"./CategoricalChart-3d5zHnsL.js";import"./Layer-sgegzG2x.js";import"./AnimatedItems-v0KEsWrQ.js";import"./Label-CYWEtH1_.js";import"./Text-4tQX4Uia.js";import"./DOMUtils-CYXp4dKG.js";import"./useId-BhWWyhoE.js";import"./useBackwardsCompatibleTheme-WNjwGM1x.js";import"./ZIndexLayer-DTaI93aT.js";import"./useAnimationId-CCh5p5CL.js";import"./types-Cx0FcaGa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-De7ejmNi.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B1Mwe2wI.js";import"./tooltipContext-9X0XSZOh.js";import"./RegisterGraphicalItemId-Cui1oLRd.js";import"./ErrorBarContext-BpNPFGVG.js";import"./GraphicalItemClipPath-BrujiRiU.js";import"./SetGraphicalItem-CLgoHfzk.js";import"./getZIndexFromUnknown-3C3-Yx_o.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BIKowErt.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const rt=["Fill"];export{e as Fill,rt as __namedExportsOrder,et as default};
