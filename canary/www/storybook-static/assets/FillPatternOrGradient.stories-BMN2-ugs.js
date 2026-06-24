import{R as t}from"./iframe-D4CuLoZz.js";import{R as s}from"./zIndexSlice-SXe885_i.js";import{C as l}from"./ComposedChart-DB0jlCn6.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-KyGDk3_z.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CFokkZQV.js";import"./index-DKrwxI3E.js";import"./index-Cama49zD.js";import"./get-DBuLXD7N.js";import"./resolveDefaultProps-BIWi1Y-8.js";import"./isWellBehavedNumber-BHyLU3rm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BytBl7Lq.js";import"./index-D0U5tyHV.js";import"./index-CRkJbrCH.js";import"./renderedTicksSlice-DHw40_9x.js";import"./axisSelectors-BkOYejTH.js";import"./d3-scale-Bg-gbMqf.js";import"./CartesianChart-D5hGWEsl.js";import"./chartDataContext-BdBlfWO1.js";import"./CategoricalChart-CDNCF4CW.js";import"./Layer-xCWemoOx.js";import"./tooltipContext-BYitAcng.js";import"./AnimatedItems-EJSTJ3cq.js";import"./Label-CcUkFPjg.js";import"./Text-xYQOnqwx.js";import"./DOMUtils-CZgli98g.js";import"./ZIndexLayer-CwgCBSKX.js";import"./useAnimationId-DrVwX4j9.js";import"./types-DyFRA-Bh.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-wZa2ZWZX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B2FaHUJe.js";import"./RegisterGraphicalItemId-BYXBvuEW.js";import"./ErrorBarContext-uD9druzE.js";import"./GraphicalItemClipPath-Dcao9gEo.js";import"./SetGraphicalItem-D5XyE2WD.js";import"./getZIndexFromUnknown-iar16ZxL.js";import"./graphicalItemSelectors-DOamrowD.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
