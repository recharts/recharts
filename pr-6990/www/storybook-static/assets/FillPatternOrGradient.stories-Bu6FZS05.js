import{e as t}from"./iframe-uc6dFw_p.js";import{R as s}from"./arrayEqualityCheck-CQn2kQOi.js";import{C as m}from"./ComposedChart-CRYzJVTL.js";import{B as r}from"./Bar-CwFXimI5.js";import{R as l}from"./RechartsHookInspector-IvFhBGHX.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-kGpremEA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DhOLU858.js";import"./hooks-vCWItnff.js";import"./axisSelectors-B8_chuAi.js";import"./zIndexSlice-WGd4Bakr.js";import"./renderedTicksSlice-nuZito-G.js";import"./CartesianChart-CgnwnU-y.js";import"./chartDataContext-Dmpd0AQd.js";import"./CategoricalChart-BjqK4Uyg.js";import"./Layer-DswXiCbz.js";import"./tooltipContext-DguwpOPg.js";import"./ReactUtils-Bs-3TSfa.js";import"./Label-D0b7Dnqv.js";import"./Text-Bqz-nWjx.js";import"./DOMUtils-DBQIyNfT.js";import"./ZIndexLayer-CxICY6ph.js";import"./types-BngWNVP1.js";import"./ActiveShapeUtils-j7lBkeSN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B0I4wQZ7.js";import"./useAnimationId-BjF_cXy3.js";import"./Trapezoid-BBf2jkzZ.js";import"./Sector-DJmKtBTn.js";import"./Symbols-ByXfoODU.js";import"./Curve-IfIaqkcg.js";import"./RegisterGraphicalItemId-Dzwld0hr.js";import"./ErrorBarContext-DROw9Wv2.js";import"./GraphicalItemClipPath-DhRCGnFu.js";import"./SetGraphicalItem-DzzG5GId.js";import"./getZIndexFromUnknown-BYzCyAf5.js";import"./graphicalItemSelectors-Cr3y-GFZ.js";import"./index-C4cmB5lh.js";import"./ChartSizeDimensions-DgaeT0Q8.js";import"./OffsetShower-CN5uyxGG.js";import"./PlotAreaShower-rJfWFAXI.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const rt=["Fill"];export{e as Fill,rt as __namedExportsOrder,et as default};
