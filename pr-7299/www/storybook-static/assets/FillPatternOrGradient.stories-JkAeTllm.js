import{e as t}from"./iframe-CNonusrd.js";import{R as s}from"./arrayEqualityCheck-l5oIinxJ.js";import{C as m}from"./ComposedChart-eizZQii2.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-BGsKFYYS.js";import{R as c}from"./RechartsHookInspector-DREJ71WB.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-9t13lHMU.js";import"./immer-x45XYXGa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DYPFeGd0.js";import"./index-D5p3lGcA.js";import"./hooks-sSaS_iHU.js";import"./axisSelectors-CxAQt0eW.js";import"./d3-scale-HntMfl1M.js";import"./zIndexSlice-lq1xLJsp.js";import"./renderedTicksSlice-DilFZHiz.js";import"./CartesianChart-XRbcsYla.js";import"./chartDataContext-CPanrf0w.js";import"./CategoricalChart-2Jj_e3Uw.js";import"./Layer-B4nmAurR.js";import"./tooltipContext-C7pC30Rf.js";import"./ReactUtils-C0hUy9cv.js";import"./Label-BkTOM4JT.js";import"./Text-B8aP_-NL.js";import"./DOMUtils-BSt5xjPz.js";import"./ZIndexLayer-C8APM9Um.js";import"./types-QSJLzDgf.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-oBpqlz40.js";import"./isPlainObject-D0uDvuyC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-vYVz2III.js";import"./useAnimationId-CKkBYz8x.js";import"./Trapezoid-D9ZXnwGC.js";import"./Sector-2y1By5Z-.js";import"./Symbols-BvFq4E0I.js";import"./symbol-BAjtFeQt.js";import"./step-CTC2hHac.js";import"./Curve-B-txv0y_.js";import"./RegisterGraphicalItemId-BlSb_05O.js";import"./ErrorBarContext-BMyrYBLu.js";import"./GraphicalItemClipPath-Dh2li2pF.js";import"./SetGraphicalItem-ElLCpu1i.js";import"./getZIndexFromUnknown-BBapEHL6.js";import"./graphicalItemSelectors-uEabWJTl.js";import"./index-D8MHUpjv.js";import"./ChartSizeDimensions-CH_6AtsO.js";import"./OffsetShower-BdevU7dF.js";import"./PlotAreaShower-iAJQSHaO.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
