import{R as t}from"./iframe-tjnA4ZJo.js";import{R as s}from"./zIndexSlice-C0N8aUUS.js";import{C as m}from"./ComposedChart-C0wVbOjh.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-Bkj_zqoU.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BG5Cbw48.js";import"./index-BTfui88R.js";import"./index-BBMNndk4.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bpk1yIxn.js";import"./isWellBehavedNumber-C0zpNc8z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CWJ-Ct21.js";import"./index-BXBph9CX.js";import"./index-zHF4-EZF.js";import"./axisSelectors-kO8GHbei.js";import"./d3-scale-DO15g-NA.js";import"./renderedTicksSlice-cCRvnCrJ.js";import"./CartesianChart-Fpuc0WuY.js";import"./chartDataContext-Czgamfqs.js";import"./CategoricalChart-4thYKElI.js";import"./Layer-BffJbX--.js";import"./AnimatedItems-6MMSMcYJ.js";import"./Label-CYvlsQvC.js";import"./Text-D3he8dQP.js";import"./DOMUtils-Bpsfg4Oe.js";import"./useBackwardsCompatibleTheme-WfOg4bTb.js";import"./ZIndexLayer-J8-hOCa0.js";import"./useAnimationId-1S4zeXgZ.js";import"./types-B1JXlqQN.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Ckn9RlkE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D6_9Syl7.js";import"./tooltipContext-DwLel0lg.js";import"./RegisterGraphicalItemId-CPAkHit-.js";import"./ErrorBarContext-B_e3sY13.js";import"./GraphicalItemClipPath-CVEv0QyJ.js";import"./SetGraphicalItem-Bw7kOs9y.js";import"./getZIndexFromUnknown-CM5Y5EkK.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-aSOStWya.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const et=["Fill"];export{e as Fill,et as __namedExportsOrder,tt as default};
