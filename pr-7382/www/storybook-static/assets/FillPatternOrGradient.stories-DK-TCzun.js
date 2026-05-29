import{e as t}from"./iframe-Dq2D9WMR.js";import{g as s}from"./zIndexSlice-CMIgpwRl.js";import{C as l}from"./ComposedChart-Ctt5r4_8.js";import{p as m}from"./Page-DPte-9pC.js";import{B as r}from"./Bar-C49e8k3x.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DBox_88Y.js";import"./get-Dg89qnmN.js";import"./resolveDefaultProps-CL0P-2Ye.js";import"./isWellBehavedNumber-CElaIhJa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Coa45hTw.js";import"./index-Vw7ge0ya.js";import"./index-toY2TPxE.js";import"./index-ComImMI9.js";import"./renderedTicksSlice-CfboEt5t.js";import"./axisSelectors-sK2-dJnb.js";import"./d3-scale-CJAlquTP.js";import"./CartesianChart-DTsAEBhV.js";import"./chartDataContext-DSYMXmV-.js";import"./CategoricalChart-DqFO3fer.js";import"./Layer-CNg3jf3H.js";import"./tooltipContext-DPzld1EZ.js";import"./ReactUtils-CnckncOE.js";import"./Label-DafpBHua.js";import"./Text-DsY1ckdl.js";import"./DOMUtils-DuGpXxvH.js";import"./ZIndexLayer-BazpBvjE.js";import"./types-C93vTFKm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BslqwIXI.js";import"./useAnimationId-uSyAtuoQ.js";import"./ActiveShapeUtils-C8zRj9nc.js";import"./RegisterGraphicalItemId-27foWtUc.js";import"./ErrorBarContext-ClYGb34v.js";import"./GraphicalItemClipPath-DwKkk3VM.js";import"./SetGraphicalItem-D7EoJphE.js";import"./getZIndexFromUnknown-C2CqlFtj.js";import"./graphicalItemSelectors-Di7DaTSh.js";const X={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const Y=["Fill"];export{e as Fill,Y as __namedExportsOrder,X as default};
