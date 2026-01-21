import{e as t}from"./iframe-DNZpCyoe.js";import{R as s}from"./arrayEqualityCheck-szoTsszl.js";import{C as l}from"./ComposedChart-7iyELzg6.js";import{B as r}from"./Bar-7rpZ1iG_.js";import{R as m}from"./RechartsHookInspector-PStiuiJe.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-2DomDO9e.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-BQVorp6g.js";import"./hooks-BoDBEmNZ.js";import"./axisSelectors-BPOUZfxz.js";import"./zIndexSlice-CbXQpeLy.js";import"./CartesianChart-ClznBUcn.js";import"./chartDataContext-IoENa7_Q.js";import"./CategoricalChart-BcCxfWo7.js";import"./Layer-CrRkJfyu.js";import"./tooltipContext-DBHawIRO.js";import"./ReactUtils-DE6T7IjU.js";import"./Label-DtNzO2lD.js";import"./Text-XEpcAul9.js";import"./DOMUtils-DNR30RXa.js";import"./ZIndexLayer-eq4dVVjm.js";import"./types-Dxz_CRdn.js";import"./ActiveShapeUtils-QhjeEfk1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DfjjH4Oz.js";import"./useAnimationId-CRV9WByP.js";import"./Trapezoid-CI8djX1t.js";import"./Sector-bkG1qaK_.js";import"./Symbols-D3jTalrW.js";import"./Curve-CA7wgxde.js";import"./RegisterGraphicalItemId-BH87LWyT.js";import"./ErrorBarContext-CuMQg8zm.js";import"./GraphicalItemClipPath-DI-Q4qpn.js";import"./SetGraphicalItem-DkQhVMnS.js";import"./getZIndexFromUnknown-vzKNiyWC.js";import"./graphicalItemSelectors-s2XvwiHk.js";import"./index-CZ8HrsbR.js";import"./ChartSizeDimensions-Cev-F566.js";import"./OffsetShower-DlkB9H2-.js";import"./PlotAreaShower-DJtLg1j7.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(m,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
