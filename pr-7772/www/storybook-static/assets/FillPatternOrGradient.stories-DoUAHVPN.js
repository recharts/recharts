import{R as t}from"./iframe-DOP-jAxw.js";import{R as s}from"./zIndexSlice-iZLT4mgM.js";import{C as m}from"./ComposedChart-Cja5a53J.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-NplYj0H8.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D7DQi97E.js";import"./index-CCuF4-CL.js";import"./index-zAmCVOdn.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C42OrRbv.js";import"./isWellBehavedNumber-aeEmpyhq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Q1Jm5bKD.js";import"./axisSelectors-B_fxjvJU.js";import"./d3-scale-DzSw552P.js";import"./index-bWqnTni2.js";import"./index-DtoMVaOV.js";import"./renderedTicksSlice-CNec-Jhj.js";import"./index-D_24CIxZ.js";import"./CartesianChart-PeHZ3LWB.js";import"./chartDataContext-CuKpjHMI.js";import"./CategoricalChart-CByA_zEa.js";import"./Layer-CsLYPkNS.js";import"./AnimatedItems-D09OLiJi.js";import"./Label-BQxh1muY.js";import"./Text-BM4OLvWb.js";import"./DOMUtils-hJnM7D4i.js";import"./useId-DriqVEjQ.js";import"./useBackwardsCompatibleTheme-lpZr1fce.js";import"./ZIndexLayer-CERsRXD7.js";import"./useAnimationId-DvdWCYQm.js";import"./types-Bd_t3tQp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-wYU6J8iP.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DE-7R1j_.js";import"./tooltipContext-DiVLQMla.js";import"./RegisterGraphicalItemId-a8qjrkCj.js";import"./ErrorBarContext-3aBgegVQ.js";import"./GraphicalItemClipPath-BIJRZhz8.js";import"./SetGraphicalItem-BdxyruZp.js";import"./getZIndexFromUnknown-0PwpdMZF.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-B60cO35L.js";const rt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},it=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
