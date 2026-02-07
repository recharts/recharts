import{e as t}from"./iframe-BGwjwh7b.js";import{R as s}from"./arrayEqualityCheck-Ci--b7kw.js";import{C as l}from"./ComposedChart-BM67LJyk.js";import{B as r}from"./Bar-DQdcwDXn.js";import{R as m}from"./RechartsHookInspector-VWahaYTL.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C4_jkDd5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-hK7FM4lj.js";import"./hooks-BrtJ2K4-.js";import"./axisSelectors-DZSZvNV6.js";import"./zIndexSlice-CqqXeG-S.js";import"./CartesianChart-5LhnS4ee.js";import"./chartDataContext-CifXIRqa.js";import"./CategoricalChart-BOR7W1TN.js";import"./Layer-g7-Im1O-.js";import"./tooltipContext-CpgcyK_Z.js";import"./ReactUtils-0GYQhZAx.js";import"./Label-ByJ0Zn7t.js";import"./Text-BJbt4-uX.js";import"./DOMUtils-B5Va_Rd3.js";import"./ZIndexLayer-BlpEyICK.js";import"./types-DiIJ1tuj.js";import"./ActiveShapeUtils-BcFn4-44.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DpPiBfe5.js";import"./useAnimationId-CRoY-omv.js";import"./Trapezoid-yFda2MLs.js";import"./Sector-CnD_zSeQ.js";import"./Symbols-CA485AuF.js";import"./Curve-Bx03x7Y9.js";import"./RegisterGraphicalItemId-D86zanCr.js";import"./ErrorBarContext-CNFPOgVB.js";import"./GraphicalItemClipPath-CbnJI2Ms.js";import"./SetGraphicalItem-CfxChqbu.js";import"./getZIndexFromUnknown-Bi6O6Mjf.js";import"./graphicalItemSelectors-CQPGuMnh.js";import"./index-5-nk5biS.js";import"./ChartSizeDimensions-ewe-wGZ_.js";import"./OffsetShower-CVJaT1Gz.js";import"./PlotAreaShower-Cbm_qyV0.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(m,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
