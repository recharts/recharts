import{R as t}from"./iframe-CCc4Ig9t.js";import{R as s}from"./zIndexSlice-1P0wH6mw.js";import{C as m}from"./ComposedChart-Dz5UNdl9.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-CACZTHLl.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BYOhzTjU.js";import"./index-D-887qgc.js";import"./index-CZthC9SS.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-VNAAgVLt.js";import"./isWellBehavedNumber-BwK7Fikb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cz1O2LQ_.js";import"./axisSelectors-DPq5qkhW.js";import"./d3-scale-DD504LTb.js";import"./index-DP3dQjsk.js";import"./index-BMcDiNhW.js";import"./renderedTicksSlice-DEDWHMPA.js";import"./index-G3ylxvqW.js";import"./CartesianChart-LpLVhPdZ.js";import"./chartDataContext-q63OH3iY.js";import"./CategoricalChart-Bf4qEJ6P.js";import"./Layer-CI2wc1Xr.js";import"./AnimatedItems-Ca5Obh5D.js";import"./Label-DTpe6J5w.js";import"./Text-Cj4kK8yu.js";import"./DOMUtils-Df_Ucl3X.js";import"./useId-CLSpndMM.js";import"./useBackwardsCompatibleTheme-BVGIiR_X.js";import"./ZIndexLayer-BPtrp-aJ.js";import"./useAnimationId-ClzD5z7x.js";import"./types-DJtqKg77.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-sHtjAWaW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BtdS6G9Z.js";import"./tooltipContext-D4sXt8Fb.js";import"./RegisterGraphicalItemId-BnnRsli9.js";import"./ErrorBarContext-Buf_Z21J.js";import"./GraphicalItemClipPath-BbHKpjF5.js";import"./SetGraphicalItem-Bpek28vv.js";import"./getZIndexFromUnknown-BZOZZ5oW.js";import"./useGraphicalItemIdentity-Ckfzcm_J.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
