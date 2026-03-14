import{e as t}from"./iframe-DvuZWOTb.js";import{R as s}from"./arrayEqualityCheck-BBARzIRr.js";import{C as m}from"./ComposedChart-OEf0xrLY.js";import{B as e}from"./Bar-6ePu4v_6.js";import{R as l}from"./RechartsHookInspector-Cl4EGw9D.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BNfHMc3-.js";import"./immer-BHFkM9Mg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C8dH0HHg.js";import"./index-eU4Ehn4B.js";import"./hooks-43hsLZ0P.js";import"./axisSelectors-BnR_Cfp_.js";import"./d3-scale-BdRaduXu.js";import"./zIndexSlice-BABNjTcN.js";import"./renderedTicksSlice-BAodcevd.js";import"./CartesianChart-CnMFmEeq.js";import"./chartDataContext-BXYQ6GMf.js";import"./CategoricalChart-CPAqYbsf.js";import"./Layer-D0S2CDqI.js";import"./tooltipContext-QkxCPnN-.js";import"./ReactUtils-jSjmTH71.js";import"./Label-CD05nnQG.js";import"./Text-CU_3ER1b.js";import"./DOMUtils-BxxJ-Wkd.js";import"./ZIndexLayer-DRMyD2Rp.js";import"./types-BkPBAcGb.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-0RU40zhg.js";import"./isPlainObject-BJJzFz0o.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CpIWh0L4.js";import"./useAnimationId-oxTUA15o.js";import"./Trapezoid-BCrvbeh4.js";import"./Sector-Uwlbv7Cd.js";import"./Symbols-4yD0ZZ3H.js";import"./symbol-tCdMof47.js";import"./step-Cug99buo.js";import"./Curve-CApkeTVu.js";import"./RegisterGraphicalItemId-BH6ssqoP.js";import"./ErrorBarContext-Dt0Jqr2E.js";import"./GraphicalItemClipPath-DmmSLEF_.js";import"./SetGraphicalItem-Dkbl2A_A.js";import"./getZIndexFromUnknown-CpwuDiai.js";import"./graphicalItemSelectors-BaRyU1F_.js";import"./index-CGCMEZS5.js";import"./ChartSizeDimensions-E7tryntV.js";import"./OffsetShower-BUvvOC4J.js";import"./PlotAreaShower-iq9hWQZ1.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
