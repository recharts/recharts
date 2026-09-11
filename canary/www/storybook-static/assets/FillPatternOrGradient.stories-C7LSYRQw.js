import{R as t}from"./iframe-CMVuz_WR.js";import{R as s}from"./zIndexSlice-Bu9BgD7f.js";import{C as m}from"./ComposedChart-BHXT81yI.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-DTzQ_dDy.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BD5EEuEt.js";import"./index-8182fU53.js";import"./index-bZstop0p.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DlgO1mgX.js";import"./isWellBehavedNumber-DZvjV6rT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-i8SteWdh.js";import"./axisSelectors-D6i4LlUB.js";import"./d3-scale-BJGJFwwk.js";import"./index-t37cwTj5.js";import"./index-BjTWdNOV.js";import"./renderedTicksSlice-CIeJUrxO.js";import"./index-CqRVWfEr.js";import"./CartesianChart-C05zOa_e.js";import"./chartDataContext-zZnvxmy2.js";import"./CategoricalChart-C-sUxYeh.js";import"./Layer-BNHnjhAQ.js";import"./AnimatedItems-BtNlpq_I.js";import"./Label-BusuXXbv.js";import"./Text-_Yf6eN5X.js";import"./DOMUtils-ClFVphvT.js";import"./useId-BNZP75Mi.js";import"./useBackwardsCompatibleTheme-YE2IG8yO.js";import"./ZIndexLayer-CC6O4jFa.js";import"./useAnimationId-DpagfNvu.js";import"./types-C-qBJNve.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BfCZIbio.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ce44UUga.js";import"./tooltipContext-_6LAkaCJ.js";import"./RegisterGraphicalItemId-CX_ikIzR.js";import"./ErrorBarContext-Bf0CG0PF.js";import"./GraphicalItemClipPath-Dm_wDd6O.js";import"./SetGraphicalItem-B2N4WPPi.js";import"./getZIndexFromUnknown-CT7SNiW0.js";import"./useGraphicalItemIdentity-Czg2hm9T.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
