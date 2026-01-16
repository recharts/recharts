import{e as t}from"./iframe-BESbJ0y8.js";import{R as s}from"./arrayEqualityCheck-BJiY8zR4.js";import{C as l}from"./ComposedChart-CzRf54mG.js";import{B as r}from"./Bar-CuWm_wTn.js";import{R as m}from"./RechartsHookInspector-BIrUgBA6.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BrHDmjV-.js";import"./PolarUtils-BLb-h-71.js";import"./RechartsWrapper-DRe6KgwL.js";import"./hooks-DB8ea1bc.js";import"./axisSelectors-C-Xtojaz.js";import"./zIndexSlice-Ce7G6X37.js";import"./CartesianChart-GUhdqmTM.js";import"./chartDataContext-CNhS_Wxw.js";import"./CategoricalChart-DLR87Qgk.js";import"./Layer-C8CJBWmq.js";import"./tooltipContext-D7tZ70Gw.js";import"./ReactUtils-CdwmpjBo.js";import"./Label-qXVAmmrb.js";import"./Text-CP99-Bit.js";import"./DOMUtils-DhuQhbbK.js";import"./ZIndexLayer-Dn-3v6xq.js";import"./types-CGrtFV1P.js";import"./ActiveShapeUtils-Cfdp6Sqn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B0B57kHB.js";import"./useAnimationId-XfKJYBN0.js";import"./Trapezoid-BCkjDT6c.js";import"./Sector-DR905TlL.js";import"./Symbols-D6ejZ83Z.js";import"./Curve-9nr7VYb2.js";import"./RegisterGraphicalItemId-BqzerM7D.js";import"./ErrorBarContext-D0r4aWU5.js";import"./GraphicalItemClipPath-wHWKymHc.js";import"./SetGraphicalItem-DKXgGvLt.js";import"./getZIndexFromUnknown-BlZWVLdU.js";import"./graphicalItemSelectors-wDI_ZJYU.js";import"./index-CUJCh7cc.js";import"./ChartSizeDimensions-DCOrE4X1.js";import"./OffsetShower-BYHO7i_w.js";import"./PlotAreaShower-CfCRjkmu.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(m,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const et=["Fill"];export{e as Fill,et as __namedExportsOrder,tt as default};
