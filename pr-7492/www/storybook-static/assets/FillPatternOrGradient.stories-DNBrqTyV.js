import{R as t}from"./iframe-D38iL5U2.js";import{R as s}from"./zIndexSlice-Cm67KrxL.js";import{C as l}from"./ComposedChart-C9TDGW0Q.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-AbNLq22K.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-D6830BYN.js";import"./index-CiQf90fk.js";import"./index-CtVCdopk.js";import"./get-khzbl4AQ.js";import"./resolveDefaultProps-CZPTys3h.js";import"./isWellBehavedNumber-DYmqkCh1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-cRl9bCbj.js";import"./index-CrafHmD2.js";import"./index-BjsidNXN.js";import"./renderedTicksSlice-BJAgGPRy.js";import"./axisSelectors-31vNEB3v.js";import"./d3-scale-B4F2Cask.js";import"./CartesianChart-BM1M8_5y.js";import"./chartDataContext-kB1Q6Xdj.js";import"./CategoricalChart-CpYTfgB7.js";import"./Layer-BW7UV7J4.js";import"./tooltipContext-CCwTnwLl.js";import"./AnimatedItems-6eA2Tj-j.js";import"./Label-CTZsXBnJ.js";import"./Text-DbYnM2_N.js";import"./DOMUtils-o62mw7wr.js";import"./ZIndexLayer-B3mrn3nC.js";import"./useAnimationId-CrM4tScF.js";import"./types-CVlGri0W.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BaDJNhGo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DKkm8SfY.js";import"./RegisterGraphicalItemId-D4Xqb6PN.js";import"./ErrorBarContext-BaHC-CpM.js";import"./GraphicalItemClipPath-CgNMFQt0.js";import"./SetGraphicalItem-D8AKKKBR.js";import"./getZIndexFromUnknown-CtGXtzTh.js";import"./graphicalItemSelectors-BvV69LyD.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
