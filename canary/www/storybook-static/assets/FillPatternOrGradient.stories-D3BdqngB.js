import{R as t}from"./iframe-CHJ8qNn-.js";import{R as s}from"./zIndexSlice-DNIXTlyt.js";import{C as m}from"./ComposedChart-Gh2_Mw5N.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-N13jfkZ1.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-XqMRt2jJ.js";import"./index-D97GqZNj.js";import"./index-D2V1f5dZ.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DpVu8JOQ.js";import"./isWellBehavedNumber-BRib7OTz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BJlTvsU4.js";import"./axisSelectors-BBd7_xKf.js";import"./d3-scale-Tozs6n73.js";import"./index-BKlKJCZc.js";import"./index-BzI6syEB.js";import"./renderedTicksSlice-C8683P8v.js";import"./index-CoSZFYA7.js";import"./CartesianChart-BhRxeAbm.js";import"./chartDataContext-BkqAIBWa.js";import"./CategoricalChart-CQg4LCLR.js";import"./Layer-D78kPmJv.js";import"./activeStyles-ujvHG1pk.js";import"./Label-B11lJlmF.js";import"./Text-CNSLXPSH.js";import"./pageBackground-DmOvuMA2.js";import"./useId-DMQKzmZX.js";import"./useBackwardsCompatibleTheme-BpzyF9ZD.js";import"./ZIndexLayer-D300_86G.js";import"./dataEntryStyles-DVh89c5p.js";import"./useAnimationId-CQYAMcX9.js";import"./types-Dz3e-B0c.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B0Mkl8MZ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-5-Co5jK-.js";import"./tooltipContext-D_sHfR4N.js";import"./RegisterGraphicalItemId-BoIM166p.js";import"./ErrorBarContext-gVyy4V_e.js";import"./GraphicalItemClipPath-CRFACIVC.js";import"./SetGraphicalItem-CGS7hoc8.js";import"./getZIndexFromUnknown-DzS5M4dq.js";import"./useEffectiveDataKey-BD8sCJ8W.js";import"./omit-V5dJ_cDJ.js";import"./isArguments-yB-y1yaH.js";import"./isBuffer-AZzsDYE7.js";const at={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},pt=["Fill"];var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{r as Fill,pt as __namedExportsOrder,at as default};
