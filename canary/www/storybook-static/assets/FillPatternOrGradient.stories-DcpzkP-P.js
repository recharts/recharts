import{R as t}from"./iframe-C55y8OzM.js";import{R as s}from"./zIndexSlice-mi5wuovt.js";import{C as m}from"./ComposedChart-DsJNQyNb.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-DkhpMUyg.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-zPKptILV.js";import"./index-B1erB4OF.js";import"./index-Bbw2aGRN.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cgrl3e7D.js";import"./isWellBehavedNumber-mxdqJrTq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DsEVXtD9.js";import"./axisSelectors-DyDkozWt.js";import"./d3-scale-CwLPJ1sG.js";import"./index-kqQD3Gpu.js";import"./index-DnfvrK_t.js";import"./renderedTicksSlice-BczpgcuJ.js";import"./index-Dykf-EVS.js";import"./CartesianChart-HAuDRHmx.js";import"./chartDataContext-DnaKmrEK.js";import"./CategoricalChart-BdM0esTK.js";import"./Layer-D0VzgPFA.js";import"./activeStyles-DVnALFej.js";import"./Label-BceBwSRN.js";import"./Text-BSBFwZ1P.js";import"./pageBackground-D6U7S1qf.js";import"./useId-XdK2U0Ar.js";import"./useBackwardsCompatibleTheme-B8dADBlT.js";import"./ZIndexLayer-BdI7uft_.js";import"./useAnimationId-4Vo2vEHF.js";import"./dataEntryStyles-Cic1JpuQ.js";import"./types-BjarwEzr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-kX1A_stc.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-7zk5n9mh.js";import"./tooltipContext-CA6M0awf.js";import"./ErrorBarContext-DIbssQ08.js";import"./GraphicalItemClipPath-BHQAz3ae.js";import"./SetGraphicalItem-PlWMyb2e.js";import"./getZIndexFromUnknown-Cj3V-2_L.js";import"./useEffectiveDataKey-BY6K7cit.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
