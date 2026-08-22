import{R as t}from"./iframe-C20wDroG.js";import{R as s}from"./zIndexSlice-Dn977bIM.js";import{C as m}from"./ComposedChart-fc9zkA9M.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-ngNcXczu.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D_pKwmSO.js";import"./index-Drz6B1BJ.js";import"./index-D0HNPWdm.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DUXs9b9S.js";import"./isWellBehavedNumber-CiTmvWUm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ajeFxaVY.js";import"./index-B_Gj3SOI.js";import"./index-CwuSxHdI.js";import"./axisSelectors-D2d7y5tB.js";import"./d3-scale-CMJeOIiZ.js";import"./renderedTicksSlice-CDLV8c3e.js";import"./CartesianChart-D0DqF69B.js";import"./chartDataContext-BN_dA9lB.js";import"./CategoricalChart-BPRT5cE8.js";import"./Layer-DDCJtugd.js";import"./AnimatedItems-BeGp4Wik.js";import"./Label-DkS9BWG5.js";import"./Text-DGWMJ0hU.js";import"./DOMUtils-CaGG5Hmm.js";import"./useId-HPBRJy0D.js";import"./useBackwardsCompatibleTheme-CdR6FU4E.js";import"./ZIndexLayer-DPgbR3ka.js";import"./useAnimationId-Bc7mxzMe.js";import"./types-BDuMvVkF.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bmy5AWRQ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BjalrG5Q.js";import"./tooltipContext-D3UKijeT.js";import"./RegisterGraphicalItemId-CBXEWS4T.js";import"./ErrorBarContext-B7iknVLS.js";import"./GraphicalItemClipPath-DnJzFjkV.js";import"./SetGraphicalItem-DfmFtgCH.js";import"./getZIndexFromUnknown-CYF1mEPC.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BiO_JgRr.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
