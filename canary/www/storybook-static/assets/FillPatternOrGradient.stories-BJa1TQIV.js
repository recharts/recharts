import{R as t}from"./iframe-DCSfzZD_.js";import{R as s}from"./zIndexSlice-Cya-j5JC.js";import{C as l}from"./ComposedChart-CwsOLjT-.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-BEEYzMTO.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-ByTaNkbJ.js";import"./index-Bo0lICcO.js";import"./index-Bc3eNKO0.js";import"./get-bIWt5V4Q.js";import"./resolveDefaultProps-CCmyAiJ-.js";import"./isWellBehavedNumber-m9CBmcKa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-f8FpOrqU.js";import"./index-TStCCngK.js";import"./index-CZv42qN9.js";import"./renderedTicksSlice-CB2WZ0k7.js";import"./axisSelectors-C-oQ6giK.js";import"./d3-scale-4ju7hcsF.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CB6ngWWH.js";import"./chartDataContext-WKixDFuv.js";import"./CategoricalChart-DJmhsbdm.js";import"./Layer-CYaqqIa6.js";import"./tooltipContext-B88742NV.js";import"./AnimatedItems-DS8CzLL4.js";import"./Label-DyuMertz.js";import"./Text-BxOuGVRA.js";import"./DOMUtils-C0TjG-2s.js";import"./ZIndexLayer-BUBfOUZp.js";import"./useAnimationId-BTIZp_pi.js";import"./types-pWlDed2R.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DpxrFSPu.js";import"./ActiveShapeUtils-C_38ZXqU.js";import"./RegisterGraphicalItemId-B-4FmZL4.js";import"./ErrorBarContext-CpQVZJvf.js";import"./GraphicalItemClipPath-7MgXj_jT.js";import"./SetGraphicalItem-3Qo-AVYb.js";import"./getZIndexFromUnknown-BelDedhF.js";import"./graphicalItemSelectors-C2yccbXB.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const $=["Fill"];export{e as Fill,$ as __namedExportsOrder,Z as default};
