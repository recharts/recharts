import{e as t}from"./iframe-DU2QcQF_.js";import{R as s}from"./arrayEqualityCheck-BBRUJMgE.js";import{C as m}from"./ComposedChart-D66mG1g1.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-Cc30iIuN.js";import{R as c}from"./RechartsHookInspector-D0TcJcB2.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BRw4v6sg.js";import"./immer-D_hC97QS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dkm_90y8.js";import"./index-LW5E5x2X.js";import"./hooks-CLgIfPXm.js";import"./axisSelectors-DCuZe5xZ.js";import"./d3-scale-Cl2Mf9ve.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-DH5OVU_d.js";import"./renderedTicksSlice-DKMiT0hM.js";import"./CartesianChart-DdZk3nRt.js";import"./chartDataContext-BWCdO7Tf.js";import"./CategoricalChart-DI28mp2q.js";import"./Layer-CsymvJcW.js";import"./tooltipContext-j-dZBCf6.js";import"./AnimatedItems-dOeoQkDw.js";import"./Label-Xfq-LPcv.js";import"./Text-C9SLmSKD.js";import"./DOMUtils-BQcJZQLN.js";import"./ZIndexLayer-BezITi0w.js";import"./useAnimationId-u-3taHzi.js";import"./types-CW6teSnw.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DoCRNyCQ.js";import"./isPlainObject-zOhZ7DbK.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-MTy_JW56.js";import"./Trapezoid-DGJrygRD.js";import"./Sector-foysTS17.js";import"./Symbols-BJFlDYmu.js";import"./symbol-B0GgNpuh.js";import"./step-Bh598Jf-.js";import"./Curve-C80_Q5kF.js";import"./RegisterGraphicalItemId-Cw3F3qyO.js";import"./ErrorBarContext-MDyyOlAz.js";import"./GraphicalItemClipPath-DML64_av.js";import"./SetGraphicalItem-BXFmGWYP.js";import"./getZIndexFromUnknown-B_AKOk7I.js";import"./graphicalItemSelectors-BxcGKM2X.js";import"./index-DyrGUy1I.js";import"./ChartSizeDimensions-B-rd_hON.js";import"./OffsetShower-BsYgMVad.js";import"./PlotAreaShower-D9gSylqx.js";const lt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const ct=["Fill"];export{r as Fill,ct as __namedExportsOrder,lt as default};
