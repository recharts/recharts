import{R as t}from"./iframe-CB0-Apig.js";import{R as s}from"./zIndexSlice-MYAc-BZR.js";import{C as m}from"./ComposedChart-Dg8T55Bz.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-DQrss4Zm.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B_JaSpEU.js";import"./index-DsRbpnGV.js";import"./index-zuDkrAQT.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-zQutOK7U.js";import"./isWellBehavedNumber-CTvZevfR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DVGUOxKt.js";import"./axisSelectors-CXDnm6lL.js";import"./d3-scale-D9ownlTm.js";import"./index-C1lwWxUG.js";import"./index-DTSkq74U.js";import"./renderedTicksSlice-CvPVjrK_.js";import"./index-DyoNT_fx.js";import"./CartesianChart-BJI6UZNQ.js";import"./chartDataContext-BshA8PFe.js";import"./CategoricalChart-DMYjcOfv.js";import"./Layer-Dp8UDcUQ.js";import"./AnimatedItems-DE_zCwRM.js";import"./Label-EQpvr0td.js";import"./Text-B6lqzzDo.js";import"./DOMUtils-B6gqp-ty.js";import"./useId-CWVN7Jyj.js";import"./useBackwardsCompatibleTheme-Db0J--Ta.js";import"./ZIndexLayer-elhV8gwp.js";import"./useAnimationId-DZZDX8rQ.js";import"./types-DBJDNIT-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-I4VbBUFX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C6gEbnuv.js";import"./tooltipContext-Cru-qqfD.js";import"./RegisterGraphicalItemId-DP4ziMhF.js";import"./ErrorBarContext-B7WUKUL2.js";import"./GraphicalItemClipPath-BfYW0QzE.js";import"./SetGraphicalItem-D-uUzHqS.js";import"./getZIndexFromUnknown-C3jS8EI2.js";import"./useGraphicalItemIdentity-CxywVdEz.js";import"./dataEntryStyles--RLXloXa.js";const rt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},it=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
