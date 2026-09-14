import{R as t}from"./iframe-C8hleUub.js";import{R as s}from"./zIndexSlice-vCE-ybpn.js";import{C as m}from"./ComposedChart-Aa5PC5fb.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-BB6bVhwI.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DqZhpB0B.js";import"./index-YGCqGUHr.js";import"./index-Ybsy0-7F.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-K4N7KwiK.js";import"./isWellBehavedNumber-B3eGUodw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C_qv-3Hz.js";import"./axisSelectors-2_wVdrP-.js";import"./d3-scale-5YAUGhno.js";import"./index-BNE3_iNf.js";import"./index-DRei1T7T.js";import"./renderedTicksSlice-NbxY696c.js";import"./index-D7OGaE6M.js";import"./CartesianChart-BMIYUzX5.js";import"./chartDataContext-CXErNkaS.js";import"./CategoricalChart-ZxlZFsha.js";import"./Layer-Bnkm0B65.js";import"./AnimatedItems-CjbyLJ1n.js";import"./Label-Dx4oA-8H.js";import"./Text-CGkuih9W.js";import"./DOMUtils-Chkxh9Pu.js";import"./useId-BChEDpq7.js";import"./useBackwardsCompatibleTheme-D4jGgcPz.js";import"./ZIndexLayer-BFXWo7W3.js";import"./useAnimationId-lPT865ra.js";import"./types-CanoAHyf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BI9aQQPe.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BDBm5gcU.js";import"./tooltipContext-Cum0KugD.js";import"./RegisterGraphicalItemId-BA4uM9gD.js";import"./ErrorBarContext-DZ7sAk5y.js";import"./GraphicalItemClipPath-LpKqTX6v.js";import"./SetGraphicalItem-KHbn2Vk7.js";import"./getZIndexFromUnknown-7Kw6C1Cj.js";import"./useGraphicalItemIdentity-FCLYk-L1.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
