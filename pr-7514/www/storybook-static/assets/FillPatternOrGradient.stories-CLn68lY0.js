import{R as t}from"./iframe-DJHXlrGw.js";import{R as s}from"./zIndexSlice-CFaJnUYw.js";import{C as l}from"./ComposedChart-c9TgP79T.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-BFP9b6cK.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DAd10cPx.js";import"./index-BPz6-png.js";import"./index-DwRJQzwD.js";import"./get-j_9LvNGC.js";import"./resolveDefaultProps-CeQOO-Pe.js";import"./isWellBehavedNumber-Czb4zvRP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DkeMmjUq.js";import"./index-DwS8J4hC.js";import"./index-Be4tbGBe.js";import"./renderedTicksSlice-BKsRhTz6.js";import"./axisSelectors-ClcXvPv0.js";import"./d3-scale-DpYCNPeY.js";import"./CartesianChart-BtZogvmq.js";import"./chartDataContext-CJXmJdS8.js";import"./CategoricalChart-BtoYqjdS.js";import"./Layer-DZpjcI0F.js";import"./tooltipContext-C3r2TNgA.js";import"./AnimatedItems-BgKM4093.js";import"./Label-R2VOv6mw.js";import"./Text-CRISoaMT.js";import"./DOMUtils-R0ltg_fS.js";import"./ZIndexLayer-KkfMfF_A.js";import"./useAnimationId-CR2wKsf0.js";import"./types-vAWUzS0M.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Z1GABkaC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CSLmPB1h.js";import"./RegisterGraphicalItemId-Dmdqk05n.js";import"./ErrorBarContext-DLSy_XzC.js";import"./GraphicalItemClipPath-Cd-sqkad.js";import"./SetGraphicalItem-BYhVDRYC.js";import"./getZIndexFromUnknown-DGvsYVYA.js";import"./graphicalItemSelectors-DekV_TLp.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
