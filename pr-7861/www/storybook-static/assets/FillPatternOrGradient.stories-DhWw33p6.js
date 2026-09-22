import{R as t}from"./iframe-Bnv6kU7L.js";import{R as s}from"./zIndexSlice-DX-eN-rE.js";import{C as m}from"./ComposedChart-B1DqhSVN.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-B-lf7quv.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C8n004OX.js";import"./index-6B8fwti2.js";import"./index-B1qZkGH5.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C4JEpLWp.js";import"./isWellBehavedNumber-p1Jk9e7e.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BdebKPLC.js";import"./axisSelectors-W-alhPkw.js";import"./d3-scale-BHEdKRtF.js";import"./index-DLmKm2EF.js";import"./index-C7lLa1F-.js";import"./renderedTicksSlice-B5DhdENT.js";import"./index-DoLpWonQ.js";import"./CartesianChart-4rkSr6qB.js";import"./chartDataContext-DQDeMryS.js";import"./CategoricalChart-a21GUZij.js";import"./Layer-LCeVZLuX.js";import"./AnimatedItems-BMX-ziY5.js";import"./Label-IhJ6Pxyk.js";import"./Text--hmlT8ZH.js";import"./DOMUtils-CsnJkvN_.js";import"./useId-6CZAolK0.js";import"./useBackwardsCompatibleTheme-C_K8id13.js";import"./ZIndexLayer-BRXf-lni.js";import"./useAnimationId-DYSRVMST.js";import"./types-CI78TRyx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CCZI10F2.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BfWUUsmh.js";import"./tooltipContext-B7nrHgqe.js";import"./RegisterGraphicalItemId-DzNK_j43.js";import"./ErrorBarContext-B1AHLu2R.js";import"./GraphicalItemClipPath-H0CINiNQ.js";import"./SetGraphicalItem-Gy1IhQNd.js";import"./getZIndexFromUnknown-BMbNjIod.js";import"./useGraphicalItemIdentity-CQh8XILo.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
