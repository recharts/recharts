import{R as t}from"./iframe-D54unYLy.js";import{R as s}from"./zIndexSlice-Cm3b7ejj.js";import{C as m}from"./ComposedChart-D7cf1DfT.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-BSJeist8.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DMkP6nmZ.js";import"./index-DTKKzB_q.js";import"./index-DJM2R3WX.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CJCAn8xn.js";import"./isWellBehavedNumber-BRWfHs55.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Sp30bFVi.js";import"./axisSelectors-CGx4lpK1.js";import"./d3-scale-izKDfaZA.js";import"./index-C9p80rQK.js";import"./index-DILyQNHS.js";import"./renderedTicksSlice-D7aoxSus.js";import"./index-BNdKzrH5.js";import"./CartesianChart-CcD5rs5o.js";import"./chartDataContext-Coa6LtBf.js";import"./CategoricalChart-Bg1dkEg1.js";import"./Layer-crHiZgAm.js";import"./activeStyles-qzo8AQBX.js";import"./Label-A3PRHVZO.js";import"./Text-CRGGbb6_.js";import"./pageBackground-CsysAoq2.js";import"./useId-B4uqruq9.js";import"./useBackwardsCompatibleTheme-BSJdofEh.js";import"./ZIndexLayer-DfUYfUZg.js";import"./useAnimationId-C7SuCt1Q.js";import"./dataEntryStyles-CsFYoURq.js";import"./types-BmPqNA2a.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BjxF51Ga.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DPaRxWi8.js";import"./tooltipContext-DTng4SL3.js";import"./ErrorBarContext-m85c5O32.js";import"./GraphicalItemClipPath-DDtxOsTL.js";import"./SetGraphicalItem-Y9oO0QZg.js";import"./getZIndexFromUnknown-Dw6HDBR_.js";import"./useEffectiveDataKey-BB9JnQ0o.js";import"./omit-C3A2etqc.js";import"./isArguments-yB-y1yaH.js";import"./isBuffer-AZzsDYE7.js";const ot={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},at=["Fill"];var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{r as Fill,at as __namedExportsOrder,ot as default};
