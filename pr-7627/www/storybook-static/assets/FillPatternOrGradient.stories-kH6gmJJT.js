import{R as t}from"./iframe-BYCrCSPO.js";import{R as s}from"./zIndexSlice-DfD_-yb8.js";import{C as m}from"./ComposedChart-C0GfYFLm.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-I4cLczHV.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CwGaa8bA.js";import"./index-CduSCjJO.js";import"./index-DeTARG9l.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C_hnhA8j.js";import"./isWellBehavedNumber-CtO4Dltx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-1VDCfeR5.js";import"./index-B9LnnU9V.js";import"./index-CO8tfkky.js";import"./axisSelectors-DCnkJbPP.js";import"./d3-scale-CNobyPqZ.js";import"./renderedTicksSlice-D3LgmkWg.js";import"./CartesianChart-D_hO4lZa.js";import"./chartDataContext-BmXIjLQW.js";import"./CategoricalChart-DdsYRdkY.js";import"./Layer-B3NuQ3iV.js";import"./tooltipContext-C3sNg0eA.js";import"./AnimatedItems-B1rFvs0f.js";import"./Label-KQ9JDhJq.js";import"./Text-C7UGFNRC.js";import"./DOMUtils-_2tJTcuL.js";import"./ZIndexLayer-DS2x7pWW.js";import"./useAnimationId-BrMFsthS.js";import"./types-FnkeMo1L.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C2QxPGJo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DetheFMa.js";import"./RegisterGraphicalItemId-QO0ldivF.js";import"./ErrorBarContext-P2qv3dNI.js";import"./GraphicalItemClipPath-Co8e0UKg.js";import"./SetGraphicalItem-BOoa7F9Y.js";import"./getZIndexFromUnknown-D4hLULcR.js";import"./RechartsThemeContext-BUhvh7zS.js";import"./graphicalItemSelectors-BTGcwiu4.js";const $={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
