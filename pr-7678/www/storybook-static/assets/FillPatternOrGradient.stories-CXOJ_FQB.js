import{R as t}from"./iframe-oJEYIYVD.js";import{R as s}from"./zIndexSlice-8Xd9ui4v.js";import{C as m}from"./ComposedChart-BIeE5g7X.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-ckHFcUCC.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DQw_TB4k.js";import"./index-1WCRhzzt.js";import"./index-9lHgIK0X.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DHMesOBd.js";import"./isWellBehavedNumber-BUWW9YlW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ENwYgfgF.js";import"./index-DPJLoqId.js";import"./index-CoIOggcU.js";import"./axisSelectors-CsLlIDAD.js";import"./d3-scale-DB3cJCiA.js";import"./renderedTicksSlice-DU_GMzWX.js";import"./CartesianChart-C-gtXtO6.js";import"./chartDataContext-BNgKqfWM.js";import"./CategoricalChart-DFXPtrpT.js";import"./Layer-BCc9Twjs.js";import"./AnimatedItems-bvrA4fOd.js";import"./Label-BAH99IO9.js";import"./Text-CtBEPsPC.js";import"./DOMUtils-Cf8xbxEH.js";import"./useId-CMdQMiLi.js";import"./useBackwardsCompatibleTheme-DXWZN45A.js";import"./ZIndexLayer-Cvj5uv_m.js";import"./useAnimationId-Cuwuz8F4.js";import"./types-qn8KP6HN.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-6_rBacYy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-YLbAgrLf.js";import"./tooltipContext-BxtUFVO6.js";import"./RegisterGraphicalItemId-BktobOXw.js";import"./ErrorBarContext-BeupN1xy.js";import"./GraphicalItemClipPath-DsG6iHd1.js";import"./SetGraphicalItem-C8Wpyevh.js";import"./getZIndexFromUnknown-CPZD-VQ6.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C8codeQo.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
