import{R as t}from"./iframe-CJ35PD5A.js";import{R as s}from"./zIndexSlice-CXvAqe1u.js";import{C as m}from"./ComposedChart-fAwm7BMd.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-kT5j6kre.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BvFenjAj.js";import"./index-DCTwsO2l.js";import"./index-BTcur_ii.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B4ysfGm0.js";import"./isWellBehavedNumber-DCFZS65F.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BxyVG0mr.js";import"./index-D5VY6D4m.js";import"./index-DuaQKKCa.js";import"./axisSelectors-BMiLu3pU.js";import"./d3-scale-BMNy9LMQ.js";import"./renderedTicksSlice-BOsENmMF.js";import"./CartesianChart-M-BqrDCQ.js";import"./chartDataContext-3LBg74Yj.js";import"./CategoricalChart-CE-ZSJzH.js";import"./Layer-DSIl_tFJ.js";import"./AnimatedItems-DkvJpJ1L.js";import"./Label-cSvk2bVk.js";import"./Text-C5ltUD8c.js";import"./DOMUtils-DuAj34SJ.js";import"./useId-BZocWyjW.js";import"./useBackwardsCompatibleTheme-BQ1enFxD.js";import"./ZIndexLayer-BbmNpztl.js";import"./useAnimationId-BrX_XnAR.js";import"./types-C2sHPoqW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CMWnDzZf.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B17w6t33.js";import"./tooltipContext-Cm0GuNxv.js";import"./RegisterGraphicalItemId-B595cwUV.js";import"./ErrorBarContext-BXwuVsqs.js";import"./GraphicalItemClipPath-DCmI04ho.js";import"./SetGraphicalItem-y646d7k1.js";import"./getZIndexFromUnknown-CsrL5HVW.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BlAHB7pR.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
