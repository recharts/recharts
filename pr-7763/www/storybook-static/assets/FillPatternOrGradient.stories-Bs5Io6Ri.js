import{R as t}from"./iframe-CDv_hnlf.js";import{R as s}from"./zIndexSlice-8EbRQ5DZ.js";import{C as m}from"./ComposedChart-I6fWeSu7.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-2R_U4VKS.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-RrwSa6SL.js";import"./index-ymtmGnRC.js";import"./index-Qa9FghTo.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CImqyn8n.js";import"./isWellBehavedNumber-ipIh2BqD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-lM1IufFg.js";import"./axisSelectors-FUoH9jZO.js";import"./d3-scale-8ktJJOVD.js";import"./index-EK-QJAGk.js";import"./index-7-TwA9Wc.js";import"./renderedTicksSlice-Cgj9tABh.js";import"./index-BJASh04Q.js";import"./CartesianChart-CW2SUDgI.js";import"./chartDataContext-C0h1ipKh.js";import"./CategoricalChart-BMDkLrmt.js";import"./Layer-DzpNGvR7.js";import"./AnimatedItems-BKW3YVwF.js";import"./Label-BE6rd0_D.js";import"./Text-g_z1pfXY.js";import"./DOMUtils-FVC4l968.js";import"./useId-M-A2L6Xg.js";import"./useBackwardsCompatibleTheme-HAgk0scL.js";import"./ZIndexLayer-Drc_0i_v.js";import"./useAnimationId-DiRDlhkC.js";import"./types-BoP1bnqQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-IbtOhjas.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D2gPOJru.js";import"./tooltipContext-D6M-288Q.js";import"./RegisterGraphicalItemId-CNR4K2Kh.js";import"./ErrorBarContext-iNIezAqw.js";import"./GraphicalItemClipPath-BRvY79JN.js";import"./SetGraphicalItem-CbnjD7Sn.js";import"./getZIndexFromUnknown-D8pj6cZf.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-kcsvF8X3.js";const rt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},it=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
