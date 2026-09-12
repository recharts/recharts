import{R as t}from"./iframe-CbFuLFtu.js";import{R as s}from"./zIndexSlice-D_moIlDh.js";import{C as m}from"./ComposedChart-DrqR_TZs.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-B21LtgKk.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B61_h2S2.js";import"./index-KwOlWhXR.js";import"./index-BJNLJA8n.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CPfR2KLv.js";import"./isWellBehavedNumber-I93tJShS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-mkS7ocZy.js";import"./axisSelectors-rEOj_nFC.js";import"./d3-scale-Dx3NsH5I.js";import"./index-BqC7Dl52.js";import"./index-KFI10z6J.js";import"./renderedTicksSlice-DX_n3Vj3.js";import"./index-Cqx3EeHn.js";import"./CartesianChart-B3yIAK9J.js";import"./chartDataContext-D0ZC99YL.js";import"./CategoricalChart-Bc2ATxVj.js";import"./Layer-DrMT32rq.js";import"./AnimatedItems-pPCGFSQU.js";import"./Label-B0AIyR8e.js";import"./Text-Cl3vVdZy.js";import"./DOMUtils-ac9yPFyL.js";import"./useId-eR1BXb0O.js";import"./useBackwardsCompatibleTheme-CAlV4td3.js";import"./ZIndexLayer-DLo3iEV5.js";import"./useAnimationId-B7x_KCom.js";import"./types-CI87_xcK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DDNbo7Ju.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C1bQLB6k.js";import"./tooltipContext-ssaoi-NS.js";import"./RegisterGraphicalItemId-Bfab39Ve.js";import"./ErrorBarContext-u6MEnxN0.js";import"./GraphicalItemClipPath-Cc0KTnBN.js";import"./SetGraphicalItem-Ga4RFH-2.js";import"./getZIndexFromUnknown-BzNFvhEI.js";import"./useGraphicalItemIdentity-WLgpMifT.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
