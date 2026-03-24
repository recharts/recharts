import{e as t}from"./iframe-B-0BbsAX.js";import{R as s}from"./arrayEqualityCheck-D0GIznF3.js";import{C as m}from"./ComposedChart-C4M_-QHd.js";import{B as e}from"./Bar-U-xk9OIT.js";import{R as l}from"./RechartsHookInspector-a5VIBXh4.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CeHfSYTr.js";import"./immer-16Lk8WhM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DdelftvL.js";import"./index-CC_jrfcS.js";import"./hooks-CLbcsvpt.js";import"./axisSelectors-B5M5y7tb.js";import"./d3-scale-CRpFVGXV.js";import"./zIndexSlice-k5NGco1R.js";import"./renderedTicksSlice-DrnPsf35.js";import"./CartesianChart-BzA52Q7h.js";import"./chartDataContext-ZzZnHAfn.js";import"./CategoricalChart-CiBn8gUj.js";import"./Layer-DmBsOgtN.js";import"./tooltipContext-3p5S3cTB.js";import"./ReactUtils-Dc4L6Dcx.js";import"./Label-RKv-aJqQ.js";import"./Text-BDsrdoFV.js";import"./DOMUtils-ChlQnBsE.js";import"./ZIndexLayer-BS0cCdPh.js";import"./types-CmNjNiS4.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-nrA-vqiB.js";import"./isPlainObject-CkRpqEDw.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ApzVODqx.js";import"./useAnimationId-C_pphjez.js";import"./Trapezoid-Coy9-nSc.js";import"./Sector-Czl1xAWH.js";import"./Symbols-D_XjywmB.js";import"./symbol-mrFX37Pu.js";import"./step-BJ3svLa1.js";import"./Curve-zb7_jZJr.js";import"./RegisterGraphicalItemId-EYUIR0Rr.js";import"./ErrorBarContext-B191cjJB.js";import"./GraphicalItemClipPath-j2FZHUrx.js";import"./SetGraphicalItem--6EOKRx7.js";import"./getZIndexFromUnknown-CC2DL1Fi.js";import"./graphicalItemSelectors-ChPy1Wqk.js";import"./index-BMYt7gcu.js";import"./ChartSizeDimensions-BoIgW8rA.js";import"./OffsetShower-DSqgSq0T.js";import"./PlotAreaShower-DqxXtLCD.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
