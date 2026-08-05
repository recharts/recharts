import{R as t}from"./iframe-D972tbhF.js";import{R as s}from"./zIndexSlice-Dmvy26G-.js";import{C as l}from"./ComposedChart-CTTx4JQZ.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-CuePRLS7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D2OThsuy.js";import"./index-D9VN6yju.js";import"./index-C5z2sCvf.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D_CwbNhq.js";import"./isWellBehavedNumber-CISTmZa5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ouFvztbg.js";import"./index-oKVWKKHt.js";import"./index-zPQcggW0.js";import"./axisSelectors-uJIqnO2D.js";import"./d3-scale-CR9xOcuY.js";import"./renderedTicksSlice-Dv4CGxUS.js";import"./CartesianChart-BjAe6VAT.js";import"./chartDataContext-Cq56uXGO.js";import"./CategoricalChart-DKJz-sZX.js";import"./Layer-C5RVdPDc.js";import"./tooltipContext-Bu4qlIUV.js";import"./AnimatedItems-2p3qtLJi.js";import"./Label-BZnc8KKN.js";import"./Text-Dysxol0f.js";import"./DOMUtils-DPBa-ha3.js";import"./ZIndexLayer-Dhusbhig.js";import"./useAnimationId-BPwHrlOs.js";import"./types-DLeA2L4w.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C3KTtfAJ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D5m6KacQ.js";import"./RegisterGraphicalItemId-ySe1Fca9.js";import"./ErrorBarContext-DNvNglsi.js";import"./GraphicalItemClipPath-DuVjniBd.js";import"./SetGraphicalItem-EZqGepIx.js";import"./getZIndexFromUnknown-qFsl13qS.js";import"./graphicalItemSelectors-DXhrzQqD.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
