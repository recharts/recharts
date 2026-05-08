import{e as t}from"./iframe-BCIyDy2y.js";import{R as s}from"./arrayEqualityCheck-Cf245WJn.js";import{C as m}from"./ComposedChart-DJx0gT3B.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-SXFFonQy.js";import{R as c}from"./RechartsHookInspector-Z2OccCn4.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-lVM9sbuz.js";import"./immer-C2RICBwb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bdd2O_oM.js";import"./index-CtknXjDa.js";import"./hooks-BTsBRBHp.js";import"./axisSelectors-yCT-Higf.js";import"./d3-scale-CI4AiR3w.js";import"./zIndexSlice-DSrTTGma.js";import"./renderedTicksSlice-Cz2vx4zM.js";import"./CartesianChart-DrswP_Ob.js";import"./chartDataContext-CXwTcmro.js";import"./CategoricalChart-up_sq5JM.js";import"./Layer-BI55N2-G.js";import"./tooltipContext-tXpmtW_g.js";import"./ReactUtils-xGOtO2-g.js";import"./Label-BLeLqCLV.js";import"./Text-DkhCuMky.js";import"./DOMUtils-BAzLlmnO.js";import"./ZIndexLayer-OXXPiSY6.js";import"./types-lt17_KuZ.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-jGAWG3IP.js";import"./isPlainObject-whMXKUZx.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-SMe0MBtT.js";import"./useAnimationId-BkfXIhqW.js";import"./Trapezoid-RcGRNOCe.js";import"./Sector-Ck7ah4lL.js";import"./Symbols-BB8IGNYJ.js";import"./symbol-BWsdZnbp.js";import"./step-C8nuQph-.js";import"./Curve-CewalY2f.js";import"./RegisterGraphicalItemId-UqraLzmZ.js";import"./ErrorBarContext-BoyyOct_.js";import"./GraphicalItemClipPath-DTR4rFg9.js";import"./SetGraphicalItem-D1XFyIIN.js";import"./getZIndexFromUnknown-BotphnTD.js";import"./graphicalItemSelectors-DKTJ6Z3E.js";import"./index-DwfpJ5JJ.js";import"./ChartSizeDimensions-DA9WuIbb.js";import"./OffsetShower-DxUIrgLH.js";import"./PlotAreaShower-DU-Wc0h4.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
