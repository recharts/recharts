import{e as t}from"./iframe-8sIubbdi.js";import{R as s}from"./arrayEqualityCheck-DbCj9c-Y.js";import{C as m}from"./ComposedChart-uiW_8j2H.js";import{B as e}from"./Bar-wknO_GDz.js";import{R as l}from"./RechartsHookInspector-AlYSKZYm.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DuCQFLVY.js";import"./immer-BT2n2B7O.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D30EcdBX.js";import"./index-CbU0dTJ6.js";import"./hooks-D_DW5Oi2.js";import"./axisSelectors-DxwSejiD.js";import"./d3-scale-DEnCLOEW.js";import"./zIndexSlice-VsYA40So.js";import"./renderedTicksSlice-CfkkEf9Z.js";import"./CartesianChart-CXlojrwJ.js";import"./chartDataContext-4cME9qvC.js";import"./CategoricalChart-C7NQof8g.js";import"./Layer-BRXiwqet.js";import"./tooltipContext-Do3gtYgl.js";import"./ReactUtils-BXvpQNi2.js";import"./Label-DilR1ra4.js";import"./Text-3TK1Y5vF.js";import"./DOMUtils-DytWm70I.js";import"./ZIndexLayer-Ts04gVrK.js";import"./types-Bp02LWfB.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils---ZXszSA.js";import"./isPlainObject-rB9NvpQh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2TS-ysJA.js";import"./useAnimationId-De5EZ4DF.js";import"./Trapezoid-DG6NQ2ho.js";import"./Sector-CO7y0BXS.js";import"./Symbols-DYzrjJ12.js";import"./symbol-CzQ70XR0.js";import"./step-CjuXRgh8.js";import"./Curve-BZpcUU-T.js";import"./RegisterGraphicalItemId-Cm3HEb7M.js";import"./ErrorBarContext-bky3Fevr.js";import"./GraphicalItemClipPath-C8kD9Qqm.js";import"./SetGraphicalItem-CsZep-cL.js";import"./getZIndexFromUnknown-BJWnkP_F.js";import"./graphicalItemSelectors-CPoOjEEq.js";import"./index-QIusEcOA.js";import"./ChartSizeDimensions-B-IxYWC1.js";import"./OffsetShower-CFWyxT0Z.js";import"./PlotAreaShower-CXMf_89y.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
