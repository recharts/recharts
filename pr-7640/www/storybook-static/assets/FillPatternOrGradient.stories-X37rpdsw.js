import{R as t}from"./iframe-BIMbD8mx.js";import{R as s}from"./zIndexSlice-wO_dW_9z.js";import{C as m}from"./ComposedChart-BBbivD2D.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-DJeXz8kW.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DiXkeT8N.js";import"./index-DwWghGbc.js";import"./index-BRQlGlsm.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CZ6QiDkA.js";import"./isWellBehavedNumber-CazuspJq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-QNCP9nY0.js";import"./index-A5Cgym80.js";import"./index-BP-geqPm.js";import"./axisSelectors-BtNyQa3m.js";import"./d3-scale-DL9ezE1-.js";import"./renderedTicksSlice-B-RvvD_k.js";import"./CartesianChart-CABLVMKg.js";import"./chartDataContext-CXOVrzNd.js";import"./CategoricalChart-rgEOMHEL.js";import"./Layer-1Cdcr0Iy.js";import"./tooltipContext-Bdc1CC6H.js";import"./AnimatedItems-QaKLnfOP.js";import"./Label-DfQOptl9.js";import"./Text-D6zl2tjY.js";import"./DOMUtils-DjDyXH_P.js";import"./RechartsThemeContext-BjZ7jnPh.js";import"./ZIndexLayer-YpWri7rk.js";import"./useAnimationId-hHgrQgML.js";import"./types-Dp-Ax4LT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DSfjoyTs.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CBR4xzcn.js";import"./RegisterGraphicalItemId-DN1O3Sjb.js";import"./ErrorBarContext-DnIQZp30.js";import"./GraphicalItemClipPath-nqtdT7cB.js";import"./SetGraphicalItem-DRMG3qH2.js";import"./getZIndexFromUnknown-BAdTqO1-.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-D596YBmA.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const et=["Fill"];export{e as Fill,et as __namedExportsOrder,tt as default};
