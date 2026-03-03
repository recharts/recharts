import{e as t}from"./iframe-C3IizUjd.js";import{R as s}from"./arrayEqualityCheck-BN5YAPve.js";import{C as m}from"./ComposedChart-B45GxUxU.js";import{B as e}from"./Bar-Cu2-34Dc.js";import{R as l}from"./RechartsHookInspector-CMzm5IMa.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DskrAGQW.js";import"./immer-Zfp8_KXi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-nOVK-a7O.js";import"./index-BDIXnKn2.js";import"./hooks-Dky24mZ6.js";import"./axisSelectors-DftPES2E.js";import"./d3-scale-CueCtyXL.js";import"./zIndexSlice-BO04q8IP.js";import"./renderedTicksSlice-Dt_Lih6a.js";import"./CartesianChart-6pUZjxxf.js";import"./chartDataContext-CC6e_g43.js";import"./CategoricalChart-bB5xHAMm.js";import"./Layer-BScYV_nA.js";import"./tooltipContext-__SpLffu.js";import"./ReactUtils-DvBN6ieP.js";import"./Label-D4qF_xzL.js";import"./Text-Cq5Z8SfY.js";import"./DOMUtils-D3cjVXs_.js";import"./ZIndexLayer-D0ch3miO.js";import"./types-XYE2Po1C.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-C-x2J9sD.js";import"./isPlainObject-BfiDfeU3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Do-vXOL9.js";import"./useAnimationId-CDYOyu_I.js";import"./Trapezoid-BMwhO9Tl.js";import"./Sector-Bpnrz7tS.js";import"./Symbols-wCZQNuZQ.js";import"./symbol-CdebLSvg.js";import"./step-CEFPVq0V.js";import"./Curve-CEEm8y0E.js";import"./RegisterGraphicalItemId-BeeC0A7D.js";import"./ErrorBarContext-ZY5h9mih.js";import"./GraphicalItemClipPath-CxTZUJ58.js";import"./SetGraphicalItem-BkT7mDpp.js";import"./getZIndexFromUnknown-DkU5Pmhr.js";import"./graphicalItemSelectors-X3e7I8Xb.js";import"./index-COvlj-J8.js";import"./ChartSizeDimensions-BMoEUk31.js";import"./OffsetShower-C3Z070Oz.js";import"./PlotAreaShower-DeOjQ5h5.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
