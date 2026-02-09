import{e as t}from"./iframe-B5r3cecm.js";import{R as s}from"./arrayEqualityCheck-Czqc1yJH.js";import{C as l}from"./ComposedChart-C_4RZTQj.js";import{B as r}from"./Bar-u1dvqmw3.js";import{R as m}from"./RechartsHookInspector-DV5jRegM.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B0ReOK4v.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CS6LSkHo.js";import"./hooks-Cgvn8GGi.js";import"./axisSelectors-DlyGXsEB.js";import"./zIndexSlice-BBl8Rk0R.js";import"./CartesianChart-ByljlebW.js";import"./chartDataContext-CLEPAMGZ.js";import"./CategoricalChart-BNRlOmyd.js";import"./Layer-5sA9M2a_.js";import"./tooltipContext-BQbQDo2U.js";import"./ReactUtils-CFOSv3NQ.js";import"./Label-CuwvUyc2.js";import"./Text-DBsFj5kG.js";import"./DOMUtils-BMUc0bMB.js";import"./ZIndexLayer-CK5fYLk5.js";import"./types-0ytZb3l6.js";import"./ActiveShapeUtils-4xjvutom.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CEg1ZuEo.js";import"./useAnimationId-BDFPsv26.js";import"./Trapezoid-B9ic5-qM.js";import"./Sector-Dx2gEVnp.js";import"./Symbols-B2Id_P0j.js";import"./Curve-BkRyhV0i.js";import"./RegisterGraphicalItemId-C9-Dm0DM.js";import"./ErrorBarContext-VyPM_pF3.js";import"./GraphicalItemClipPath-BBRif3g7.js";import"./SetGraphicalItem-D_EjQgzP.js";import"./getZIndexFromUnknown--Q5ThspI.js";import"./graphicalItemSelectors-BS82a3Dn.js";import"./index-BkOLfLi3.js";import"./ChartSizeDimensions-BCzYpqeT.js";import"./OffsetShower-BgXcnRpM.js";import"./PlotAreaShower-CbYe2LCs.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(m,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
