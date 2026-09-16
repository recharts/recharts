import{R as t}from"./iframe-GoDWXF60.js";import{R as s}from"./zIndexSlice-rcyByprz.js";import{C as m}from"./ComposedChart-BNv_QKcO.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-ciSgnWhy.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BC2iKf2c.js";import"./index-BMGI6I6X.js";import"./index-B1wbuLB1.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DtF3WVtu.js";import"./isWellBehavedNumber-DVk2TMuq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C5ODBaUh.js";import"./axisSelectors-BMoJ3285.js";import"./d3-scale-Dm23_hA9.js";import"./index-B5osc4Bz.js";import"./index-4L7QbpcF.js";import"./renderedTicksSlice-Cio8NKuI.js";import"./index-b9Wor0gC.js";import"./CartesianChart-Ev1lyziP.js";import"./chartDataContext-B5KQQNXg.js";import"./CategoricalChart-Cojbw-YR.js";import"./Layer-BmsCQfeY.js";import"./AnimatedItems-C_43VQlt.js";import"./Label-TKBbCyEO.js";import"./Text-DHajDoQn.js";import"./DOMUtils-BcP1iiu3.js";import"./useId-CHExwNNq.js";import"./useBackwardsCompatibleTheme-C39YasS8.js";import"./ZIndexLayer-B3yNW9nz.js";import"./useAnimationId-Bb0rmRoM.js";import"./types-y5j7YtAw.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CWLgxGci.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BMxJ69jq.js";import"./tooltipContext-dcjrap41.js";import"./RegisterGraphicalItemId-6e9wRMFk.js";import"./ErrorBarContext-RjE2YZS3.js";import"./GraphicalItemClipPath-pySZvy8y.js";import"./SetGraphicalItem-BKw5VKzR.js";import"./getZIndexFromUnknown-xuD5CItG.js";import"./useGraphicalItemIdentity-2iH_0CiR.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
