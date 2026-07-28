import{R as t}from"./iframe-CzzdtdLH.js";import{R as s}from"./zIndexSlice-Co00U7DY.js";import{C as l}from"./ComposedChart-QZ0vaLGf.js";import{p as m}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-BQUvCOCn.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DKJrGqy3.js";import"./index-64quDrFB.js";import"./index-DWpzXqnr.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BjUNTsKn.js";import"./isWellBehavedNumber-BmNKw_Tm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BJjI_Ka0.js";import"./index-Bnee00Tj.js";import"./index-C75_nTb2.js";import"./renderedTicksSlice-1HW0Usy7.js";import"./axisSelectors-BlRIZcT4.js";import"./d3-scale-pYyMK9Lh.js";import"./CartesianChart-CuTVmHhm.js";import"./chartDataContext-BZcRmYig.js";import"./CategoricalChart-VSe_1AC9.js";import"./Layer-BbK8NiGM.js";import"./tooltipContext-BnTIeiHd.js";import"./AnimatedItems-BMiyvThI.js";import"./Label-CL5-PwM4.js";import"./Text-0Zz8t0sM.js";import"./DOMUtils-DH9j7AXM.js";import"./ZIndexLayer-ChHVLqdE.js";import"./useAnimationId-C9cdprRM.js";import"./types-3QfDILpo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-COPtEdoX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DWVSurhB.js";import"./RegisterGraphicalItemId-BU-YkEzl.js";import"./ErrorBarContext-ZLp962OP.js";import"./GraphicalItemClipPath-B0mB6y5l.js";import"./SetGraphicalItem-tk_sKpy7.js";import"./getZIndexFromUnknown-DX4gujlY.js";import"./graphicalItemSelectors-BaSKkPeO.js";const Z={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:m},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
