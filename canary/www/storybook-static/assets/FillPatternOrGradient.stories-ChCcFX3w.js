import{R as t}from"./iframe-DLS25dHQ.js";import{R as s}from"./zIndexSlice-l2YZmfJm.js";import{C as m}from"./ComposedChart-3ReoGfqO.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-BMdmSl7k.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Hx_xB1Pu.js";import"./index-ByCW5xID.js";import"./index-Dq9FB6TB.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C31rpRZv.js";import"./isWellBehavedNumber-oc6n5G8D.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B_GPZUKV.js";import"./index-CfSfkQYu.js";import"./index-CbCT7aty.js";import"./axisSelectors-L-RJvPIw.js";import"./d3-scale-BGUeNoA2.js";import"./renderedTicksSlice-CvT_UYhE.js";import"./CartesianChart-D13Xcxp2.js";import"./chartDataContext-D70kksUU.js";import"./CategoricalChart-C6ulcIic.js";import"./Layer-DThhki4j.js";import"./tooltipContext-DltJzF-4.js";import"./AnimatedItems-C-FlKGX8.js";import"./Label-Bs5nvBdN.js";import"./Text-DoJs4GjF.js";import"./DOMUtils-B4V2lSh1.js";import"./ZIndexLayer-CVnRsL__.js";import"./useAnimationId-BwYkYmq-.js";import"./types-BNikxk5Q.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DyGyBKmJ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CZHkl0hJ.js";import"./RegisterGraphicalItemId-DMMtsE5T.js";import"./ErrorBarContext-BMV815Qz.js";import"./graphicalItemIdentity-COzJlxtu.js";import"./SetGraphicalItem-B5zc41tl.js";import"./getZIndexFromUnknown-IJM925lj.js";import"./RechartsThemeContext-DQBBH2gy.js";import"./graphicalItemSelectors-Ca1NR3-_.js";const $={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const tt=["Fill"];export{e as Fill,tt as __namedExportsOrder,$ as default};
