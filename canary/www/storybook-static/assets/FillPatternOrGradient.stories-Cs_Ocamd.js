import{e as t}from"./iframe-BRfjO5eG.js";import{R as s}from"./arrayEqualityCheck-D8wbB52K.js";import{C as m}from"./ComposedChart-AJ-ju0lV.js";import{B as e}from"./Bar-Lb8Yd1vA.js";import{R as l}from"./RechartsHookInspector-DqZpsbqV.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DJkK52Dr.js";import"./immer-6Mf_l_pR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C-t74pKe.js";import"./index-Ds6oaLH2.js";import"./hooks-BpX4ZWOU.js";import"./axisSelectors-CiymgkMX.js";import"./d3-scale-QcLEkwbV.js";import"./zIndexSlice-DJoH0JSW.js";import"./renderedTicksSlice-BaIKxrOg.js";import"./CartesianChart-BILJUYgv.js";import"./chartDataContext-ffjZymjs.js";import"./CategoricalChart-D80geuJg.js";import"./Layer-Djm95T9f.js";import"./tooltipContext-lBPR5WjG.js";import"./ReactUtils-Dg4XVGmm.js";import"./Label-C3-kCUB1.js";import"./Text-CAzsJ-UY.js";import"./DOMUtils-e5Yde7hA.js";import"./ZIndexLayer-x9RJx9gY.js";import"./types-CJwNH7dd.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-J6JOXjSY.js";import"./isPlainObject-BUdyPG4g.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dx7CcXS4.js";import"./useAnimationId-fkzgSDca.js";import"./Trapezoid-DNfmxhLW.js";import"./Sector-HbpHqeJ3.js";import"./Symbols-uMYMnubp.js";import"./symbol-DPSABYJO.js";import"./step-ylhKLd0a.js";import"./Curve-c7RsuyU-.js";import"./RegisterGraphicalItemId-CTGxX7GS.js";import"./ErrorBarContext-CHAdzrsL.js";import"./GraphicalItemClipPath-BNX-hUwf.js";import"./SetGraphicalItem-bUxjzC-C.js";import"./getZIndexFromUnknown-8TNhua3M.js";import"./graphicalItemSelectors-DYhjC6IF.js";import"./index-CKyyuDQs.js";import"./ChartSizeDimensions-BOoNMCuu.js";import"./OffsetShower-ChoSpo1k.js";import"./PlotAreaShower-BU5aAxms.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const lt=["Fill"];export{r as Fill,lt as __namedExportsOrder,mt as default};
