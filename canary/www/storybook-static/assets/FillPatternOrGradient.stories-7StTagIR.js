import{R as t}from"./iframe-CtCQjsM6.js";import{R as s}from"./zIndexSlice-Dyeq-kTm.js";import{C as l}from"./ComposedChart-DHyW9dZg.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-K77vF5If.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-UADZssR3.js";import"./index-bMzOaRnN.js";import"./index-Bc49u6WD.js";import"./get-CXMuCFS1.js";import"./resolveDefaultProps-y277M-17.js";import"./isWellBehavedNumber-DC3h_5lt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BsRB8VD4.js";import"./index-DMhTMs3j.js";import"./index-Dt6Mya9l.js";import"./renderedTicksSlice-B82fdgBY.js";import"./axisSelectors-CBHiYL8s.js";import"./d3-scale-DSObG5R7.js";import"./CartesianChart-DWPXJ9eR.js";import"./chartDataContext-BDCa3fVu.js";import"./CategoricalChart-D-CCIGyN.js";import"./Layer-ikVkc87V.js";import"./tooltipContext-BoH31FI7.js";import"./AnimatedItems-D-nX9UUI.js";import"./Label-DEKQSx_8.js";import"./Text-CVHSYFxZ.js";import"./DOMUtils-DONZhdVB.js";import"./ZIndexLayer-bXnB7Pr5.js";import"./useAnimationId-BByU_EIU.js";import"./types-DG_xuUOr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CYymeKVw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-sx5PAodz.js";import"./RegisterGraphicalItemId-CJP7sNi_.js";import"./ErrorBarContext-DA8eqje8.js";import"./GraphicalItemClipPath-BwbwGImN.js";import"./SetGraphicalItem-XJT0KcUL.js";import"./getZIndexFromUnknown-DA3lv6Ga.js";import"./graphicalItemSelectors-Dx8FkvhD.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
