import{e as t}from"./iframe-CldnC2PN.js";import{R as s}from"./arrayEqualityCheck-BkMemVly.js";import{C as m}from"./ComposedChart-BngszoqL.js";import{B as e}from"./Bar-DjoSHrT_.js";import{R as l}from"./RechartsHookInspector-D62gTWo0.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BwrkZ9kS.js";import"./immer-DMaWcifR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DAnE3XKK.js";import"./index-B042oD1N.js";import"./hooks-C8l2rjci.js";import"./axisSelectors-DvlPsvJ3.js";import"./d3-scale-fXH-4SOh.js";import"./zIndexSlice-Dkmz4iFf.js";import"./renderedTicksSlice-Be71JRZt.js";import"./CartesianChart-D5D4yxlx.js";import"./chartDataContext-HhqUZ6D1.js";import"./CategoricalChart-SLN0-3Ts.js";import"./Layer-Bdw6vRTF.js";import"./tooltipContext-CsI9KJcU.js";import"./ReactUtils-vDwQR-8r.js";import"./Label-CL4-mp52.js";import"./Text-DSAVQ0ab.js";import"./DOMUtils-CLNPxtlu.js";import"./ZIndexLayer-Bu6n17y5.js";import"./types-dYqueN3V.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-PUYnWCIP.js";import"./isPlainObject-DfSr4O01.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CtzrYFnf.js";import"./useAnimationId-3owPHR_y.js";import"./Trapezoid-TT50IcST.js";import"./Sector-Olx8axXc.js";import"./Symbols-CezzAArh.js";import"./symbol-ChaweOtd.js";import"./step-DeOo6rRX.js";import"./Curve-Cs2JifYn.js";import"./RegisterGraphicalItemId-BmpgF9p0.js";import"./ErrorBarContext-Bu40-WC5.js";import"./GraphicalItemClipPath-_SIbPbOr.js";import"./SetGraphicalItem-QHdiFTBm.js";import"./getZIndexFromUnknown-Cw-Oh-0Y.js";import"./graphicalItemSelectors-t89E3Daq.js";import"./index-VkK4RKSk.js";import"./ChartSizeDimensions-De6H2yR6.js";import"./OffsetShower-QG2XVoqu.js";import"./PlotAreaShower-x9Z3Lf2d.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
