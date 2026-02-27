import{e as t}from"./iframe-DFGAofbe.js";import{R as s}from"./arrayEqualityCheck-ljAchZLP.js";import{C as m}from"./ComposedChart-BhoIaFH3.js";import{B as e}from"./Bar-BAEuHiTi.js";import{R as l}from"./RechartsHookInspector-DbJ87cdf.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BiW6MX56.js";import"./immer-BNIFj7IH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BW69_AMP.js";import"./index-BuPlUYom.js";import"./hooks-NQJeEPvo.js";import"./axisSelectors-wlNZvql0.js";import"./d3-scale-BORVzaI0.js";import"./zIndexSlice-ZGxvoLlb.js";import"./renderedTicksSlice-zWZrw6WL.js";import"./CartesianChart-B919z8kN.js";import"./chartDataContext-3sHnV3LN.js";import"./CategoricalChart-DiTxXNb9.js";import"./Layer-DkQEAz0F.js";import"./tooltipContext-RM9zVRDO.js";import"./ReactUtils-Zl7yFqa2.js";import"./Label-D3hyhnox.js";import"./Text-eVa9CtOa.js";import"./DOMUtils-Bb3CoATj.js";import"./ZIndexLayer-C2uBG0v5.js";import"./types-hODQJ_Fi.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BldO5j8K.js";import"./isPlainObject-CgDaYdpj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CXQZY0za.js";import"./useAnimationId-DLq-j523.js";import"./Trapezoid-C7B2-ixr.js";import"./Sector-BpsG7dxK.js";import"./Symbols-smoeIwKM.js";import"./symbol-ChY4FcTv.js";import"./step-D87477lM.js";import"./Curve-DUQRfqey.js";import"./RegisterGraphicalItemId-BoqMctej.js";import"./ErrorBarContext-CN4hBBfW.js";import"./GraphicalItemClipPath-CAWgOBcy.js";import"./SetGraphicalItem-BNO-bjOH.js";import"./getZIndexFromUnknown-DdK6schu.js";import"./graphicalItemSelectors-DVe1b1kt.js";import"./index-C6DKtKjE.js";import"./ChartSizeDimensions-BkxkztHc.js";import"./OffsetShower-B3oZm6GE.js";import"./PlotAreaShower-CBxzL5FD.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
