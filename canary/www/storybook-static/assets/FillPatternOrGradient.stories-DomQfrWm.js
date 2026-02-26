import{e as t}from"./iframe-Gi8dyZ6e.js";import{R as s}from"./arrayEqualityCheck-DuhG7Z2p.js";import{C as m}from"./ComposedChart-QXz6Q_cE.js";import{B as e}from"./Bar-BOrxNdY5.js";import{R as l}from"./RechartsHookInspector-xuUFm4Np.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B-oYS9lk.js";import"./immer-D5pmFx9i.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CB2AOINA.js";import"./index-DFJBHj5i.js";import"./hooks-BTT9-kp9.js";import"./axisSelectors-BVT7Qm3f.js";import"./d3-scale-B9haREcB.js";import"./zIndexSlice-DnlbZmgt.js";import"./renderedTicksSlice-C1sYLHQR.js";import"./CartesianChart-BTWnBU7d.js";import"./chartDataContext-a1u8I7YY.js";import"./CategoricalChart-qcsoPY3x.js";import"./Layer-DeXjDdnZ.js";import"./tooltipContext-DjTLAhoG.js";import"./ReactUtils-CMiXbBDc.js";import"./Label-DaPx3_eW.js";import"./Text-BcSPYkwi.js";import"./DOMUtils-D2DkSNEb.js";import"./ZIndexLayer-gbXEsAYB.js";import"./types-I1HiLSRe.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Cw5EPp8e.js";import"./isPlainObject-DlPp7zEZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2pGK9fNN.js";import"./useAnimationId-DlkxhLWt.js";import"./Trapezoid-CjUP9FD5.js";import"./Sector-D2nuXpAg.js";import"./Symbols-CboXRb1J.js";import"./symbol-U_eLqT-N.js";import"./step-fw1t_kgZ.js";import"./Curve-BOJjXgXN.js";import"./RegisterGraphicalItemId-eSxeD-8T.js";import"./ErrorBarContext-BpvUZnWq.js";import"./GraphicalItemClipPath-Cze4veVF.js";import"./SetGraphicalItem-CtHZzRYw.js";import"./getZIndexFromUnknown-CtjjTSXg.js";import"./graphicalItemSelectors-Dg-F-Cxs.js";import"./index-rE-DaWJc.js";import"./ChartSizeDimensions-zCU3Rmg-.js";import"./OffsetShower-CbBMFbGN.js";import"./PlotAreaShower-BZejz9x4.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
